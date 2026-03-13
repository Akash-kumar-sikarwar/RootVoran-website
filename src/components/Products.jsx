import { useState } from "react";
import products from "../data/products";
import ImageViewer from "./ImageViewer";

export default function Products() {
  const [viewer, setViewer] = useState({ open: false, productIdx: 0, imageIdx: 0 });

  const openViewer = (productIdx, imageIdx = 0) => {
    setViewer({ open: true, productIdx, imageIdx });
  };

  const closeViewer = () => {
    setViewer((v) => ({ ...v, open: false }));
  };

  const activeProduct = products[viewer.productIdx];

  return (
    <section
      id="products"
      className="relative py-24 sm:py-28 lg:py-36 scroll-mt-[80px] bg-[var(--clr-ivory)]"
    >
      <div className="max-w-[1400px] mx-auto" style={{ padding: "0 var(--px-section)" }}>
        {/* Section header */}
        <div className="reveal text-center mb-14 lg:mb-20">
          <span
            className="text-[11px] tracking-[0.25em] uppercase text-[var(--clr-gold)] block mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
          >
            Our Collection
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-[var(--clr-forest)] mb-5"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Crafted for Your <span className="italic">Radiance</span>
          </h2>
          <p
            className="text-[var(--clr-muted)] max-w-lg mx-auto text-sm lg:text-base leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >From skin-brightening facewashes to hair-strengthening serums — each product is carefully formulated with nature's finest ingredients, backed by dermatological science.</p>
        </div>

        {/* Product grid */}
        <div className="reveal-stagger grid sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8">
          {products.map((product, idx) => (
            <div
              key={product.id}
              className="product-card glass-card rounded-2xl overflow-hidden group flex flex-col"
            >
              {/* Product image */}
              <button
                onClick={() => openViewer(idx)}
                className="relative w-full h-64 sm:h-56 lg:h-72 flex items-center justify-center overflow-hidden cursor-zoom-in"
                style={{ background: product.color }}
                aria-label={`View images of ${product.name}`}
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-105"
                  draggable={false}
                />
                {/* View hint overlay */}
                <div className="absolute inset-0 bg-[var(--clr-forest)]/0 group-hover:bg-[var(--clr-forest)]/5 transition-colors duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center gap-1.5 bg-white/80 backdrop-blur-sm text-[var(--clr-forest)] text-[10px] tracking-[0.1em] uppercase px-3 py-1.5 rounded-full shadow-sm"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    View
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/20 to-transparent" />
              </button>

              {/* Card content */}
              <div className="p-5 lg:p-6 flex flex-col flex-1 gap-3">
                <h3
                  className="text-lg text-[var(--clr-forest)] leading-snug"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                >
                  {product.name}
                </h3>

                <p
                  className="text-[11px] tracking-[0.1em] uppercase text-[var(--clr-gold)]"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                >
                  {product.tagline}
                </p>

                <p
                  className="text-[13px] text-[var(--clr-muted)] leading-relaxed flex-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {product.description}
                </p>

                {/* Ingredients */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {product.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="text-[10px] tracking-[0.05em] uppercase px-2.5 py-1 rounded-full bg-[var(--clr-cream)] text-[var(--clr-muted)] border border-[var(--clr-gold)]/10"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      {ing}
                    </span>
                  ))}
                </div>

                {/* Buy button — pinned to bottom via mt-auto */}
                <a
                  href={product.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-sm mt-auto pt-3"
                >
                  Buy on Amazon
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Viewer Modal */}
      <ImageViewer
        images={activeProduct.images}
        productName={activeProduct.name}
        isOpen={viewer.open}
        onClose={closeViewer}
        startIndex={viewer.imageIdx}
      />
    </section>
  );
}
