import { motion } from "framer-motion";

const jobs = [
  {
    icon: "💼",
    title: "Technical Support Engineer",
    company: "Zepto Apps",
    date: "2024 — Present",
    desc: "Resolves complex technical issues for high-volume Shopify apps (Zepto Product Personalizer, Sign Customizer, Boostly Cart).",
    points: [
      "Handling 130–140 support tickets per week across Zendesk email and Crisp live chats with consistent quality.",
      "Maintained a 4.8★ customer satisfaction rating across thousands of resolved tickets.",
      "Identifies and resolves front-end app conflicts, installation hurdles, and configuration issues.",
      "Acts as a bridge between users and engineering, translating merchant feedback into bug reports.",
      "Authors technical documentation and instructional videos for non-technical store owners.",
    ],
  },
  {
    icon: "🔧",
    title: "WordPress & LMS Developer",
    company: "Freelance / Independent Projects / Fiverr",
    date: "2022 — Present",
    desc: "Specializes in building complex, high-performance web solutions using the WordPress ecosystem.",
    points: [
      "Expert in WooCommerce integration, managing product configurations to complex Payment Gateway setups.",
      "Experienced in deploying LMS, Ticket/Booking engines, and community Forums.",
      "Proficient in building layouts using Elementor, Divi, and WP Bakery with pixel-perfect design.",
      "Skilled in creating advanced data-capture workflows using Gravity Forms, Fluent Forms, and Contact Form 7.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">Experience</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Where I've Made
            <br />
            an Impact
          </h2>
          <div className="w-10 h-0.5 bg-primary rounded-full mt-4 mb-10" />
        </motion.div>

        <div className="relative pl-14 flex flex-col gap-8">
          {jobs.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative"
            >
              {/* Timeline line segment (only for non-last items) */}
              {i < jobs.length - 1 && (
                <div className="absolute left-[-38px] top-9 bottom-[-32px] w-px bg-border" />
              )}

              {/* Dot */}
              <div className="absolute -left-14 top-0 w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-base z-10">
                {job.icon}
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-heading text-base font-bold text-foreground">{job.title}</h3>
                    <p className="text-sm font-semibold text-muted-foreground mt-0.5">{job.company}</p>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-md bg-teal-light text-primary border border-primary/10 whitespace-nowrap">
                    {job.date}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{job.desc}</p>
                <ul className="space-y-2">
                  {job.points.map((point, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-primary/40 flex-shrink-0">—</span>
                      <span dangerouslySetInnerHTML={{ __html: point.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
