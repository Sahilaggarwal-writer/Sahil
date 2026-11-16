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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[4%] hidden -translate-y-1/2 lg:block"
      >
        <svg viewBox="0 0 320 420" className="h-[26rem] w-auto" fill="none">
          <path
            d="M30 360 C 90 330, 120 250, 170 250 S 250 320, 300 290"
            className="text-gold"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M40 395 C 120 380, 200 400, 290 385"
            className="text-gold/40"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          <g transform="rotate(-28 200 150)" className="text-foreground">
            <rect x="188" y="0" width="24" height="170" rx="4" fill="currentColor" />
            <rect x="186" y="170" width="28" height="14" className="text-gold" fill="currentColor" />
            <path d="M186 184 L200 250 L214 184 Z" className="text-gold" fill="currentColor" />
            <line x1="200" y1="200" x2="200" y2="246" className="text-background" stroke="currentColor" strokeWidth="1" />
            <circle cx="200" cy="198" r="2.5" className="text-background" fill="currentColor" />
          </g>
          <text x="40" y="330" className="fill-muted-foreground" fontSize="10" letterSpacing="3">
            BRAND · NARRATIVE · AUTHORITY
          </text>
        </svg>
      </div>
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="reveal mb-8 flex items-center gap-4">
          <img
            src={portrait.url}
            alt="Sahil Aggarwal"
            className="size-12 rounded-full object-cover object-[50%_18%] ring-1 ring-border"
          />
          <div className="h-px flex-1 rule-gold" />
          <span className="text-[10px] tracking-widest uppercase text-muted-foreground">
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
