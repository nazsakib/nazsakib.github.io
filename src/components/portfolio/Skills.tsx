import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const skillCategories = [
  {
    label: "CMS & Web Development",
    skills: [
      { icon: "🛒", name: "Shopify & Liquid", desc: "Expert store design and theme customization using Liquid engine." },
      { icon: "📦", name: "WordPress & PHP", desc: "Deep custom development, plugin building, and theme architecture." },
      { icon: "🎓", name: "Tutor LMS & LearnDash", desc: "Advanced learning management system setup and troubleshooting." },
      { icon: "🛍️", name: "WooCommerce", desc: "Scalable e-commerce solutions and checkout optimization." },
      { icon: "🖌️", name: "Page Builders", desc: "Pixel-perfect design with Elementor, Divi, and WP Bakery." },
      { icon: "🌐", name: "Core Web", desc: "Semantic HTML5, CSS3, and modern ES6+ JavaScript." },
    ],
  },
  {
    label: "Automation & AI",
    skills: [
      { icon: "⚙️", name: "n8n Automation", desc: "Building complex self-hosted workflow automations and nodes." },
      { icon: "⚡", name: "Zapier Integration", desc: "Connecting 5000+ apps for seamless business efficiency." },
      { icon: "🤖", name: "AI Workflows", desc: "Integrating LLMs (OpenAI, Claude) into production workflows." },
      { icon: "💬", name: "Chatbots", desc: "Custom Telegram, Discord, and WhatsApp business bots." },
    ],
  },
  {
    label: "Support & Systems",
    skills: [
      { icon: "🎫", name: "Technical Support", desc: "4.8★ rated support expert at Zepto Apps (130+ tickets/week)." },
      { icon: "🗄️", name: "Databases", desc: "Relational database management with MySQL and PostgreSQL." },
      { icon: "🌿", name: "Git & DevOps", desc: "CI/CD, version control, and Linux server management." },
      { icon: "🖥️", name: "Hosting & SSH", desc: "Advanced cPanel, WHM, and command-line server optimization." },
      { icon: "🔌", name: "REST APIs", desc: "Deep knowledge of HTTP protocols and API architecture." },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">Skills & Expertise</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">Technical Arsenal</h2>
          <div className="w-10 h-0.5 bg-primary rounded-full mt-4 mb-10" />
        </motion.div>

        <div className="space-y-16">
          <TooltipProvider delayDuration={0}>
            {skillCategories.map((cat, ci) => (
              <div key={cat.label} className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-[11px] font-black tracking-[0.2em] uppercase text-muted-foreground/60 whitespace-nowrap">{cat.label}</h3>
                  <div className="h-px w-full bg-gradient-to-r from-border to-transparent" />
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {cat.skills.map((skill, si) => (
                    <Tooltip key={skill.name}>
                      <TooltipTrigger asChild>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            y: -8,
                            transition: { type: "spring", stiffness: 400, damping: 10 }
                          }}
                          transition={{ 
                            delay: (ci * 0.1) + (si * 0.04),
                            duration: 0.5, 
                            ease: "easeOut" 
                          }}
                          className="group relative bg-card border border-border/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 text-center hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-default"
                        >
                          <div className="absolute top-0 inset-x-0 h-1 bg-primary scale-x-0 group-hover:scale-x-50 transition-transform duration-500 rounded-full" />
                          <div className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
                            {skill.icon}
                          </div>
                          <span className="font-heading text-[11px] font-bold text-muted-foreground group-hover:text-foreground transition-colors tracking-tight">
                            {skill.name}
                          </span>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="max-w-[200px] bg-slate-dark text-white border-white/10 rounded-xl px-4 py-2 shadow-2xl backdrop-blur-md">
                        <p className="text-xs leading-relaxed font-medium">{skill.desc}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
};

export default Skills;
