import { motion } from "framer-motion";
import { ShoppingBag, Globe, Zap, Layout, Settings, Code } from "lucide-react";

const services = [
  {
    title: "Shopify Excellence",
    desc: "Crafting high-converting, lightning-fast Shopify stores. From custom Liquid themes to complex app integrations that drive sales.",
    icon: <ShoppingBag className="w-6 h-6" />,
    tags: ["Theme Customization", "CRO", "Liquid"],
  },
  {
    title: "WordPress Development",
    desc: "Building scalable, SEO-optimized WordPress ecosystems. Specialized in Tutor LMS, LearnDash, and high-performance business sites.",
    icon: <Globe className="w-6 h-6" />,
    tags: ["LMS Expert", "Custom Plugins", "Optimization"],
  },
  {
    title: "Smart Automations",
    desc: "Eliminating repetitive tasks by connecting your business tools via n8n and Zapier. Seamless workflows that save hours every day.",
    icon: <Zap className="w-6 h-6" />,
    tags: ["n8n", "Zapier", "API Integration"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-surface-warm">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">Expertise</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">Services & Solutions</h2>
          <div className="w-10 h-0.5 bg-primary rounded-full mt-4 mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="group p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                {s.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
