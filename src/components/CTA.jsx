export default function CTA() {
  return (
    <section className="relative py-24 sm:py-28 lg:py-36 overflow-hidden grain">
      {/* Warm gold background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #c4a265 0%, #d4b87a 35%, #c9a96c 65%, #b8944f 100%)",
        }}
      />

      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #fff 0%, transparent 65%)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, var(--clr-forest) 0%, transparent 60%)" }}
        />
      </div>

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div
        className="relative z-10 max-w-[800px] mx-auto text-center"
        style={{ padding: "0 var(--px-section)" }}
      >
        <div className="reveal flex flex-col items-center gap-6 lg:gap-7">
          <span
            className="text-[11px] tracking-[0.25em] uppercase text-[var(--clr-forest)]/60 block"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
          >
            Start Your Journey
          </span>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-[var(--clr-forest)] leading-[1.12]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Experience the Power of{" "}
            <span className="italic text-white">
              Natural Beauty
            </span>
          </h2>

          <p
            className="text-[var(--clr-forest)]/50 text-sm lg:text-base max-w-md leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Transform your skincare and hair care routine with dermatologically
            tested, nature-powered formulations for radiant skin and lustrous hair.
          </p>

          <a
            href="https://amazon.in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-2"
            style={{
              background: "linear-gradient(135deg, var(--clr-forest) 0%, #243d24 100%)",
            }}
          >
            Shop RootVoran on Amazon
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
