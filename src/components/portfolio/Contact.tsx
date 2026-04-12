import { motion } from "framer-motion";
import { EASE_OUT, VIEWPORT_INVIEW, staggerDelay } from "@/lib/motion";
import { Send } from "lucide-react";
import { useState, FormEvent } from "react";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("https://formspree.io/f/mnjbgnkk", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  };

  return (
    <section id="contact" className="py-28 bg-hero relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-10 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-10 w-72 h-72 rounded-full bg-teal/20 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="rounded-[2rem] border border-white/10 bg-slate-dark/50 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.35)] p-6 md:p-10 lg:p-14">
          <div className="grid md:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-start">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_INVIEW}
              transition={{ duration: 0.42, ease: EASE_OUT }}
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/40 bg-primary/20 text-primary text-[0.65rem] font-black uppercase tracking-[0.2em]">
                Project Inquiry
              </span>

              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-[0.95] mt-6">
                Let's Work
                <br />
                Together
              </h2>

              <p className="text-sm md:text-base text-primary-foreground/65 leading-relaxed mt-6 max-w-md">
                Have a WordPress challenge, an LMS to build, or need a Shopify store? Share your project details and I will get back to you with a clear next-step plan.
              </p>

              <div className="flex flex-wrap gap-2 mt-7">
                {["WordPress", "Shopify", "LMS", "Automation"].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-[10px] font-black uppercase tracking-[0.14em] text-primary-foreground/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_INVIEW}
              transition={{ delay: staggerDelay(1, 0.06), duration: 0.42, ease: EASE_OUT }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:p-7"
            >
              <h3 className="font-heading text-xl font-bold text-primary-foreground mb-5">Drop me a line</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                <div className="grid sm:grid-cols-2 gap-3.5">
                  <input
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full bg-primary-foreground/[0.04] border border-primary-foreground/15 rounded-xl px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/35 focus:outline-none focus:border-primary/60 focus:bg-primary-foreground/[0.07] transition-colors"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full bg-primary-foreground/[0.04] border border-primary-foreground/15 rounded-xl px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/35 focus:outline-none focus:border-primary/60 focus:bg-primary-foreground/[0.07] transition-colors"
                  />
                </div>
                <input
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full bg-primary-foreground/[0.04] border border-primary-foreground/15 rounded-xl px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/35 focus:outline-none focus:border-primary/60 focus:bg-primary-foreground/[0.07] transition-colors"
                />
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  required
                  className="w-full bg-primary-foreground/[0.04] border border-primary-foreground/15 rounded-xl px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/35 focus:outline-none focus:border-primary/60 focus:bg-primary-foreground/[0.07] transition-colors resize-none"
                />
                <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 bg-primary text-primary-foreground font-black text-xs uppercase tracking-[0.14em] rounded-xl hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50"
                >
                  <Send size={15} />
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                {status === "ok" && <p className="text-sm text-primary/90">✓ Thanks for your submission!</p>}
                {status === "err" && <p className="text-sm text-destructive">✗ Something went wrong. Please try again.</p>}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
