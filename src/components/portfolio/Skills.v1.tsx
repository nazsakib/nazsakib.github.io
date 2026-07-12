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

const SkillsV1 = () => {
  return (
    <section id="skills" className="overflow-hidden bg-background py-24">
      <div className="container">
        <motion.div {...scrollReveal()}>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Skills & Expertise</span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">Technical Arsenal</h2>
          <div className="mt-4 mb-10 h-0.5 w-10 rounded-full bg-primary" />
        </motion.div>

        <div className="space-y-16">
          <TooltipProvider delayDuration={0}>
            {skillCategories.map((cat, ci) => (
              <div key={cat.label} className="relative">
                <div className="mb-8 flex items-center gap-4">
                  <h3 className="whitespace-nowrap text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">{cat.label}</h3>
                  <div className="h-px w-full bg-gradient-to-r from-border to-transparent" />
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
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
                            className="group relative flex min-h-[165px] cursor-default flex-col items-center justify-start gap-3 rounded-2xl border border-border/50 bg-card p-5 text-center transition-shadow duration-300 hover:border-primary/30 hover:shadow-[0_16px_32px_-12px_rgba(0,0,0,0.08)]"
                          >
                            <div className="absolute inset-x-0 top-0 h-1 scale-x-0 rounded-full bg-primary transition-transform duration-500 group-hover:scale-x-50" />

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                              <Icon size={20} strokeWidth={2.2} />
                            </div>

                            <span className="flex min-h-[30px] items-center text-[11px] font-bold uppercase tracking-tight text-muted-foreground transition-colors group-hover:text-foreground">
                              {skill.name}
                            </span>

                            <span className="text-[10px] leading-tight text-muted-foreground/90">{skill.context}</span>
                          </motion.div>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" className="max-w-[200px] rounded-xl border-white/10 bg-slate-dark px-4 py-2 shadow-2xl backdrop-blur-md">
                          <p className="text-xs font-medium leading-relaxed">{skill.desc}</p>
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

export default SkillsV1;
