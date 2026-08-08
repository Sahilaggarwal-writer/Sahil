const STATS = [
  { value: "6+", label: "Years Experience" },
  { value: "8", label: "Writers Managed" },
  { value: "3", label: "Promotions Earned" },
  { value: "Forbes", label: "Guest Published" },
];

export function About() {
  return (
    <section id="about" className="bg-ink py-20 text-bone">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl italic">The Editorial Edge</h2>
            <p className="max-w-[40ch] leading-relaxed text-pretty text-bone/70">
              A journalism graduate turned technical content strategist, with 6+ years across The
              NineHertz, Emizen Tech, Zucol, and India&apos;s largest Hindi dailies. I treat
              technical content as journalism — researched, structured, and accountable to the
              reader.
            </p>
            <p className="max-w-[40ch] leading-relaxed text-pretty text-bone/70">
              Today I lead content for an AI-native engineering firm: mobile, IoT, cloud
              architecture, and enterprise AI. My focus is content that ranks on Google&apos;s first
              page and gets cited inside AI answer engines.
            </p>
          </div>
          <div className="grid grid-cols-2 content-start gap-8">
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
    </section>
  );
}
