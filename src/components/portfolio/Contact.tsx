import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState, FormEvent } from "react";

const contactLinks = [
  { icon: <Mail size={18} />, label: "Email", value: "sakibsnaz@gmail.com", href: "mailto:sakibsnaz@gmail.com" },
  { icon: <span className="font-mono text-xs font-bold">{"{/}"}</span>, label: "dev.to", value: "dev.to/sakibsnaz", href: "https://dev.to/sakibsnaz" },
  { icon: <Github size={18} />, label: "GitHub", value: "github.com/nazsakib", href: "https://github.com/nazsakib" },
  { icon: <Linkedin size={18} />, label: "LinkedIn", value: "linkedin.com/in/sakibsnaz", href: "https://www.linkedin.com/in/sakibsnaz/" },
];

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
    <section id="contact" className="py-24 bg-hero">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground leading-tight">
              Let's Work
              <br />
              Together
            </h2>
            <p className="text-sm text-primary-foreground/40 leading-relaxed mt-4">
              Have a WordPress challenge, an LMS to build, or need a Shopify store? I'm always open to interesting projects.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-4">Drop me a line</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/25 focus:outline-none focus:border-primary/50 transition-colors"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/25 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <input
                name="subject"
                placeholder="Subject"
                required
                className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/25 focus:outline-none focus:border-primary/50 transition-colors"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Your message..."
                required
                className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/25 focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
              <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
              <button
                type="submit"
                disabled={status === "sending"}
                className="self-start inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50"
              >
                <Send size={15} />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "ok" && <p className="text-sm text-primary/80">✓ Thanks for your submission!</p>}
              {status === "err" && <p className="text-sm text-destructive">✗ Something went wrong. Please try again.</p>}
            </form>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-4">Let's Connect</h3>
            <div className="flex flex-col gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground/50 transition-opacity"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-[0.65rem] text-primary-foreground/30 tracking-wide">{link.label}</div>
                    <div className="text-sm font-semibold">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
