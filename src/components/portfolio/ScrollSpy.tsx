import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

const ScrollSpy = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsVisible(true);
      
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (!isHovered) setIsVisible(false);
      }, 3000);

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      }

      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 50) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: 20 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="fixed right-8 top-1/2 -translate-y-1/2 z-[55] hidden lg:flex flex-col items-end gap-6 py-8 px-3 glass border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)] group transition-all duration-500 hover:px-4"
        >
          <div className="flex flex-col gap-5 relative">
            {/* Minimalist vertical track */}
            <div className="absolute right-[11px] top-0 bottom-0 w-[1px] bg-foreground/5 group-hover:bg-foreground/10 transition-colors" />
            
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="relative flex items-center justify-end h-4 w-6 group/link"
              >
                {/* Section Label (Custom Tooltip) */}
                <span className="mr-6 text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground opacity-0 group-hover/link:opacity-100 group-hover/link:text-primary translate-x-2 group-hover/link:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none">
                  {section.label}
                </span>

                {/* The Active Indicator */}
                <motion.div
                  animate={{
                    width: activeSection === section.id ? 14 : 4,
                    height: 2,
                    backgroundColor: activeSection === section.id ? "var(--teal)" : "rgba(var(--foreground), 0.1)",
                    opacity: activeSection === section.id ? 1 : 0.3
                  }}
                  className="rounded-full relative z-10 transition-all duration-300"
                >
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="glow"
                      className="absolute inset-0 bg-teal blur-[4px] opacity-50"
                    />
                  )}
                </motion.div>
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollSpy;
