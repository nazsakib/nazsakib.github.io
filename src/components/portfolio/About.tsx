import { motion } from "framer-motion";
import { EASE_OUT, VIEWPORT_INVIEW, fadeUpVariants } from "@/lib/motion";

const signatureStats = [
  {
    value: "130-140",
    label: "Weekly Tickets",
    detail: "Handled across Zendesk and live chat",
  },
  {
    value: "4.8★",
    label: "Support Rating",
    detail: "Consistent satisfaction from merchants",
  },
  {
    value: "0→1",
    label: "Automation Builds",
    detail: "From manual tasks to reliable workflows",
  },
];

const proofChips = [
  "Shopify App Debugging",
  "Merchant Communication",
  "Bug Reproduction Reports",
  "n8n + Zapier Workflows",
  "WordPress + LMS Systems",
  "Technical Documentation",
];

const highlights = [
  { icon: "🏆", title: "Top-Rated Support Engineer", desc: "4.8★ average rating across 130–140 weekly tickets at Zepto Apps with consistently fast resolution times." },
  { icon: "⚙️", title: "Automation Specialist", desc: "Streamlining workflows using n8n, Zapier, and Telegram bots to automate repetitive tasks." },
  { icon: "🔌", title: "Plugin Developer", desc: "Creator of Light Maintenance — elegant, zero-bloat WordPress maintenance mode plugin." },
  { icon: "📚", title: "LMS Specialist", desc: "Deep experience designing and troubleshooting learning management systems for global clients." },
  { icon: "🎨", title: "Shopify Store Designer", desc: "Crafting high-converting Shopify stores and landing pages optimized for speed and sales growth." },
  { icon: "✍️", title: "Technical Writer", desc: "Practical WordPress & LMS articles on dev.to helping developers solve real-world problems." },
];

const aboutHeaderVariants = fadeUpVariants(0.055);

const About = () => {
  return (
    <section id="about" className="py-24 bg-surface-warm">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_INVIEW}
          variants={aboutHeaderVariants}
          custom={0}
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">About Me</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Support engineering built
            <br />
            for speed and trust
          </h2>
          <div className="w-10 h-0.5 bg-primary rounded-full mt-4 mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {signatureStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_INVIEW}
              transition={{ delay: i * 0.05, duration: 0.42, ease: EASE_OUT }}
              className="rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <p className="text-2xl font-black font-heading text-foreground leading-none">{stat.value}</p>
              <p className="mt-2 text-[11px] font-black uppercase tracking-[0.18em] text-primary">{stat.label}</p>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{stat.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
          {/* Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_INVIEW}
            variants={aboutHeaderVariants}
            custom={1}
            className="space-y-4 text-[0.95rem] leading-relaxed text-muted-foreground"
          >
            <p>
              I am <strong className="text-foreground">Sakib MD Nazmush</strong> (<strong className="text-foreground">sakibsnaz</strong>), a <strong className="text-foreground">Technical Support Engineer</strong> at <strong className="text-foreground">Zepto Apps</strong> focused on Shopify app troubleshooting, merchant communication, and rapid issue resolution.
            </p>
            <p>
              I operate in high-volume queues with stable quality, handling <strong className="text-foreground">130–140 tickets weekly</strong> and maintaining a <strong className="text-foreground">4.8★ support rating</strong> by combining clear diagnosis, product knowledge, and fast follow-through.
            </p>
            <p>
              Outside the queue, I build practical automation and web solutions including the{" "}
              <a href="https://lightmaintenance.site" target="_blank" rel="noreferrer" className="text-primary font-semibold underline underline-offset-2 hover:text-teal-glow transition-colors">
                Light Maintenance
              </a>{" "}
              plugin, and publish technical notes on{" "}
              <a href="https://dev.to/sakibsnaz" target="_blank" rel="noreferrer" className="text-primary font-semibold underline underline-offset-2 hover:text-teal-glow transition-colors">
                dev.to
              </a>.
            </p>

            <div className="pt-4 border-t border-border">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-muted-foreground mb-4">Core Strengths</p>
              <div className="flex flex-wrap gap-2">
                {proofChips.map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-black uppercase tracking-[0.16em] text-primary"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <div className="flex flex-col gap-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_INVIEW}
                variants={aboutHeaderVariants}
                custom={i + 2}
                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span className="text-xl flex-shrink-0 mt-0.5">{h.icon}</span>
                <div>
                  <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{h.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
