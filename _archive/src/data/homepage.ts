export const storyPromises = [
  { title: "Folk horror", text: "Old customs still work. The trouble begins when someone decides they should not.", accent: "gold" },
  { title: "Political intrigue", text: "Every promise has witnesses, and every alliance asks who will be left outside.", accent: "silver" },
  { title: "Exploration", text: "The road is not empty. It remembers who traveled it, and why they never returned.", accent: "green" },
  { title: "Heroic adventure", text: "Courage matters most when victory cannot restore what was lost.", accent: "ember" },
  { title: "Cyberpunk noir", text: "Cold stars, wet glass, and one honest choice in a city built from useful lies.", accent: "cyan" },
  { title: "Brightpunk hope", text: "The future survives because ordinary people keep choosing to build it together.", accent: "teal" },
] as const;

export const identities = [
  { title: "Hunter", place: "At the forest edge", text: "You know the difference between a trail, a warning, and an invitation." },
  { title: "Scholar", place: "Among disputed records", text: "You preserve truths that become dangerous the moment someone believes them." },
  { title: "Witch", place: "Between custom and fear", text: "People seek your help quietly and condemn it loudly." },
  { title: "Merchant", place: "On roads that bind strangers", text: "You carry letters, medicines, rumors, and the small things people miss from home." },
  { title: "Smuggler", place: "Across a forbidden threshold", text: "You move what law refuses to recognize: people, memories, and second chances." },
] as const;

export const featuredArticles = [
  { label: "Daily life", title: "Why Hallowmere leaves one chair empty", text: "A place at the table can be hospitality, mourning, or a promise to the missing.", href: "#living-world" },
  { label: "Belief", title: "The names Mütvians keep from winter", text: "Some names belong to family. Others belong to The Land, and must be borrowed carefully.", href: "/mutvia" },
  { label: "People", title: "What it means to carry the road", text: "Merchants, pilgrims, and messengers share a duty no kingdom ever formally gave them.", href: "#identities" },
] as const;

export const livingWorld = [
  { label: "From the table", title: "The Returned", text: "An actual-play campaign whose choices will become part of the places that follow." },
  { label: "New in the archive", title: "Winter rites of the northern villages", text: "A field note about who prepares the dead, who keeps watch, and who comes home changed." },
  { label: "The next door", title: "Choose where the archive opens", text: "The community will decide which starting location receives the next full treatment." },
] as const;
