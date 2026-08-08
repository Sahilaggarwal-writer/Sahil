import portrait from "@/assets/sahil-portrait.jpg.asset.json";

const TAGS = ["SEO & AEO", "AI & Automation", "Content Management"];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0 paper-grain" />
      <div
        className="pointer-events-none absolute -top-24 -right-32 hidden size-[28rem] rounded-full opacity-[0.07] blur-2xl md:block"
        style={{ background: "radial-gradient(circle, var(--color-gold), transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="reveal mb-8 flex items-center gap-4">
          <img
            src={portrait.url}
            alt="Sahil Aggarwal"
            className="size-12 rounded-full object-cover object-[50%_18%] ring-1 ring-border"
          />
          <div className="h-px flex-1 rule-gold" />
          <span className="text-[10px] tracking-widest uppercase text-muted-foreground">
            Est. 2019 — Jaipur
          </span>
        </div>
        <h1 className="reveal mb-12 font-serif text-6xl leading-none text-balance md:text-8xl">
          A Word Artist For <span className="font-light italic">Technical</span> B2B Firms
        </h1>
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="max-w-[48ch] text-lg leading-relaxed text-pretty text-foreground/80 md:text-xl">
              Bridging the gap between complex engineering and compelling narrative. Based in
              Jaipur, I build SEO- and AI-search-ready content programs for IT, SaaS, and B2B
              brands - currently leading content strategy at The NineHertz.
            </p>
          </div>
          <div className="flex items-end md:col-span-5 md:justify-end">
            <div className="flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-3 py-1 text-[11px] font-medium tracking-wider uppercase ring-1 ring-border transition-colors hover:ring-gold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
