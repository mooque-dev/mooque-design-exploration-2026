export interface IgPost {
  id: string;
  caption: string;
  keywords: string[];
  likes: number;
  comments: number;
  saves: number;
  reposts: number;
  timestamp: string;
  color: string;
  type: "image" | "carousel" | "reel";
  aspectRatio: "square" | "portrait" | "landscape";
}

export interface IgProfile {
  username: string;
  displayName: string;
  bio: string;
  avatar: string;
  posts: number;
  followers: number;
  following: number;
  verified: boolean;
}

export const profile: IgProfile = {
  username: "mooque_",
  displayName: "Mooque",
  bio: "Design & Code\nExploring ideas across mobile, web & beyond\nToronto 🇨🇦",
  avatar: "",
  posts: 247,
  followers: 3842,
  following: 512,
  verified: false,
};

const COLORS = [
  "oklch(0.65 0.15 30)",
  "oklch(0.55 0.20 260)",
  "oklch(0.70 0.14 150)",
  "oklch(0.60 0.18 320)",
  "oklch(0.75 0.10 80)",
  "oklch(0.50 0.22 200)",
  "oklch(0.68 0.12 45)",
  "oklch(0.58 0.16 280)",
  "oklch(0.72 0.08 110)",
  "oklch(0.45 0.20 350)",
  "oklch(0.62 0.14 170)",
  "oklch(0.55 0.18 230)",
];

function randomColor(seed: number): string {
  return COLORS[seed % COLORS.length];
}

function generatePosts(): IgPost[] {
  const posts: IgPost[] = [
    // --- Music & Live ---
    { id: "p001", caption: "Late night jazz session at the Rex. Nothing beats live music on a cold Toronto evening. 🎷", keywords: ["jazz", "live music", "toronto", "nightlife"], likes: 842, comments: 34, saves: 120, reposts: 15, timestamp: "2026-02-15T22:30:00Z", color: randomColor(0), type: "image", aspectRatio: "square" },
    { id: "p002", caption: "Caught an incredible quartet at Reservoir Lounge. The energy was unreal.", keywords: ["jazz", "live music", "quartet", "nightlife"], likes: 623, comments: 28, saves: 89, reposts: 12, timestamp: "2026-02-10T21:00:00Z", color: randomColor(1), type: "carousel", aspectRatio: "square" },
    { id: "p003", caption: "New vinyl pickups — Coltrane, Miles, and a rare Herbie Hancock pressing.", keywords: ["vinyl", "music", "jazz", "collection"], likes: 1205, comments: 67, saves: 340, reposts: 45, timestamp: "2026-02-05T14:00:00Z", color: randomColor(2), type: "carousel", aspectRatio: "square" },
    { id: "p004", caption: "Studio session. Working on something new. Can't wait to share. 🎹", keywords: ["studio", "music", "production", "creative process"], likes: 456, comments: 52, saves: 65, reposts: 8, timestamp: "2026-01-28T16:30:00Z", color: randomColor(3), type: "reel", aspectRatio: "portrait" },
    { id: "p005", caption: "Jazz band killing it at Cameron House. Toronto's music scene doesn't get enough credit.", keywords: ["jazz", "live music", "toronto", "jazz band"], likes: 738, comments: 41, saves: 102, reposts: 22, timestamp: "2026-01-20T23:15:00Z", color: randomColor(4), type: "image", aspectRatio: "landscape" },

    // --- Design & Creative ---
    { id: "p006", caption: "New exploration — reimagining how profile filtering could work on social apps. Swipe to see the concept.", keywords: ["design", "ui design", "concept", "mobile"], likes: 2340, comments: 189, saves: 890, reposts: 156, timestamp: "2026-02-17T10:00:00Z", color: randomColor(5), type: "carousel", aspectRatio: "portrait" },
    { id: "p007", caption: "Design system tokens in OKLCH color space. The future of color on the web.", keywords: ["design", "design system", "color", "web development"], likes: 1567, comments: 98, saves: 567, reposts: 89, timestamp: "2026-02-12T09:00:00Z", color: randomColor(6), type: "carousel", aspectRatio: "square" },
    { id: "p008", caption: "Typography study: finding the right type scale for a reading app.", keywords: ["design", "typography", "mobile", "reading"], likes: 891, comments: 45, saves: 234, reposts: 34, timestamp: "2026-02-01T11:30:00Z", color: randomColor(7), type: "image", aspectRatio: "portrait" },
    { id: "p009", caption: "Wireframes → high fidelity in one afternoon. Figma + coffee + good music.", keywords: ["design", "figma", "wireframes", "creative process"], likes: 567, comments: 32, saves: 145, reposts: 21, timestamp: "2026-01-25T15:00:00Z", color: randomColor(8), type: "carousel", aspectRatio: "square" },
    { id: "p010", caption: "Component architecture for a design system. Atomic design still hits different.", keywords: ["design system", "architecture", "components", "web development"], likes: 1123, comments: 76, saves: 412, reposts: 67, timestamp: "2026-01-18T10:00:00Z", color: randomColor(9), type: "image", aspectRatio: "square" },

    // --- Toronto / City ---
    { id: "p011", caption: "Golden hour at the Distillery District. Winter light hits different here.", keywords: ["toronto", "photography", "golden hour", "distillery district"], likes: 1890, comments: 72, saves: 456, reposts: 78, timestamp: "2026-02-14T16:45:00Z", color: randomColor(10), type: "image", aspectRatio: "portrait" },
    { id: "p012", caption: "Kensington Market on a snowy Saturday. Best neighborhood in the city.", keywords: ["toronto", "kensington market", "photography", "winter"], likes: 1234, comments: 56, saves: 298, reposts: 45, timestamp: "2026-02-08T13:00:00Z", color: randomColor(11), type: "carousel", aspectRatio: "square" },
    { id: "p013", caption: "CN Tower through the fog. Moody mornings are the best mornings.", keywords: ["toronto", "photography", "cn tower", "moody"], likes: 2100, comments: 91, saves: 567, reposts: 102, timestamp: "2026-01-30T08:00:00Z", color: randomColor(0), type: "image", aspectRatio: "portrait" },
    { id: "p014", caption: "Night walk through the financial district. Glass and light.", keywords: ["toronto", "photography", "architecture", "nightlife"], likes: 876, comments: 38, saves: 189, reposts: 29, timestamp: "2026-01-22T20:30:00Z", color: randomColor(1), type: "reel", aspectRatio: "portrait" },
    { id: "p015", caption: "Trinity Bellwoods in January. Cold but beautiful.", keywords: ["toronto", "photography", "park", "winter"], likes: 945, comments: 42, saves: 201, reposts: 35, timestamp: "2026-01-15T14:00:00Z", color: randomColor(2), type: "image", aspectRatio: "landscape" },

    // --- Food ---
    { id: "p016", caption: "Best ramen in the city. Santouka never misses.", keywords: ["food", "ramen", "toronto", "restaurant"], likes: 1678, comments: 123, saves: 567, reposts: 89, timestamp: "2026-02-13T19:00:00Z", color: randomColor(3), type: "image", aspectRatio: "square" },
    { id: "p017", caption: "Homemade pasta day. Rigatoni with a slow-cooked ragù. 🍝", keywords: ["food", "pasta", "cooking", "homemade"], likes: 934, comments: 67, saves: 345, reposts: 56, timestamp: "2026-02-06T18:30:00Z", color: randomColor(4), type: "carousel", aspectRatio: "square" },
    { id: "p018", caption: "Saturday morning croissants from Blackbird Baking Co.", keywords: ["food", "bakery", "toronto", "breakfast"], likes: 1456, comments: 78, saves: 423, reposts: 67, timestamp: "2026-01-31T10:00:00Z", color: randomColor(5), type: "image", aspectRatio: "square" },
    { id: "p019", caption: "Exploring Chinatown's dim sum spots. This city has incredible food.", keywords: ["food", "dim sum", "toronto", "chinatown"], likes: 1089, comments: 56, saves: 312, reposts: 48, timestamp: "2026-01-24T12:30:00Z", color: randomColor(6), type: "carousel", aspectRatio: "square" },
    { id: "p020", caption: "Coffee ritual. Pour-over with beans from Pilot Coffee.", keywords: ["coffee", "food", "toronto", "morning routine"], likes: 756, comments: 34, saves: 189, reposts: 23, timestamp: "2026-01-17T08:00:00Z", color: randomColor(7), type: "image", aspectRatio: "portrait" },

    // --- Tech & Code ---
    { id: "p021", caption: "Monorepo setup with Turborepo. Game changer for multi-project workflows.", keywords: ["coding", "web development", "monorepo", "turborepo"], likes: 678, comments: 89, saves: 456, reposts: 78, timestamp: "2026-02-16T11:00:00Z", color: randomColor(8), type: "image", aspectRatio: "landscape" },
    { id: "p022", caption: "Tailwind v4 is out and the @theme directive is 🔥. CSS-first config changes everything.", keywords: ["coding", "web development", "tailwind", "css"], likes: 1890, comments: 145, saves: 678, reposts: 123, timestamp: "2026-02-09T09:30:00Z", color: randomColor(9), type: "carousel", aspectRatio: "square" },
    { id: "p023", caption: "React Server Components in production. Lessons learned after 6 months.", keywords: ["coding", "react", "web development", "architecture"], likes: 2456, comments: 234, saves: 890, reposts: 189, timestamp: "2026-02-02T10:00:00Z", color: randomColor(10), type: "carousel", aspectRatio: "portrait" },
    { id: "p024", caption: "Building a design system that works for both web and mobile. Thread 🧵", keywords: ["coding", "design system", "mobile", "web development"], likes: 1345, comments: 112, saves: 567, reposts: 95, timestamp: "2026-01-26T14:00:00Z", color: randomColor(11), type: "image", aspectRatio: "square" },
    { id: "p025", caption: "TypeScript tips that actually saved me hours this week.", keywords: ["coding", "typescript", "web development", "tips"], likes: 987, comments: 67, saves: 345, reposts: 56, timestamp: "2026-01-19T11:00:00Z", color: randomColor(0), type: "carousel", aspectRatio: "square" },

    // --- Lifestyle / Misc ---
    { id: "p026", caption: "Reading list for 2026. Heavy on design thinking and systems architecture.", keywords: ["reading", "books", "learning", "design"], likes: 567, comments: 89, saves: 456, reposts: 34, timestamp: "2026-02-11T09:00:00Z", color: randomColor(1), type: "carousel", aspectRatio: "portrait" },
    { id: "p027", caption: "Desk setup refresh. Minimal, functional, ready for deep work.", keywords: ["workspace", "minimal", "productivity", "setup"], likes: 2890, comments: 167, saves: 890, reposts: 156, timestamp: "2026-02-04T10:00:00Z", color: randomColor(2), type: "carousel", aspectRatio: "square" },
    { id: "p028", caption: "Morning run along the lakefront. Frozen lake, clear sky, good vibes.", keywords: ["fitness", "toronto", "morning routine", "lakefront"], likes: 678, comments: 28, saves: 89, reposts: 12, timestamp: "2026-01-29T07:30:00Z", color: randomColor(3), type: "reel", aspectRatio: "portrait" },
    { id: "p029", caption: "Sketching ideas in the notebook before touching any screen. Analog first.", keywords: ["creative process", "sketching", "design", "analog"], likes: 1234, comments: 78, saves: 456, reposts: 67, timestamp: "2026-01-23T15:30:00Z", color: randomColor(4), type: "image", aspectRatio: "square" },
    { id: "p030", caption: "2026 goals: ship more, share more, learn more. Let's go.", keywords: ["goals", "motivation", "learning", "creative process"], likes: 456, comments: 67, saves: 123, reposts: 23, timestamp: "2026-01-01T00:01:00Z", color: randomColor(5), type: "image", aspectRatio: "square" },

    // --- More music ---
    { id: "p031", caption: "Playlist drop: 50 tracks for late night coding sessions. Link in bio.", keywords: ["music", "playlist", "coding", "nightlife"], likes: 1567, comments: 89, saves: 678, reposts: 134, timestamp: "2026-01-12T22:00:00Z", color: randomColor(6), type: "image", aspectRatio: "square" },
    { id: "p032", caption: "The intersection of music and design. How rhythm influences layout.", keywords: ["music", "design", "creative process", "theory"], likes: 890, comments: 56, saves: 345, reposts: 56, timestamp: "2026-01-08T11:00:00Z", color: randomColor(7), type: "carousel", aspectRatio: "portrait" },
    { id: "p033", caption: "Found a hidden gem — a tiny record shop in Parkdale with the best selection.", keywords: ["vinyl", "music", "toronto", "shopping"], likes: 1023, comments: 45, saves: 289, reposts: 42, timestamp: "2026-01-05T14:30:00Z", color: randomColor(8), type: "image", aspectRatio: "square" },

    // --- More design ---
    { id: "p034", caption: "Exploring glassmorphism in 2026. Still relevant? Depends on context.", keywords: ["design", "ui design", "glassmorphism", "trends"], likes: 1456, comments: 123, saves: 456, reposts: 78, timestamp: "2025-12-28T10:00:00Z", color: randomColor(9), type: "carousel", aspectRatio: "square" },
    { id: "p035", caption: "Micro-interactions make or break an app. Here are 5 patterns I keep returning to.", keywords: ["design", "ui design", "micro-interactions", "mobile"], likes: 2100, comments: 156, saves: 789, reposts: 134, timestamp: "2025-12-20T09:30:00Z", color: randomColor(10), type: "carousel", aspectRatio: "portrait" },
    { id: "p036", caption: "Dark mode done right. It's not just inverting colors.", keywords: ["design", "dark mode", "ui design", "color"], likes: 1789, comments: 134, saves: 678, reposts: 112, timestamp: "2025-12-15T10:00:00Z", color: randomColor(11), type: "image", aspectRatio: "square" },

    // --- More food ---
    { id: "p037", caption: "Sourdough journey, day 45. The crumb is finally where I want it.", keywords: ["food", "sourdough", "cooking", "homemade"], likes: 1345, comments: 89, saves: 456, reposts: 67, timestamp: "2025-12-22T18:00:00Z", color: randomColor(0), type: "carousel", aspectRatio: "square" },
    { id: "p038", caption: "Best sushi omakase I've had. Yasu on Harbord. Worth every penny.", keywords: ["food", "sushi", "toronto", "restaurant"], likes: 1890, comments: 112, saves: 567, reposts: 89, timestamp: "2025-12-18T20:30:00Z", color: randomColor(1), type: "carousel", aspectRatio: "square" },

    // --- More Toronto ---
    { id: "p039", caption: "First snowfall of the season. Toronto transforms into something magical.", keywords: ["toronto", "photography", "winter", "snow"], likes: 2345, comments: 89, saves: 567, reposts: 98, timestamp: "2025-12-10T09:00:00Z", color: randomColor(2), type: "image", aspectRatio: "portrait" },
    { id: "p040", caption: "AGO on a quiet Tuesday afternoon. Basquiat exhibition was incredible.", keywords: ["toronto", "art", "gallery", "culture"], likes: 1567, comments: 78, saves: 456, reposts: 67, timestamp: "2025-12-05T15:00:00Z", color: randomColor(3), type: "carousel", aspectRatio: "square" },
  ];

  return posts;
}

export const samplePosts = generatePosts();

export type SortOption =
  | "newest"
  | "oldest"
  | "most-liked"
  | "most-saved"
  | "most-reposted"
  | "most-commented";

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "most-liked", label: "Most Liked" },
  { value: "most-saved", label: "Most Saved" },
  { value: "most-reposted", label: "Most Reposted" },
  { value: "most-commented", label: "Most Commented" },
];

export function extractKeywords(posts: IgPost[]): { keyword: string; count: number }[] {
  const freq = new Map<string, number>();
  for (const post of posts) {
    for (const kw of post.keywords) {
      freq.set(kw, (freq.get(kw) ?? 0) + 1);
    }
  }
  return Array.from(freq.entries())
    .map(([keyword, count]) => ({ keyword, count }))
    .sort((a, b) => b.count - a.count);
}

export function sortPosts(posts: IgPost[], sort: SortOption): IgPost[] {
  const sorted = [...posts];
  switch (sort) {
    case "newest":
      return sorted.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    case "oldest":
      return sorted.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
    case "most-liked":
      return sorted.sort((a, b) => b.likes - a.likes);
    case "most-saved":
      return sorted.sort((a, b) => b.saves - a.saves);
    case "most-reposted":
      return sorted.sort((a, b) => b.reposts - a.reposts);
    case "most-commented":
      return sorted.sort((a, b) => b.comments - a.comments);
  }
}
