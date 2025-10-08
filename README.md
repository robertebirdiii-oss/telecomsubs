# TelecomSubs — Vercel-ready React (Vite + TS)

Frontend-only project ready to deploy on Vercel. Uses demo data by default; flip to live API by setting `VITE_API_BASE` and `VITE_USE_API=true`.

## Local dev
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Environment variables
- `VITE_API_BASE` — URL of your API (e.g. https://api.yourdomain.com)
- `VITE_USE_API` — set to `true` to load from API instead of demo data

## Deploy to Vercel
1. Push this repo to GitHub.
2. Import in Vercel → Framework: **Vite**.
3. Build command: `npm run build` (default).
4. Output directory: `dist` (default).
5. (Optional) Add Env Vars:
   - `VITE_USE_API = true`
   - `VITE_API_BASE = https://YOUR_API_HOST`

## Google Maps (optional)
Add a script tag anywhere (e.g. in `index.html`):
```html
<script>window.GMAPS_KEY='YOUR_GOOGLE_MAPS_API_KEY'</script>
```

## Notes
- This repo does not include the Node API (SQLite) because Vercel serverless doesn’t persist SQLite. Run the API on a VM/Render/Railway and point `VITE_API_BASE` to it.
