import React, { useEffect, Suspense, lazy } from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import ScrollToTop from "@/components/portfolio/ScrollToTop";
import SEO from "@/components/portfolio/SEO";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";

// Below-the-fold sections — lazy-loaded for code-splitting
const Experience = lazy(() => import("@/components/portfolio/Experience"));
const Skills = lazy(() => import("@/components/portfolio/Skills"));
const Services = lazy(() => import("@/components/portfolio/Services"));
const Shop = lazy(() => import("@/components/portfolio/Shop"));
const Process = lazy(() => import("@/components/portfolio/Process"));
const Contact = lazy(() => import("@/components/portfolio/Contact"));
const Blog = lazy(() => import("@/components/portfolio/Blog"));
const Footer = lazy(() => import("@/components/portfolio/Footer"));

const SectionFallback = () => (
  <div className="min-h-[200px] animate-pulse bg-secondary/50" aria-hidden />
);

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
        <Suspense fallback={<SectionFallback />}><Experience /></Suspense>
        <Suspense fallback={<SectionFallback />}><Skills /></Suspense>
        <Suspense fallback={<SectionFallback />}><Services /></Suspense>
        <Suspense fallback={<SectionFallback />}><Shop /></Suspense>
        <Suspense fallback={<SectionFallback />}><Process /></Suspense>
        <Suspense fallback={<SectionFallback />}><Contact /></Suspense>
        <Suspense fallback={<SectionFallback />}><Blog /></Suspense>
        <Suspense fallback={<SectionFallback />}><Footer /></Suspense>
        <ScrollToTop />
      </div>
    </>
  );
};

export default Index;
