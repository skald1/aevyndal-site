export interface SanitySlug {
  current: string;
}

export interface SanityImage {
  asset?: {
    _ref?: string;
  };
  alt?: string;
}

export interface Age {
  _id: string;
  name: string;
  slug: SanitySlug;
  label: string;
  order: number;
  subtitle?: string;
  genre?: string;
  era?: string;
  description?: string;
  toneStatement?: string;
  quote?: string;
  color?: string;
  accentColor?: string;
  buildPercent: number;
  buildStatus?: string;
  locked: boolean;
  mostBuilt: boolean;
  heroImage?: SanityImage;
  toneTags?: string[];
}

export interface Lineage {
  _id?: string;
  name: string;
  slug: SanitySlug;
  genericBridge?: string;
  identityHook?: string;
  youMight?: string;
  othersSee?: string;
  description?: string;
  portrait?: SanityImage;
  temporary?: boolean;
}

export interface Country {
  _id?: string;
  name: string;
  slug: SanitySlug;
  epithet?: string;
  toneStatement?: string;
  geography?: string;
  dailyLife?: string;
  politics?: string;
  dangers?: string;
  heroImage?: SanityImage;
  temporary?: boolean;
}

export interface Location {
  _id: string;
  title: string;
  slug: SanitySlug;
  genreLine?: string;
  pitch?: string;
  order?: number;
  ageId?: string;
}
