import { motion } from "framer-motion";
import { Search, PenTool, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We start by diving deep into your goals. I analyze your requirements to build a bulletproof roadmap tailored to your specific needs.",
    icon: <Search className="w-5 h-5" />,
  },
  {
    num: "02",
    title: "Precision Engineering",
    desc: "Using modern frameworks and clean architecture, I build your solution with a focus on scalability, security, and high performance.",
    icon: <PenTool className="w-5 h-5" />,
  },
  {
    num: "03",
    title: "Optimization & Launch",
    desc: "Rigorous testing and performance tuning ensure a flawless launch. I hand over a product that is fast, reliable, and ready to grow.",
    icon: <Rocket className="w-5 h-5" />,
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">Workflow</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">The 3-Step Success Strategy</h2>
          <div className="w-10 h-0.5 bg-primary rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="relative">
          {/* Connector Line - Desktop Only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0" />

          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-8">
                  <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center text-primary shadow-xl group-hover:border-primary/50 group-hover:scale-110 transition-all duration-500">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-[10px] font-black flex items-center justify-center shadow-lg">
                    {step.num}
                  </div>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
