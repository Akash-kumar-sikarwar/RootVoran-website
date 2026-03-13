import { useState, useRef } from "react";

const FONT = "var(--font-body)";
const DISPLAY = "var(--font-display)";

const contactChannels = [
  {
    label: "Email",
    value: "hello@rootvoranofficial.com",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 80037 73858",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@rootvoranofficial",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth={1.5} />
        <circle cx="12" cy="12" r="5" strokeWidth={1.5} />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

function PremiumInput({ id, label, type = "text", value, onChange, icon }) {
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);

  return (
    <div
      className={`group relative rounded-2xl transition-all duration-500 cursor-text ${
        focused
          ? "shadow-[0_0_0_1px_rgba(196,162,101,0.4),0_0_24px_-4px_rgba(196,162,101,0.1)]"
          : "shadow-[0_0_0_1px_rgba(255,255,255,0.06)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
      }`}
      onClick={() => ref.current?.focus()}
      style={{
        background: focused
          ? "linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)"
          : "linear-gradient(160deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.01) 100%)",
      }}
    >
      <div className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-5 py-3.5 sm:py-4">
        {/* Icon */}
        <div className={`shrink-0 hidden sm:block transition-colors duration-300 ${focused ? "text-[var(--clr-gold)]" : "text-white/20"}`}>
          {icon}
        </div>

        {/* Input stack */}
        <div className="flex-1 min-w-0">
          <label
            htmlFor={id}
            className={`block text-[9px] tracking-[0.14em] uppercase mb-1 transition-colors duration-300 ${
              focused ? "text-[var(--clr-gold)]/80" : "text-white/25"
            }`}
            style={{ fontFamily: FONT, fontWeight: 600 }}
          >
            {label}
          </label>
          <input
            ref={ref}
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            required
            className="w-full bg-transparent text-[14px] text-white/90 placeholder-white/15 outline-none"
            style={{ fontFamily: FONT, fontWeight: 400 }}
            placeholder={focused ? `Enter your ${label.toLowerCase()}` : ""}
          />
        </div>
      </div>
    </div>
  );
}

function PremiumTextarea({ id, label, value, onChange, icon }) {
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);

  return (
    <div
      className={`group relative rounded-2xl transition-all duration-500 cursor-text ${
        focused
          ? "shadow-[0_0_0_1px_rgba(196,162,101,0.4),0_0_24px_-4px_rgba(196,162,101,0.1)]"
          : "shadow-[0_0_0_1px_rgba(255,255,255,0.06)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
      }`}
      onClick={() => ref.current?.focus()}
      style={{
        background: focused
          ? "linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)"
          : "linear-gradient(160deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.01) 100%)",
      }}
    >
      <div className="flex gap-2.5 sm:gap-3 px-3.5 sm:px-5 pt-3.5 sm:pt-4 pb-2.5 sm:pb-3">
        {/* Icon */}
        <div className={`shrink-0 mt-0.5 hidden sm:block transition-colors duration-300 ${focused ? "text-[var(--clr-gold)]" : "text-white/20"}`}>
          {icon}
        </div>

        <div className="flex-1 min-w-0">
          <label
            htmlFor={id}
            className={`block text-[9px] tracking-[0.14em] uppercase mb-1.5 transition-colors duration-300 ${
              focused ? "text-[var(--clr-gold)]/80" : "text-white/25"
            }`}
            style={{ fontFamily: FONT, fontWeight: 600 }}
          >
            {label}
          </label>
          <textarea
            ref={ref}
            id={id}
            value={value}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            required
            rows={4}
            className="w-full bg-transparent text-[14px] text-white/90 placeholder-white/15 outline-none resize-none leading-relaxed"
            style={{ fontFamily: FONT, fontWeight: 400 }}
            placeholder={focused ? "Tell us about your skincare needs..." : ""}
          />
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setForm({ name: "", email: "", message: "" });
      setSent(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-32 lg:py-40 scroll-mt-[80px] overflow-hidden"
      style={{ fontFamily: FONT }}
    >
      {/* Dark background */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(170deg, #0d1a0d 0%, #122012 30%, #1a2e1a 60%, #16281a 100%)" }}
      />

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(196,162,101,0.05) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(181,196,168,0.03) 0%, transparent 55%)" }}
        />
      </div>

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto" style={{ padding: "0 var(--px-section)" }}>
        {/* Two-column: Editorial left + Form right */}
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-start">

          {/* Left — Editorial content */}
          <div className="reveal flex flex-col">
            <span
              className="text-[11px] tracking-[0.3em] uppercase text-[var(--clr-gold)]/60 mb-6"
              style={{ fontWeight: 600 }}
            >
              Get in Touch
            </span>

            <h2
              className="text-[2rem] sm:text-[3rem] lg:text-[3.4rem] text-white/90 leading-[1.08] mb-6"
              style={{ fontFamily: DISPLAY, fontWeight: 400 }}
            >
              Let's Start
              <br />
              a <span className="italic text-[var(--clr-gold-light)]">Conversation</span>
            </h2>

            <p className="text-white/30 text-[15px] leading-[1.8] mb-12 max-w-md">
              Whether you need skincare advice, hair care guidance, help
              choosing the right product, or want to explore collaboration — we're here for you.
            </p>

            {/* Contact channels */}
            <div className="flex flex-col gap-5 mb-12">
              {contactChannels.map((ch) => (
                <div key={ch.label} className="group flex items-center gap-4">
                  <div
                    className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center text-white/30 transition-all duration-500 group-hover:text-[var(--clr-gold)] group-hover:shadow-[0_0_0_1px_rgba(196,162,101,0.2)]"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    {ch.icon}
                  </div>
                  <div>
                    <span
                      className="block text-[9px] tracking-[0.14em] uppercase text-white/20 mb-1"
                      style={{ fontWeight: 500 }}
                    >
                      {ch.label}
                    </span>
                    <span
                      className="text-[14px] sm:text-[15px] text-white/65 group-hover:text-white/90 transition-colors duration-300 break-all sm:break-normal"
                      style={{ fontWeight: 500 }}
                    >
                      {ch.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-[1px] w-20 bg-gradient-to-r from-[var(--clr-gold)]/20 to-transparent mb-6" />

            {/* Availability */}
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                <span className="absolute w-2.5 h-2.5 rounded-full bg-[#4ade80]/30 animate-ping" />
                <span className="relative w-2 h-2 rounded-full bg-[#4ade80]" />
              </div>
              <span className="text-[12px] text-white/30">
                We typically respond within 24 hours
              </span>
            </div>
          </div>

          {/* Right — Premium form card */}
          <div className="reveal">
            <div
              className="relative rounded-[1.75rem] p-5 sm:p-8 md:p-10 lg:p-10 xl:p-12"
              style={{
                background: "linear-gradient(160deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.02) 100%)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 24px 80px -16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              {/* Form header */}
              <div className="mb-7 sm:mb-9">
                <h3
                  className="text-lg sm:text-[1.35rem] lg:text-2xl text-white/85 mb-2"
                  style={{ fontFamily: DISPLAY, fontWeight: 500 }}
                >
                  Send a Message
                </h3>
                <p className="text-[13px] text-white/25">
                  We'd love to hear from you. Fill in the details below.
                </p>
              </div>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 gap-5 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.15)" }}
                  >
                    <svg className="w-7 h-7 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg text-white/80" style={{ fontFamily: DISPLAY, fontWeight: 500 }}>
                    Message Sent
                  </h4>
                  <p className="text-[13px] text-white/30 max-w-xs">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <PremiumInput
                      id="c-name"
                      label="Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      icon={
                        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      }
                    />
                    <PremiumInput
                      id="c-email"
                      label="Email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      icon={
                        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      }
                    />
                  </div>

                  <PremiumTextarea
                    id="c-message"
                    label="Message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    icon={
                      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    }
                  />

                  {/* Submit row */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-4">
                    <button type="submit" className="btn-gold">
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>

                    <span className="flex items-center gap-1.5 text-[11px] text-white/20">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Encrypted & secure
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
