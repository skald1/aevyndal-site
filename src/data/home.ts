export const primaryNavItems = [
  { label: "Ævyndal", href: "/", shortLabel: "Home" },
  { label: "Ages", href: "/#ages", shortLabel: "Ages" },
  { label: "Atlas", href: "/atlas", shortLabel: "Atlas" },
  { label: "Campaigns", href: "/#campaigns", shortLabel: "Campaigns" },
  { label: "Records", href: "/#records", shortLabel: "Records" },
  { label: "Resources", href: "/resources", shortLabel: "Resources" },
  { label: "About", href: "/about", shortLabel: "About" },
];

export const heroTabs = [
  {
    id: "living-world",
    label: "A Living World",
    eyebrow: "World setting",
    headline: "A world that remembers who changed it.",
    body:
      "Ævyndal is a single TTRPG setting shaped by hundreds of sessions, old campaigns, new tables, ruined kingdoms, living factions, and player choices that became history.",
    primaryCta: { label: "Explore the Fourth Age", href: "#age-fourth" },
    secondaryCta: { label: "Start in Mütvia", href: "/mutvia" },
  },
  {
    id: "built-for-stories",
    label: "Built for Stories",
    eyebrow: "Campaign ready",
    headline: "Every region is a premise, not a museum label.",
    body:
      "The atlas is written for GMs and players first: conflicts, factions, routes, threats, mysteries, and places where a party can make something irreversible happen.",
    primaryCta: { label: "Browse story paths", href: "#age-home" },
    secondaryCta: { label: "Read records", href: "#records" },
  },
  {
    id: "playable",
    label: "Playable",
    eyebrow: "Table first",
    headline: "Enter through locations, peoples, and open problems.",
    body:
      "Starting points are designed as playable surfaces: what is here, what kind of game happens here, why begin here, and how ready it is for the table.",
    primaryCta: { label: "See starting locations", href: "#starting-locations" },
    secondaryCta: { label: "View resources", href: "/resources" },
  },
  {
    id: "persistent",
    label: "Persistent",
    eyebrow: "History in motion",
    headline: "The ruins of today were made by yesterday's players.",
    body:
      "Campaigns do not evaporate when a finale ends. Victories, disasters, betrayals, inventions, and names left on maps become the ground later stories stand on.",
    primaryCta: { label: "Open the records", href: "#records" },
    secondaryCta: { label: "See the ages", href: "#ages" },
  },
  {
    id: "yours-to-change",
    label: "Yours to Change",
    eyebrow: "Open table",
    headline: "A canon large enough to be argued with.",
    body:
      "Ævyndal is meant to be played into, challenged, scarred, rescued, misunderstood, and rebuilt by the people at the table.",
    primaryCta: { label: "Join the next story", href: "#campaigns" },
    secondaryCta: { label: "Vote on a location", href: "#starting-locations" },
  },
];

export const worldMetrics = [
  { value: "8", label: "Ages of History" },
  { value: "18+", label: "Playable Peoples" },
  { value: "Countless", label: "Stories" },
  { value: "1", label: "World That Remembers" },
];

export const startingLocations = [
  {
    name: "Mütvia",
    status: "Ready Now",
    type: "Dark fantasy country",
    game: "Rural horror, political survival, old rites, undead pressure, and hard-won mercy.",
    why: "It has the richest current atlas entry and an immediate Fourth Age play surface.",
  },
  {
    name: "Cultrek City",
    status: "Preview Ready",
    type: "Urban pressure point",
    game: "City intrigue, trade tension, criminal work, faith politics, and messy alliances.",
    why: "It gives players a dense social start with routes into wider Erinnal.",
  },
  {
    name: "Third Location",
    status: "Chosen by User Vote",
    type: "Community-selected start",
    game: "A new table-facing entry chosen from the places players most want to open next.",
    why: "The site can make world growth visible instead of hiding it in private notes.",
  },
];

export const liveCampaign = {
  title: "The Returned",
  label: "Live actual play",
  status: "Next stream placeholder",
  body:
    "A Fourth Age campaign channel for watching the world change at the table, then seeing those consequences enter the records.",
  cta: { label: "Watch Live / Twitch", href: "#campaigns" },
};

export const homeOverview = {
  eyebrow: "World overview",
  title: "One setting, many eras, no reset button.",
  status: "Open atlas",
  tone: "Dark fantasy, political consequence, playable history, and human-scale choices against old powers.",
  body:
    "Ævyndal is organized around Ages so a table can choose the kind of pressure it wants: mythic aftermath, empire, collapse, exploration, plague, recovery, or the dangerous present of the Fourth Age.",
  ctas: [
    { label: "Read Mütvia", href: "/mutvia" },
    { label: "Open the atlas", href: "/atlas" },
  ],
  middleTopTitle: "Quick Start Playing",
  middleTopItems: [
    "Pick an Age by tone and readiness.",
    "Choose a starting location with a clear pressure point.",
    "Tie a character to a faction, road, oath, debt, or old mistake.",
  ],
  middleBottomTitle: "What Makes It Persistent",
  middleBottomItems: [
    "Campaign outcomes become history.",
    "Places keep scars from previous parties.",
    "Records distinguish rumor, table canon, and open mystery.",
  ],
  atlasTitle: "Atlas Preview",
  atlasBody:
    "The atlas should act like a playable operations map: countries, routes, borders, factions, threats, and records that help a table move.",
  records: [
    "Mütvia full atlas entry is preserved and ready.",
    "Fourth Age is the current open play surface.",
    "Next location slot is reserved for a user vote.",
  ],
};
