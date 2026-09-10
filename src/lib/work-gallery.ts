/**
 * Our Work gallery.
 *
 * Studio frames of commissioned pieces, classified by the material they are
 * made from. Supplied as three folders (CRYSTAL / METAL / RESIN) with no names
 * attached, so there are no captions — the grid is deliberately caption-free
 * rather than captioned with placeholder text.
 *
 * ORDER IS DELIBERATE — do not sort this list. The "All" view renders it in
 * array order, and grouped by material it read as three separate blocks: 20
 * crystal, then 11 metal, then 30 resin. The list round-robins the three so any
 * screenful shows a spread. Adding one? Drop it near others of its material and
 * re-interleave, rather than appending, or the tail re-clusters.
 *
 * These are the only consumer of /public/work/. HOF_PHOTOS in hof-photos.ts is
 * a different set — the documentary photographs used in the marquee strips on
 * this and ten other pages — and is unrelated to this grid.
 */
export type WorkMaterial = "Crystal" | "Metal" | "Resin";
export type WorkPiece = { src: string; material: WorkMaterial };

export const WORK_PIECES: WorkPiece[] = [
  { src: "/work/resin-01.webp", material: "Resin" },
  { src: "/work/crystal-01.webp", material: "Crystal" },
  { src: "/work/metal-01.webp", material: "Metal" },
  { src: "/work/resin-02.webp", material: "Resin" },
  { src: "/work/crystal-02.webp", material: "Crystal" },
  { src: "/work/metal-02.webp", material: "Metal" },
  { src: "/work/resin-03.webp", material: "Resin" },
  { src: "/work/crystal-03.webp", material: "Crystal" },
  { src: "/work/metal-03.webp", material: "Metal" },
  { src: "/work/resin-04.webp", material: "Resin" },
  { src: "/work/crystal-04.webp", material: "Crystal" },
  { src: "/work/metal-04.webp", material: "Metal" },
  { src: "/work/resin-05.webp", material: "Resin" },
  { src: "/work/crystal-05.webp", material: "Crystal" },
  { src: "/work/metal-05.webp", material: "Metal" },
  { src: "/work/resin-06.webp", material: "Resin" },
  { src: "/work/crystal-06.webp", material: "Crystal" },
  { src: "/work/metal-06.webp", material: "Metal" },
  { src: "/work/resin-07.webp", material: "Resin" },
  { src: "/work/crystal-07.webp", material: "Crystal" },
  { src: "/work/metal-07.webp", material: "Metal" },
  { src: "/work/resin-08.webp", material: "Resin" },
  { src: "/work/crystal-08.webp", material: "Crystal" },
  { src: "/work/metal-08.webp", material: "Metal" },
  { src: "/work/resin-09.webp", material: "Resin" },
  { src: "/work/crystal-09.webp", material: "Crystal" },
  { src: "/work/metal-09.webp", material: "Metal" },
  { src: "/work/resin-10.webp", material: "Resin" },
  { src: "/work/crystal-10.webp", material: "Crystal" },
  { src: "/work/metal-10.webp", material: "Metal" },
  { src: "/work/resin-11.webp", material: "Resin" },
  { src: "/work/crystal-11.webp", material: "Crystal" },
  { src: "/work/metal-11.webp", material: "Metal" },
  { src: "/work/resin-12.webp", material: "Resin" },
  { src: "/work/crystal-12.webp", material: "Crystal" },
  { src: "/work/resin-13.webp", material: "Resin" },
  { src: "/work/crystal-13.webp", material: "Crystal" },
  { src: "/work/resin-14.webp", material: "Resin" },
  { src: "/work/crystal-14.webp", material: "Crystal" },
  { src: "/work/resin-15.webp", material: "Resin" },
  { src: "/work/crystal-15.webp", material: "Crystal" },
  { src: "/work/resin-16.webp", material: "Resin" },
  { src: "/work/crystal-16.webp", material: "Crystal" },
  { src: "/work/resin-17.webp", material: "Resin" },
  { src: "/work/crystal-17.webp", material: "Crystal" },
  { src: "/work/resin-18.webp", material: "Resin" },
  { src: "/work/crystal-18.webp", material: "Crystal" },
  { src: "/work/resin-19.webp", material: "Resin" },
  { src: "/work/crystal-19.webp", material: "Crystal" },
  { src: "/work/resin-20.webp", material: "Resin" },
  { src: "/work/crystal-20.webp", material: "Crystal" },
  { src: "/work/resin-21.webp", material: "Resin" },
  { src: "/work/resin-22.webp", material: "Resin" },
  { src: "/work/resin-23.webp", material: "Resin" },
  { src: "/work/resin-24.webp", material: "Resin" },
  { src: "/work/resin-25.webp", material: "Resin" },
  { src: "/work/resin-26.webp", material: "Resin" },
  { src: "/work/resin-27.webp", material: "Resin" },
  { src: "/work/resin-28.webp", material: "Resin" },
  { src: "/work/resin-29.webp", material: "Resin" },
  { src: "/work/resin-30.webp", material: "Resin" },
];
