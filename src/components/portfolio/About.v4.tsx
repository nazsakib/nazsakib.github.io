const statCards = [
  {
    value: "130–140",
    label: "tickets weekly",
    detail: "Handled across live chat and Zendesk with calm, consistent execution.",
  },
  {
    value: "4.8★",
    label: "support rating",
    detail: "Trusted by merchants for clear diagnosis and fast follow-through.",
  },
  {
    value: "0→1",
    label: "automation builds",
    detail: "Turning repetitive tasks into dependable workflows that scale.",
  },
];

const focusAreas = [
  "Shopify app troubleshooting",
  "Merchant communication",
  "Bug reproduction and reporting",
  "n8n, Zapier, and Telegram automation",
  "WordPress and LMS systems",
  "Technical documentation",
];

const AboutV4 = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-surface-warm py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.16),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.12),_transparent_35%)]" aria-hidden />

      <div className="container relative">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.24em] text-primary">About Me</span>
          </div>

          <h2 className="mt-6 font-heading text-3xl font-bold leading-[1.05] text-foreground sm:text-4xl lg:text-5xl">
            Support engineering built for
            <span className="mt-2 block bg-gradient-to-r from-primary via-teal-400 to-sky-500 bg-clip-text text-transparent">
              speed, clarity, and trust
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            I’m Sakib MD Nazmush, a technical support engineer who works best in fast-moving environments where accuracy, empathy, and momentum matter at the same time.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-border/80 bg-card/85 p-6 shadow-[0_20px_80px_-30px_rgba(15,23,42,0.28)] backdrop-blur sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-primary">Working style</p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">Calm under pressure, clear in execution</h3>
              </div>
              <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                Zepto Apps
              </div>
            </div>

            <blockquote className="mt-6 border-l-2 border-primary/60 pl-4 text-lg italic leading-8 text-foreground/90">
              I help merchants move from confusion to confidence by combining sharp troubleshooting, product knowledge, and thoughtful communication.
            </blockquote>

            <p className="mt-6 text-sm leading-7 text-muted-foreground">
              I manage high-volume queues without losing quality, and I’m equally comfortable building the systems behind the support experience — from automation workflows to lightweight web tools that solve real friction points.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {statCards.map((item) => (
                <div key={item.label} className="rounded-2xl border border-border/70 bg-background/70 p-4">
                  <p className="font-mono text-2xl font-black leading-none text-foreground">{item.value}</p>
                  <p className="mt-2 text-[11px] font-black uppercase tracking-[0.18em] text-primary">{item.label}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 self-stretch">
            <div className="flex-1 rounded-[2rem] border border-border/80 bg-background/70 p-6 shadow-sm min-h-[240px]">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-muted-foreground">What I bring</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {focusAreas.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-1 rounded-[2rem] border border-border/80 bg-card/80 p-6 shadow-sm min-h-[240px]">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-muted-foreground">Beyond support</p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                <p>
                  I build practical tools and experiments outside the queue, including the <a href="https://lightmaintenance.site" target="_blank" rel="noreferrer" className="font-semibold text-primary underline underline-offset-2">Light Maintenance</a> plugin and the <a href="https://wpfastloader.vercel.app/" target="_blank" rel="noreferrer" className="font-semibold text-primary underline underline-offset-2">WPFastLoader</a> landing page experience.
                </p>
                <p>
                  I also publish walkthroughs and technical notes on <a href="https://dev.to/sakibsnaz" target="_blank" rel="noreferrer" className="font-semibold text-primary underline underline-offset-2">dev.to</a> to make complex issues easier to understand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutV4;
