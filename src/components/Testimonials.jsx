import { useState } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    quote:
      "The Glutathione Facewash has completely transformed my skin. I've never felt so confident without makeup. My skin feels cleaner, brighter, and smoother every single day.",
    product: "Glutathione Facewash",
    rating: 5,
    initials: "PS",
    accent: "from-[#c4a265]/40 to-[#e8d5c4]/20",
  },
  {
    name: "Ananya Gupta",
    location: "Delhi",
    quote:
      "RootVoran's sunscreen gel is lightweight, doesn't leave a white cast, and keeps my skin glowing all day long. Honestly the best sunscreen I've ever used — absolute game-changer.",
    product: "Sunscreen Gel SPF 50+",
    rating: 5,
    initials: "AG",
    accent: "from-[#b5c4a8]/40 to-[#d4ddd0]/20",
  },
  {
    name: "Rohan Mehta",
    location: "Bangalore",
    quote:
      "The hair serum brought my damaged hair back to life. Smooth, shiny, and so much healthier in just two weeks. I get compliments constantly now.",
    product: "Hair Care Serum",
    rating: 5,
    initials: "RM",
    accent: "from-[#e8d5c4]/40 to-[#c4a265]/20",
  },
];

const FONT_BODY = "var(--font-body)";

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[var(--clr-gold)]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t, featured = false }) {
  return (
    <div className={`testimonial-card group relative ${featured ? "lg:scale-[1.03] z-10" : "z-0"}`}>
      {/* Gradient border wrapper */}
      <div className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-br ${t.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[1px]`} />

      <div
        className="relative rounded-3xl p-7 sm:p-9 md:p-11 lg:p-8 xl:p-11 flex flex-col h-full transition-all duration-500 group-hover:translate-y-[-4px] group-hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.5)]"
        style={{
          fontFamily: FONT_BODY,
          background: "linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 8px 32px -8px rgba(0,0,0,0.3)",
        }}
      >
        {/* Top row: stars + product tag */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <Stars count={t.rating} />
          <span
            className="text-[8px] sm:text-[9px] tracking-[0.1em] uppercase px-3 py-1.5 rounded-full text-[var(--clr-gold-light)]/70 border border-[var(--clr-gold)]/15 bg-[var(--clr-gold)]/5 whitespace-nowrap"
            style={{ fontWeight: 500 }}
          >
            {t.product}
          </span>
        </div>

        {/* Oversized decorative quote mark (display font — only decoration) */}
        <div className="relative mb-4">
          <span
            className="absolute -top-8 -left-3 text-[5.5rem] leading-none text-[var(--clr-gold)]/[0.07] select-none pointer-events-none"
            style={{ fontFamily: "var(--font-display)" }}
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <p
            className={`relative z-10 text-white/85 leading-[1.85] ${featured ? "text-[15px] lg:text-base" : "text-sm lg:text-[15px]"}`}
            style={{ fontWeight: 400 }}
          >
            {t.quote}
          </p>
        </div>

        {/* Spacer */}
        <div className="flex-1 min-h-8" />

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--clr-gold)]/15 to-transparent my-8" />

        {/* Author */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Avatar with ring glow */}
          <div className="relative shrink-0">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[var(--clr-gold)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
            <div
              className="relative w-12 h-12 rounded-full flex items-center justify-center text-[13px] tracking-wide text-white/90 border border-white/10"
              style={{
                background: "linear-gradient(135deg, rgba(196,162,101,0.2), rgba(196,162,101,0.05))",
                fontWeight: 600,
              }}
            >
              {t.initials}
            </div>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-sm text-white/90" style={{ fontWeight: 500 }}>
              {t.name}
            </span>
            <div className="flex items-center gap-1.5">
              <svg className="w-3 h-3 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-[11px] text-white/35" style={{ fontWeight: 400 }}>
                {t.location}
              </span>
            </div>
          </div>

          {/* Verified badge */}
          <div className="ml-auto flex items-center gap-1.5 text-[var(--clr-sage)]/60">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span
              className="text-[9px] tracking-[0.06em] uppercase hidden sm:block"
              style={{ fontWeight: 500 }}
            >
              Verified
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(1);

  return (
    <section className="relative py-36 sm:py-40 lg:py-52 overflow-hidden">
      {/* Dark background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(170deg, #0f1f0f 0%, #152115 35%, #1a2e1a 70%, #1f2f1f 100%)",
        }}
      />

      {/* Ambient glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(196,162,101,0.06) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(181,196,168,0.04) 0%, transparent 60%)" }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto" style={{ padding: "0 var(--px-section)" }}>
        {/* Header */}
        <div className="reveal text-center mb-20 lg:mb-28" style={{ fontFamily: FONT_BODY }}>
          <span
            className="text-[11px] tracking-[0.3em] uppercase text-[var(--clr-gold)]/70 block mb-5"
            style={{ fontWeight: 600 }}
          >
            What People Say
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-[3.5rem] text-white/90 leading-[1.1] mb-5"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Real Results,{" "}
            <span className="italic text-[var(--clr-gold-light)]">Real Stories</span>
          </h2>
          <p
            className="text-white/30 max-w-md mx-auto text-sm leading-relaxed"
            style={{ fontWeight: 400 }}
          >
            Hear from our community of happy customers who've transformed their
            skincare routine with RootVoran.
          </p>
        </div>

        {/* Desktop: Featured asymmetric layout */}
        <div className="reveal-stagger hidden lg:grid lg:grid-cols-3 gap-6 xl:gap-8 items-stretch">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} featured={i === 1} />
          ))}
        </div>

        {/* Mobile/Tablet: Single card with dots */}
        <div className="lg:hidden">
          <div className="reveal">
            <TestimonialCard t={testimonials[active]} featured />
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`View testimonial ${i + 1}`}
                className={`transition-all duration-500 rounded-full ${
                  i === active
                    ? "w-8 h-2 bg-[var(--clr-gold)]"
                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom trust badges */}
        <div className="reveal flex flex-wrap items-center justify-center gap-10 lg:gap-16 mt-24 lg:mt-32 pt-14 border-t border-white/[0.04]" style={{ fontFamily: FONT_BODY }}>
          {[
            { value: "10,000+", label: "Happy Customers" },
            { value: "4.9", label: "Average Rating" },
            { value: "98%", label: "Would Recommend" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <span
                className="text-2xl lg:text-3xl text-[var(--clr-gold-light)]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
              >
                {stat.value}
              </span>
              <span
                className="text-[10px] tracking-[0.12em] uppercase text-white/25"
                style={{ fontWeight: 500 }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
