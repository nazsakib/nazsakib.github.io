import { motion } from "framer-motion";

const highlights = [
  { icon: "🏆", title: "Top-Rated Support Engineer", desc: "4.8★ average rating across 130–140 weekly tickets at Zepto Apps with consistently fast resolution times." },
  { icon: "⚙️", title: "Automation Specialist", desc: "Streamlining workflows using n8n, Zapier, and Telegram bots to automate repetitive tasks." },
  { icon: "🔌", title: "Plugin Developer", desc: "Creator of Light Maintenance — elegant, zero-bloat WordPress maintenance mode plugin." },
  { icon: "📚", title: "LMS Specialist", desc: "Deep experience designing and troubleshooting learning management systems for global clients." },
  { icon: "🎨", title: "Shopify Store Designer", desc: "Crafting high-converting Shopify stores and landing pages optimized for speed and sales growth." },
  { icon: "✍️", title: "Technical Writer", desc: "Practical WordPress & LMS articles on dev.to helping developers solve real-world problems." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1,duration: 0.5, ease: "easeOut" } }),
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-surface-warm">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={0}
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">About Me</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Passionate about solving
            <br />
            problems at scale
          </h2>
          <div className="w-10 h-0.5 bg-primary rounded-full mt-4 mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
          {/* Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="space-y-4 text-[0.95rem] leading-relaxed text-muted-foreground"
          >
            <p>
              I'm <strong className="text-foreground">Sakib MD Nazmush</strong> (also known as <strong className="text-foreground">sakibsnaz</strong>), a Technical Support Engineer and WordPress & Shopify Store Designer. Currently at{" "}
              <strong className="text-foreground">Zepto Apps</strong>, I support Shopify store owners by resolving complex
              technical issues for tools like the Zepto Product Personalizer, Sign Customizer and Boostly Cart.
            </p>
            <p>
              I am driven in high-pressure environments, consistently handling{" "}
              <strong className="text-foreground">130–140 support tickets per week</strong> while maintaining a{" "}
              <strong className="text-foreground">4.8★ customer rating</strong> for responsiveness and technical accuracy.
            </p>
            <p>
              Alongside Shopify support, I have strong experience in{" "}
              <strong className="text-foreground">WordPress development and learning management systems</strong> — working
              with Tutor LMS, LearnDash, full WordPress site development and landing page design.
            </p>
            <p>
              I am also an active WordPress contributor and the creator of the{" "}
              <a href="https://lightmaintenance.site" target="_blank" rel="noreferrer" className="text-primary font-semibold underline underline-offset-2 hover:text-teal-glow transition-colors">
                Light Maintenance
              </a>{" "}
              plugin — a lightweight, zero-bloat solution for seamless site maintenance.
            </p>
            <p>
              Beyond work, I share knowledge on my{" "}
              <a href="https://dev.to/sakibnazmush" target="_blank" rel="noreferrer" className="text-primary font-semibold underline underline-offset-2 hover:text-teal-glow transition-colors">
                dev.to blog
              </a>{" "}
              — writing about Automation, Telegram Bots, WordPress, and technical support best practices.
            </p>
          </motion.div>

          {/* Highlight cards */}
          <div className="flex flex-col gap-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 2}
                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
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
