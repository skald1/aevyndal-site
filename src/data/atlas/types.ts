// Country entry template for the Atlas of Erinnal.
// Every country page is built from one of these. Sections with no
// content are simply left out of the page.

export type Fact = { label: string; value: string };
export type Titled = { title: string; text: string };
export type AgeNote = { age: number; text?: string; current?: boolean };

export interface CountryEntry {
  slug: string;
  name: string;
  epithet: string;
  pronunciation: string;
  age: number; // the Age this entry describes
  lede: string; // the door: what makes this place unmistakable
  facts: Fact[]; // the ledger
  growingUp?: { intro: string; ways: Titled[]; note?: string };
  trouble?: { intro: string; items: Titled[] };
  now?: { title: string; paragraphs: string[] };
  places?: Titled[];
  people?: string[];
  history?: { title: string; teaser: string[]; rest: string[] };
  ages: AgeNote[];
  source: string;
}
