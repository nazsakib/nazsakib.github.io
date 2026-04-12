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
  // Fix for reload scroll position issue
  useEffect(() => {
    // Disable browser default scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Force scroll to top on mount/reload
    window.scrollTo(0, 0);
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
