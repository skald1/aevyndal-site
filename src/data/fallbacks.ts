import type { Country, Lineage } from "../types/content";

// TEMPORARY FALLBACK: remove when published lineage documents exist in Sanity.
export const fallbackLineages: Lineage[] = [
  {
    name: "th'il",
    slug: { current: "thil" },
    identityHook: "Identity details are being prepared for the archive.",
    temporary: true,
  },
  {
    name: "karuun",
    slug: { current: "karuun" },
    identityHook: "Identity details are being prepared for the archive.",
    temporary: true,
  },
  {
    name: "thiraf",
    slug: { current: "thiraf" },
    identityHook: "Identity details are being prepared for the archive.",
    temporary: true,
  },
  {
    name: "korvad'an",
    slug: { current: "korvadan" },
    identityHook: "Identity details are being prepared for the archive.",
    temporary: true,
  },
];

// TEMPORARY FALLBACK: remove when a featured country is published in Sanity.
export const fallbackCountry: Country = {
  name: "Mütvia",
  slug: { current: "mutvia" },
  epithet: "The Land of a Thousand Princes",
  toneStatement:
    "Mütvia is a country of divided princes, old obligations, and communities that endure beneath competing powers. Its stories begin with the people who must live with those bargains every day.",
  temporary: true,
};
