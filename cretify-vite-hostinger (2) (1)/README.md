# CRETIFY — Vite + React (Hostinger ready)

## Deploy as a Hostinger Node.js Web App
1. hPanel → Websites → Add website → **Node.js Apps** → upload this ZIP.
2. Framework: **Vite**. Build command: `npm run build`. Output directory: `dist`. Node 20 or 22.
3. Deploy. Every page (`/about`, `/services/...`, `/work/...`) is handled by the in-app router.

## Static hosting alternative (public_html)
Run `npm install && npm run build`, then upload the *contents* of `dist/` (including `.htaccess`) to `public_html`.

## Local
`npm install` then `npm run dev` (dev) or `npm run build && npm run preview`.

## Structure
```
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── public/.htaccess        # SPA fallback for Apache/LiteSpeed
└── src/
    ├── main.tsx · App.tsx · index.css
    ├── components/ · pages/ · data/ · types/
```
