import { motion } from "framer-motion";
import { EASE_OUT, VIEWPORT_INVIEW, scrollReveal, staggerDelay } from "@/lib/motion";

const impactStats = [
  {
    value: "2024 - Present",
    label: "Zepto Apps Tenure",
    detail:
      "Embedded in Zendesk- and Crisp-driven workflows: triage, live chat, and follow-ups for Shopify app merchants.",
  },
  {
    value: "Shopify-First Stack",
    label: "Where Issues Show Up",
    detail:
      "From Liquid and theme editor behavior to app embeds, checkout friction, and admin-side configuration.",
  },
  {
    value: "Engineering Handoff",
    label: "How Escalations Work",
    detail:
      "Reproduction steps, scoped test cases, and clear merchant context so product teams can ship fixes faster.",
  },
];

type Role = {
  icon: string;
  title: string;
  company: string;
  date: string;
  scope: string;
  tools?: string[];
  outcomes: string[];
  strengths: string[];
};

const roles: Role[] = [
  {
    icon: "💼",
    title: "Technical Support Engineer",
    company: "Zepto Apps",
    date: "2024 - Present",
    scope:
      "First-line ownership for Zepto Product Personalizer, Sign Customizer, and Boostly Cart: merchant issues that span storefront Liquid, app blocks, third-party conflicts, and escalations to engineering.",
    tools: [
      "Zendesk",
      "Crisp",
      "Shopify Admin",
      "Liquid",
      "Theme Editor",
      "Checkout & cart flows",
    ],
    outcomes: [
      "Runs day-to-day queues in Zendesk and Crisp—prioritizing severity, merchant impact, and reproducibility before deeper debugging.",
      "Uses Liquid, template structure, and app-specific settings to explain storefront behavior and isolate theme vs. app issues.",
      "Escalates with crisp repro steps, environment notes, and merchant expectations so engineering can validate bugs without back-and-forth.",
    ],
    strengths: [
      "Merchant Communication",
      "App Conflict Debugging",
      "Root-Cause Analysis",
      "Support Documentation",
      "Cross-team Collaboration",
    ],
  },
  {
    icon: "🔧",
    title: "WordPress & LMS Developer",
    company: "Independent Client Work",
    date: "2022 - Present",
    scope:
      "Engagements with SMBs, educators, and small agencies: WordPress and LMS builds where reliability, course delivery, and post-launch support matter as much as launch day.",
    tools: ["Tutor LMS", "LearnDash", "WooCommerce", "Custom themes"],
    outcomes: [
      "Shipped production LMS setups (Tutor LMS, LearnDash) with enrollment, progress, and content structures tuned to real cohorts—not demo data.",
      "Delivered WooCommerce and landing flows focused on conversion and stable checkout, with handoff docs for client teams.",
      "Automated repeat operational work (notifications, tagging, backups) so owners spend less time on manual upkeep.",
    ],
    strengths: [
      "Tutor LMS / LearnDash",
      "WooCommerce Delivery",
      "Theme & Plugin Tuning",
      "Landing Page Systems",
      "Client Operations Support",
    ],
  },
];

const Experience = () => {
  const lastIndex = roles.length - 1;

  return (
    <section id="experience" className="py-24 bg-secondary">
      <div className="container">
        <motion.div {...scrollReveal()}>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">Experience</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Support-Led Work
            <br />
            with Measurable Impact
          </h2>
          <div className="w-10 h-0.5 bg-primary rounded-full mt-4 mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_INVIEW}
              transition={{ delay: staggerDelay(i, 0.05), duration: 0.42, ease: EASE_OUT }}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <p className="text-2xl font-black font-heading text-foreground leading-none">{stat.value}</p>
              <p className="mt-2 text-[11px] font-black uppercase tracking-[0.18em] text-primary">{stat.label}</p>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{stat.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-8">
          {roles.map((role, i) => (
            <div key={role.title} className="flex gap-4 md:gap-6">
              {/* Timeline rail: line runs through icon center on md+ */}
              <div className="hidden md:flex flex-col items-center w-11 shrink-0">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-card text-base shadow-sm ring-4 ring-secondary z-10"
                  aria-hidden
                >
                  {role.icon}
                </div>
                {i < lastIndex && (
                  <div className="mt-2 w-px flex-1 min-h-[2.5rem] bg-border" aria-hidden />
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_INVIEW}
                transition={{ delay: staggerDelay(i, 0.07), duration: 0.42, ease: EASE_OUT }}
                className="min-w-0 flex-1"
              >
                <div className="rounded-2xl border border-border bg-card p-6 md:p-7 transition-shadow duration-300 hover:shadow-[0_18px_45px_-18px_rgba(0,0,0,0.2)]">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-secondary text-base md:hidden"
                        aria-hidden
                      >
                        {role.icon}
                      </span>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-foreground">{role.title}</h3>
                        <p className="mt-0.5 text-sm font-semibold text-muted-foreground">{role.company}</p>
                      </div>
                    </div>
                    <span className="whitespace-nowrap rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-primary">
                      {role.date}
                    </span>
                  </div>

                  <div className="mb-5">
                    <p className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-muted-foreground">Scope</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{role.scope}</p>
                  </div>

                  {role.tools && role.tools.length > 0 && (
                    <div className="mb-5">
                      <p className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-muted-foreground">
                        Tools & stack
                      </p>
                      <ul className="flex flex-wrap gap-2" role="list">
                        {role.tools.map((t) => (
                          <li
                            key={t}
                            className="rounded-full border border-border bg-secondary/80 px-3 py-1.5 text-[11px] font-semibold leading-tight text-foreground sm:text-xs"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <p className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-muted-foreground">Outcomes</p>
                    <ul className="m-0 list-none space-y-2.5 p-0">
                      {role.outcomes.map((point, j) => (
                        <li key={j} className="relative pl-5 text-sm leading-relaxed text-muted-foreground">
                          <span
                            className="absolute left-0 top-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/80"
                            aria-hidden
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-border/70 pt-5">
                    {role.strengths.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-primary/20 bg-primary/5 px-3 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-primary sm:text-xs sm:tracking-[0.14em]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
