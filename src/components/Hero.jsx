import hairSerum from "../assets/images/hair-serum/1.jpg";
import sunscreenGel from "../assets/images/sunscreen-gel/1.png";
import facewash from "../assets/images/facewash/1.png";
import effervescent from "../assets/images/effervescent-tablets/1.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grain"
      style={{
        background:
          "linear-gradient(165deg, var(--clr-ivory) 0%, var(--clr-cream) 30%, #e8e0d4 60%, var(--clr-blush) 100%)",
      }}
    >
      {/* Decorative organic shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, var(--clr-sage) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, var(--clr-blush) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, var(--clr-gold) 0%, transparent 70%)" }}
        />
      </div>

      <div
        className="relative z-10 max-w-[1400px] mx-auto w-full pt-28 pb-20 lg:pt-32 lg:pb-24"
        style={{ padding: "7rem var(--px-section) 5rem" }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center lg:min-h-[75vh]">
          {/* Left — text content */}
          <div className="reveal flex flex-col gap-6 lg:gap-7 text-center lg:text-left order-2 lg:order-1">
            <span
              className="text-[11px] tracking-[0.25em] uppercase text-[var(--clr-gold)]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
            >
              Premium Skincare & Hair Care
            </span>

            <h1
              className="text-[2.6rem] sm:text-[3.2rem] lg:text-[4rem] xl:text-[4.6rem] leading-[1.08] tracking-[-0.02em] text-[var(--clr-forest)]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Pure Care
              <br />
              for Your{" "}
              <span className="italic text-[var(--clr-gold)]">Skin & Hair</span>
            </h1>

            <p
              className="text-base lg:text-lg leading-relaxed text-[var(--clr-muted)] max-w-md mx-auto lg:mx-0"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Nature-powered skincare and hair care crafted for healthy,
              radiant skin and stronger, lustrous hair. Dermatologically tested,
              cruelty-free, and made with love.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center pt-2">
              <a href="#products" className="btn-primary">
                Explore Products
              </a>
              <a
                href="https://amazon.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline group"
              >
                Shop on Amazon
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — floating product images */}
          <div className="relative flex items-center justify-center order-1 lg:order-2 min-h-[320px] lg:min-h-[480px]">
            {/* Main product — Hair Serum */}
            <div
              className="animate-float relative z-20 w-52 h-64 lg:w-64 lg:h-80 rounded-3xl overflow-hidden shadow-xl"
              style={{ background: "#e8ddd0" }}
            >
              <img
                src={hairSerum}
                alt="RootVoran Advance Hair Care Serum"
                className="w-full h-full object-contain p-3"
                draggable={false}
              />
            </div>

            {/* Floating secondary — Sunscreen */}
            <div
              className="animate-float-delayed absolute -top-2 -left-2 lg:top-4 lg:-left-6 z-10 w-36 h-44 lg:w-44 lg:h-56 rounded-2xl overflow-hidden shadow-lg"
              style={{ background: "#f5f0e3" }}
            >
              <img
                src={sunscreenGel}
                alt="RootVoran Glutathione Sunscreen Gel"
                className="w-full h-full object-contain p-2"
                draggable={false}
              />
            </div>

            {/* Floating secondary — Facewash */}
            <div
              className="animate-float-slow absolute -bottom-2 -right-2 lg:bottom-6 lg:-right-6 z-10 w-36 h-44 lg:w-44 lg:h-56 rounded-2xl overflow-hidden shadow-lg"
              style={{ background: "#f0ebe4" }}
            >
              <img
                src={facewash}
                alt="RootVoran Glutathione Facewash"
                className="w-full h-full object-contain p-2"
                draggable={false}
              />
            </div>

            {/* Small floating accent — Effervescent */}
            <div
              className="animate-float absolute top-4 right-4 lg:-top-2 lg:right-4 z-30 w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden shadow-md border-2 border-white/40"
              style={{ background: "#fdf5e6" }}
            >
              <img
                src={effervescent}
                alt="RootVoran Glutathione Effervescent Tablets"
                className="w-full h-full object-contain p-1"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--clr-muted)]" style={{ fontFamily: "var(--font-body)" }}>
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-[var(--clr-muted)]/40 relative overflow-hidden">
          <div className="absolute w-full h-1/2 bg-[var(--clr-gold)] animate-[float-slow_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
