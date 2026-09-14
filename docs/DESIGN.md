---
name: Kahfi's Sanctuary
description: An index of five hobby trackers — a pinned banner the page dissolves over, one deep green, one type family, numbers and covers as the only ornament.
colors:
  paper: "#fafaf8"
  ink: "#16161a"
  muted: "#6b6b75"
  rule: "#e4e3dd"
  accent: "#2e5e4e"
  accent-wash: "#eef3f0"
  paper-dark: "#121214"
  ink-dark: "#ecebe9"
  muted-dark: "#9a9aa4"
  rule-dark: "#2a2a2e"
  accent-dark: "#7fc4a8"
  accent-wash-dark: "#1a2320"
typography:
  display:
    fontFamily: "Libre Franklin, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 6.2vw, 3.1rem)"
    fontWeight: 300
    lineHeight: 1.12
    letterSpacing: "-0.021em"
  headline:
    fontFamily: "Libre Franklin, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 3.4vw, 1.7rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Libre Franklin, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 3.1vw, 1.65rem)"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "-0.025em"
    fontFeature: "tabular-nums lining-nums"
  lead:
    fontFamily: "Libre Franklin, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body:
    fontFamily: "Libre Franklin, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  small:
    fontFamily: "Libre Franklin, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Libre Franklin, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0.07em"
rounded:
  none: "0"
  xs: "2px"
spacing:
  hair: "0.2rem"
  xs: "0.4rem"
  poster: "0.6rem"
  sm: "0.75rem"
  md: "1.2rem"
  entry-row: "1.4rem"
  lg: "1.5rem"
  entry: "1.7rem"
  col: "2rem"
  gutter: "clamp(1.25rem, 5vw, 2.5rem)"
  measure: "42rem"
components:
  entry-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "1.7rem 0.75rem 1.8rem"
    rounded: "{rounded.none}"
  entry-row-hover:
    backgroundColor: "{colors.accent-wash}"
    textColor: "{colors.ink}"
  entry-hobby:
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
  stat-value:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
  stat-label:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
  poster-slot:
    backgroundColor: "{colors.rule}"
    rounded: "{rounded.xs}"
  poster-slot-empty:
    backgroundColor: "color-mix(in srgb, var(--rule) 38%, var(--paper))"
    rounded: "{rounded.xs}"
  backdrop-banner:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.none}"
    width: "100%"
    height: "min(46vh, 31.25vw)"
  button-retry:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    rounded: "{rounded.xs}"
    padding: "0.5rem 1.1rem"
  button-retry-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
  skip-link:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
    padding: "0.5rem 0.9rem"
  colophon-note:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.small}"
    padding: "0 0 0 0.9rem"
  colophon-credit:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.small}"
---

# Design System: Kahfi's Sanctuary

## Overview

**Creative North Star: "The Reading Index"**

The page is an index, not a scene. A 16:5 banner runs full width, dissolves into
the paper at its foot, and hands the page over; below it five hobby trackers are
set as one quiet list on near-white paper, each entry a hairline rule, a hobby
name, its numbers ranged beside it and a strip of five cover slots beneath. There
is no card grid, no illustration and no iconography. The content is five names,
five links, about twenty numbers and ten covers; the design's whole job is to set
that material so it reads well and so every figure sits next to the date it was
entered. The numbers and the covers are the only ornament the page has, so they
are the only ornament it uses.

**The quiet is the brief, not a gap.** Two fully committed visual worlds were
built and declined before this one; the user then asked for "simple yet
elegant," and the direction contract in `index.html` sets the dials to
ENERGY 1 / RHYTHM 1 / MOTION 1 — deliberately the far quiet end of every
scale. A future pass will be tempted to read this page as underdesigned and
supply what it seems to lack: a texture, a second typeface, a card, an
entrance animation, a second accent. All of that has already been considered
and refused. Restraint here is the finished state. The way to improve this
page is to set the existing material better, never to add material. The banner
is the one loud element, and it earns its place by giving the page a top edge
and then getting out of the way — it carries no text and no message.

What earns its keep instead is precision: one type family carrying the whole
hierarchy on size and weight alone; tabular figures so the stat columns line up
vertically down the entire list; uniform caps — three stats, five posters — so
every row's columns land in the same places; a single deep green allowed in eight
places and nowhere else; and copy that tells the truth about how fresh each
number is, including that the numbers are hand-entered and are not as current as
the profiles they came from.

**Key Characteristics:**

- A full-bleed 16:5 banner pinned to the viewport, with the page sliding over it
  on an opaque sheet whose leading edge dissolves into the artwork, then one
  measured
  column on near-white paper — no grid of cards, no sidebar.
- Exactly one accent colour, used in eight sanctioned places.
- One type family (Libre Franklin); hierarchy from size and weight only.
- Tabular lining figures everywhere a number appears.
- Uniform caps: three stat columns and five poster slots per entry, filled or not.
- Flat: hairline rules and a single hover wash carry all separation. No shadows.
- Light and dark ship as equals, both defined on `:root` tokens.
- One authored motion moment on the whole page.
- Honest states: an entry with nothing entered says so, never a substituted zero.

## Colors

A restrained palette: near-white paper, near-black ink, one muted grey, one
hairline rule colour, and a single deep green accent with its own pale wash.
Six roles, no more. The frontmatter carries both schemes; light values are
unsuffixed, dark values carry `-dark`.

### Primary

- **Deep Forest Green** (`{colors.accent}` light / `{colors.accent-dark}` dark):
  the only accent on the page, and the only colour that is not paper, ink or
  grey. In light it is a dark, desaturated forest green; in dark it inverts to
  a pale sage so it stays the brighter element against the ink ground. It is
  scarce on purpose — see The One Green Rule below.
- **Green Wash** (`{colors.accent-wash}` / `{colors.accent-wash-dark}`): a
  barely-tinted surface used for exactly one thing, the hover and focus
  background behind a whole entry row. It is not a card colour, not a
  container, and not a second surface level.

### Neutral

- **Warm Near-White Paper** (`{colors.paper}` / `{colors.paper-dark}`): the
  page ground, the ground the banner dissolves into, and the text colour used
  *on* the accent (skip link, hovered retry button, `::selection`). Slightly warm
  rather than pure white so the page reads as paper rather than as a screen.
- **Near-Black Ink** (`{colors.ink}` / `{colors.ink-dark}`): all primary text —
  the title, hobby names, stat values, and the flagged colophon note, which
  takes ink rather than muted so it outranks the colophon around it. Never pure
  black.
- **Quiet Grey** (`{colors.muted}` / `{colors.muted-dark}`): the whole
  secondary register — the standfirst note, site and username, the updated-date
  line, stat labels, the no-numbers line, the artwork credit, and the colophon body.
  It is what lets the numbers be the loudest thing on the page.
- **Hairline Rule** (`{colors.rule}` / `{colors.rule-dark}`): the 1px border
  between entries and above a state row, and the ground a poster sits on while
  its image loads. Non-text, decorative separation only.

Two further greys are never declared, only derived, and both exist solely for
the empty poster plate: its fill is `color-mix(in srgb, var(--rule) 38%, var(--paper))`
and its 1px inset ring is `color-mix(in srgb, var(--rule) 60%, var(--paper))`.
They are mixed rather than hard-coded so they follow both schemes for free. Do
not replace them with literal hex; that would split the source of truth and the
dark scheme would stop tracking.

### Named Rules

**The One Green Rule.** The accent has exactly eight sanctioned homes: link
colour, the focus ring, the skip link's ground, the 1px rule that draws under a
hobby name on hover, the hover wash behind an entry row, the retry button
(outline at rest, fill on hover), the 1px left border on the flagged colophon
note, and `::selection`. Its scarcity is the design. Anything else that wants
colour takes ink or muted grey. A ninth use is a change to the system, not a
detail.

**The Both-Schemes Rule.** Every colour is a custom property on `:root`,
redefined in full inside `@media (prefers-color-scheme: dark)`. No colour may
be declared for the first time inside a media query, and no component may
carry a literal hex. Dark is not an afterthought skin over a light design;
both schemes are first-class and are the reason the page can be read on a
phone at any hour.

**The Travelling-Edge Rule.** The banner and the page are blended by a gradient on the sheet's leading edge, not by a mask on the banner. The banner itself is a plain rectangle with no mask at all.

This reverses an earlier Masked-Not-Scrimmed Rule, which blended by masking the banner's own alpha and rejected a scrim outright. That rule was right while the banner scrolled with the page: a mask needs no dark-mode branch, a coloured scrim does. It broke the moment the banner was pinned. A mask on a fixed element is stationary by definition, so it blended at one fixed height while the content met the artwork somewhere else entirely — a hard horizontal cut across the picture that moved with every scroll.

The old objection to a scrim does not survive either, because the gradient is built from `var(--paper)` through `color-mix`, so it resolves to near-white on `#fafaf8` and to near-black on `#121214` with no second declaration. The thing that made a scrim a liability was hardcoding its colour, not using one.

The fade lives on `.sheet::before`, sits at `bottom: 100%` so it rides directly above the sheet, and stands `clamp(4rem, 13vh, 8.5rem)` tall. Because it belongs to the sheet, it goes wherever the content goes: the banner is met by a dissolve at every scroll position rather than only at rest. It is `pointer-events: none`, since a decorative band must not eat clicks meant for the banner or the page.

Keep both facts together if either is touched. The blend must travel with the content, and its colour must come from the ground token rather than a literal.

**The Measured-Contrast Rule.** Contrast is verified in both schemes at 1440
and 390 before shipping, at rest *and* hovering. Every text role clears WCAG
AA in both schemes. Measured on the paper ground: ink 17.27:1 light / 15.71:1
dark; muted 5.04:1 / 6.71:1; accent 7.11:1 / 9.23:1. Measured on the hover wash,
which is the tightest ground on the page: ink and stat values 16.08:1 / 13.50:1;
muted 4.70:1 / 5.77:1; accent 6.62:1 / 7.94:1.

The hover wash is the pairing to watch, because muted small text over it has
the least headroom of anything shipping. `--muted` is `{colors.muted}`
specifically to hold that margin — an earlier, lighter grey measured 4.49:1
there and was corrected. If the wash or the grey is ever touched, move in the
direction that opens the gap: the wash lighter (`#f1f6f3` measures 4.82:1
against the current grey) or the grey darker (`#696973` measures 4.84:1
against the current wash), never the other way. Re-measure over the wash, not
over the paper; the paper reading will pass long after the wash has stopped.

There is one ground on the page that cannot be measured at all — the banner,
because the mask makes it a per-pixel blend of artwork and paper. That is
exactly why nothing is allowed to sit on it. See The Banner Clearance Rule.

## Typography

**Display Font:** Libre Franklin (with `ui-sans-serif, system-ui, sans-serif`)
**Body Font:** Libre Franklin — the same face
**Label Font:** Libre Franklin — the same face

Weights shipped: 300, 400, 500, 600, plus 400 italic. (600 is loaded and held
in reserve; nothing on the current page uses it.)

**Character:** One grotesque doing everything. Libre Franklin is plain enough
to disappear into a list and well-drawn enough to hold a 3rem line at weight
300 without looking thin by accident. The pairing is with itself: the contrast
on this page is between a light 300 at large size and a tight 500 uppercase at
small size, never between two faces.

### Hierarchy

Seven roles, and no eighth. Three are fluid, set with `clamp()` at the point of
use; four are fixed steps declared as custom properties on `:root`. Every
`font-size` in the stylesheet is one of these seven — there are no literal
sizes left in the CSS at all, and `grep 'font-size: [0-9]'` returns only the
`100%` root reset on `body`.

**The fluid roles** (sized at the point of use, no token — each appears once):

- **Display** (300, `clamp(2rem, 6.2vw, 3.1rem)`, 1.12, `-0.021em`, balanced
  wrap, capped at 18ch, `margin: 0`): the page title only. Light at large size
  is the one display gesture the page allows itself, and nothing sits above
  it — the headline opens the page, clear of the banner's foot.
- **Headline** (400, `clamp(1.35rem, 3.4vw, 1.7rem)`, 1.15, `-0.015em`): the
  hobby name that opens each entry — Anime, TV, Books, Films, Games. This is
  the link target and the anchor of the row.
- **Title** (300, `clamp(1.3rem, 3.1vw, 1.65rem)`, 1.1, `-0.025em`, tabular
  lining figures): a stat value. Deliberately the same optical weight class as
  the hobby name beside it, so a row reads as one thing rather than a heading
  plus data.

**The fixed steps** (each a `:root` token; use the token, never the number):

- **Lead** — `--t-lead` (1.1rem, 400): the one-line headline of a list state
  ("Reading the list…", "Nothing is on the list yet.", "The list would not
  load."). The only role above body size that is not fluid.
- **Body** — `--t-body` (0.95rem, 400): the standfirst note under the title
  (capped at 54ch) and the no-numbers line, which takes the same step in italic.
- **Small** — `--t-small` (0.82rem, 400): the entire secondary register — site
  and username, the updated-date line, the colophon, the skip link, a state's
  reason line, and the retry button. Six uses, one step.
- **Label** — `--t-micro` (0.72rem, 500, `0.07em`, uppercase, muted): the stat
  label under each value. This is the *only* uppercase tracked role in the
  system, and it only ever appears beneath a number it names. It is not a
  general-purpose small-caps treatment to be reused above headings. It is also
  the one step that moves: below 34rem the token is redeclared at `0.66rem` (and
  the label detracks to `0.03em`) so three stat columns survive a 320px screen.
  The stat label is its only consumer, which is what makes that safe.

The root `body` keeps `font-size: 100%` as the inherited base, but nothing on
the page renders at 1rem — every visible element claims one of the seven roles
above.

**On the site line and the date line.** Both sit at `--t-small`; they used to
differ by four hundredths of a rem, which no reader could perceive. The
distinction is now carried by order and by treatment — the site and handle come
first, the handle in italic, and the date follows in tabular figures. If
someone later wants them separated more strongly, the answer is weight, colour,
or space. It is not a fifth step.

### Named Rules

**The Closed Ramp Rule.** The ramp is four fixed steps — `--t-micro`,
`--t-small`, `--t-body`, `--t-lead` — plus three fluid roles, and it is
closed. A new piece of text takes an existing step or it does not ship. A fifth
step is drift, not a decision, and the stylesheet says so where the tokens are
declared.

This rule exists because the ramp already rotted once: eight distinct literal
sizes below 1rem accumulated during the build — `0.7 / 0.76 / 0.82 / 0.85 /
0.86 / 0.88 / 0.94 / 1.05rem` — several of them a single hundredth of a rem
apart. Nobody chose that ramp; it assembled itself one element at a time,
because a literal size at the point of use is a decision that never has to face
the other decisions. The audit test is mechanical and takes one command: a
literal `font-size` below 1rem anywhere in the stylesheet is a defect, whatever
it is for. Reach for `var(--t-*)`, or change the system on purpose.

**A step may take a second value; it may not spawn a sibling.** Below 34rem the
stat labels have to hold three columns across a 320px screen, so `--t-micro` is
redeclared on `:root` inside that media query at `0.66rem`. That is still four
steps — one named token carrying two values — and it is the sanctioned way to
make the ramp responsive. The banned move is the other one: writing `0.66rem` as
a literal `font-size` at the point of use, which is how the ramp rotted the first
time. The audit test does not care about the media query; it cares that the
number never appears outside a token declaration.

**The One Family Rule.** Libre Franklin is the only face on the page.
Hierarchy comes from size and weight, never from a second family. Adding a
serif for the title, a mono for the numbers, or a display face for the hobby
names is a redesign, not an enhancement.

**The Tabular Figures Rule.** Every number on the page is set with
`font-variant-numeric: tabular-nums lining-nums` — stat values and the
updated-date line both. This is load-bearing, not typographic taste:
proportional figures give each digit a different width and the stat columns stop
aligning across rows, which is precisely what makes the page read as an index
rather than as five unrelated blocks. Any new numeric element inherits this.

**The Light-at-Large Rule.** Weight falls as size rises. 300 at display and
stat-value size; 400 at hobby-name and body size; 500 reserved for small
uppercase labels. Nothing on the page is bolded to make it matter — if
something needs more presence it gets more size or more air, not more weight.

## Layout

A full-width banner, then a single measured column, centred, on an otherwise
empty ground.

**The banner.** `.backdrop` is the one full-bleed element in the system, and the
only `position: fixed` one: pinned to the viewport at `top: 0`, 100% wide, and
`var(--banner-h)` tall — `min(46vh, calc(100vw * 5 / 16))`, which is 16:5 capped
so it cannot eat a short viewport. It holds a muted, autoplaying, looping
`<video>` at `object-fit: cover` with a WebM source, an MP4 fallback and a WebP
poster frame. It carries no mask: the dissolve belongs to the sheet that covers
it (see The Travelling-Edge Rule). At 1440 it stands 414px tall; at 390 it
stands 122px.

**The sheet.** `.sheet` wraps the whole column, carries `margin-top:
var(--banner-h)` and the page ground full-bleed, and sits at `z-index: 1` above
the pinned banner at `z-index: 0`. Scrolling therefore slides the sheet up over
a banner that does not move. `--banner-h` is the single token both depend on;
they cannot drift apart because neither computes its own height.

The sheet's ground must stay opaque and full-bleed. A transparent sheet, or one
narrowed to the text column, would let the banner show through or beside the
content as it scrolls — and the content would then be sitting on the one ground
the system refuses to put text on.

**The column.** Two tokens define it: `--measure: 42rem` sets the text column
and `--gutter: clamp(1.25rem, 5vw, 2.5rem)` sets the breathing room, and `.page`
computes its own `max-width` from the two
(`calc(var(--measure) + var(--gutter) * 2)`). The banner supplies the top air, so
`.page` opens at only `clamp(1.75rem, 4vh, 3rem)` and closes at 4rem. It carries
**no negative top margin**: the column starts below the banner's box, never
inside it.

The masthead is a flex row: a round portrait, then a text column holding the
title and the standfirst `0.55rem` below it. The portrait is `flex: none` at
`clamp(3.75rem, 9vw, 5.5rem)`, square by `aspect-ratio: 1 / 1`, circled by
`border-radius: 50%`, cropped by `object-fit: cover`, and ringed by a 1px
`--rule` shadow — the same hairline weight as the rules between entries, which
is what keeps it inside the system rather than reading as an applied avatar
style. `align-items: center` sets it against the middle of the two text lines;
the text column takes `min-width: 0` so long copy wraps instead of forcing
overflow. Below `34rem` the row becomes a column at `align-items: flex-start`,
because side by side the title had to share a 350px line with a 60px circle.

The portrait is the one element above the h1, and it is not an exception to the
no-eyebrow ban: that ban is on *tracked-caps text* standing in for a heading.
An image is not a kicker. Nothing textual precedes the title. The portrait is
also optional — dropping `site.photo` from `content.json` removes it rather
than leaving an empty circle. The title carries `margin: 0`, and the list begins
after `clamp(2.75rem, 8vh, 4.5rem)` of air.

**The entry.** Each entry is a grid at `minmax(0, 7fr) minmax(0, 12fr)` with a
`1.4rem 2rem` gap and `align-items: start`: identity on the left (hobby name,
site / username, updated date), the three stat columns on the right, and the
poster strip spanning both tracks beneath (`grid-column: 1 / -1`). The right
track is the wider one because three stat columns have to fit inside it — at the
earlier `8fr / 11fr` the stat labels wrapped. Alignment is `start`, not
`baseline`: with a wrapping strip on the third row, baseline alignment ties the
first two tracks to the wrong line. Row padding is `1.7rem` top / `1.8rem`
bottom, with `0.75rem` of horizontal padding pulled back out by a matching
negative inline margin — that is what lets the hover wash bleed slightly past the
text column without widening it.

Inside the right column the stats are their own grid at
`repeat(3, minmax(0, 1fr))` with a `1.2rem / 1.5rem` gap. The poster strip is
`repeat(5, minmax(0, 1fr))` with a `0.6rem` gap, and it stays at five columns at
every width.

**Responsive.** One breakpoint, at `max-width: 34rem`. Below it the entry grid
collapses to a single column with a `1.15rem` gap and row padding tightens to
`1.5rem / 1.6rem`. Neither grid inside the row changes shape: the stats stay at
three columns (gap tightened to `1rem 0.75rem`, `--t-micro` redeclared at
`0.66rem`, and both the value and the label retracked for the narrower measure)
and the poster strip stays at five. Nothing else changes; everything
above that is fluid via `clamp()`. Verified at 1440 and 390: no horizontal
overflow at either width, three stat columns of 108.7px at 390, and only the
longest label ("anime completed") takes a second line.

### Named Rules

**The Pinned-Banner Rule.** The banner is fixed to the viewport and the page
scrolls over it; the banner itself never moves. Two things make that safe rather
than decorative. The sheet carrying the content is opaque and full-bleed, so
nothing is ever read against the artwork. And under `prefers-reduced-motion` the
banner reverts to `position: absolute` and scrolls away with the page, because a
stationary layer under moving content *is* the parallax effect — it is motion
whether or not anything is animating, and the reduced-motion request covers it.
Treating that query as being only about keyframes is how parallax survives an
accessibility pass it should not survive.

**The Banner Clearance Rule.** No text may sit on the banner. Not the title, not
a kicker, not a caption, not a logo, not a scroll cue. The mask makes that ground
a per-pixel blend of artwork and paper, so contrast over it cannot be guaranteed
by measurement in either scheme — and a guarantee you cannot measure is not a
guarantee. The mechanism is deliberately dumb and therefore reliable: the sheet
begins at `margin-top: var(--banner-h)`, so the column starts below the banner's
box; at 1440 the `<h1>` clears the banner's foot by 36px. An earlier build did
overlap them and it was wrong.

Scrolling does bring the content over the banner, and that is not a breach: the
sheet is opaque, so text riding past the banner is on paper, never on artwork.
The rule is about what text is *painted on*, not about what is behind it in the
stacking order. If a future pass wants the title to
overlap the image, the answer is a different banner treatment — an unmasked band
with a measured solid ground — not text over the mask.

**The Shared Stat Grid Rule.** Stats are capped at three per entry
(`STAT_SLOTS = 3`) and the grid is `repeat(3, minmax(0, 1fr))` at **every**
width, regardless of how many stats that entry actually has — an entry with two
stats leaves its third column empty rather than redistributing. **The cap is the
point.** Three fixed columns is what makes values line up vertically down the
whole list; a fourth stat on one entry would shift that entry's columns off
every other entry's. Letting each row size its own columns turns the index back
into five unrelated rows and is the single fastest way to destroy this page.

The stats stay three across on a phone too. They are a row, not a stack: the
comparison between an entry's own figures is the thing the grid exists to make,
and breaking them onto separate lines loses it. Narrow columns are paid for in
type size rather than in column count — below 34rem the value steps down and the
label steps down and detracks, which is the correct trade because the alignment
is load-bearing and the size is not. The value's `clamp()` already floors at
`1.3rem` on a phone, so only its tracking is adjusted, not its size.

**The Single Measure Rule.** The column is `--measure` wide and nothing
escapes it — the banner is not an exception, it sits outside the column
entirely. Prose blocks cap themselves further by content (`18ch` title, `54ch`
standfirst, `60ch` colophon). If something does not fit the measure, it is
shortened, not widened.

**The Data-Shaped Rule.** Everything on the page is rendered from
`content.json` — the title, the standfirst, the byline, the banner's three media
paths and its artist credit, and every entry; the markup holds one empty `<ol>`
and a baked copy of the same file. The layout must survive four gateways or
eight, and an entry with one stat or three, without a markup change. Swapping the
artwork is a data edit, not a code edit. Any new visual idea that requires
knowing the entry count in advance is out.

## Elevation & Depth

The page is flat. There is no `filter`, no `backdrop-filter`, and no stacked
surfaces. Depth is conveyed by three devices only: a 1px hairline rule
(`{colors.rule}`) separating entries, a single pale accent wash that appears
behind an entry row on hover or focus, and the alpha ramp that dissolves the
banner into the paper. Nothing is lifted off the page.

### Shadow Vocabulary

One entry, and it is not elevation:

- **Plate ring** (`box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--rule) 60%, var(--paper))`):
  the inset hairline around an empty poster slot. `box-shadow` is used here only
  because it draws a 1px ring inside the element's own box without changing its
  size — it is a hairline by another name, not a drop shadow. It casts nothing,
  has no blur, no spread and no offset.

### Named Rules

**The Hairline Rule.** Separation is a 1px line in the rule colour and nothing
else — as a `border` between entries, or as an inset ring inside an empty poster
plate. No boxes, no cards, no drop shadows, no tonal panels. A list item is
bounded by a line above it; the last item also takes a line below, closing the
list.

**The Flat-At-Rest Rule.** Every surface is the paper colour at rest, except the
empty poster plate, which is a fixed derived grey. The only surface that ever
*changes* colour is an entry row under hover or focus, and it changes to the
wash, not to an elevated white-on-grey card.

## Shapes

Square by default, with one soft exception. Three elements carry a radius, all
of them `2px`: the focus ring (so the outline reads as deliberate rather than as
a browser default), the retry button, and a poster slot. Everything else — entry
rows, the hover wash, the skip link, the banner, the colophon — is a plain
rectangle.

Borders are always exactly 1px: the rule colour between entries, the accent on
the retry button's outline, and the derived grey ring inside an empty poster
plate. There is no 2px border, no double rule, and no dashed or dotted line in
the system.

The page has two recurring silhouettes. The first is the horizontal band: a
hairline, a measured block of text and figures, a hairline. The second is the
`2 / 3` portrait rectangle of a poster, repeated five across under every entry —
the only non-rectangular-band proportion in the system, and it is fixed by
`aspect-ratio` rather than by the image, so a slot holds its shape before, during
and after loading. The banner's `16 / 5` is the third and it appears once.

## Components

### Backdrop Banner

The page's one image, and its one piece of atmosphere. Character: weather above
the index — it sets a mood, says nothing, and hands over.

- **Shape:** `aspect-ratio: 16 / 5`, capped at `46vh`, `overflow: hidden`, no
  radius, full bleed.
- **Media:** a muted `autoplay loop playsinline disablepictureinpicture`
  `<video>` at `object-fit: cover`, WebM first then MP4, with a WebP poster
  frame. All three paths come from `content.json`'s `backdrop` block, so swapping
  the artwork is a data edit. The poster path is also pushed onto
  `--backdrop-poster` on the root element at render time, because the
  reduced-motion still is painted by CSS and the data has to reach it; the CSS
  declaration keeps a hard-coded fallback so the band is never empty.
- **Blend:** a gradient on the sheet's leading edge, so it travels with the
  content; the banner itself is unmasked (see The Travelling-Edge Rule).
- **Ground:** `background: var(--paper)` behind the media, so the band shows the
  correct colour in either scheme before the video has decoded.
- **Reduced motion:** under `prefers-reduced-motion: reduce` the `<video>` is
  set to `display: none` and the banner shows the poster frame
  (`var(--backdrop-poster)`) as a `center / cover` background image instead. The
  band keeps its exact 16:5 geometry; only the movement goes. Verified.
- **Accessibility:** the whole banner is `aria-hidden="true"`. It carries no
  information, so it is not described; describing decoration is noise in a
  screen reader.

**Provenance.** The banner ships as `media/art-backdrop.webm` (VP9, 32 KB),
`media/art-backdrop.mp4` (H.264, 59 KB) and `media/art-backdrop-poster.webp`
(4.3 KB), all 600x188. They are encoded from `art-backdrop.gif`, a user-supplied
600x720 GIF of 11 MB — a ~99% reduction, which is the whole reason a decorative
loop is affordable here at all. Art by Tilixia Summer, credited on the page.

A future swap needs the crop maths, not the literal numbers:

```bash
ffmpeg -i <source>.gif -vf "crop=W:H:X:Y,format=yuv420p" \
  -c:v libvpx-vp9 -crf 36 -b:v 0 -an media/art-backdrop.webm
```

`crop` is `width:height:x:y`. Take `W` as the source's full width, `H` as
`W / 16 * 5` rounded to an even number (`yuv420p` requires even dimensions — 600
gives 187.5, so 188), `X` as 0, and choose `Y` so the subject lands on the band's
centre rather than reusing a previous offset. Encode the MP4 and the cwebp poster
frame from the same crop so all three stay registered to each other.

### Entry Row

The signature component, and the only repeated one. Character: a line in a
printed index — identity left, figures right, covers beneath, nothing boxing it
in.

- **Shape:** no radius, no background at rest. Bounded by a 1px top rule
  (`{colors.rule}`); the last entry also takes a bottom rule.
- **Structure:** the entire row is one `<a rel="me noopener">` — the whole band
  is the link target, not just the hobby name. Grid
  `minmax(0, 7fr) minmax(0, 12fr)`, `1.4rem 2rem` gap, `align-items: start`,
  padded `1.7rem 0.75rem 1.8rem` with `-0.75rem` inline margin.
- **Left column:** hobby name (Headline), then site name and username at
  `--t-small` muted with the username in italic and a literal ` / ` separator
  injected before it, then the date at `--t-small` muted tabular
  (`updated 12 Sep 2026`, or `nothing entered yet`).
- **Right column:** the shared three-column stat grid — three columns at every
  width — or, when the entry has no stats, a single italic muted line saying so.
- **Third row:** the poster strip, spanning both tracks.
- **Hover / Focus:** background fades to `{colors.accent-wash}` over 180ms
  ease-out, and a 1px accent rule scales itself open under the hobby name (see
  the motion rule below). Both states are identical; focus is never a lesser
  hover, and this was verified by keyboard, not by calling `.focus()`.
- **Usernames are never unified.** Three different usernames across five sites
  is a fact about the person, and each row prints its own.

**The One Moment Rule.** The page has exactly one authored motion: a 1px
accent rule under a hobby name, drawn via `::after`, resting at
`transform: scaleX(0)` with `transform-origin: left` and opening to
`scaleX(1)` over 260ms on `cubic-bezier(0.16, 1, 0.3, 1)`. Everything else
that moves is utility — the hover wash (180ms), the retry button (160ms), the
skip link sliding into view (140ms), and the banner loop, which is content
rather than interface. There is no entrance animation, no scroll reveal, no
stagger, and at MOTION 1 that absence is correct rather than missing.
`prefers-reduced-motion: reduce` removes the transition, leaving the state
itself intact, and stops the banner.

**The Composited-Moment Rule.** The moment animates `transform`, never
`width`. A width transition on the same element looks identical and forces
layout on every frame of every hover; `transform` and `opacity` are the only
properties this page animates. If the underline ever needs to grow from the
centre or the right, move `transform-origin`, do not reach back for `width`.
The same constraint binds anything added later: no animated `width`, `height`,
`top`, `left`, `margin`, or `padding`.

### Stat Pair

Character: the number first and largest, its name small and quiet beneath.

- A `<div class="stat">` holding a `<dd>` value then a `<dt>` label — value
  before label **in the source**, so a screen reader reaches the number first;
  the visual order is unchanged.
- **Value:** Title role — 300 weight, `clamp(1.3rem, 3.1vw, 1.65rem)`, ink,
  tabular lining figures.
- **Label:** Label role — `--t-micro`, 500, `0.07em` tracking, uppercase,
  muted, `0.2rem` above.
- `min-width: 0` on the pair so a long label wraps instead of blowing out its
  grid column.

**The Value-and-Label Rule.** A stat is a `{ value, label }` object in
`content.json`, never a single pre-formatted display string. The two halves are
set at different sizes, weights, cases and colours, which one string cannot
support. The value arrives display-ready, separators and all (`"2,324"`,
`"85.9"`); the page typesets it and does no formatting and no arithmetic of
its own. A number the page computed is a number nobody entered.

### Poster Strip

Character: five covers in a row under each entry — recognition, not decoration.
A reader who knows the show sees it before they read the number.

- **Shape:** `<ul class="posters">` spanning the full entry row
  (`grid-column: 1 / -1`), `repeat(5, minmax(0, 1fr))`, `0.6rem` gap, at every
  width. Each `.poster` is `aspect-ratio: 2 / 3`, `2px` radius,
  `overflow: hidden`, on the rule colour.
- **Image:** `object-fit: cover`, `loading="lazy"`, `decoding="async"`, and
  `alt=""` — the covers hot-link to the trackers' own CDNs (AniList's
  `s4.anilist.co`, IGDB's `images.igdb.com`), but the URLs are typed into
  `content.json` by hand like every other value; they are content, not a feed,
  and nothing on the page discovers them. The text beside them is the
  authoritative content, so an empty `alt` keeps a screen reader on the words
  rather than reading five filenames.
- **Empty slot:** there is none. Slots are rendered per cover, so an unfilled
  column is simply absent and an entry with no covers renders no `<ul>` at all.
- **Failed image:** a JS `error` listener removes the slot (`{ once: true }`),
  so a cover that 404s or is hot-link-blocked leaves nothing behind rather than
  a broken-image glyph or an empty box. One visual outcome for two different
  causes, on purpose: in both, the cover is not there and the page says so by
  showing nothing.

**The No-Placeholder Rule.** A poster slot is drawn only when there is a cover to put in it. An entry with no covers renders no strip at all, and a cover that fails to load takes its slot with it rather than leaving a box. The strip keeps five columns whatever it holds, so a poster is the same size in every entry and a partly-filled row simply ends early instead of stretching its covers.

This reverses an earlier Empty Plate Rule, which drew a quiet plate for every unfilled slot on the argument that a fixed silhouette keeps the list's rhythm. That argument held while most entries had covers. Once most did not, twenty plates were louder than the ten real covers and described nothing: a plate for an absent cover is chrome standing in for content, which the page refuses everywhere else. The rhythm is carried by the shared stat grid and the hairline rules, which do not depend on the posters at all.

This does not weaken The No-Substituted-Zero Rule, which it can look like it contradicts. That rule refuses to *invent a value* the page never measured. This one refuses to *draw furniture* for content that does not exist. Neither permits a blank to be dressed up as something.

**The No-Substituted-Zero Rule.** An entry with nothing entered says so in place
of its numbers. It never shows `0`, never shows an em dash, and never silently
omits the row. A zero the page did not get from a real profile is a lie about
the data — and the page carries a real `0` on Backloggd ("in the backlog"), which
is precisely why a placeholder zero can never be allowed to look like one.

**The Reader's Reason Rule.** Failure is stated in words, at the right altitude,
in the reader's vocabulary. The headline of a failed state is always
reader-facing prose ("The list would not load.") and the technical detail is
demoted to a muted second line beneath it. The page's own thrown strings are
authored to survive that demotion — `content.json responded 404` rather than a
stack — because the second line is shown, not logged. A new failure mode gets a
sentence a reader can act on, never a `console`-flavoured string promoted to the
headline.

The surface this covers is deliberately tiny. Nothing on the page fetches a
tracker, so there is exactly one way the list can fail — `content.json` itself
not arriving — and even that normally lands on the baked copy instead. An entry
without numbers is not a failure at all; it is a blank nobody has filled in yet,
and it says so in its own words. Keep the surface that small: a new state earns a
sentence a reader can act on, or it does not earn a state.

### Retry Button

The only button in the system. Character: an outline, not a filled call to
action — it is a repair affordance, not a destination.

- **Shape:** 2px radius, 1px accent border, transparent fill,
  `0.5rem 1.1rem` padding, `--t-small` inheriting the page font.
- **Hover:** fills with accent, text flips to paper, over 160ms ease-out.
- **Focus:** the global focus ring (no bespoke treatment).

### Colophon

The footer carries the standing credit and the freshness disclosure in one
paragraph at `--t-small` muted, capped at 60ch: the byline, then the plain
statement that the numbers are entered by hand in `content.json`, carry the date
they were last touched, and are "as current as the last time I sat down with
them, not as current as the profiles themselves." **This is where the byline
lives.** Authorship is a footer fact, not a masthead announcement; it does not
get promoted back above the title.

Above it sit two conditional lines, each hidden until it has something to say.

- **The flagged note** names the trackers with no numbers entered and says that
  those entries are blank *rather than showing a zero*. It is the one element in
  the colophon that outranks its neighbours: ink text rather than muted, with a
  1px accent left border and `0.9rem` of left padding. No background, no icon,
  no badge.
- **The artwork credit** names whoever drew the banner, in muted text with no
  border — it is an acknowledgement, not a flag, so it sits at the colophon's own
  register rather than above it. Both the name and its lead-in phrase come from
  `content.json`'s `backdrop` block.

**The Credit-The-Artist Rule.** The banner is someone else's work, so the page
names them where a reader can see it, not only in the JSON that produced it. The
credit renders whenever `backdrop.credit` is set and disappears cleanly when it
is not, so the rule costs nothing on a banner the author drew themselves. A
credit buried in a data file or a commit message is not a credit.

**The Dated-Not-Live Rule.** Nothing on this page is fetched, so the page never
implies otherwise. Every entry prints the date its numbers were typed in, and the
colophon makes the sharper claim in the author's own voice: the numbers "are as
current as the last time I sat down with them, not as current as the profiles
themselves." That sentence is the honesty mechanism of the whole page, and it is
load-bearing copy — it names *who* is behind the number and *what* it lags, which
a "last synced" label cannot do because no sync happens. Keep it in the first
person and keep it specific.

Honesty here is copy rather than chrome: no "last synced" badge, no relative
timestamp that quietly ages into "2 days ago", no freshness indicator, no
green dot. If a number's date is missing, the line says "nothing entered yet"
rather than falling back to today — a date the page invented would be exactly the
lie the rule exists to prevent.

**The Announced Fallback Rule.** The baked copy in
`<script type="application/json" id="baked-data">` is a legitimate rendering
path, not a secret one — it is what renders on a `file://` origin or when
`content.json` does not come back, and it renders the full list rather than a
degraded one. It is allowed to render without announcing itself for exactly one
reason: baked and fetched are the *same hand-kept numbers carrying the same
per-entry dates*, so the reader is told the truth either way by The
Dated-Not-Live Rule. That equivalence is a build-step obligation, not a fact of
nature: `node scripts/bake.mjs` after every content edit is what keeps it true.
The moment the two can diverge — a generated field, a fetch-time value, anything
the baked copy could not know — the fallback owes the reader a visible line
saying which copy it is showing.

### Skip Link

Parked at `top: -4rem`, slides to `top: 1rem` over 140ms on focus. Accent
background, paper text, `0.5rem 0.9rem` padding, no radius, no underline. It sits
above the banner in the stacking order (`z-index: 2`).

### Focus Ring

Global, one definition, no per-component overrides: `2px solid` accent at
`4px` offset with a `2px` radius, on `:focus-visible`. Every interactive
element on the page uses it. Verified by keyboard at 1440 in both schemes.

## Do's and Don'ts

### Do:

- **Do** treat the numbers and the covers as the only ornament. If a surface
  needs visual interest, set the existing material better — more air, better
  alignment, a truer size relationship — before reaching for anything new.
- **Do** set every numeral with `tabular-nums lining-nums`. The stat columns
  align across rows only because of this.
- **Do** keep every stat grid identical (3 columns at every width) and every
  poster strip identical (5 columns at every width), even when an entry has
  fewer stats or fewer covers. The caps are the alignment. On a narrow viewport
  pay for the columns in type size, not in column count.
- **Don't** draw a placeholder for a poster that does not exist. The five-column
  grid keeps every cover the same size; a partly-filled row ends early, and an
  entry with no covers shows no strip.
- **Do** blend the banner by masking the image's own alpha, so one declaration
  serves both schemes.
- **Do** keep all page content clear of the banner's foot — top padding on
  `.page`, never a negative margin.
- **Do** define every colour as a `:root` custom property and redefine it in
  full in the dark block. Derive a shade with `color-mix` from existing tokens
  rather than adding a literal. Measure both schemes at 1440 and 390, at rest
  and hovering — the hover wash is the ground with the least headroom.
- **Do** render everything from `content.json` so four gateways or eight need no
  markup change, and run `node scripts/bake.mjs` after editing it.
- **Do** print the date each entry's numbers were entered, and say plainly in the
  colophon that they are hand-kept.
- **Do** credit the banner artist on the page whenever `backdrop.credit` is set.
- **Do** make focus and hover the same state, and verify it by keyboard —
  calling `.focus()` in the console does not trigger `:focus-visible`.
- **Do** honour `prefers-reduced-motion` on anything that animates, including the
  banner.
- **Do** size every piece of text with one of the seven roles — the three
  fluid ones at the point of use, the four fixed steps via `var(--t-micro)`,
  `var(--t-small)`, `var(--t-body)`, `var(--t-lead)`.

### Don't:

- **Don't** put text of any kind on the banner — no title, no kicker, no caption,
  no logo, no scroll cue. The masked ground is a per-pixel blend and its contrast
  cannot be measured. An earlier build overlapped them and it was wrong.
- **Don't** paint a scrim, gradient overlay, or tinted `::after` over the banner
  to make text work. That reintroduces a per-theme colour the mask exists to
  avoid.
- **Don't** add a second type family, a mono for the numbers, or a serif for
  the title. One family, hierarchy from size and weight.
- **Don't** spend the accent anywhere beyond its eight sanctioned homes (link,
  focus ring, skip-link ground, hover underline, hover wash, retry button,
  flagged-note left border, `::selection`). Its scarcity is the design.
- **Don't** introduce a second accent, a gradient, a tint ramp, or a
  semantic colour set (success green, warning amber). Failures are stated in
  words, not in colour.
- **Don't** add drop shadows, cards, panels, rounded containers, or any elevated
  surface. Separation is a 1px hairline; the one `box-shadow` in the stylesheet
  is an inset ring on an empty poster plate and casts nothing.
- **Don't** add icons, logos, glyphs, emoji, or illustration to the entries.
  The site name is the identifier and the covers are the imagery.
- **Don't** ship someone else's artwork without their name on the page.
- **Don't** put a small tracked-caps label above the headline — no byline, no
  category, no section marker, no date. A hero eyebrow over an oversized
  headline is banned outright here and no brief earns it back; one shipped
  once and was removed. The headline opens the page; the byline belongs in the
  colophon.
- **Don't** animate `width`, `height`, or any box-model or position property.
  The one moment uses `transform: scaleX()`; `transform` and `opacity` are the
  only properties this page animates.
- **Don't** add entrance animation, scroll reveal, stagger, parallax, or a
  counter that ticks up. The page has one authored motion moment and that is
  the complete budget.
- **Don't** bold anything to give it importance. Weight 600 is loaded but
  unused; size and air do that work.
- **Don't** print a `0`, a dash, or a blank where nothing has been entered.
  Print the words. A real `0` ships on the page and must stay unambiguous.
- **Don't** collapse or hide an unfilled poster slot, and don't let a strip size
  itself to the covers on hand.
- **Don't** let an entry's stat grid size itself to its own stat count, don't
  raise the cap above three — a fourth stat on one entry knocks that entry's
  columns off every other entry's — and don't drop it to two columns on a phone.
  The stats are a row, not a stack.
- **Don't** let a raw stack or an unauthored exception string become the headline
  of a failed state. The headline is reader-facing prose; detail goes to the
  muted second line.
- **Don't** let the page imply the numbers are live, and don't add a relative
  timestamp that ages on its own. The date is the date they were entered.
- **Don't** let the baked copy drift from `content.json`. It renders unannounced
  only because the two are identical; re-bake after every edit.
- **Don't** unify the usernames across sites. Sakyta, firanda and Firanda are
  three real names and each row prints its own.
- **Don't** add a fifth fixed step to the type ramp, and don't write a literal
  `font-size` below 1rem anywhere in the stylesheet — `grep 'font-size: 0\.'`
  must come back empty. Giving an existing token a second value inside a media
  query is fine; inventing a sibling size at the point of use is not. If the site
  line and the date line need separating again, use weight, colour, or space —
  not a new size.
- **Don't** read the quietness of this page as underdesign. ENERGY 1 /
  RHYTHM 1 / MOTION 1 is the brief, arrived at after two louder worlds were
  built and declined.

---
## Appendix A — Tonal ramps
Eight-step OKLCH ramps for the six palette roles. The page itself uses only the
canonical value (and the dark-scheme value where the role has one); the ramps
exist so a future surface can pick a neighbouring step instead of inventing a
colour off-system. Hue and chroma are held constant down each ramp, so a step
is always the same colour at a different lightness.

### `--paper` — Warm Near-White Paper
`#fafaf8` light · `#121214` dark · `oklch(98.5% 0.003 106.4)`

The page ground, the colour the banner dissolves into, and the text colour used on the accent (skip link, hovered retry button, ::selection). Warm rather than pure white so the page reads as paper.

| step | value |
| --- | --- |
| 1 | `oklch(15% 0.003 106.4)` |
| 2 | `oklch(26% 0.003 106.4)` |
| 3 | `oklch(37% 0.003 106.4)` |
| 4 | `oklch(48% 0.003 106.4)` |
| 5 | `oklch(59% 0.003 106.4)` |
| 6 | `oklch(70% 0.003 106.4)` |
| 7 | `oklch(82% 0.003 106.4)` |
| 8 | `oklch(95% 0.003 106.4)` |

### `--ink` — Near-Black Ink
`#16161a` light · `#ecebe9` dark · `oklch(20.2% 0.008 285.7)`

All primary text: the title, hobby names, stat values, and the flagged colophon note, which takes ink rather than muted so it outranks the colophon around it. Never pure black.

| step | value |
| --- | --- |
| 1 | `oklch(15% 0.008 285.7)` |
| 2 | `oklch(26% 0.008 285.7)` |
| 3 | `oklch(37% 0.008 285.7)` |
| 4 | `oklch(48% 0.008 285.7)` |
| 5 | `oklch(59% 0.008 285.7)` |
| 6 | `oklch(70% 0.008 285.7)` |
| 7 | `oklch(82% 0.008 285.7)` |
| 8 | `oklch(95% 0.008 285.7)` |

### `--muted` — Quiet Grey
`#6b6b75` light · `#9a9aa4` dark · `oklch(53.1% 0.015 285.9)`

The whole secondary register: standfirst, site and username, the updated-date line, stat labels, the no-numbers line, the artwork credit, and the colophon body. It is what lets the numbers be the loudest thing on the page.

| step | value |
| --- | --- |
| 1 | `oklch(15% 0.015 285.9)` |
| 2 | `oklch(26% 0.015 285.9)` |
| 3 | `oklch(37% 0.015 285.9)` |
| 4 | `oklch(48% 0.015 285.9)` |
| 5 | `oklch(59% 0.015 285.9)` |
| 6 | `oklch(70% 0.015 285.9)` |
| 7 | `oklch(82% 0.015 285.9)` |
| 8 | `oklch(95% 0.015 285.9)` |

### `--rule` — Hairline Rule
`#e4e3dd` light · `#2a2a2e` dark · `oklch(91.5% 0.008 98.9)`

The 1px border between entries and above a state row, and the ground a poster slot sits on while its image loads. Two further greys are derived from it and never declared: color-mix(in srgb, var(--rule) 38%, var(--paper)) fills an empty poster plate and 60% draws its inset ring. Derive, never hard-code — the mix is what keeps both schemes tracking.

| step | value |
| --- | --- |
| 1 | `oklch(15% 0.008 98.9)` |
| 2 | `oklch(26% 0.008 98.9)` |
| 3 | `oklch(37% 0.008 98.9)` |
| 4 | `oklch(48% 0.008 98.9)` |
| 5 | `oklch(59% 0.008 98.9)` |
| 6 | `oklch(70% 0.008 98.9)` |
| 7 | `oklch(82% 0.008 98.9)` |
| 8 | `oklch(95% 0.008 98.9)` |

### `--accent` — Deep Forest Green
`#2e5e4e` light · `#7fc4a8` dark · `oklch(44.3% 0.059 169.6)`

The only accent. Eight sanctioned homes: link colour, focus ring, the skip link ground, the hover rule under a hobby name, the hover wash, the retry button (outline then fill), the 1px left border on the flagged colophon note, and ::selection. A ninth use is a change to the system.

| step | value |
| --- | --- |
| 1 | `oklch(15% 0.059 169.6)` |
| 2 | `oklch(26% 0.059 169.6)` |
| 3 | `oklch(37% 0.059 169.6)` |
| 4 | `oklch(48% 0.059 169.6)` |
| 5 | `oklch(59% 0.059 169.6)` |
| 6 | `oklch(70% 0.059 169.6)` |
| 7 | `oklch(82% 0.059 169.6)` |
| 8 | `oklch(95% 0.059 169.6)` |

### `--accent-wash` — Green Wash
`#eef3f0` light · `#1a2320` dark · `oklch(96.0% 0.007 160.1)`

One use only: the hover and focus background behind a whole entry row. Not a card colour, not a second surface level. It is also the tightest contrast ground on the page.

| step | value |
| --- | --- |
| 1 | `oklch(15% 0.007 160.1)` |
| 2 | `oklch(26% 0.007 160.1)` |
| 3 | `oklch(37% 0.007 160.1)` |
| 4 | `oklch(48% 0.007 160.1)` |
| 5 | `oklch(59% 0.007 160.1)` |
| 6 | `oklch(70% 0.007 160.1)` |
| 7 | `oklch(82% 0.007 160.1)` |
| 8 | `oklch(95% 0.007 160.1)` |

---
## Appendix B — Type scale tokens

| token | value | role | notes |
| --- | --- | --- | --- |
| `--t-micro` | 0.72rem | label | The uppercase tracked stat label. The only uppercase role, and only ever beneath the number it names. Redeclared at 0.66rem on :root below 34rem. One token, two values — still four steps, not a fifth. |
| `--t-small` | 0.82rem | small | The entire secondary register: site and username, the updated date, colophon, skip link, a state reason line, the retry button.  |
| `--t-body` | 0.95rem | body | The standfirst note under the title, and the no-numbers line in italic.  |
| `--t-lead` | 1.1rem | lead | The one-line headline of a list state. The only non-fluid role above body size.  |

---
## Appendix C — Drop-in components

Each block is self-contained and prefixed `ds-` so it can be pasted somewhere
else without colliding with this page's own class names. Colours are written as
`var(--token, fallback)` so a snippet renders correctly with or without the
palette in scope.

### Backdrop Banner

The one image on the page: a 16:5 band pinned to the viewport, with the content sheet sliding over it. The dissolve is a gradient on the sheet's leading edge, built from the ground token so it resolves in both schemes, and it travels with the content rather than sitting at a fixed height on the banner. Carries no text, ever. Art by Tilixia Summer, credited in the colophon.

```html
<div class="ds-backdrop-frame"><div class="ds-backdrop" aria-hidden="true"><div class="ds-backdrop-art"></div></div><div class="ds-backdrop-sheet"><div class="ds-backdrop-page"><h1 class="ds-backdrop-h1">Kahfi’s Sanctuary</h1><p>Content scrolls up over the band; the band stays put.</p></div></div></div>
```

```css
:host{--paper:#fafaf8;--ink:#16161a;--muted:#6b6b75;--rule:#e4e3dd;--accent:#2e5e4e;--accent-wash:#eef3f0;--t-micro:0.72rem;--t-small:0.82rem;--t-body:0.95rem;--t-lead:1.1rem;font-family:"Libre Franklin",ui-sans-serif,system-ui,sans-serif;color:var(--ink)}.ds-backdrop-frame{--banner-h:min(46vh,calc(100% * 5 / 16));position:relative;overflow:auto;max-height:70vh;background:var(--paper)}.ds-backdrop{position:sticky;top:0;width:100%;height:var(--banner-h);overflow:hidden;background:var(--paper)}.ds-backdrop-art{width:100%;height:100%;background:conic-gradient(from 210deg at 60% 40%,#9fd9d2,#e9b9cd,#cfe4f2,#9fd9d2)}.ds-backdrop-sheet{position:relative;z-index:1;margin-top:calc(var(--banner-h) * -1);background:var(--paper);min-height:120vh}.ds-backdrop-sheet::before{content:"";position:absolute;left:0;right:0;bottom:100%;height:clamp(4rem,13vh,8.5rem);background:linear-gradient(to bottom,transparent 0%,color-mix(in srgb,var(--paper) 22%,transparent) 34%,color-mix(in srgb,var(--paper) 62%,transparent) 64%,color-mix(in srgb,var(--paper) 88%,transparent) 85%,var(--paper) 100%);pointer-events:none}.ds-backdrop-page{padding:36px 2.5rem 2rem}.ds-backdrop-h1{margin:0;max-width:18ch;font-size:clamp(2rem,6.2vw,3.1rem);font-weight:300;line-height:1.12;letter-spacing:-.021em;text-wrap:balance}@media (prefers-reduced-motion:reduce){.ds-backdrop-art{animation:none}}
```

### Entry Row

The signature component. The whole band is one link: identity left, three stat columns right (three at every width), five poster slots beneath. Hover and focus are the same state.

```html
<ul class="ds-index"><li class="ds-entry"><a class="ds-entry-link" href="#"><div><h3 class="ds-entry-hobby">Anime</h3><p class="ds-entry-meta">AniList<span class="ds-entry-user"> / Sakyta</span></p><p class="ds-entry-when">updated 12 Sep 2026</p></div><dl class="ds-entry-stats"><div class="ds-stat"><dd class="ds-stat-value">135</dd><dt class="ds-stat-label">anime completed</dt></div><div class="ds-stat"><dd class="ds-stat-value">85.9</dd><dt class="ds-stat-label">mean score</dt></div><div class="ds-stat"><dd class="ds-stat-value">2,324</dd><dt class="ds-stat-label">episodes</dt></div></dl><ul class="ds-posters"><li class="ds-poster"><span class="ds-poster-img"></span></li><li class="ds-poster"><span class="ds-poster-img ds-b"></span></li></ul></a></li></ul>
```

```css
:host{--paper:#fafaf8;--ink:#16161a;--muted:#6b6b75;--rule:#e4e3dd;--accent:#2e5e4e;--accent-wash:#eef3f0;--t-micro:0.72rem;--t-small:0.82rem;--t-body:0.95rem;--t-lead:1.1rem;font-family:"Libre Franklin",ui-sans-serif,system-ui,sans-serif;color:var(--ink)}.ds-index{margin:0;padding:0;list-style:none}.ds-entry{border-top:1px solid var(--rule);border-bottom:1px solid var(--rule)}.ds-entry-link{display:grid;grid-template-columns:minmax(0,7fr) minmax(0,12fr);gap:1.4rem 2rem;align-items:start;padding:1.7rem .75rem 1.8rem;margin-inline:-.75rem;color:inherit;text-decoration:none;transition:background-color 180ms ease-out}.ds-entry-link:hover,.ds-entry-link:focus-visible{background:var(--accent-wash)}.ds-entry-link:focus-visible{outline:2px solid var(--accent);outline-offset:4px;border-radius:2px}.ds-entry-hobby{margin:0;font-size:clamp(1.35rem,3.4vw,1.7rem);font-weight:400;line-height:1.15;letter-spacing:-.015em}.ds-entry-hobby::after{content:"";display:block;height:1px;margin-top:.2rem;background:var(--accent);transform:scaleX(0);transform-origin:left;transition:transform 260ms cubic-bezier(.16,1,.3,1)}.ds-entry-link:hover .ds-entry-hobby::after,.ds-entry-link:focus-visible .ds-entry-hobby::after{transform:scaleX(1)}.ds-entry-meta{margin:.45rem 0 0;font-size:var(--t-small);color:var(--muted)}.ds-entry-user{font-style:italic}.ds-entry-when{margin:.15rem 0 0;font-size:var(--t-small);color:var(--muted);font-variant-numeric:tabular-nums}.ds-entry-stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.2rem 1.5rem;margin:0}.ds-stat{min-width:0}.ds-stat-value{margin:0;font-size:clamp(1.3rem,3.1vw,1.65rem);font-weight:300;line-height:1.1;letter-spacing:-.025em;font-variant-numeric:tabular-nums lining-nums}.ds-stat-label{margin-top:.2rem;font-size:var(--t-micro);font-weight:500;letter-spacing:.07em;text-transform:uppercase;color:var(--muted)}.ds-posters{grid-column:1/-1;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:.6rem;margin:0;padding:0;list-style:none}.ds-poster{aspect-ratio:2/3;overflow:hidden;background:var(--rule);border-radius:2px}@media (max-width:34rem){.ds-entry-link{grid-template-columns:minmax(0,1fr);gap:1.15rem;padding:1.5rem .75rem 1.6rem}.ds-entry-stats{grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem .75rem}:host{--t-micro:.66rem}.ds-stat-value{letter-spacing:-.03em}.ds-stat-label{letter-spacing:.03em}}@media (prefers-reduced-motion:reduce){.ds-entry-hobby::after{transition:none}}
```

### Stat Pair

Number first and largest, its name small and quiet beneath. dd before dt in the source so a screen reader reaches the number first.

```html
<dl class="ds-stats-demo"><div class="ds-stat"><dd class="ds-stat-value">2,324</dd><dt class="ds-stat-label">episodes</dt></div><div class="ds-stat"><dd class="ds-stat-value">85.9</dd><dt class="ds-stat-label">mean score</dt></div><div class="ds-stat"><dd class="ds-stat-value">0</dd><dt class="ds-stat-label">in the backlog</dt></div></dl>
```

```css
:host{--paper:#fafaf8;--ink:#16161a;--muted:#6b6b75;--rule:#e4e3dd;--accent:#2e5e4e;--accent-wash:#eef3f0;--t-micro:0.72rem;--t-small:0.82rem;--t-body:0.95rem;--t-lead:1.1rem;font-family:"Libre Franklin",ui-sans-serif,system-ui,sans-serif;color:var(--ink)}.ds-stats-demo{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.2rem 1.5rem;margin:0}.ds-stat{min-width:0}.ds-stat-value{margin:0;font-size:clamp(1.3rem,3.1vw,1.65rem);font-weight:300;line-height:1.1;letter-spacing:-.025em;font-variant-numeric:tabular-nums lining-nums}.ds-stat-label{margin-top:.2rem;font-size:var(--t-micro);font-weight:500;letter-spacing:.07em;text-transform:uppercase;color:var(--muted)}
```

### Poster Strip

Up to five 2:3 covers per entry, hot-linked from the trackers' CDNs with alt="". The grid holds five columns so a cover is the same size in every entry; unfilled columns stay empty and a failed image removes its own slot.

```html
<ul class="ds-posters"><li class="ds-poster"><span class="ds-poster-img"></span></li><li class="ds-poster"><span class="ds-poster-img ds-b"></span></li></ul>
```

```css
:host{--paper:#fafaf8;--ink:#16161a;--muted:#6b6b75;--rule:#e4e3dd;--accent:#2e5e4e;--accent-wash:#eef3f0;--t-micro:0.72rem;--t-small:0.82rem;--t-body:0.95rem;--t-lead:1.1rem;font-family:"Libre Franklin",ui-sans-serif,system-ui,sans-serif;color:var(--ink)}.ds-posters{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:.6rem;margin:0;padding:0;list-style:none;max-width:34rem}.ds-poster{aspect-ratio:2/3;overflow:hidden;background:var(--rule);border-radius:2px}.ds-poster-img{display:block;width:100%;height:100%;background:linear-gradient(160deg,#3d5a6c,#8fb3c4)}.ds-poster-img.ds-b{background:linear-gradient(160deg,#6c4a5a,#c4a08f)}
```

### Entry With Nothing Entered

An entry whose numbers have not been entered yet says so in italic muted body in place of its stat grid, and its date line reads “nothing entered yet”. It never substitutes a zero — a real 0 ships elsewhere on the page.

```html
<ul class="ds-index"><li class="ds-entry"><a class="ds-entry-link" href="#"><div><h3 class="ds-entry-hobby">Books</h3><p class="ds-entry-meta">StoryGraph<span class="ds-entry-user"> / firanda</span></p><p class="ds-entry-when">nothing entered yet</p></div><p class="ds-entry-none">no numbers entered yet</p><ul class="ds-posters"><li class="ds-poster"><span class="ds-poster-img"></span></li><li class="ds-poster"><span class="ds-poster-img ds-b"></span></li></ul></a></li></ul>
```

```css
:host{--paper:#fafaf8;--ink:#16161a;--muted:#6b6b75;--rule:#e4e3dd;--accent:#2e5e4e;--accent-wash:#eef3f0;--t-micro:0.72rem;--t-small:0.82rem;--t-body:0.95rem;--t-lead:1.1rem;font-family:"Libre Franklin",ui-sans-serif,system-ui,sans-serif;color:var(--ink)}.ds-index{margin:0;padding:0;list-style:none}.ds-entry{border-top:1px solid var(--rule);border-bottom:1px solid var(--rule)}.ds-entry-link{display:grid;grid-template-columns:minmax(0,7fr) minmax(0,12fr);gap:1.4rem 2rem;align-items:start;padding:1.7rem .75rem 1.8rem;margin-inline:-.75rem;color:inherit;text-decoration:none;transition:background-color 180ms ease-out}.ds-entry-link:hover,.ds-entry-link:focus-visible{background:var(--accent-wash)}.ds-entry-hobby{margin:0;font-size:clamp(1.35rem,3.4vw,1.7rem);font-weight:400;line-height:1.15;letter-spacing:-.015em}.ds-entry-hobby::after{content:"";display:block;height:1px;margin-top:.2rem;background:var(--accent);transform:scaleX(0);transform-origin:left;transition:transform 260ms cubic-bezier(.16,1,.3,1)}.ds-entry-link:hover .ds-entry-hobby::after{transform:scaleX(1)}.ds-entry-meta{margin:.45rem 0 0;font-size:var(--t-small);color:var(--muted)}.ds-entry-user{font-style:italic}.ds-entry-when{margin:.15rem 0 0;font-size:var(--t-small);color:var(--muted);font-variant-numeric:tabular-nums}.ds-entry-none{margin:0;font-size:var(--t-body);font-style:italic;color:var(--muted)}.ds-posters{grid-column:1/-1;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:.6rem;margin:0;padding:0;list-style:none}.ds-poster{aspect-ratio:2/3;border-radius:2px}
```

### State Row

A list-level state (loading, empty, error) as a single row with a top rule. The headline is always reader-facing prose; technical detail is demoted to the muted second line.

```html
<ul class="ds-index"><li class="ds-state"><p class="ds-state-line">The list would not load.</p><p class="ds-state-why">content.json responded 404</p><button class="ds-btn-retry" type="button">Try again</button></li></ul>
```

```css
:host{--paper:#fafaf8;--ink:#16161a;--muted:#6b6b75;--rule:#e4e3dd;--accent:#2e5e4e;--accent-wash:#eef3f0;--t-micro:0.72rem;--t-small:0.82rem;--t-body:0.95rem;--t-lead:1.1rem;font-family:"Libre Franklin",ui-sans-serif,system-ui,sans-serif;color:var(--ink)}.ds-index{margin:0;padding:0;list-style:none}.ds-state{padding:2.5rem 0;border-top:1px solid var(--rule)}.ds-state-line{margin:0;font-size:var(--t-lead);font-weight:400}.ds-state-why{margin:.4rem 0 0;font-size:var(--t-small);color:var(--muted)}.ds-btn-retry{margin-top:1.1rem;padding:.5rem 1.1rem;border:1px solid var(--accent);border-radius:2px;background:transparent;color:var(--accent);font:inherit;font-size:var(--t-small);cursor:pointer;caret-color:var(--accent);transition:background-color 160ms ease-out,color 160ms ease-out}.ds-btn-retry:hover{background:var(--accent);color:var(--paper)}.ds-btn-retry:focus-visible{outline:2px solid var(--accent);outline-offset:4px;border-radius:2px}
```

### Retry Button

The only button in the system. An outline, not a filled call to action — it is a repair affordance, not a destination.

```html
<button class="ds-btn-retry" type="button">Try again</button>
```

```css
:host{--paper:#fafaf8;--ink:#16161a;--muted:#6b6b75;--rule:#e4e3dd;--accent:#2e5e4e;--accent-wash:#eef3f0;--t-micro:0.72rem;--t-small:0.82rem;--t-body:0.95rem;--t-lead:1.1rem;font-family:"Libre Franklin",ui-sans-serif,system-ui,sans-serif;color:var(--ink)}.ds-btn-retry{padding:.5rem 1.1rem;border:1px solid var(--accent);border-radius:2px;background:transparent;color:var(--accent);font:inherit;font-size:var(--t-small);cursor:pointer;caret-color:var(--accent);transition:background-color 160ms ease-out,color 160ms ease-out}.ds-btn-retry:hover{background:var(--accent);color:var(--paper)}.ds-btn-retry:focus-visible{outline:2px solid var(--accent);outline-offset:4px;border-radius:2px}
```

### Colophon

The footer: the standing byline plus the freshness disclosure, with two conditional lines above it — a flagged note naming the trackers that have no numbers entered (ink, 1px accent left border), and the banner artist credit (muted, no border).

```html
<footer class="ds-colophon"><p class="ds-colophon-note">Serializd and StoryGraph have no numbers entered yet, so those entries are blank rather than showing a zero.</p><p class="ds-colophon-credit">Backdrop art by Tilixia Summer.</p><p><span>Kept by Kahfi R.</span> The numbers are entered by hand in <a class="ds-link" href="#">content.json</a> and carry the date they were last touched, so they are as current as the last time I sat down with them, not as current as the profiles themselves.</p></footer>
```

```css
:host{--paper:#fafaf8;--ink:#16161a;--muted:#6b6b75;--rule:#e4e3dd;--accent:#2e5e4e;--accent-wash:#eef3f0;--t-micro:0.72rem;--t-small:0.82rem;--t-body:0.95rem;--t-lead:1.1rem;font-family:"Libre Franklin",ui-sans-serif,system-ui,sans-serif;color:var(--ink)}.ds-colophon{max-width:60ch;font-size:var(--t-small);color:var(--muted)}.ds-colophon p{margin:0 0 .8rem}.ds-colophon-note{padding-left:.9rem;border-left:1px solid var(--accent);color:var(--ink)}.ds-colophon-credit{color:var(--muted)}.ds-link{color:var(--accent);text-underline-offset:.2em;text-decoration-thickness:1px}.ds-link:focus-visible{outline:2px solid var(--accent);outline-offset:4px;border-radius:2px}
```

### Skip Link

Parked off-screen, slides into view on keyboard focus. Accent ground, paper text, no radius, no underline. Sits above the banner in the stacking order.

```html
<div class="ds-skip-wrap"><a class="ds-skip" href="#">Skip to the list</a></div>
```

```css
:host{--paper:#fafaf8;--ink:#16161a;--muted:#6b6b75;--rule:#e4e3dd;--accent:#2e5e4e;--accent-wash:#eef3f0;--t-micro:0.72rem;--t-small:0.82rem;--t-body:0.95rem;--t-lead:1.1rem;font-family:"Libre Franklin",ui-sans-serif,system-ui,sans-serif;color:var(--ink)}.ds-skip-wrap{position:relative;height:4rem;background:var(--paper)}.ds-skip{position:absolute;left:1rem;top:-4rem;z-index:2;padding:.5rem .9rem;background:var(--accent);color:var(--paper);font-size:var(--t-small);text-decoration:none;transition:top 140ms ease-out}.ds-skip:focus-visible,.ds-skip-wrap:hover .ds-skip{top:1rem}
```

### Masthead

A round portrait beside the title and standfirst, opening the page directly below the banner. No text sits above the h1 — no eyebrow, no kicker, no byline. Stacks to a column below 34rem.

```html
<header class="ds-masthead"><img class="ds-masthead-photo" src="avatar.webp" alt="Kahfi R." width="512" height="512" decoding="async"><div><h1 class="ds-masthead-title">Kahfi’s Sanctuary</h1><p class="ds-masthead-note">I enjoy art, a lot.</p></div></header>
```

```css
:host{--paper:#fafaf8;--ink:#16161a;--muted:#6b6b75;--rule:#e4e3dd;--accent:#2e5e4e;--accent-wash:#eef3f0;--t-micro:0.72rem;--t-small:0.82rem;--t-body:0.95rem;--t-lead:1.1rem;font-family:"Libre Franklin",ui-sans-serif,system-ui,sans-serif;color:var(--ink)}.ds-masthead{display:flex;align-items:center;gap:clamp(.9rem,2.6vw,1.6rem)}.ds-masthead>div{min-width:0}.ds-masthead-photo{display:block;flex:none;width:clamp(3.75rem,9vw,5.5rem);height:auto;aspect-ratio:1/1;margin:0;border-radius:50%;object-fit:cover;background:color-mix(in srgb,var(--rule) 45%,var(--paper));box-shadow:0 0 0 1px var(--rule)}.ds-masthead-title{margin:0;max-width:18ch;font-size:clamp(2rem,6.2vw,3.1rem);font-weight:300;line-height:1.12;letter-spacing:-.021em;text-wrap:balance}.ds-masthead-note{margin:.55rem 0 0;max-width:54ch;font-size:var(--t-body);color:var(--muted)}@media (max-width:34rem){.ds-masthead{flex-direction:column;align-items:flex-start;gap:.95rem}}
```
