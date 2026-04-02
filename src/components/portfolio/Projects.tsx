import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import OptimizedImage from "@/components/ui/OptimizedImage";

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
              className="group flex flex-col glass bg-card/40 border border-white/5 rounded-[2.5rem] overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-primary/5 hover:-translate-y-3 transition-all duration-500 backdrop-blur-md"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden aspect-[16/10] rounded-[2rem] m-3 shadow-inner">
                <OptimizedImage
                  src={p.img}
                  alt={`${p.title} — Built by Sakib MD Nazmush (sakibsnaz) using ${p.tags.join(", ")}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Floating Category Pill */}
                <div className="absolute top-4 left-4 px-4 py-1.5 bg-slate-dark/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl z-20">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                    {p.category}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Body */}
              <div className="p-7 pt-4 flex flex-col flex-grow relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl">{p.emoji}</span>
                    <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-1">
                      {p.title}
                    </h3>
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 w-10 h-10 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                <p className="text-sm text-muted-foreground/80 leading-relaxed mt-2 flex-grow line-clamp-3 italic">
                  "{p.desc}"
                </p>

                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-md bg-primary/5 text-primary border border-primary/10"
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
