import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://firedivine.com"),
  title: {
    default: "Fire Divine Games | Independent Mobile Game Studio",
    template: "%s | Fire Divine Games",
  },
  description:
    "Fire Divine Games creates memorable mobile games, from relaxing hidden-object puzzles to story-driven adventures.",
  icons: {
    icon: "/images/brand/fire-divine-logo.png",
  },
  openGraph: {
    title: "Fire Divine Games",
    description: "Games that stay with you.",
    images: ["/images/games/find-me-hero-generated.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
