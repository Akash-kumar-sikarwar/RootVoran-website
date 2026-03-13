import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Divider() {
  return <div className="section-divider" aria-hidden="true" />;
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".reveal, .reveal-stagger")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Divider />
      <Products />
      <Divider />
      <WhyUs />
      <Divider />
      <About />
      <Divider />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
