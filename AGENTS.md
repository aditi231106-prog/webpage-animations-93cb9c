# AGENTS.md

Static single-page site (no framework, no build). Netlify publishes `public/` (see `netlify.toml`).

## Structure
- `public/index.html` — markup. Animate.css classes appear inline (`animate__animated animate__fadeInDown`).
- `public/styles.css` — organised in commented sections: variables, KEYFRAMES (all `@keyframes` live together at the top), then per-section styles, responsive, reduced-motion.
- `public/script.js` — vanilla JS: `.scrolled` nav toggle, IntersectionObserver adding `.visible` to `.reveal` elements, count-up for `.counter[data-target]`, and an `animateCSS(el, name)` helper that adds/removes Animate.css classes.

## Conventions / non-obvious decisions
- Staggering uses a `--delay` CSS custom property set inline on elements (`.fade-in`, `.reveal`).
- `.reveal` variants: `slide-left`, `slide-right`, `zoom`; default slides up.
- Menu cards get `.done` after their reveal transition ends so hover transitions don't inherit the reveal delay or drop the opacity fade.
- The cup uses the `scale` property on mobile (not `transform`) so it doesn't fight the `fadeIn` keyframe transform.
- Keep the `prefers-reduced-motion` block at the end of the stylesheet when adding new animations.
- Purpose is educational: keep the code readable and comment which technique each effect demonstrates.
