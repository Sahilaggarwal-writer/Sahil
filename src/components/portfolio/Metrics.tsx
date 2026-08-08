const METRICS = [
  { value: "5M+", label: "Words Written" },
  { value: "1000+", label: "Blogs and Articles Curated" },
  { value: "100+", label: "Service Pages Written" },
];

export function Metrics() {
  return (
    <section className="border-b border-border py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex items-center gap-6">
          <div className="h-px w-16 rule-gold" />
          <p className="text-[10px] tracking-widest uppercase text-muted-foreground">Impact</p>
        </div>
        <div className="grid gap-10 sm:grid-cols-3">
          {METRICS.map((metric) => (
            <div key={metric.label} className="reveal group">
              <span className="mb-2 block font-serif text-5xl leading-none text-gold md:text-6xl">
                {metric.value}
              </span>
              <span className="text-[11px] tracking-widest uppercase text-muted-foreground">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
