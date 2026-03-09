import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";

const stats = [
  { num: "130+", label: "Tickets / Week" },
  { num: "4.8★", label: "Support Rating" },
  { num: "3+", label: "Years Experience" },
];

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-teal/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-teal/3 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-teal/5" />

      <div className="container relative z-10 py-24 md:py-32">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center md:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal/20 bg-teal/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold tracking-widest uppercase text-teal-light">
                Shopify, WordPress & Automation
              </span>
            </motion.div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] text-primary-foreground">
              Sakib MD
              <br />
              Nazmush<span className="text-teal">.</span>
            </h1>

            <p className="mt-5 text-base md:text-lg leading-relaxed text-primary-foreground/60 max-w-lg">
              Technical Support Engineer at{" "}
              <strong className="text-primary-foreground/90">Zepto Apps</strong>, managing 130+ tickets
              per week with a 4.8★ merchant rating.
            </p>

            <blockquote className="mt-6 pl-4 border-l-2 border-teal/40 italic text-primary-foreground/50 text-sm max-w-md">
              "Every complex problem is just a well-structured solution waiting to be written."
            </blockquote>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start"
            >
              <a
                href="https://dev.to/sakibsnaz"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
              >
                <ExternalLink size={16} />
                Read My Articles
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary-foreground/20 text-primary-foreground/80 font-semibold text-sm rounded-lg hover:bg-primary-foreground/5 transition-all duration-300"
              >
                View My Work
                <ArrowDown size={16} />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex mt-10 justify-center md:justify-start"
            >
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-5 py-3 text-center ${
                    i < stats.length - 1 ? "border-r border-primary-foreground/10" : ""
                  }`}
                >
                  <div className="text-2xl font-heading font-bold text-primary-foreground">{s.num}</div>
                  <div className="text-xs text-primary-foreground/40 mt-1 tracking-wide">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative flex-shrink-0"
          >
            <div className="w-60 h-64 sm:w-72 sm:h-72 lg:w-[360px] lg:h-[360px] relative">
              {/* Outer Decorative Rings */}
              <div className="absolute inset-[-20px] rounded-full border border-teal/10 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-[-12px] rounded-full border border-dashed border-teal/30 animate-[spin_25s_linear_infinite_reverse]" />
              
              {/* Main Glow */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-pulse" />
              
              {/* Image Container with Custom Frame */}
              <div className="relative w-full h-full p-1.5 rounded-full bg-gradient-to-tr from-primary/40 via-teal/20 to-transparent shadow-[0_0_50px_rgba(21,193,147,0.15)]">
                <img
                  src="https://res.cloudinary.com/dr1nwz8am/image/upload/v1773056630/1000006476_ziyqmn.webp"
                  alt="Sakib MD Nazmush"
                  className="w-full h-full rounded-full object-cover border-2 border-white/10"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
