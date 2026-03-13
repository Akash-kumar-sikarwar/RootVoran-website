import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Why RootVoran", href: "#why" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--clr-ivory)]/90 backdrop-blur-xl shadow-[0_1px_0_rgba(196,162,101,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div
        className="max-w-[1400px] mx-auto flex items-center justify-between h-[68px] lg:h-[80px]"
        style={{ padding: "0 var(--px-section)" }}
      >
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl lg:text-[1.7rem] tracking-[0.04em] text-[var(--clr-forest)]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
        >
          Root<span className="text-[var(--clr-gold)]">Voran</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] tracking-[0.08em] uppercase text-[var(--clr-charcoal)] hover:text-[var(--clr-gold)] transition-colors duration-300"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="https://amazon.in"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex btn-primary btn-nav"
        >
          Buy Now
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-[5px] p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[1.5px] bg-[var(--clr-forest)] transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-[var(--clr-forest)] transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-[var(--clr-forest)] transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-[68px] bg-[var(--clr-ivory)]/98 backdrop-blur-2xl transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center justify-center gap-8 pt-20">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-xl tracking-[0.06em] uppercase text-[var(--clr-forest)] hover:text-[var(--clr-gold)] transition-colors"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://amazon.in"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="btn-primary"
            >
              Buy Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
