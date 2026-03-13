import { useState, useEffect, useCallback } from "react";

export default function ImageViewer({ images, productName, isOpen, onClose, startIndex = 0 }) {
  const [current, setCurrent] = useState(startIndex);

  /* Reset index when opening with a new startIndex */
  useEffect(() => {
    if (isOpen) setCurrent(startIndex);
  }, [isOpen, startIndex]);

  /* Lock body scroll when open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* Keyboard navigation */
  const handleKey = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % images.length);
      if (e.key === "ArrowLeft") setCurrent((c) => (c - 1 + images.length) % images.length);
    },
    [isOpen, images.length, onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  if (!isOpen) return null;

  const hasManyImages = images.length > 1;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-label={`Image viewer for ${productName}`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center gap-6 max-w-[90vw] max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 lg:top-0 lg:right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 z-20"
          aria-label="Close viewer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Product name */}
        <h3
          className="text-white/80 text-lg lg:text-xl tracking-wide text-center"
          style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
        >
          {productName}
        </h3>

        {/* Main image area */}
        <div className="relative flex items-center justify-center w-full">
          {/* Previous button */}
          {hasManyImages && (
            <button
              onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
              className="absolute left-2 lg:left-4 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-white/5 min-h-[300px] lg:min-h-[400px] max-h-[65vh] w-auto max-w-full">
            <img
              src={images[current]}
              alt={`${productName} - image ${current + 1}`}
              className="max-h-[65vh] max-w-full w-auto h-auto object-contain select-none"
              draggable={false}
            />
          </div>

          {/* Next button */}
          {hasManyImages && (
            <button
              onClick={() => setCurrent((c) => (c + 1) % images.length)}
              className="absolute right-2 lg:right-4 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
              aria-label="Next image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {/* Thumbnails */}
        {hasManyImages && (
          <div className="flex items-center justify-center gap-3">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-16 h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  i === current
                    ? "border-[var(--clr-gold)] shadow-[0_0_12px_rgba(196,162,101,0.4)] scale-105"
                    : "border-white/10 opacity-50 hover:opacity-80"
                }`}
              >
                <img
                  src={img}
                  alt={`${productName} thumbnail ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Image counter */}
        {hasManyImages && (
          <span
            className="text-white/40 text-xs tracking-widest"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {current + 1} / {images.length}
          </span>
        )}
      </div>
    </div>
  );
}
