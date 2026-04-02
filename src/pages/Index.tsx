import React, { Suspense } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import ScrollToTop from "@/components/portfolio/ScrollToTop";
import SEO from "@/components/portfolio/SEO";

// Lazy load below-the-fold components
const About = React.lazy(() => import("@/components/portfolio/About"));
const Services = React.lazy(() => import("@/components/portfolio/Services"));
const Process = React.lazy(() => import("@/components/portfolio/Process"));
const Projects = React.lazy(() => import("@/components/portfolio/Projects"));
const Shop = React.lazy(() => import("@/components/portfolio/Shop"));
const Experience = React.lazy(() => import("@/components/portfolio/Experience"));
const Skills = React.lazy(() => import("@/components/portfolio/Skills"));
const Blog = React.lazy(() => import("@/components/portfolio/Blog"));
const Contact = React.lazy(() => import("@/components/portfolio/Contact"));
const Footer = React.lazy(() => import("@/components/portfolio/Footer"));

// A subtle fallback for smooth lazy loading
const SectionFallback = () => (
  <div className="w-full py-24 flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
  </div>
);

const Index = () => {
  return (
    <>
      <SEO />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="min-h-screen"
      >
        <Navbar />
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Projects />
          <Shop />
          <Experience />
          <Skills />
          <Services />
          <Process />
          <Blog />
          <Contact />
          <Footer />
        </Suspense>
        <ScrollToTop />
      </motion.div>
    </>
  );
};

export default Index;
