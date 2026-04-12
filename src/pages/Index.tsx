import React, { useEffect } from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import ScrollToTop from "@/components/portfolio/ScrollToTop";
import SEO from "@/components/portfolio/SEO";
import About from "@/components/portfolio/About";
import Services from "@/components/portfolio/Services";
import Process from "@/components/portfolio/Process";
import Projects from "@/components/portfolio/Projects";
import Shop from "@/components/portfolio/Shop";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
import Blog from "@/components/portfolio/Blog";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  useEffect(() => {
    // Handle hash navigation on initial load/reload
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure the DOM is fully rendered and layout is stable
      const timeoutId = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timeoutId);
    } else {
      // Only force scroll to top if there is no hash
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <SEO />
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Services />
        <Shop />
        <Process />
        <Contact />
        <Blog />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Index;
