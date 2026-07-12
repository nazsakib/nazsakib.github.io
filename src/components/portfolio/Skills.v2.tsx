import { useState } from "react";
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
    label: "Support & Systems",
    skills: [
      { icon: Headset, name: "Technical Support", desc: "High-volume issue handling with merchant-first communication.", context: "130-140 tickets/week at Zepto Apps" },
      { icon: Database, name: "Databases", desc: "Query-level understanding for troubleshooting app and plugin data flow.", context: "MySQL and PostgreSQL" },
      { icon: GitBranch, name: "Git & DevOps", desc: "Version control discipline and deployment awareness for stable releases.", context: "CI/CD and Linux workflows" },
      { icon: Server, name: "Hosting & SSH", desc: "Server-side debugging and maintenance on shared and VPS environments.", context: "cPanel, WHM, shell operations" },
      { icon: Link2, name: "REST APIs", desc: "Endpoint debugging, payload validation, and integration reliability checks.", context: "HTTP and API troubleshooting" },
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
];

const categoryCardStyles = [
  {
    shell: "border-primary/15 bg-gradient-to-br from-primary/8 via-card to-background/85",
    icon: "border-primary/20 bg-primary/10 text-primary",
    accent: "from-primary/60 via-primary/20 to-transparent",
    glow: "bg-primary/15",
  },
  {
    shell: "border-sky-400/15 bg-gradient-to-br from-sky-400/8 via-card to-background/85",
    icon: "border-sky-400/20 bg-sky-400/10 text-sky-600",
    accent: "from-sky-400/60 via-sky-400/20 to-transparent",
    glow: "bg-sky-400/15",
  },
  {
    shell: "border-teal-400/15 bg-gradient-to-br from-teal-400/8 via-card to-background/85",
    icon: "border-teal-400/20 bg-teal-400/10 text-teal-600",
    accent: "from-teal-400/60 via-teal-400/20 to-transparent",
    glow: "bg-teal-400/15",
  },
];

const SkillsV2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = skillCategories[activeIndex];
  const activeStyle = categoryCardStyles[activeIndex % categoryCardStyles.length];

  return (
    <section id="skills" className="overflow-hidden bg-gradient-to-b from-background via-background to-surface-warm py-24">
      <style>{`
        @keyframes skillFadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="container">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.24em] text-primary">Skills & Expertise</span>
          </div>
          <h2 className="mt-6 font-heading text-3xl font-bold leading-[1.05] text-foreground sm:text-4xl lg:text-5xl">
            Technical arsenal for
            <span className="mt-2 block bg-gradient-to-r from-primary via-teal-400 to-sky-500 bg-clip-text text-transparent">
              support, delivery, and growth
            </span>
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
            I combine product fluency, implementation depth, and operational discipline to solve problems fast and build trust along the way.
          </p>
        </div>

        <div className="mt-12">
          <div className={`flex h-[640px] overflow-hidden rounded-[2.5rem] border border-border/70 bg-card/90 p-4 shadow-[0_24px_90px_-40px_rgba(15,23,42,0.28)] backdrop-blur sm:p-6 lg:p-8 ${activeStyle.shell}`}>
            <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="rounded-[1.75rem] border border-border/70 bg-background/70 p-4 sm:p-5">
                <div className="mb-4">
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-foreground/60">Focus areas</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">Select a capability to explore the tools and strengths behind it.</p>
                </div>

                <div className="flex flex-col gap-2">
                  {skillCategories.map((cat, index) => {
                    const isActive = index === activeIndex;
                    return (
                      <button
                        key={cat.label}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={`rounded-[1.15rem] border px-4 py-3 text-left transition-all duration-300 ${
                          isActive
                            ? "border-transparent bg-primary text-primary-foreground shadow-[0_12px_30px_-12px_rgba(0,0,0,0.35)]"
                            : "border-border/70 bg-card/70 text-foreground/80 hover:border-primary/25 hover:bg-background/80"
                        }`}
                      >
                        <span className="block text-[10px] font-black uppercase tracking-[0.2em] opacity-80">{index + 1}</span>
                        <span className="mt-1 block text-sm font-semibold">{cat.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-border/70 bg-background/70 p-4 sm:p-5 lg:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-4">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.24em] text-foreground/60">Selected focus</p>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">{activeCategory.label}</h3>
                  </div>
                  <div className={`rounded-full border px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] ${activeStyle.icon}`}>
                    {activeCategory.skills.length} capabilities
                  </div>
                </div>

                <div key={activeCategory.label} className="mt-5 max-h-[420px] overflow-y-auto pr-2">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {activeCategory.skills.map((skill, index) => {
                      const Icon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="group relative flex min-h-[150px] flex-col rounded-[1.25rem] border border-border/70 bg-card/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_16px_28px_-12px_rgba(0,0,0,0.16)]"
                          style={{ animation: "skillFadeIn 0.45s ease-out both", animationDelay: `${index * 90}ms` }}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${activeStyle.icon}`}>
                              <Icon size={18} strokeWidth={2.1} />
                            </div>
                            <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                          </div>
                          <p className="mt-3 text-sm leading-6 text-muted-foreground">{skill.context}</p>
                          <div className="mt-auto pt-4 text-[10px] font-black uppercase tracking-[0.18em] text-foreground/70">
                            {skill.desc}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsV2;
