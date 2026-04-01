import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import OptimizedImage from "@/components/ui/OptimizedImage";
import Magnetic from "@/components/ui/Magnetic";

const stats = [
  { num: "130+", label: "Tickets / Week" },
  { num: "4.8★", label: "Support Rating" },
  { num: "3+", label: "Years Experience" },
];

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-hero overflow-hidden">
      {/* 3. Spotlight Background */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500 opacity-30 md:opacity-50"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(21, 193, 147, 0.15), transparent 80%)`,
        }}
      />

      {/* Decorative elements */}
      <div className="hidden md:block absolute top-20 right-10 w-72 h-72 rounded-full bg-teal/5 blur-3xl" />
      <div className="hidden md:block absolute bottom-20 left-10 w-96 h-96 rounded-full bg-teal/3 blur-3xl" />
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-teal/5" />

      <div className="container relative z-10 py-24 md:py-32">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal/20 bg-teal/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold tracking-widest uppercase text-teal-light">
                WordPress, Shopify Designer & Automation Expert
              </span>
            </motion.div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] text-primary-foreground">
              Sakib MD
              <br />
              Nazmush<span className="text-teal">.</span>
            </h1>

            <p className="mt-5 text-base md:text-lg leading-relaxed text-primary-foreground/60 max-w-lg">
              Technical Support Engineer at{" "}
              <strong className="text-primary-foreground/90">Zepto Apps</strong>, managing 130+ tickets
              per week. Expert in store design and automation with n8n & Zapier.
            </p>

            <blockquote className="mt-6 pl-4 border-l-2 border-teal/40 italic text-primary-foreground/50 text-sm max-w-md">
              "Every complex problem is just a well-structured solution waiting to be written."
            </blockquote>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
              className="flex flex-wrap gap-5 mt-8 justify-center md:justify-start items-center"
            >
              {/* 2. Magnetic Interaction on Buttons */}
              <Magnetic>
                <a
                  href="https://dev.to/sakibsnaz"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold text-sm rounded-full hover:shadow-[0_0_30px_rgba(21,193,147,0.3)] transition-all duration-300"
                >
                  <ExternalLink size={16} />
                  Read My Articles
                </a>
              </Magnetic>
              
              <Magnetic>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/20 text-primary-foreground/80 font-bold text-sm rounded-full hover:bg-primary-foreground/5 transition-all duration-300"
                >
                  View My Work
                  <ArrowDown size={16} />
                </a>
              </Magnetic>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
              className="flex mt-12 justify-center md:justify-start"
            >
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-5 py-3 text-center ${
                    i < stats.length - 1 ? "border-r border-primary-foreground/10" : ""
                  }`}
                >
                  <div className="text-2xl font-heading font-bold text-primary-foreground">{s.num}</div>
                  <div className="text-xs text-primary-foreground/40 mt-1 tracking-wide">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            className="relative flex-shrink-0"
          >
            <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-[360px] lg:h-[360px] relative">
              {/* Outer Decorative Rings - Hidden on Mobile */}
              <div className="hidden md:block absolute inset-[-20px] rounded-full border border-teal/10 animate-[spin_40s_linear_infinite]" />
              <div className="hidden md:block absolute inset-[-12px] rounded-full border border-dashed border-teal/30 animate-[spin_25s_linear_infinite_reverse]" />
              
              {/* Main Glow - Hidden on Mobile */}
              <div className="hidden md:block absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-pulse" />
              
              {/* Image Container with Custom Frame */}
              <div className="relative w-full h-full p-1.5 rounded-full bg-gradient-to-tr from-primary/40 via-teal/20 to-transparent shadow-[0_0_50px_rgba(21,193,147,0.15)]">
                <OptimizedImage
                  src="https://res.cloudinary.com/dr1nwz8am/image/upload/v1773056630/1000006476_ziyqmn.webp"
                  alt="Sakib MD Nazmush (sakibsnaz) — Technical Support Engineer and WordPress & Shopify Store Designer"
                  className="w-full h-full rounded-full object-cover border-2 border-white/10"
                  wrapperClassName="rounded-full w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
