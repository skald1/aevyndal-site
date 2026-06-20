export const primaryNavItems = [
  { label: "Ævyndal", href: "/", shortLabel: "Home", icon: "About" },
  { label: "What Is This?", href: "/about", shortLabel: "Discover", icon: "About" },
  { label: "Put Me Somewhere", href: "/#starting-locations", shortLabel: "Find a Place", icon: "Atlas" },
  { label: "Who Could I Be?", href: "/#identity-paths", shortLabel: "Choose a Life", icon: "Campaigns" },
  { label: "What Stories?", href: "/#stories", shortLabel: "Find a Story", icon: "Records" },
  { label: "Can I Use This?", href: "/resources", shortLabel: "Play", icon: "Resources" },
  { label: "Can I Belong?", href: "/community", shortLabel: "Join In", icon: "Ages" },
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
  { value: "A place", label: "where someone knows your name" },
  { value: "A duty", label: "that matters when you are absent" },
  { value: "A bond", label: "worth protecting or repairing" },
  { value: "A choice", label: "the world will remember" },
];

export const identityPaths = [
  {
    title: "A keeper of winter rites",
    place: "A Mütvian village",
    life: "You tend the customs that keep neighbors, ancestors, and The Land in uneasy balance.",
    bond: "The family who taught you the rites no longer agrees on what they mean.",
    pressure: "Winter is closing the roads, and one necessary ceremony has been refused.",
  },
  {
    title: "A useful outsider",
    place: "Cultrek City",
    life: "You make a living crossing lines of trade, faith, and loyalty that locals cannot safely cross.",
    bond: "Two people in rival circles both believe you are on their side.",
    pressure: "A favor that once kept you alive has finally been called in.",
  },
  {
    title: "A bearer of an old consequence",
    place: "The roads of the Fourth Age",
    life: "You carry a name, oath, relic, or mistake inherited from a story that never truly ended.",
    bond: "Someone you love would be safer if you abandoned what was entrusted to you.",
    pressure: "A place erased from modern maps has begun sending for you.",
  },
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
  eyebrow: "Find your way in",
  title: "Begin with a place that needs someone like you.",
  status: "No lore mastery required",
  tone: "Dark fantasy, political consequence, playable history, and human-scale choices against old powers.",
  body:
    "Choose somewhere to stand, someone to care about, and a responsibility you cannot easily leave behind. The world opens outward from there.",
  ctas: [
    { label: "Read Mütvia", href: "/mutvia" },
    { label: "Open the atlas", href: "/atlas" },
  ],
  middleTopTitle: "Become Part of the Place",
  middleTopItems: [
    "Choose a place whose ordinary life you want to protect, escape, or change.",
    "Name one person who depends on you and one person you depend on.",
    "Take on an oath, debt, duty, or old mistake that makes leaving complicated.",
  ],
  middleBottomTitle: "How Your Story Belongs",
  middleBottomItems: [
    "Your choices alter lives before they alter maps.",
    "Places remember who helped, who left, and what each victory cost.",
    "Later stories inherit the relationships and consequences your table creates.",
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
