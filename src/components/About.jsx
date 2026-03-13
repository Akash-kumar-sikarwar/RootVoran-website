import hairSerum from "../assets/images/hair-serum/1.jpg";
import sunscreenGel from "../assets/images/sunscreen-gel/1.png";
import facewash from "../assets/images/facewash/1.png";
import effervescent from "../assets/images/effervescent-tablets/1.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-28 lg:py-36 scroll-mt-[80px] bg-[var(--clr-ivory)]"
    >
      <div className="max-w-[1400px] mx-auto" style={{ padding: "0 var(--px-section)" }}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Lifestyle image — editorial product collage */}
          <div className="reveal relative pb-10">
            <div
              className="relative rounded-3xl overflow-hidden h-[400px] sm:h-[440px] lg:h-[520px]"
              style={{
                background:
                  "linear-gradient(155deg, #e8e0d4 0%, #f0ebe4 30%, #f5f0e3 55%, #e8d5c4 100%)",
              }}
            >
              {/* Decorative botanical circles */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                  className="absolute -top-16 -left-16 w-48 h-48 rounded-full opacity-20"
                  style={{ background: "radial-gradient(circle, var(--clr-sage) 0%, transparent 70%)" }}
                />
                <div
                  className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full opacity-15"
                  style={{ background: "radial-gradient(circle, var(--clr-gold) 0%, transparent 70%)" }}
                />
              </div>

              {/* Product arrangement — editorial flat-lay style */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Center hero — Facewash */}
                <div className="absolute z-20 w-[140px] h-[200px] sm:w-[160px] sm:h-[230px] lg:w-[180px] lg:h-[260px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-xl">
                  <img
                    src={facewash}
                    alt="RootVoran Glutathione Facewash"
                    className="w-full h-full object-contain"
                    draggable={false}
                  />
                </div>

                {/* Left — Hair Serum, slightly rotated */}
                <div className="absolute z-10 w-[110px] h-[160px] sm:w-[130px] sm:h-[190px] lg:w-[150px] lg:h-[210px] left-[6%] sm:left-[8%] top-[12%] -rotate-6 drop-shadow-lg">
                  <img
                    src={hairSerum}
                    alt="RootVoran Hair Care Serum"
                    className="w-full h-full object-contain"
                    draggable={false}
                  />
                </div>

                {/* Right — Sunscreen, slightly rotated */}
                <div className="absolute z-10 w-[110px] h-[160px] sm:w-[130px] sm:h-[190px] lg:w-[150px] lg:h-[210px] right-[6%] sm:right-[8%] top-[15%] rotate-6 drop-shadow-lg">
                  <img
                    src={sunscreenGel}
                    alt="RootVoran Sunscreen Gel"
                    className="w-full h-full object-contain"
                    draggable={false}
                  />
                </div>

                {/* Bottom center — Effervescent Tablets */}
                <div className="absolute z-30 w-[80px] h-[120px] sm:w-[90px] sm:h-[135px] lg:w-[100px] lg:h-[150px] left-1/2 -translate-x-1/2 bottom-[8%] rotate-3 drop-shadow-lg">
                  <img
                    src={effervescent}
                    alt="RootVoran Effervescent Tablets"
                    className="w-full h-full object-contain"
                    draggable={false}
                  />
                </div>
              </div>

              {/* Subtle brand watermark */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-40">
                <span
                  className="text-[10px] tracking-[0.2em] uppercase text-[var(--clr-forest)]/15"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                >
                  RootVoran Collection
                </span>
              </div>

              {/* Corner accents */}
              <div className="absolute top-5 left-5 w-10 h-10 border-t-2 border-l-2 border-[var(--clr-gold)]/25 rounded-tl-lg" />
              <div className="absolute bottom-5 right-5 w-10 h-10 border-b-2 border-r-2 border-[var(--clr-gold)]/25 rounded-br-lg" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-2 -right-2 lg:-right-6 glass-card rounded-2xl p-5 shadow-lg animate-float-slow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--clr-gold)]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--clr-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <span
                    className="block text-xl text-[var(--clr-forest)]"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                  >
                    10K+
                  </span>
                  <span
                    className="text-[10px] tracking-[0.1em] uppercase text-[var(--clr-muted)]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Happy Customers
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="reveal flex flex-col gap-6">
            <span
              className="text-[11px] tracking-[0.25em] uppercase text-[var(--clr-gold)]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
            >
              Our Story
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-[2.8rem] text-[var(--clr-forest)] leading-[1.1]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Rooted in Nature,
              <br />
              Backed by <span className="italic">Science</span>
            </h2>
            <p
              className="text-[var(--clr-muted)] leading-[1.75] text-sm lg:text-base"
              style={{ fontFamily: "var(--font-body)" }}
            >
              RootVoran blends natural ingredients with modern dermatological
              science to create simple, effective skincare and hair care for
              everyday life. Born from the belief that everyone deserves clean,
              safe, and powerful beauty products — from radiant skin to
              stronger, healthier hair.
            </p>
            <p
              className="text-[var(--clr-muted)] leading-[1.75] text-sm lg:text-base"
              style={{ fontFamily: "var(--font-body)" }}
            >
              From Glutathione-powered skincare that brightens and protects,
              to our Redensyl-enriched hair serum that revitalizes from root
              to tip — every formulation is crafted by experts and tested
              rigorously to deliver real, visible results without compromise.
            </p>

            {/* Stats row */}
            <div className="flex gap-10 lg:gap-14 pt-4">
              {[
                { num: "4+", label: "Products" },
                { num: "100%", label: "Natural" },
                { num: "0", label: "Parabens" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="text-2xl lg:text-3xl text-[var(--clr-forest)]"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                  >
                    {stat.num}
                  </span>
                  <span
                    className="text-[10px] tracking-[0.1em] uppercase text-[var(--clr-muted)] mt-1"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
