import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    emoji: "🔍",
    title: "Shopify App Intelligence",
    category: "Chrome Extension",
    desc: "Production-grade Chrome extension for high-accuracy storefront detection (~99%). Implements multi-layer heuristics: network sniffing, CDN fingerprinting, and deep DOM analysis.",
    tags: ["Manifest V3", "JavaScript", "Chrome API"],
    link: "https://github.com/nazsakib/shopify-intel-extension",
    img: "https://res.cloudinary.com/dr1nwz8am/image/upload/v1773051257/shopify_app_intelligence_chrome_extension_by_sakibsnaz_cae2zh.png",
  },
  {
    emoji: "🏛️",
    title: "MasterDocu Portal",
    category: "Documentation Hub",
    desc: "Centralized engineering documentation hub. Features automated blueprint generation with Mermaid.js visualizations for complex system architectures.",
    tags: ["React", "TypeScript", "Mermaid.js"],
    link: "https://masterdocu.vercel.app",
    img: "https://res.cloudinary.com/dr1nwz8am/image/upload/v1773051350/master_documentation_portal_by_sakibsnaz_wngmje.png",
  },
  {
    emoji: "🚀",
    title: "Shopify CRO Helper",
    category: "AI-Powered PWA",
    desc: "AI-powered PWA for real-time conversion rate optimization audits. Integrates Google PageSpeed API and Firebase for store benchmarking.",
    tags: ["React", "Firebase", "Analytics"],
    link: "https://shopify-cro.vercel.app/",
    img: "/assets/projects/shopify-cro.png",
  },
  {
    emoji: "🚧",
    title: "Light Maintenance Plugin",
    category: "WordPress Plugin",
    desc: "A high-performance, zero-bloat WordPress plugin. Features professional glassmorphism maintenance page with dynamic typography controls.",
    tags: ["PHP", "WordPress", "UX Design"],
    link: "https://lightmaintenance.site",
    img: "https://res.cloudinary.com/dr1nwz8am/image/upload/v1773051539/Screenshot_from_2026-03-09_16-18-41_g46o5o.png",
  },
  {
    emoji: "⚡",
    title: "FastLoader Asset Manager",
    category: "WordPress Plugin",
    desc: "Professional performance tool that surgically disables unnecessary scripts and styles per-page with real-time frontend asset scanner.",
    tags: ["JavaScript", "Optimization", "WP Plugin"],
    link: "https://wpfastloader.vercel.app/",
    img: "/assets/projects/fastloader-asset-manager-wordpress-plugin.png",
  },
  {
    emoji: "📊",
    title: "SyncShell Admin Console",
    category: "Admin Dashboard",
    desc: "Cloud-based license & user management system with interactive analytics charts, secure Firebase Admin integration, and business tracking.",
    tags: ["Next.js", "Tailwind", "Firebase"],
    link: "https://github.com/nazsakib/syncshell-dashboard",
    img: "https://res.cloudinary.com/dr1nwz8am/image/upload/v1773051436/synnshell_business_dashboard_by_sakibsnaz_pwnwbk.png",
  },
  {
    emoji: "📟",
    title: "WiFi Monitor Mainframe",
    category: "System Tool",
    desc: "Professional 1970s-style network surveillance system. Features a green phosphor CRT dashboard, Telegram bot command center, and automated speed diagnostics.",
    tags: ["Python", "Flask", "Systemd"],
    link: "https://masterdocu.vercel.app/docs/wifi-monitor",
    img: "/assets/projects/wifi-monitor.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">Projects</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">Things I've Built</h2>
          <div className="w-10 h-0.5 bg-primary rounded-full mt-4 mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
              className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-400"
            >
              {/* Image */}
              <div className="relative overflow-hidden border-b border-border">
                <img
                  src={p.img}
                  alt={`${p.title} — Built by Sakib MD Nazmush (sakibsnaz) using ${p.tags.join(", ")}`}
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card/20" />
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{p.emoji}</span>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full border border-border bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
                <h3 className="font-heading text-sm font-bold text-foreground">{p.title}</h3>
                <span className="text-[0.65rem] uppercase tracking-wider font-bold text-primary/70 mt-1">{p.category}</span>
                <p className="text-xs text-muted-foreground leading-relaxed mt-3 flex-grow">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.6rem] font-bold uppercase tracking-wide px-2.5 py-1 rounded-md bg-secondary text-muted-foreground group-hover:bg-teal-light group-hover:text-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
