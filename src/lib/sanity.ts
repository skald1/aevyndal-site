import type { Age, Country, Lineage, Location, SanityImage } from "../types/content";

const projectId = "cnxxwdz0";
const dataset = "production";
const apiVersion = "2025-02-19";
const endpoint = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`;

export async function sanityQuery<T>(query: string): Promise<T> {
  const url = new URL(endpoint);
  url.searchParams.set("query", query);

  const response = await fetch(url, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Sanity query failed (${response.status}): ${await response.text()}`);
  }

  const payload = (await response.json()) as { result: T };
  return payload.result;
}

export const ageQuery = `
  *[_type == "age" && !(_id in path("drafts.**"))] | order(order asc) {
    _id, name, slug, label, order, subtitle, genre, era, description,
    toneStatement, quote, color, accentColor, buildPercent, buildStatus,
    locked, mostBuilt, heroImage, toneTags
  }
`;

export const lineageQuery = `
  *[_type == "lineage" && !(_id in path("drafts.**"))] | order(name asc) {
    _id, name, slug, genericBridge, identityHook, youMight,
    othersSee, description, portrait
  }
`;

export const featuredCountryQuery = `
  *[_type == "country" && isFeatured == true && !(_id in path("drafts.**"))][0] {
    _id, name, slug, epithet, toneStatement, geography, dailyLife,
    politics, dangers, heroImage
  }
`;

export const countryQuery = `
  *[_type == "country" && !(_id in path("drafts.**"))] | order(name asc) {
    _id, name, slug, epithet, toneStatement, geography, dailyLife,
    politics, dangers, heroImage
  }
`;

export const locationQuery = `
  *[_type == "location" && !(_id in path("drafts.**"))] | order(order asc) {
    _id, title, slug, genreLine, pitch, order, "ageId": age._ref
  }
`;

export function getAges(): Promise<Age[]> {
  return sanityQuery<Age[]>(ageQuery);
}

export function getLineages(): Promise<Lineage[]> {
  return sanityQuery<Lineage[]>(lineageQuery);
}

export function getFeaturedCountry(): Promise<Country | null> {
  return sanityQuery<Country | null>(featuredCountryQuery);
}

export function getCountries(): Promise<Country[]> {
  return sanityQuery<Country[]>(countryQuery);
}

export function getLocations(): Promise<Location[]> {
  return sanityQuery<Location[]>(locationQuery);
}

export function sanityImageUrl(image?: SanityImage, width = 960): string | undefined {
  const ref = image?.asset?._ref;
  if (!ref) return undefined;

  const match = ref.match(/^image-(.+)-(\d+x\d+)-([a-z0-9]+)$/i);
  if (!match) return undefined;

  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${match[1]}-${match[2]}.${match[3]}?w=${width}&auto=format`;
}
