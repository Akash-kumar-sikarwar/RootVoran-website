const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Why RootVoran", href: "#why" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/rootvoranofficial?igsh=bDg5anFsZ3oxbTJ2",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth={1.5} />
        <circle cx="12" cy="12" r="5" strokeWidth={1.5} />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-10" style={{ background: "var(--clr-forest)" }}>
      <div className="max-w-[1400px] mx-auto" style={{ padding: "0 var(--px-section)" }}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-14 border-b border-white/10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-4">
            <a
              href="#home"
              className="text-2xl tracking-[0.04em] text-white"
              style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
            >
              Root<span className="text-[var(--clr-gold)]">Voran</span>
            </a>
            <p
              className="text-white/40 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Nature-powered skincare and hair care crafted for healthy,
              radiant skin and stronger, lustrous hair.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-[11px] tracking-[0.15em] uppercase text-[var(--clr-gold)] mb-6"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-[11px] tracking-[0.15em] uppercase text-[var(--clr-gold)] mb-6"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li className="text-sm text-white/50" style={{ fontFamily: "var(--font-body)" }}>hello@rootvoran.com</li>
              <li className="text-sm text-white/50" style={{ fontFamily: "var(--font-body)" }}>+91 80037 73858</li>
              <li className="text-sm text-white/50" style={{ fontFamily: "var(--font-body)" }}>Jaipur, India</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4
              className="text-[11px] tracking-[0.15em] uppercase text-[var(--clr-gold)] mb-6"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
            >
              Follow Us
            </h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-[var(--clr-gold)]/20 hover:text-[var(--clr-gold)] transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <span className="text-[12px] text-white/30" style={{ fontFamily: "var(--font-body)" }}>
            &copy; 2026 RootVoran. All rights reserved.
          </span>
          <div className="flex gap-6">
            <span className="text-[12px] text-white/30 hover:text-white/50 cursor-pointer transition-colors" style={{ fontFamily: "var(--font-body)" }}>Privacy Policy</span>
            <span className="text-[12px] text-white/30 hover:text-white/50 cursor-pointer transition-colors" style={{ fontFamily: "var(--font-body)" }}>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
