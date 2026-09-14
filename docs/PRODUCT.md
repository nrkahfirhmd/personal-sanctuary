# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS, no framework and no bundler, hosted on GitHub Pages. Decided in `docs/AGENTS.md` before this record existed, not delegated. There is no build, no cron, no scraper and no generated data: the page reads `content.json`, which is edited by hand. One helper exists, `scripts/bake.mjs`, which copies `content.json` into the page's offline fallback block.

## Users

Friends and internet acquaintances who already know Kahfi. They arrive from a link he sent or dropped in a bio, curious about what he is currently watching, reading, and playing. They are not looking for an introduction to a stranger; they are browsing someone's taste the way you browse a friend's bookshelf while waiting in their living room.

## Product Purpose

One page that gathers the five hobby trackers Kahfi keeps up to date, each with a handful of real numbers pulled from the public profile. It exists because the trackers are scattered across five sites with five different logins and three different usernames, and no one is going to visit all five. Success is a visitor who remembers the page itself afterward, not merely one who clicked through to AniList.

## Positioning

The numbers are real, hand-kept, and dated. Every stat was read off a live public profile and transcribed into `content.json` with the date it was entered, and the page states plainly that they are as current as the last time Kahfi sat down with them, not as current as the profiles. Nothing is aspirational, nothing is estimated, and an entry with nothing entered renders blank rather than showing a zero it never measured.

## Operating Context

Read in a browser tab, usually on a phone, usually once, usually because someone was linked to it. No login, no session, no return visit assumed. The data is refreshed on a schedule, never on pageview, so the page must be honest about how fresh it is rather than implying live data.

## Capabilities and Constraints

- Five gateways at launch: AniList (Anime), Serializd (TV), StoryGraph (Books), Letterboxd (Films), Backloggd (Games). Source list is the `gateways` array in `content.json`, hand-maintained.
- `content.json` is the single hand-edited source: site copy, backdrop paths, and every gateway with its stats and posters. Nothing else needs touching to change what the page says.
- Each gateway carries **at most 3 stats** and **exactly 5 poster slots**, plus its own `updated` ISO date. Both caps are uniform across entries; fewer is allowed, more is truncated by the page.
- A stat is a `{ value, label }` pair, kept apart so the page can set the number and what it counts at different sizes. Values are display-ready strings (`"2,324"`, `"85.9"`) already carrying their separators — the page typesets them and never formats or computes.
- Posters are direct image URLs on the trackers' own CDNs. A slot is drawn only where there is a cover, and a gateway with none renders no strip. A URL that fails to load removes its own slot rather than leaving a box.
- `index.html` fetches `content.json` at load, with a baked copy inside the page for `file://` opening. No server-side rendering, no client-side build step.
- Adding a gateway means one object in `content.json`; the page renders it without markup changes. The design must survive 4 gateways or 8 without being rebuilt.
- A 16:5 banner sits above the page, masked to transparent at its foot. No text may sit on it: the mask makes that ground a per-pixel blend of image and paper, so contrast there cannot be guaranteed.
- No routing, no second page, no database, no CSS framework.

## Brand Commitments

- Usernames appear as they really are per site and are never unified: **Sakyta** on AniList and Serializd, **firanda** on StoryGraph and Letterboxd, **Firanda** on Backloggd. The split is a fact about the person, not an inconsistency to clean up.
- Commit convention: conventional commits, no AI co-author line.

## Evidence on Hand

Real: the five public profile URLs, the numbers currently in `content.json` (read off those profiles and typed in on the dates recorded there), and the cover URLs, which point at the trackers' own CDNs. An entry with nothing typed in yet renders blank and says so. There are no testimonials, no visitor counts and no follower numbers; none of these may be invented to fill a layout, and no stat may be estimated to fill a slot.

## Product Principles

1. **Dated or it doesn't ship.** Every number on the page carries the date it was entered, shown to the visitor. Stale is fine; undated is not, and neither is a number that implies it is live.
2. **Fail soft, in public.** A gateway with nothing entered says so in words. It never blanks silently, never shows a zero it did not measure, and never takes the page down with it.
3. **The data is the content.** The page has no copy to hide behind — five names, five links, twenty-five numbers. Whatever makes it memorable has to come from how that material is treated.
4. **Additive by data, not by markup.** A new hobby is a JSON entry. The page must never need surgery to accept one, and must read correctly at four gateways or eight.
5. **One page, one visit.** No accounts, no retention mechanics, no reason to come back daily. Design for the single visit it will actually get.

## Accessibility & Inclusion

No product-specific requirement established beyond the standard floor: WCAG AA contrast, full keyboard reach with visible focus, and `prefers-reduced-motion` honored.
