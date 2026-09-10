"use client";

import { useState } from "react";
import Image from "next/image";

export default function GalleryGrid({ images, alt }: { images: string[]; alt: string }) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <div className="product-gallery-grid">
        {images.map((src, i) => (
          <div key={i} className="gallery-item">
            <Image
              src={src}
              alt={`${alt} — ${i + 1}`}
              width={800}
              height={600}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onClick={() => setLightbox(src)}
            />
          </div>
        ))}
      </div>

      {lightbox && (
        <div
          className="lightbox-backdrop"
          onClick={() => setLightbox(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ×
          </button>
          <Image
            src={lightbox}
            alt={alt}
            width={1400}
            height={1000}
            style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain" }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
