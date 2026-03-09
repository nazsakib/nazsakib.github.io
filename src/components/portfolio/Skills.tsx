import { motion } from "framer-motion";

const skillCategories = [
  {
    label: "CMS & Web Development",
    skills: [
      { icon: "🛒", name: "Shopify & Liquid" },
      { icon: "📦", name: "WordPress & PHP" },
      { icon: "🎓", name: "Tutor LMS & LearnDash" },
      { icon: "🛍️", name: "WooCommerce" },
      { icon: "🖌️", name: "Elementor, Divi & WP Bakery" },
      { icon: "🌐", name: "HTML, CSS, JavaScript" },
    ],
  },
  {
    label: "Automation & AI",
    skills: [
      { icon: "⚙️", name: "n8n Automation" },
      { icon: "⚡", name: "Zapier Integration" },
      { icon: "🤖", name: "AI Workflows (LLMs)" },
      { icon: "💬", name: "Telegram & Chatbots" },
    ],
  },
  {
    label: "Support & Tools",
    skills: [
      { icon: "🎫", name: "Technical Support & Ticketing" },
      { icon: "🗄️", name: "MySQL & Databases" },
      { icon: "🌿", name: "Git & Version Control" },
      { icon: "🖥️", name: "cPanel & Hosting" },
      { icon: "🔌", name: "REST API Integration" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">Skills & Expertise</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">My Technical Skills</h2>
          <div className="w-10 h-0.5 bg-primary rounded-full mt-4 mb-10" />
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((cat, ci) => (
            <div key={cat.label}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-bold tracking-[0.14em] uppercase text-muted-foreground">{cat.label}</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (ci * 0.1) + (si * 0.05), duration: 0.4 }}
                    className="group relative bg-card border border-border rounded-xl p-5 flex flex-col gap-2.5 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-border group-hover:bg-primary transition-colors duration-300" />
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-heading text-xs font-bold text-foreground leading-snug">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
