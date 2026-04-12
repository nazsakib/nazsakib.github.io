import { motion } from "framer-motion";
import { EASE_OUT, VIEWPORT_INVIEW, scrollReveal, staggerDelay } from "@/lib/motion";
import { ShoppingBag, Globe, Zap, Check, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Shopify Store Design",
    desc: "End-to-end Shopify solutions from strategic store design to conversion rate optimization (CRO).",
    icon: <ShoppingBag className="w-6 h-6" />,
    features: [
      "Strategic Design (Gempages, Replo)",
      "Conversion Rate Optimization (CRO)",
      "Advanced Page Speed Optimization",
      "Custom Shopify Liquid Tweaks"
    ],
    tags: ["Conversion Focused", "Performance Optimized"],
    color: "from-primary to-teal"
  },
  {
    title: "WordPress Development",
    desc: "Building advanced WordPress ecosystems with a focus on performance and specialized functionality.",
    icon: <Globe className="w-6 h-6" />,
    features: [
      "LMS (Tutor LMS, LearnDash)",
      "Tour & Appointment Bookings",
      "Custom Plugin Development",
      "Technical SEO Architectures"
    ],
    tags: ["Scalable Systems", "LMS Expert"],
    color: "from-teal to-emerald-500"
  },
  {
    title: "Workflow Automations",
    desc: "Architecting zero-manual-work systems using n8n, Zapier, and custom automation scripts.",
    icon: <Zap className="w-6 h-6" />,
    features: [
      "Complex n8n Workflows",
      "Business Telegram Bots",
      "Shopify Internal Automations",
      "Custom API Bridge Systems"
    ],
    tags: ["Zero Manual Work", "Operational Scale"],
    color: "from-blue-500 to-primary"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-surface-warm relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div {...scrollReveal()}>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">Expertise</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">Services & Solutions</h2>
          <div className="w-10 h-0.5 bg-primary rounded-full mt-4 mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_INVIEW}
              transition={{ delay: staggerDelay(i, 0.06), duration: 0.42, ease: EASE_OUT }}
              className="group relative p-px rounded-[2rem] overflow-hidden"
            >
              {/* 5. Gradient Border on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-border/50 to-border/50 group-hover:from-primary group-hover:to-teal transition-all duration-500" />
              
              {/* Main Card Body */}
              <div className="relative h-full p-8 rounded-[calc(2rem-1px)] bg-card border border-transparent transition-all duration-500 flex flex-col">
                
                {/* 4. Visual Depth (Layered Glass Icon) */}
                <div className="relative w-14 h-14 mb-8">
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl rotate-6 scale-110 group-hover:rotate-12 transition-transform duration-500" />
                  <div className="relative w-full h-full glass rounded-2xl bg-white/40 backdrop-blur-xl border border-white/20 flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-all duration-500">
                    {s.icon}
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  {s.desc}
                </p>

                {/* 1. Included Features Checklist */}
                <div className="space-y-3 mb-8 flex-grow">
                  {s.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-xs font-medium text-foreground/70">
                      <div className="mt-0.5 p-0.5 rounded-full bg-primary/10 text-primary flex-shrink-0">
                        <Check size={10} strokeWidth={3} />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* 2. Micro-Interaction Link */}
                <div className="pt-6 border-t border-border/50 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {s.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary/5 text-primary border border-primary/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                    <ChevronRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
