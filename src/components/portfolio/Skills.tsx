import { motion } from "framer-motion";
import { EASE_OUT, VIEWPORT_INVIEW, scrollReveal } from "@/lib/motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Bot,
  Code2,
  Database,
  GitBranch,
  Globe,
  GraduationCap,
  Headset,
  Link2,
  LucideIcon,
  MessageSquare,
  PenTool,
  Server,
  ShoppingBag,
  Store,
  Workflow,
  Zap,
} from "lucide-react";

type Skill = {
  icon: LucideIcon;
  name: string;
  desc: string;
  context: string;
};

type SkillCategory = {
  label: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    label: "CMS & Web Development",
    skills: [
      { icon: Store, name: "Shopify & Liquid", desc: "Store support, app compatibility debugging, and practical theme customization.", context: "Merchant support + issue resolution" },
      { icon: Globe, name: "WordPress & PHP", desc: "Custom WordPress implementations, plugin tuning, and performance-focused builds.", context: "Client delivery and maintenance" },
      { icon: GraduationCap, name: "Tutor LMS & LearnDash", desc: "LMS setup, troubleshooting, and learner-flow optimization.", context: "Education platform support" },
      { icon: ShoppingBag, name: "WooCommerce", desc: "Catalog, checkout, and payment configuration with conversion-aware UX.", context: "E-commerce operations" },
      { icon: PenTool, name: "Page Builders", desc: "Structured landing page implementation with clean responsive behavior.", context: "Elementor, Divi, WP Bakery" },
      { icon: Code2, name: "Core Web", desc: "Semantic HTML, modern CSS architecture, and reliable JavaScript logic.", context: "Frontend foundations" },
    ],
  },
  {
    label: "Automation & AI",
    skills: [
      { icon: Workflow, name: "n8n Automation", desc: "Workflow orchestration for repetitive support and business operations.", context: "Self-hosted automation systems" },
      { icon: Zap, name: "Zapier Integration", desc: "Fast app-to-app automations for alerts, notifications, and data sync.", context: "No-code automation delivery" },
      { icon: Bot, name: "AI Workflows", desc: "LLM-assisted flows for drafting responses and operational decision support.", context: "OpenAI + Claude integrations" },
      { icon: MessageSquare, name: "Chatbots", desc: "Telegram and platform bots for support commands and monitoring.", context: "Support workflow tooling" },
    ],
  },
  {
    label: "Support & Systems",
    skills: [
      { icon: Headset, name: "Technical Support", desc: "High-volume issue handling with merchant-first communication.", context: "130-140 tickets/week at Zepto Apps" },
      { icon: Database, name: "Databases", desc: "Query-level understanding for troubleshooting app and plugin data flow.", context: "MySQL and PostgreSQL" },
      { icon: GitBranch, name: "Git & DevOps", desc: "Version control discipline and deployment awareness for stable releases.", context: "CI/CD and Linux workflows" },
      { icon: Server, name: "Hosting & SSH", desc: "Server-side debugging and maintenance on shared and VPS environments.", context: "cPanel, WHM, shell operations" },
      { icon: Link2, name: "REST APIs", desc: "Endpoint debugging, payload validation, and integration reliability checks.", context: "HTTP and API troubleshooting" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background overflow-hidden">
      <div className="container">
        <motion.div {...scrollReveal()}>
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
                  {cat.skills.map((skill, si) => {
                    const Icon = skill.icon;
                    return (
                    <Tooltip key={skill.name}>
                      <TooltipTrigger asChild>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={VIEWPORT_INVIEW}
                          whileHover={{
                            y: -4,
                            transition: { type: "spring", stiffness: 320, damping: 22 },
                          }}
                          transition={{
                            delay: ci * 0.06 + si * 0.022,
                            duration: 0.4,
                            ease: EASE_OUT,
                          }}
                          className="group relative bg-card border border-border/50 rounded-2xl p-5 flex flex-col items-center justify-start gap-3 text-center hover:border-primary/30 hover:shadow-[0_16px_32px_-12px_rgba(0,0,0,0.08)] transition-shadow duration-300 cursor-default min-h-[165px]"
                        >
                          <div className="absolute top-0 inset-x-0 h-1 bg-primary scale-x-0 group-hover:scale-x-50 transition-transform duration-500 rounded-full" />

                          <div className="w-11 h-11 rounded-xl border border-primary/20 bg-primary/10 flex items-center justify-center text-primary">
                            <Icon size={20} strokeWidth={2.2} />
                          </div>

                          <span className="font-heading text-[11px] font-bold text-muted-foreground group-hover:text-foreground transition-colors tracking-tight leading-tight min-h-[30px] flex items-center">
                            {skill.name}
                          </span>

                          <span className="text-[10px] text-muted-foreground/90 leading-tight">
                            {skill.context}
                          </span>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="max-w-[200px] bg-slate-dark text-white border-white/10 rounded-xl px-4 py-2 shadow-2xl backdrop-blur-md">
                        <p className="text-xs leading-relaxed font-medium">{skill.desc}</p>
                      </TooltipContent>
                    </Tooltip>
                    );
                  })}
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
