import { Linkedin, Github, BookOpen, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sakibsnaz/", icon: <Linkedin size={14} /> },
    { label: "GitHub", href: "https://github.com/nazsakib", icon: <Github size={14} /> },
    { label: "dev.to", href: "https://dev.to/sakibsnaz", icon: <BookOpen size={14} /> },
  ];

  const productLinks = [
    { label: "Light Maintenance", href: "https://lightmaintenance.site/" },
    { label: "WP Fast Loader", href: "https://wpfastloader.vercel.app/", badge: "New Release" },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-dark text-primary-foreground">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-40%] right-[-15%] w-[320px] h-[320px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[-50%] left-[-20%] w-[320px] h-[320px] rounded-full bg-teal/10 blur-3xl" />
      </div>

      <div className="container relative z-10 py-14">
        <div className="grid md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] gap-10">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-primary/90">Sakib MD Nazmush</p>
            <h3 className="font-heading text-2xl font-black mt-3 leading-tight">
              Shopify, WordPress
              <br />
              & Automation
            </h3>
            <p className="text-sm text-primary-foreground/55 mt-4 max-w-md leading-relaxed">
              Solving high-volume support issues with clear communication, reliable fixes, and scalable workflows.
            </p>
            <a
              href="#contact"
              className="inline-flex mt-6 px-5 py-3 rounded-xl bg-primary text-primary-foreground text-xs font-black uppercase tracking-[0.15em] hover:shadow-glow transition-all duration-300"
            >
              Start a Project
            </a>
          </div>

          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-primary/90 mb-4">Navigate</p>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-primary/90 mb-4">Products</p>
            <div className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <div key={link.label} className="flex items-center gap-2">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                  {link.badge && (
                    <span className="px-1.5 py-0.5 rounded bg-primary/20 text-primary text-[8px] font-black uppercase tracking-widest border border-primary/30">
                      {link.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-primary/90 mb-4">Connect</p>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:sakibsnaz@gmail.com"
                className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail size={14} />
                sakibsnaz@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-primary-foreground/45 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p>© {year} Sakib MD Nazmush. All rights reserved.</p>
          <p>Built for high-trust client work.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
