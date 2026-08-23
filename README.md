# Fire Divine Games — Next.js redesign concept

A production-oriented homepage concept for Fire Divine Games built with **Next.js + React + TypeScript**.

## Design direction

The layout combines three reference strengths without copying any studio directly:

- **SayGames:** oversized editorial typography, asymmetrical sections, strong portfolio/metrics emphasis.
- **Supercell:** premium simplicity, clear navigation, large game imagery, minimal clutter.
- **Miniclip:** scalable game portfolio, updates/news rhythm, strong pathways to individual games.

All artwork inside `/public/art` is original vector placeholder art made specifically for this concept. Replace it with final Fire Divine game key art/screenshots whenever you are ready.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Main files

- `app/page.tsx` — homepage content and sections
- `app/globals.css` — responsive visual system and animations
- `components/Header.tsx` — responsive navigation
- `components/GameCard.tsx` — reusable game tile
- `public/art/*.svg` — local placeholder artwork

## Recommended next edits

1. Replace the SVG placeholders with official screenshots/key art for each game.
2. Replace the text-based Fire Divine mark with the final official logo if desired.
3. Add individual `/games/[slug]` pages for richer game pages.
4. Replace the contact email with a branded `@firedivine.com` address.
5. Add real studio news posts once you have 3–5 updates worth surfacing.
6. Add analytics after deployment (GA4, Plausible, etc.).

## Notes

The project intentionally avoids external UI libraries and remote image dependencies so it is easy to run, customize, and deploy.
