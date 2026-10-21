# Bloom Café — Animated Webpage

A one-page café website built to practise web animation (Task 8: *Add Animations to a Webpage*). It shows three techniques side by side:

1. **CSS transitions** — hover/focus effects on nav links, buttons, menu cards, the logo, and the sticky nav background.
2. **Custom `@keyframes`** — page-load progress bar, word-by-word slide-up headline, fade-ins, floating coffee cup with rising steam, morphing background blobs, shimmering gradient text, bouncing scroll hint, and a spinning badge.
3. **Animate.css** — `fadeInDown` on the hero eyebrow, plus `rubberBand` / `bounceIn` triggered from JavaScript when you click “Reserve a table”.

Extras: scroll-reveal animations (IntersectionObserver + transitions), count-up stats, and full `prefers-reduced-motion` support.

## Tech
Plain HTML, CSS and vanilla JavaScript — no build step. Animate.css 4.1.1 and Google Fonts load from CDNs. Hosted on Netlify (`public/` is the publish directory).

## Run locally
Open `public/index.html` in a browser, or run `netlify dev` from the project root.

## Files
- `public/index.html` — page markup
- `public/styles.css` — all transitions and `@keyframes` (grouped and commented)
- `public/script.js` — nav scroll state, scroll reveals, counters, Animate.css helper
