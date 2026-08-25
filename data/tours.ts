import { images } from "./site";

export type TourPackage = {
  slug: string; title: string; shortDescription: string; category: string;
  duration: string; location: string; startingPrice?: number; image: string;
  badge?: string; highlights: string[]; itinerary: { title: string; description: string }[];
};

export const tours: TourPackage[] = [
  {
    slug: "secret-gili-islands", title: "Secret Gili Islands", category: "Island Hopping",
    duration: "1 day", location: "Southwest Lombok", startingPrice: 850000, image: images.islands,
    badge: "Island hopping", shortDescription: "A relaxed private-island day with snorkeling, beach time, and a local lunch stop.",
    highlights: ["Quiet island beaches", "Guided snorkeling", "Flexible private itinerary"],
    itinerary: [{ title: "Morning pickup", description: "Meet your local guide and travel to the harbor." }, { title: "Island hopping", description: "Cruise between small islands and snorkel in clear water." }, { title: "Easy return", description: "Lunch stop and transfer back to your accommodation." }],
  },
  {
    slug: "mount-rinjani-adventure", title: "Mount Rinjani Adventure", category: "Trekking",
    duration: "3 days 2 nights", location: "Sembalun", startingPrice: 3250000, image: images.mountain,
    badge: "Trekking", shortDescription: "A supported mountain journey through Sembalun with local trekking crew and camp setup.",
    highlights: ["Sunrise viewpoints", "Local trekking crew", "Camping equipment included"],
    itinerary: [{ title: "Sembalun trail", description: "Registration, briefing, and a steady climb through grassland." }, { title: "Summit morning", description: "Early ascent followed by breakfast with wide island views." }, { title: "Descent", description: "Return through changing mountain scenery." }],
  },
  {
    slug: "north-lombok-waterfalls", title: "North Lombok Waterfalls", category: "Waterfalls",
    duration: "1 day", location: "Senaru", startingPrice: 950000, image: images.waterfall,
    badge: "Waterfalls", shortDescription: "Explore rainforest paths, cooling pools, and village landscapes in North Lombok.",
    highlights: ["Two waterfall stops", "Village walk", "Private transport"],
    itinerary: [{ title: "Scenic drive", description: "Travel north with stops along the coast." }, { title: "Waterfall walk", description: "Follow a local guide through forest trails." }, { title: "Village lunch", description: "Pause for a local meal before returning." }],
  },
  {
    slug: "pink-beach-escape", title: "Pink Beach Escape", category: "Beach", duration: "1 day",
    location: "East Lombok", startingPrice: 1100000, image: images.pink, badge: "Beach",
    shortDescription: "A private east-coast escape with hidden coves, snorkeling, and an easygoing pace.",
    highlights: ["Pink sand coastline", "Calm snorkeling bays", "Private driver"],
    itinerary: [{ title: "East coast drive", description: "Morning pickup for a scenic transfer." }, { title: "Beach time", description: "Swim, snorkel, and explore nearby viewpoints." }, { title: "Sunset return", description: "Travel back at a comfortable pace." }],
  },
];
