import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Zap, Clock } from "lucide-react";
import OptimizedImage from "@/components/ui/OptimizedImage";
import Magnetic from "@/components/ui/Magnetic";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // High-performance parallax layers
  const contentY = useTransform(scrollY, [0, 500], [0, -30]);
  const imageY = useTransform(scrollY, [0, 500], [0, 60]);
  const pillsY = useTransform(scrollY, [0, 500], [0, 40]);

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
    <section id="hero" className="relative min-h-screen flex items-center bg-slate-dark overflow-hidden pt-20">
      {/* Background Layer: Typography */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] font-black text-white/[0.02] tracking-tighter leading-none whitespace-nowrap">
          SAKIB SNZ
        </h1>
      </div>

      {/* Dynamic Spotlight */}
      <div 
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-500 opacity-20 md:opacity-40"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(192, 91, 36, 0.1), transparent 80%)`,
        }}
      />

      <div className="container relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh] gap-12">
          
          {/* Left: Content Column */}
          <motion.div
            style={{ y: contentY }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left z-30 max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                Automation Architect
              </span>
            </motion.div>

            <h1 className="font-heading text-5xl sm:text-7xl lg:text-[7.5rem] font-black leading-[0.9] text-white tracking-tighter mb-8">
              Technical <br className="hidden lg:block" />
              <span className="text-primary italic">Support</span> & <br className="hidden lg:block" />
              Automation<span className="text-primary">.</span>
            </h1>

            <p className="text-lg lg:text-xl text-white/50 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-12 font-light">
              Technical Support Engineer at <span className="text-white font-medium italic underline underline-offset-4 decoration-primary/30">Zepto Apps</span>, managing <span className="text-white font-medium">130+ tickets</span> per week. Expert in store design and automation with <span className="text-white/80 font-medium">n8n &amp; Zapier</span>.
            </p>

            <div className="flex flex-row flex-wrap gap-3 sm:gap-6 justify-center lg:justify-start">
              <Magnetic>
                <a
                  href="#contact"
                  className="px-5 sm:px-10 py-3.5 sm:py-5 bg-primary text-primary-foreground font-black text-[9px] sm:text-xs uppercase tracking-widest rounded-xl sm:rounded-2xl hover:shadow-[0_20px_40px_rgba(192,91,36,0.3)] transition-all duration-500 whitespace-nowrap"
                >
                  Start a Project
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#projects"
                  className="px-5 sm:px-10 py-3.5 sm:py-5 bg-white/5 border border-white/10 text-white font-black text-[9px] sm:text-xs uppercase tracking-widest rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-500 whitespace-nowrap"
                >
                  View Systems
                </a>
              </Magnetic>
            </div>
          </motion.div>

          {/* Right: The Layered Silhouette Column - MAINTAINING BOXED WIDTH */}
          <div className="relative flex-1 w-full lg:w-auto h-[400px] sm:h-[500px] lg:h-[750px] flex items-center justify-center lg:justify-end overflow-visible">
            
            {/* The Silhouette Image */}
            <motion.div
              style={{ y: imageY }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
              className="relative w-full h-full pointer-events-none group z-10"
            >
              <div className="relative w-full h-full overflow-hidden bg-slate-dark">
                <OptimizedImage
                  src="https://res.cloudinary.com/dr1nwz8am/image/upload/v1773056630/1000006476_ziyqmn.webp"
                  alt="Sakib MD Nazmush"
                  className="w-full h-full object-contain lg:object-cover grayscale brightness-75 contrast-125 transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-100"
                  wrapperClassName="w-full h-full bg-slate-dark"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-dark via-slate-dark/20 to-transparent" />
                <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-slate-dark via-slate-dark/40 to-transparent" />
              </div>
            </motion.div>

            {/* Floating Smart Micro-Pills (Stats) */}
            <motion.div style={{ y: pillsY }} className="absolute inset-0 pointer-events-none z-30">
              
              <div className="absolute top-[10%] left-0 lg:left-[-10%]">
                <div className="bg-slate-dark/60 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full shadow-2xl flex items-center gap-2">
                  <Star className="text-primary fill-primary" size={12} />
                  <span className="text-[10px] lg:text-sm font-black text-white whitespace-nowrap uppercase tracking-widest">4.8★ Rating</span>
                </div>
              </div>

              <div className="absolute bottom-[10%] left-[5%]">
                <div className="bg-slate-dark/60 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full shadow-2xl flex items-center gap-2">
                  <Zap className="text-primary" size={12} />
                  <span className="text-[10px] lg:text-sm font-black text-white whitespace-nowrap uppercase tracking-widest">Zero Manual</span>
                </div>
              </div>

              <div className="absolute top-[45%] right-0 lg:right-[-5%]">
                <div className="bg-slate-dark/60 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full shadow-2xl flex items-center gap-2">
                  <Clock className="text-primary" size={12} />
                  <span className="text-[10px] lg:text-sm font-black text-white whitespace-nowrap uppercase tracking-widest">130+ Tks / Wk</span>
                </div>
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
