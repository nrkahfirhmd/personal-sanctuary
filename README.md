# personal-sanctuary

One page listing the hobby trackers I actually keep up to date, each with its
numbers and a few recent covers. Static, hosted on GitHub Pages. No server, no
build, no scraper — the numbers are typed in by hand.

The spec lives in [docs/AGENTS.md](docs/AGENTS.md), product truth in
[docs/PRODUCT.md](docs/PRODUCT.md), and the visual system in
[docs/DESIGN.md](docs/DESIGN.md).

## The design

A reading index, not a dashboard. A 16:5 banner that dissolves into the page,
then near-white paper and a single deep green, one type family (Libre Franklin)
at four fixed steps, hairline rules, and the numbers and covers as the only
ornament. Follows the reader's light/dark setting.

`index.html` carries the direction contract in a comment at the top of the file.

## Editing the site

Everything lives in **`content.json`** — the title, the intro line, the backdrop
paths, and every gateway with its numbers and posters. Edit that one file, then:

```bash
node scripts/bake.mjs
```

That copies your content into the page's offline fallback block, so the page
still reads when it is opened straight off the disk.

Each gateway takes **at most 3 stats** and **up to 5 posters**. Fewer is fine — a
slot is drawn only where there is a cover, and a gateway with no covers shows no
strip at all. The grid keeps five columns either way, so a cover is the same size
in every entry. Bump that gateway's `updated` date when you change its
numbers; the page shows it, and says plainly that the numbers are as current as
the last time you sat down with them.

Poster order matters: **the first cover is what you are on right now**, and the
page rings it with a lit stroke. Put the current one first.

A gateway with nothing typed in yet renders blank and says so, rather than
showing a zero it never measured. For poster URLs, open the tracker and copy the
cover image address.

## Running it locally

Double-clicking `index.html` works, thanks to the baked fallback. To see live
edits to `content.json` instead, serve the folder:

```bash
python3 -m http.server 8931
```

Then open <http://127.0.0.1:8931/>. A page on a `file://` origin is not allowed
to `fetch` a sibling file, which is the whole reason the baked copy exists.

## The backdrop

`media/art-backdrop.webm` + `.mp4` + a `.webp` poster frame, cropped to 16:5 and
masked to transparent at the foot so it dissolves into the page. The mask fades
the image's own alpha rather than painting a scrim over it, which is why a single
definition works in both light and dark.

Art by **Tilixia Summer**, credited on the page from `content.json`.

To swap it, encode a new source into `media/`. The crop height is derived from
the source width, not fixed — `H = W ÷ 16 × 5`, rounded to an even number so
`yuv420p` accepts it — and the Y offset is chosen so the subject survives the
band. For the current art (600×720, cropped at y=170):

```bash
ffmpeg -i art.gif -vf "crop=600:188:0:170,format=yuv420p" -c:v libvpx-vp9 -crf 34 -b:v 0 -an media/art-backdrop.webm
ffmpeg -i art.gif -vf "crop=600:188:0:170,format=yuv420p" -c:v libx264 -crf 26 -preset slow -movflags +faststart -an media/art-backdrop.mp4
```

That took an 11.3 MB GIF to 31 KB and 57 KB. Then point `content.json`'s
`backdrop` block at the new names.

The source GIFs are not kept in the repo — only the encoded files are.

No text may sit on the banner. The mask makes that ground a per-pixel blend of
image and page, so contrast there cannot be guaranteed by measurement.

## Adding a gateway

1. Add one object to `gateways` in `content.json`.
2. Run `node scripts/bake.mjs`.
3. Nothing else changes. The page renders whatever is in the file, at four
   gateways or eight.
