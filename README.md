# GEMS Argon v9.7a — Mobile Chip Reviewer & Trace Drawer (GitHub Pages Bundle)

Mobile-friendly interactive fault-trace review and drawing web app built on our active selected best submission **Argon v9.5a (`0.2948` Public LB, `id-328552`, `28,665 px` across `1,150` 8-connected fault strands)**.

## Key Features & Mobile Gestures
- **Visual Audit Favorability View (Default)**: Displays `220 × 220 px` (`22 × 22 km` at `100 m/px`) study-area chips across all major Basin & Range structural settings with the `inferno` multi-physics favorability (`q_comb`) surface, Known Faults (`existing_faults.tif`), SMU/NGDS Geothermal Hot Wells (`T ≥ 40°C` or `Grad ≥ 80°C/km`), and interactive `Argon v9.5a` vector strands.
- **Long-Press Anywhere on Screen → Switch Basemap to Topography**:
  - Holding your finger (or mouse button / `Spacebar`) anywhere on the chip immediately switches the basemap underneath the fault traces to **Shaded-Relief Topography** (`33 m` LiDAR/3DEP hillshade in Expert Zones D4/H1/J1, `100 m` trace-free shaded relief across the entire AOI offline, plus automatic live **USGS 3DEP Multidirectional Hillshade** overlay when online).
  - Tap **`⛰️ Hold=Topo`** in the top bar if you want to **Lock Topography ON** while drawing a trace.
- **Single Tap / Click on a Trace → Support (`✓ SOLID`, Bright Lime Green)**:
  - Marks the fault strand as solid/verified and records its `sid`, `mean_lc`, `mean_q_u6`, and `dist_k_km`.
- **Double Tap / Double Click on a Trace → Reject (`✗ SUSPECT`, Crimson Red Dashed)**:
  - Flags the fault strand as suspect/false-positive so we can prune or down-weight similar strands in `Argon v9.7+`.
- **Bottom `✏️ Draw Trace` Tool Button**:
  - Sketch missing fault traces directly with your finger or stylus. Drawn polylines are automatically saved in both exact `EPSG:32611` `(row, col)` competition grid coordinates and `WGS84 (lon, lat)` GeoJSON coordinates.

## 1-Minute GitHub Pages Deployment
1. Create a new GitHub repository (e.g. `gems-chip-reviewer`) or a `docs/` folder in your existing repo.
2. Unzip `gems_chip_reviewer_gh_pages.zip` and push `index.html` and `.nojekyll` to the `main` (or `gh-pages`) branch:
   ```bash
   git init
   git add index.html .nojekyll README.md google_drive_sync_webapp.gs ingest_feedback_to_argon.py
   git commit -m "Deploy GEMS Argon v9.5a Mobile Chip Reviewer"
   git branch -M main
   git remote add origin https://github.com/<your-username>/gems-chip-reviewer.git
   git push -u origin main
   ```
3. In GitHub → **Settings → Pages**, set **Source** to `Deploy from a branch` (`main` / `/ (root)`). Your mobile app will be live at `https://<your-username>.github.io/gems-chip-reviewer/`.

## Accessing & Syncing Your Feedback
1. **Instant Clipboard Copy for Gemini Chat**: Tap **`📤 Sync/Export`** → **`📋 Copy Compact JSON`** and paste directly into our Gemini conversation or save to Google Drive.
2. **Mobile Native Share Sheet**: Tap **`📱 Share to Drive / Notes`** on iOS or Android to send `gems_v95a_chip_feedback.json` directly to the Google Drive app.
3. **Automatic Live Google Drive Sync (Optional)**:
   - Open [script.google.com](https://script.google.com), create a new project, paste `google_drive_sync_webapp.gs`, click **Deploy → New deployment → Web app** (`Execute as: Me`, `Who has access: Anyone`), and paste the Web App URL into the **`📤 Sync/Export`** modal once. Every tap and drawn trace on your phone will auto-save to `GEMS-Argon/gems_v95a_live_chip_feedback.json` on Google Drive!
