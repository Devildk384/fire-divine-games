export type Game = {
  slug: string;
  title: string;
  shortTitle: string;
  genre: string;
  status: string;
  downloads?: string;
  tagline: string;
  description: string;
  icon: string;
  cover: string;
  screenshots: string[];
  landscapeScreenshots?: number[];
  accent: string;
  ink: string;
  playUrl: string;
  features: string[];
};

export const googlePlayDeveloper =
  "https://play.google.com/store/apps/dev?id=8878040228937888848";

export const games: Game[] = [
  {
    slug: "find-me",
    title: "Find Me: Hidden Objects Puzzle",
    shortTitle: "Find Me",
    genre: "Hidden object puzzle",
    status: "Available now",
    downloads: "10K+",
    tagline: "Slow down. Look closer. Find every last detail.",
    description:
      "Explore richly illustrated scenes filled with cleverly hidden objects. Find Me is a calm, focused puzzle experience designed for short breaks, long searches, and the satisfying moment when the last object finally appears.",
    icon: "/images/games/find-me-icon.png",
    cover: "/images/games/find-me-hero-generated.png",
    screenshots: [
      "/images/games/find-me-01.png",
      "/images/games/find-me-02.png",
      "/images/games/find-me-03.png",
      "/images/games/find-me-04.png",
      "/images/games/find-me-05.png",
      "/images/games/find-me-06.png",
    ],
    landscapeScreenshots: [4, 5],
    accent: "#d8ff55",
    ink: "#123e2c",
    playUrl:
      "https://play.google.com/store/apps/details?id=com.DelightPlusGames.FindMe",
    features: [
      "Handcrafted scenes packed with tiny discoveries",
      "Relaxed play built around focus and observation",
      "Progressively more challenging object hunts",
      "A clean visual experience made for mobile",
    ],
  },
  {
    slug: "arrow-line",
    title: "Arrow Line - Puzzle Escape",
    shortTitle: "Arrow Line",
    genre: "Logic puzzle",
    status: "Available now",
    downloads: "1K+",
    tagline: "Tap, plan, and clear the path.",
    description:
      "A relaxing logic game where every arrow needs a clear route out. Read the board, choose the right order, and watch a busy maze become a clean, empty grid.",
    icon: "/images/games/arrow-line-icon.png",
    cover: "/images/games/arrow-line-hero-generated.png",
    screenshots: [
      "/images/games/arrow-line-01.png",
      "/images/games/arrow-line-02.png",
      "/images/games/arrow-line-03.png",
      "/images/games/arrow-line-04.png",
      "/images/games/arrow-line-05.png",
      "/images/games/arrow-line-06.png",
      "/images/games/arrow-line-07.png",
      "/images/games/arrow-line-08.png",
    ],
    accent: "#8fe8ed",
    ink: "#083a4a",
    playUrl:
      "https://play.google.com/store/apps/details?id=com.FireDivineGames.ArrowLine",
    features: [
      "Simple rules with increasingly deep strategy",
      "Hundreds of handcrafted escape puzzles",
      "Daily challenges and collectible trophies",
      "No timer and no pressure",
    ],
  },
  {
    slug: "spot-me-too",
    title: "Spot Me Too! Dream Puzzle",
    shortTitle: "Spot Me Too!",
    genre: "Spot the difference",
    status: "Available now",
    tagline: "Two dreamy scenes. A handful of secrets.",
    description:
      "Compare beautiful scenes, uncover tiny differences, and enjoy a gentle visual challenge. Spot Me Too! is made for players who like their puzzles bright, calm, and endlessly observant.",
    icon: "/images/games/spot-me-too-icon.png",
    cover: "/images/games/spot-me-too-hero-generated.png",
    screenshots: [
      "/images/games/spot-me-too-01.png",
      "/images/games/spot-me-too-02.png",
      "/images/games/spot-me-too-03.png",
      "/images/games/spot-me-too-04.png",
      "/images/games/spot-me-too-05.png",
    ],
    accent: "#ffd755",
    ink: "#4f271c",
    playUrl:
      "https://play.google.com/store/apps/details?id=com.FireDivineGames.SpotTheDifference2",
    features: [
      "High-definition illustrated scenes",
      "Stress-free puzzles with no timers",
      "Helpful hints and easy touch controls",
      "Fresh themes ranging from rooms to landscapes",
    ],
  },
  {
    slug: "summer-diary",
    title: "Summer Time Diary - Tile Puzzle",
    shortTitle: "Summer Diary",
    genre: "Sliding tile puzzle",
    status: "Available now",
    tagline: "Put the picture back. Recover the memory.",
    description:
      "A warm story told through classic sliding puzzles. Rebuild photographs of sunny mornings, calm lakes, and golden evenings to recover the pieces of a forgotten summer.",
    icon: "/images/games/summer-diary-icon.png",
    cover: "/images/games/summer-diary-hero-generated.png",
    screenshots: [
      "/images/games/summer-diary-01.png",
      "/images/games/summer-diary-02.png",
      "/images/games/summer-diary-03.png",
      "/images/games/summer-diary-04.png",
      "/images/games/summer-diary-05.png",
      "/images/games/summer-diary-06.png",
      "/images/games/summer-diary-07.png",
      "/images/games/summer-diary-08.png",
    ],
    accent: "#ff9f66",
    ink: "#4b241f",
    playUrl:
      "https://play.google.com/store/apps/details?id=com.FireDivine.SummerDairy",
    features: [
      "A story journey built around recovered memories",
      "Classic sliding puzzles from 3x3 to 8x8",
      "Cozy photography and a calm summer atmosphere",
      "Offline play for relaxed sessions anywhere",
    ],
  },
  {
    slug: "spot-me",
    title: "Spot Me! Dream Puzzle",
    shortTitle: "Spot Me!",
    genre: "Spot the difference",
    status: "Available now",
    tagline: "Look twice. The smallest things change everything.",
    description:
      "Put your attention to the test across vibrant picture pairs. Each level turns tiny changes into satisfying discoveries, with zoom and hints ready whenever you need them.",
    icon: "/images/games/spot-me-icon.png",
    cover: "/images/games/spot-me-hero-generated.png",
    screenshots: [
      "/images/games/spot-me-01.png",
      "/images/games/spot-me-02.png",
      "/images/games/spot-me-03.png",
      "/images/games/spot-me-04.png",
      "/images/games/spot-me-05.png",
    ],
    accent: "#ff97af",
    ink: "#511c37",
    playUrl:
      "https://play.google.com/store/apps/details?id=com.DelightPlusGames.SpotTheDifference",
    features: [
      "Colorful scenes made for close observation",
      "Simple tap and zoom controls",
      "Hints for the hardest-to-find details",
      "Short levels that fit naturally into a break",
    ],
  },
  {
    slug: "unearthed",
    title: "Unearthed: The Invasion",
    shortTitle: "Unearthed",
    genre: "Story survival",
    status: "Released May 2024",
    tagline: "Three lives. One invasion. No easy way out.",
    description:
      "An alien invasion tears through a peaceful village. Survive the chaos through three perspectives: a father searching for his daughter, a child moving through the shadows, and a soldier fighting back.",
    icon: "/images/games/unearthed-icon.png",
    cover: "/images/games/unearthed-feature.webp",
    screenshots: [
      "/images/games/unearthed-01.png",
      "/images/games/unearthed-02.png",
      "/images/games/unearthed-03.png",
      "/images/games/unearthed-04.png",
      "/images/games/unearthed-05.png",
      "/images/games/unearthed-06.png",
      "/images/games/unearthed-07.png",
      "/images/games/unearthed-08.png",
    ],
    landscapeScreenshots: [0, 1, 2, 3, 4, 5, 6, 7],
    accent: "#f0542f",
    ink: "#1c181c",
    playUrl:
      "https://play.google.com/store/apps/details?id=com.DelightPlusGames.UnearthedTheInvasion",
    features: [
      "A multi-character survival thriller",
      "Run, hide, and fight through changing perspectives",
      "Story-led levels with escalating danger",
      "Fire Divine's first published mobile game",
    ],
  },
];

export function getGame(slug: string) {
  return games.find((game) => game.slug === slug);
}
