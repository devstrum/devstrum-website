# devstrum-website

Marketing site for **Devstrum LLP** — AI automation for growing businesses.

Vite + React (react-router) single-page app. Design system shared with, and re-skinned
from, an internal base; this repo is Devstrum-branded and self-contained.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

- `src/theme.jsx` — brand theme, nav, footer, contact, clients, partners (shared building blocks)
- `src/HomePage.jsx` / `ServicesPage.jsx` / `CaseStudyPage.jsx` (Work) / `AboutPage.jsx` — pages
- `public/` — fonts (Geist / Inter), favicon, images

## Notes

- SPA routing rewrites are configured for Vercel (`vercel.json`) and Netlify (`public/_redirects`).
- Contact address/phone in `src/theme.jsx` (`CONTACT`) are placeholders — fill in the real
  Devstrum LLP registered office and phone before going live.
