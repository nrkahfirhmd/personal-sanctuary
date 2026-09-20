# AGENTS.md

## What this is

Personal single-page site, "Kahfi's Sanctuary". Lists links to hobby-tracker sites ("gateways"), each with up to three numbers and five poster slots, under a 16:5 banner. Everything is hand-kept in `content.json`; nothing auto-refreshes. Hosted on GitHub Pages.

## Stack

Frontend: plain HTML/CSS/JS. No framework, no bundler, no client-side build step.

Data: hand-edited `content.json`. There is no backend, no cron, no scraper and no generated file. The numbers are typed in.

## Files

```
content.json               # THE file you edit: site copy, backdrop, gateways, stats, posters
index.html                 # markup, reads content.json (carries the baked fallback block)
style.css                  # the design system: near-white paper, one deep green, one type family
media/                     # art-backdrop.webm / .mp4 / art-backdrop-poster.webp
scripts/bake.mjs           # copies content.json into index.html's offline fallback block
docs/DESIGN.md             # the recorded visual system
docs/PRODUCT.md            # product truth
docs/AGENTS.md             # this file
```

## Data flow

1. `content.json` is the only file you edit. It holds site copy, backdrop paths, and the gateway list:
   ```json
   {
     "site": { "title": "...", "intro": "...", "byline": "...", "repo": "..." },
     "backdrop": { "webm": "media/art-backdrop.webm", "mp4": "media/art-backdrop.mp4", "poster": "media/art-backdrop-poster.webp", "credit": "Tilixia Summer" },
     "gateways": [
       {
         "hobby": "Anime", "name": "AniList", "username": "Sakyta",
         "url": "https://anilist.co/user/Sakyta/",
         "updated": "2026-09-12", "current": true,
         "stats": [ { "value": "135", "label": "anime completed" } ],
         "posters": [ "https://..." ]
       }
     ]
   }
   ```
2. `index.html` fetches `content.json` on load and renders one row per gateway: name and handle, up to **3 stats** in a shared column grid, and **up to 5 posters**. Both caps are uniform across entries. A slot is drawn only where there is a cover; a gateway with none renders no strip, and the grid keeps five columns so a cover is the same size everywhere. With `"current": true` the leftmost cover is ringed as what is being consumed now; without it the strip is just favourites.
3. The page also carries a baked copy of `content.json` in a `<script type="application/json" id="baked-data">` block, used only when the fetch fails — which is what happens on a `file://` origin. Run `node scripts/bake.mjs` after editing content to refresh it.
4. Numbers are read off the profiles and typed in. That is the whole update loop — there is nothing to run but `bake.mjs`.

## The backdrop

`media/art-backdrop.webm` + `.mp4` + a `.webp` poster frame, cropped to 16:5 and masked to transparent at the foot so it dissolves into the page in both themes. The mask fades the image's own alpha rather than painting a scrim over it, which is why one definition works in both themes. Art by Tilixia Summer, credited on the page from `content.json`.

Swap it by encoding new files into `media/` and pointing `content.json`'s `backdrop` block at them. The crop height is derived, not fixed: `H = W ÷ 16 × 5`, rounded to an even number for `yuv420p`. Pick the Y offset so the subject survives the band.

No text may sit on the banner. The mask makes that ground a per-pixel blend of image and page, so contrast there cannot be guaranteed.

## Commit convention

Conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, `chore:`, etc, followed by a short description. No AI co-author line in commit messages.

## Non-goals

- No routing, no multiple pages.
- No CSS framework — plain CSS, hand-written tokens.
- No database, no persistent server. The repo + a hand-edited JSON file *is* the storage.
- No fetching of tracker data at all, at build time or page load. The numbers are hand-kept and dated.
