import { motion } from "framer-motion";

const impactStats = [
  {
    value: "2024 - Present",
    label: "Zepto Apps Tenure",
    detail: "Active Technical Support Engineer role focused on Shopify app operations.",
  },
  {
    value: "Shopify App Stack",
    label: "Core Product Coverage",
    detail: "Product Personalizer, Sign Customizer, and Boostly Cart support.",
  },
  {
    value: "Root-Cause Driven",
    label: "Support Method",
    detail: "Issue triage, failure reproduction, and clear engineering escalation.",
  },
];

const roles = [
  {
    icon: "💼",
    title: "Technical Support Engineer",
    company: "Zepto Apps",
    date: "2024 - Present",
    scope:
      "Owns high-volume support operations for Shopify apps including Zepto Product Personalizer, Sign Customizer, and Boostly Cart.",
    outcomes: [
      "Handles 130-140 weekly tickets across support channels without sacrificing response quality.",
      "Maintains a 4.8★ satisfaction rating through fast diagnosis and merchant-friendly communication.",
      "Reduces repeat issues by identifying root causes and escalating clean, reproducible bug reports.",
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
      "Delivers WordPress, LMS, and e-commerce implementations for clients needing stable launches and practical support after handoff.",
    outcomes: [
      "Built and optimized LMS platforms with Tutor LMS and LearnDash for production usage.",
      "Implemented WooCommerce and conversion-focused landing pages with reliable checkout flows.",
      "Created workflow automations and plugin-level improvements to reduce manual maintenance load.",
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
  return (
    <section id="experience" className="py-24 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <p className="text-2xl font-black font-heading text-foreground leading-none">{stat.value}</p>
              <p className="mt-2 text-[11px] font-black uppercase tracking-[0.18em] text-primary">{stat.label}</p>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{stat.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="relative pl-0 md:pl-14 flex flex-col gap-8">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              {i < roles.length - 1 && (
                <div className="hidden md:block absolute left-[-38px] top-10 bottom-[-32px] w-px bg-border" />
              )}

              <div className="hidden md:flex absolute -left-14 top-0 w-9 h-9 rounded-full bg-card border border-border items-center justify-center text-base z-10">
                {role.icon}
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 md:p-7 hover:shadow-[0_18px_45px_-18px_rgba(0,0,0,0.2)] transition-shadow duration-300">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="flex items-start gap-3">
                    <span className="md:hidden w-9 h-9 rounded-full bg-secondary border border-border flex items-center justify-center text-base">
                      {role.icon}
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground">{role.title}</h3>
                      <p className="text-sm font-semibold text-muted-foreground mt-0.5">{role.company}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-[0.14em] px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
                    {role.date}
                  </span>
                </div>

                <div className="mb-5">
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-muted-foreground mb-2">Scope</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{role.scope}</p>
                </div>

                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-muted-foreground mb-2">Outcomes</p>
                  <ul className="space-y-2.5">
                    {role.outcomes.map((point, j) => (
                      <li key={j} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-primary/70 flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-border/70 flex flex-wrap gap-2">
                  {role.strengths.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-black uppercase tracking-[0.14em] text-primary"
                    >
                      {item}
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

export default Experience;
