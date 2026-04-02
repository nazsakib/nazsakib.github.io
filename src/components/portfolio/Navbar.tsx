import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Linkedin } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Shop", href: "#shop" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-[100] transition-all duration-500 pointer-events-none px-4">
      <nav className={`mx-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-auto mt-4 w-full max-w-5xl rounded-full border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] py-2 px-3 ${
        scrolled 
          ? "glass bg-background/60 backdrop-blur-md" 
          : "bg-slate-dark/40 backdrop-blur-sm"
      }`}>
        <div className="flex items-center justify-between px-4 md:px-6">
          <a 
            href="/" 
            className={`font-heading text-lg font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            Sakib MD Nazmush
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium transition-all duration-300 relative group py-2 ${
                  scrolled 
                    ? "text-muted-foreground hover:text-primary" 
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary rounded-full transition-all duration-300 group-hover:w-1 group-hover:h-1 opacity-0 group-hover:opacity-100" />
              </a>
            ))}
            
            <a
              href="https://www.linkedin.com/in/sakibsnaz/"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 px-5 py-2.5 text-[13px] font-bold rounded-full transition-all duration-500 shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:scale-95 ${
                scrolled 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-white text-slate-dark hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              <Linkedin size={14} strokeWidth={2.5} />
              Connect
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2.5 rounded-full transition-all duration-300 ${
              scrolled || mobileOpen 
                ? "bg-primary/10 text-primary" 
                : "bg-white/10 text-primary-foreground backdrop-blur-md"
            }`}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-full left-0 right-0 mt-4 mx-2 md:hidden overflow-hidden glass border border-white/10 rounded-3xl shadow-2xl p-6"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-semibold text-foreground/80 hover:text-primary px-4 py-3 rounded-2xl hover:bg-primary/5 transition-all"
                  >
                    {link.label}
                  </a>
                ))}
                <hr className="border-white/5 my-2" />
                <a
                  href="https://www.linkedin.com/in/sakibsnaz/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-primary-foreground font-bold rounded-2xl shadow-xl active:scale-95 transition-transform"
                >
                  <Linkedin size={18} strokeWidth={2.5} />
                  Connect on LinkedIn
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
