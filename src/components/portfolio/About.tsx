import portrait from "@/assets/sahil-portrait.jpg.asset.json";

const STATS = [
  { value: "6+", label: "Years Experience" },
  { value: "10+", label: "Writers Managed" },
  { value: "3", label: "Promotions Earned" },
  { value: "Forbes", label: "Guest Published" },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink py-20 text-bone md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] hairline-grid" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -top-3 -left-3 h-24 w-24 border-t border-l border-gold/40" />
              <div className="absolute -right-3 -bottom-3 h-24 w-24 border-r border-b border-gold/40" />
              <img
                src={portrait.url}
                alt="Portrait of Sahil Aggarwal, Senior Content Manager based in Jaipur"
                width={1256}
                height={2020}
                loading="lazy"
                className="w-full object-cover grayscale-[35%] transition-all duration-700 hover:grayscale-0 md:aspect-[4/5]"
              />
            </div>
            <p className="mt-4 text-[10px] tracking-widest uppercase text-bone/40">
              Sahil Aggarwal — Jaipur, India
            </p>
          </div>

          <div className="space-y-6 md:col-span-7">
            <div className="h-px w-24 rule-gold" />
            <h2 className="font-serif text-3xl italic md:text-4xl">The Editorial Edge</h2>
            <p className="max-w-[46ch] leading-relaxed text-pretty text-bone/70">
              A journalism graduate turned technical content strategist, with 6+ years across The
              NineHertz, Emizen Tech, Zucol, and India&apos;s largest Hindi dailies. I treat
              technical content as journalism - researched, structured, and accountable to the
              reader.
            </p>
            <p className="max-w-[46ch] leading-relaxed text-pretty text-bone/70">
              Today I lead content for an AI-native engineering firm: mobile, IoT, cloud
              architecture, and enterprise AI. My focus is content that ranks on Google&apos;s first
              page and gets cited inside AI answer engines.
            </p>
            <div className="grid grid-cols-2 content-start gap-8 border-t border-bone/10 pt-8 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <span className="mb-1 block font-serif text-2xl text-gold">{stat.value}</span>
                  <span className="text-[10px] tracking-widest uppercase text-bone/40">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
