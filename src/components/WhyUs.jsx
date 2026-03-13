const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Natural Ingredients",
    description:
      "Sourced from nature's finest botanicals — from Redensyl for hair growth to Glutathione for radiant skin — every ingredient is chosen for proven efficacy.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Dermatologically Tested",
    description:
      "Every skincare and hair care product undergoes rigorous dermatological testing to ensure safety for all skin and hair types.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Cruelty Free",
    description:
      "We believe in beauty without harm. None of our products are tested on animals, ever.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Skin & Hair Friendly",
    description:
      "Formulated for sensitive skin and all hair types with gentle, pH-balanced formulas that nourish without irritation.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why"
      className="relative py-24 sm:py-28 lg:py-36 scroll-mt-[80px] grain"
      style={{
        background:
          "linear-gradient(180deg, var(--clr-cream) 0%, var(--clr-ivory) 100%)",
      }}
    >
      <div className="max-w-[1400px] mx-auto" style={{ padding: "0 var(--px-section)" }}>
        {/* Header */}
        <div className="reveal text-center mb-14 lg:mb-20">
          <span
            className="text-[11px] tracking-[0.25em] uppercase text-[var(--clr-gold)] block mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
          >
            Our Promise
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-[var(--clr-forest)]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Why <span className="italic">RootVoran</span>
          </h2>
        </div>

        {/* Values grid */}
        <div className="reveal-stagger grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {values.map((item, i) => (
            <div
              key={i}
              className="group text-center flex flex-col items-center gap-5 p-7 lg:p-8 rounded-2xl transition-all duration-500 hover:bg-white/50 hover:shadow-[0_4px_24px_-6px_rgba(26,46,26,0.06)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--clr-forest)]/5 flex items-center justify-center text-[var(--clr-forest)] group-hover:bg-[var(--clr-gold)]/10 group-hover:text-[var(--clr-gold)] transition-all duration-500">
                {item.icon}
              </div>
              <h3
                className="text-lg text-[var(--clr-forest)]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
              >
                {item.title}
              </h3>
              <p
                className="text-[13px] text-[var(--clr-muted)] leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
