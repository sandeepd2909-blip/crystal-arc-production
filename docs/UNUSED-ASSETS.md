# Unreferenced assets

Generated 27 August 2026 against the built output in `out/`.

These 70 files sit in `public/` and are **not referenced by any page, script or
stylesheet in the built site**. Every file in `public/` is copied into the deploy
whether or not anything links to it.

## Should they be deleted?

They cost nothing at runtime — a visitor never downloads a file no page links to,
so removing them will not make a single page faster. What they do cost is 13.8 MB
on every deploy and in every copy of the repo.

They were left in place deliberately, because deleting content assets is the
client's call and several of these are recognisable: superseded versions of live
images (`hof-jackie-chan.webp` against the live `hof-jackie-chan-new.webp`), old
PNG versions of the homepage category cards, and client logos that may be awaiting
approval rather than abandoned (`adidas.svg`, `DHL_Logo.svg`, `Emirates-NBD.svg`,
`leo-burnett.svg`, `JCB`, `EXPO_CITY_DUBAI_LOGO.png`).

Everything here is recoverable from git history if it is removed and later wanted.

## Worth looking at first

- **`trophy-construct.mp4` — 6.0 MB, 44% of the total.** Left over from
  `ScrollVideoTrophy.tsx`, a component that is no longer imported anywhere.
  Deleting the component and this file together is the single biggest tidy-up.
- **The 14 `hof-m*.webp` files — 2.2 MB.** The Hall of Fame reel is driven by
  `src/lib/hof-photos.ts`, which lists `hof-mag-*`, `hof-arabab`, `hof-fazza` and
  friends. The `hof-m*` set is an earlier numbering that nothing reads.
- **The 12 `hp-slide-*.webp` files — 1.6 MB.** From a homepage slider that no
  longer exists.
- **The `hp-cat-*.png` / `hp-trophies*.png` set.** Superseded by the `-v2.webp`
  versions the homepage actually uses. These are also the only files in the repo
  with meaningful compression headroom left — around 100 KB each — which is moot
  while nothing loads them.

## One caveat before running any bulk delete

`public/_redirects` is excluded from this list by hand. It is a Netlify
configuration file, consumed by the host and referenced by nothing in the markup,
so a "not referenced anywhere" sweep flags it as dead. Deleting it would break the
root language redirect and every pre-prefix back-compat URL.

Regenerate this list after any change with a build followed by a sweep of `out/`
for each filename in `public/`.

---

| File | Size |
|---|---|
| `/trophy-construct.mp4` | 6029 KB |
| `/hof-disney.webp` | 389 KB |
| `/hof-ceremony-saudi.webp` | 377 KB |
| `/hof-jackie-chan.webp` | 243 KB |
| `/hp-slide-5.webp` | 230 KB |
| `/hp-slide-10.webp` | 219 KB |
| `/hof-king-charles.webp` | 217 KB |
| `/hof-m01.webp` | 206 KB |
| `/hof-m07.webp` | 204 KB |
| `/hof-trevor-noah.webp` | 202 KB |
| `/hof-m06.webp` | 192 KB |
| `/hof-m13.webp` | 184 KB |
| `/hof-m10.webp` | 173 KB |
| `/hof-m11.webp` | 171 KB |
| `/hof-m04.webp` | 169 KB |
| `/hp-slide-12.webp` | 169 KB |
| `/hp-slide-3.webp` | 167 KB |
| `/cg-branded-metal.webp` | 165 KB |
| `/hp-slide-11.webp` | 161 KB |
| `/hof-m08.webp` | 159 KB |
| `/hp-slide-7.webp` | 157 KB |
| `/box-wood-veneer.webp` | 155 KB |
| `/hof-m12.webp` | 151 KB |
| `/hof-m02.webp` | 148 KB |
| `/hof-m14.webp` | 132 KB |
| `/hof-vip-gift.webp` | 131 KB |
| `/hp-slide-6.webp` | 128 KB |
| `/hof-m03.webp` | 125 KB |
| `/hd-feature-frosted.webp` | 125 KB |
| `/hp-cat-trophies.png` | 120 KB |
| `/hp-trophies-new.png` | 120 KB |
| `/hp-trophies.png` | 120 KB |
| `/hof-m09.webp` | 120 KB |
| `/hp-cat-gifts.png` | 117 KB |
| `/hp-slide-9.webp` | 111 KB |
| `/logos/EXPO_CITY_DUBAI_LOGO.png` | 110 KB |
| `/hp-cat-decor.png` | 110 KB |
| `/hp-home-decor-new.png` | 110 KB |
| `/cg-crystal-desk.webp` | 109 KB |
| `/hp-cat-boxes.png` | 105 KB |
| `/box-rigid-board.webp` | 104 KB |
| `/box-single-double.webp` | 97 KB |
| `/trophy-medals.webp` | 95 KB |
| `/hp-slide-1.webp` | 95 KB |
| `/box-pu-leather.webp` | 91 KB |
| `/og/blog-b027.jpg` | 89 KB |
| `/trophy-plaques.webp` | 87 KB |
| `/hof-m05.webp` | 84 KB |
| `/hp-slide-8.webp` | 81 KB |
| `/hp-slide-4.webp` | 81 KB |
| `/og/blog-b020.jpg` | 78 KB |
| `/cg-vvip-board.webp` | 77 KB |
| `/og/blog-b019.jpg` | 75 KB |
| `/og/blog-b014.jpg` | 63 KB |
| `/og/blog-b021.jpg` | 59 KB |
| `/hp-slide-2.webp` | 58 KB |
| `/og/blog-b015.jpg` | 52 KB |
| `/og/blog-b026.jpg` | 48 KB |
| `/prodcat-boxes.webp` | 43 KB |
| `/trophy-wood.webp` | 38 KB |
| `/prodcat-homedecor.webp` | 34 KB |
| `/prodcat-trophies.webp` | 31 KB |
| `/og/blog-b024.jpg` | 27 KB |
| `/prodcat-corporate.webp` | 25 KB |
| `/logos/leo-burnett.svg` | 8 KB |
| `/logo_ca__bw.png` | 6 KB |
| `/logos/adidas.svg` | 4 KB |
| `/logos/Emirates-NBD.svg` | 4 KB |
| `/logos/JCB_-company-Logo.wine.svg` | 4 KB |
| `/logos/DHL_Logo.svg` | 3 KB |

TOTAL 70 files, 13.8 MB
