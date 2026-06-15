# Art Giverny — Website

A bilingual (English / French) website for **Art Giverny**, the international fine-art gallery
founded by **Patrick Bertrand**, dealing in the Impressionist painters of Giverny — Theodore Earl
Butler, Blanche Hoschedé-Monet, Theodore Robinson, Jean-Marie Toulgouat and the heirs of Claude Monet.

Hand-built with semantic HTML, modern CSS and vanilla JavaScript — **no build step, no dependencies.**

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Any static host works (GitHub Pages, Netlify, Vercel, S3 …).

## What's inside

| Page | Notes |
|------|-------|
| `index.html` | Home → Collection · Artists · Lineage · Expertise · Catalogue Raisonné · Press & Fairs · Giverny · Contact |
| `artist.html?id=…` | Dedicated, data-driven artist pages: `butler`, `blanche-hoschede-monet`, `theodore-robinson`, `jean-marie-toulgouat` |

```
assets/
├── css/styles.css       design system + all components + responsive + motion
├── js/i18n.js           EN/FR engine + full French dictionary
├── js/main.js           header, menu, reveals, lightbox, form, back-to-top
├── js/artist-page.js    bilingual artist data + renderer
├── img/                 web-optimised works (responsive srcset)
└── img/heritage/        public-domain Monet (historical reference only)
```

## Bilingual system (EN / FR)

- English lives in the HTML (best for SEO + no-JS fallback). French is supplied by
  `assets/js/i18n.js` and swapped live by the **EN / FR toggle** in the header.
- The chosen language is saved in `localStorage`; first-time French-browser visitors default to French.
- To edit copy: change the English in the HTML **and** the matching `"key"` in the `FR` object in
  `i18n.js`. Artist-page copy lives in `artist-page.js` (`en` / `fr` blocks).

## Things to personalise

1. **Contact email** — set to `artgiverny@gmail.com` (in `assets/js/main.js` `RECIPIENT` and the
   Contact / Footer of `index.html` + `artist.html`). Change it there if it ever moves.
2. **Working form** — the inquiry form opens the visitor's email client (no backend). For inline
   submission, point the `<form>` at [Formspree](https://formspree.io) / [Web3Forms](https://web3forms.com).
3. **Robinson, *Hôtel Baudy*** carries the gallery's own watermark — swap a clean scan into
   `assets/img/robinson-hotel-baudy-{lg,sm}.jpg` if available.
4. **Domain** — update the canonical URL, `og:image`, `robots.txt`, `sitemap.xml` once final.

## Image rights

Gallery works & archival photographs are the company's own (credited *© GivernyART Archive*).
Claude Monet, *Water Lilies* (1906) is **public domain** (Art Institute of Chicago) and is captioned
as a historical reference — not gallery inventory.

## Built-in best practices

Responsive `srcset` + lazy-loading, `width`/`height` to prevent layout shift, `fetchpriority` on heroes,
accessible (skip-link, keyboard lightbox + menu, focus trap, `prefers-reduced-motion`), SEO
(Open Graph, JSON-LD `ArtGallery`, sitemap, robots, manifest), scroll-reveal motion, sticky header,
scroll-progress bar and back-to-top.
