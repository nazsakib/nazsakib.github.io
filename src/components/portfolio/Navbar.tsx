import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileNav = (href: string) => {
    // 1. Close the menu first (with a tiny delay if needed, but let's try direct)
    setMobileOpen(false);
    
    // 2. Use a timeout to allow the menu to start closing before jumping
    setTimeout(() => {
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 z-50 transition-all duration-500 mx-auto px-4 ${
        scrolled
          ? "top-0 md:top-4 max-w-[1100px] glass rounded-none md:rounded-full shadow-lg"
          : "top-0 md:top-0 max-w-[1100px] bg-slate-dark/90 md:bg-transparent pt-4 md:rounded-none rounded-b-xl"
      }`}
    >
      <div className={`flex items-center justify-between px-6 py-4 md:px-8 transition-colors duration-500 ${
        scrolled ? "text-foreground" : "text-primary-foreground"
      }`}>
        <a href="/" className="font-heading text-lg font-bold tracking-tight">
          Sakib MD Nazmush
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors relative group ${
                scrolled ? "text-muted-foreground hover:text-primary" : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/sakibsnaz/"
            target="_blank"
            rel="noreferrer"
            className="ml-2 px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
          >
            Connect on LinkedIn
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 transition-colors ${
            scrolled || mobileOpen ? "text-foreground" : "text-primary-foreground"
          }`}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-border bg-card/95 backdrop-blur-xl rounded-b-2xl shadow-xl"
          >
            <div className="flex flex-col gap-1 p-4 bg-slate-dark/95 backdrop-blur-xl">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleMobileNav(link.href)}
                  className="px-4 py-3 text-sm font-medium text-left text-primary-foreground/90 hover:text-primary hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://www.linkedin.com/in/sakibsnaz/"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-lg text-center hover:shadow-glow transition-all"
              >
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
