interface Env {
  GOOGLE_SERVICE_ACCOUNT_EMAIL?: string;
  GOOGLE_PRIVATE_KEY?: string;
  GOOGLE_SHEET_ID?: string;
  GOOGLE_SHEET_RANGE?: string;
}

interface PagesContext {
  request: Request;
  env: Env;
}

/*
 * TODO: add service account credentials in Cloudflare Pages, never in Git.
 * Configure these encrypted environment variables for Production and Preview:
 *   GOOGLE_SERVICE_ACCOUNT_EMAIL - service account client_email
 *   GOOGLE_PRIVATE_KEY          - full PEM private_key (escaped \n is supported)
 *   GOOGLE_SHEET_ID             - destination spreadsheet ID
 *   GOOGLE_SHEET_RANGE          - optional range, defaults to Auditions!A:I
 * Share the destination Sheet with GOOGLE_SERVICE_ACCOUNT_EMAIL as an editor.
 */

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });

function base64Url(input: string | ArrayBuffer): string {
  const bytes = typeof input === "string" ? new TextEncoder().encode(input) : new Uint8Array(input);
  let binary = "";
  bytes.forEach((byte) => (binary += String.fromCharCode(byte)));
  return btoa(binary).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

function pemToArrayBuffer(pem: string): ArrayBuffer {
  const normalized = pem.replace(/\\n/g, "\n");
  const base64 = normalized.replace(/-----BEGIN PRIVATE KEY-----|-----END PRIVATE KEY-----|\s/g, "");
  const binary = atob(base64);
  return Uint8Array.from(binary, (char) => char.charCodeAt(0)).buffer;
}

async function getAccessToken(email: string, privateKey: string): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64Url(
    JSON.stringify({
      iss: email,
      scope: "https://www.googleapis.com/auth/spreadsheets",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    }),
  );
  const unsigned = `${header}.${claims}`;
  const key = await crypto.subtle.importKey(
    "pkcs8",
    pemToArrayBuffer(privateKey),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", key, new TextEncoder().encode(unsigned));
  const assertion = `${unsigned}.${base64Url(signature)}`;

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });

  if (!response.ok) throw new Error(`Google authentication failed: ${await response.text()}`);
  const payload = (await response.json()) as { access_token: string };
  return payload.access_token;
}

export async function onRequestPost({ request, env }: PagesContext): Promise<Response> {
  const { GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID } = env;
  if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
    return json({ error: "Audition form is not configured." }, 503);
  }

  let submission: Record<string, unknown>;
  try {
    submission = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ error: "Invalid JSON body." }, 400);
  }

  const answers = Array.from({ length: 7 }, (_, index) => String(submission[`question${index + 1}`] ?? ""));
  if (answers.some((answer) => !["1", "2", "3", "4", "5"].includes(answer))) {
    return json({ error: "Every scale question requires an answer from 1 to 5." }, 400);
  }

  try {
    const accessToken = await getAccessToken(GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY);
    const range = env.GOOGLE_SHEET_RANGE ?? "Auditions!A:I";
    const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(GOOGLE_SHEET_ID)}/values/${encodeURIComponent(range)}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        majorDimension: "ROWS",
        values: [[new Date().toISOString(), String(submission.handle ?? ""), ...answers]],
      }),
    });

    if (!response.ok) throw new Error(`Google Sheets append failed: ${await response.text()}`);
    return json({ ok: true });
  } catch (error) {
    console.error(error);
    return json({ error: "Unable to record this response." }, 502);
  }
}
