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
  return (
    <section id="skills" className="overflow-hidden bg-gradient-to-b from-background via-background to-surface-warm py-24">
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

        <div className="mt-12 space-y-8">
          {skillCategories.map((cat, ci) => {
              const style = categoryCardStyles[ci % categoryCardStyles.length];
              return (
                <div key={cat.label} className={`rounded-[2rem] border border-border/70 bg-card/80 p-6 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.28)] backdrop-blur sm:p-8 ${style.shell}`}>
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <h3 className="text-[11px] font-black uppercase tracking-[0.24em] text-muted-foreground">{cat.label}</h3>
                    <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {cat.skills.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <div key={skill.name} className={`group relative flex min-h-[180px] flex-col overflow-hidden rounded-[1.35rem] border border-border/70 bg-background/70 p-5 transition-all duration-300 hover:border-primary/35 hover:shadow-[0_16px_32px_-12px_rgba(0,0,0,0.12)] ${style.shell}`}>
                          <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${style.accent}`} />
                          <div className={`absolute -right-6 -top-6 h-20 w-20 rounded-full blur-3xl ${style.glow}`} />
                          <div className="flex items-center gap-3">
                            <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${style.icon}`}>
                              <Icon size={20} strokeWidth={2.2} />
                            </div>
                            <span className="text-sm font-bold text-foreground">{skill.name}</span>
                          </div>

                          <p className="mt-4 text-sm leading-7 text-muted-foreground">{skill.context}</p>
                          <div className="mt-auto pt-4 text-[10px] font-black uppercase tracking-[0.18em] text-foreground/80">
                            {skill.desc}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default SkillsV2;
