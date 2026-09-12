# AGENTS.md

## What this is

Personal single-page site. Lists links to hobby-tracker sites ("gateways") each with a summary-stats blurb, auto-refreshed every 2-3 days. Hosted on GitHub Pages.

## Stack

Frontend: plain HTML/CSS/JS. No framework, no bundler, no client-side build step.

Data refresh: small Node scraper script + GitHub Actions cron. This is the only "backend" — it runs on a schedule, writes a JSON file, commits it. No server, no database, nothing running 24/7.

## Files

```
index.html                 # markup, reads data.json client-side
style.css                  # minimal/unstyled to start — system font, basic flex/grid
data.json                  # generated file, committed by the Action — do not hand-edit stats in it
scripts/fetch-stats.mjs    # scraper: one function per gateway, writes data.json
gateways.json              # source list: name/url/username per gateway (hand-maintained)
.github/workflows/fetch-stats.yml   # cron: every 2-3 days, run scraper, commit data.json
```

## Data flow

1. `gateways.json` — hand-maintained list of trackers, concrete:
   ```json
   [
     { "name": "AniList",    "url": "https://anilist.co/user/Sakyta/",              "hobby": "Anime",  "fetcher": "anilist" },
     { "name": "Serializd",  "url": "https://serializd.com/user/Sakyta/profile",    "hobby": "TV",     "fetcher": "serializd" },
     { "name": "StoryGraph", "url": "https://app.thestorygraph.com/profile/firanda","hobby": "Books",  "fetcher": "storygraph" },
     { "name": "Letterboxd", "url": "https://letterboxd.com/firanda/",              "hobby": "Films",  "fetcher": "letterboxd" },
     { "name": "Backloggd",  "url": "https://backloggd.com/u/Firanda/",             "hobby": "Games",  "fetcher": "backloggd" }
   ]
   ```
2. `scripts/fetch-stats.mjs` reads `gateways.json`, runs the matching fetcher per entry, writes `data.json` — each entry carries up to 5 stat fields (see per-gateway list below) plus `updated` (ISO date):
   ```json
   { "name": "AniList", "url": "...", "hobby": "Anime", "stats": ["142 completed", "Mean score 78", "3,410 episodes", "24 days watched", "18 manga"], "updated": "2026-09-12" }
   ```
3. GitHub Actions (`fetch-stats.yml`) runs the script on a cron (`0 6 */3 * *` or similar — every 2-3 days), commits `data.json` if changed, pushes.
4. `index.html` fetches `data.json` on load and renders one card per gateway, stats as a small list (max 5 lines).

## Fetchers, per gateway

APIs differ per site — write one fetcher function per gateway in `fetch-stats.mjs`, not a generic scraper. Card shows at most 5 stats, chosen per site for what's actually meaningful and reliably present on the public profile:

- **AniList** (official GraphQL API, no scraping needed): anime completed, mean score, episodes watched, days watched, manga completed.
- **Serializd** (scrape public profile HTML): shows tracked, episodes watched, reviews written, watchlist count, avg rating.
- **StoryGraph** (scrape public profile HTML): books read this year, books read all-time, avg rating, pages read, currently reading count.
- **Letterboxd** (scrape public profile HTML): films watched, films this year, lists, following, followers.
- **Backloggd** (scrape public profile HTML): total games logged, completed, currently playing, backlog, avg rating.

These are starting picks — adjust per fetcher once you see what's actually present/reliable in each profile's markup.

If a site's markup changes and a fetcher breaks, it should fail soft (keep the last-known `stats` value in `data.json`, don't crash the whole run) — one broken gateway shouldn't blank out the rest.

## Adding a gateway

1. Add entry to `gateways.json`.
2. Add/reuse a fetcher function in `fetch-stats.mjs` matching its `fetcher` field.
3. Nothing else changes — `index.html` renders whatever's in `data.json`.

## Commit convention

Conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, `chore:`, etc, followed by a short description. No AI co-author line in commit messages.

## Non-goals

- No routing, no multiple pages.
- No CSS framework — plain CSS, minimal/unstyled for now, style later.
- No database, no persistent server. The repo + Actions cron + committed JSON *is* the storage.
- No live-on-every-pageview fetching — data.json is refreshed on a schedule, not per visit.
