const GROUPS = [
  {
    title: "Content Writing",
    items: [
      "Technical blogs",
      "SEO copywriting",
      "AEO/LLM-optimized content",
      "Website & service pages",
      "PPC ad copy",
      "Guest posts",
    ],
  },
  {
    title: "SEO & AEO",
    items: [
      "On-page SEO",
      "Keyword research",
      "Content optimization",
      "AI Engine Optimization",
      "LLM-visibility writing",
      "Internal linking strategy",
    ],
  },
  {
    title: "Content Management",
    items: [
      "Team leadership",
      "Freelance writer management",
      "Editorial review",
      "Workflow design",
      "Cross-functional collaboration",
      "Brand voice governance",
    ],
  },
  {
    title: "AI, Automation & Tools",
    items: [
      "Claude AI (custom skills, prompting)",
      "n8n (intermediate)",
      "SurferSEO",
      "Google Search Console",
      "Grammarly",
      "AI Tools Workshop (Certified)",
    ],
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="border-b border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="label-caps text-muted-foreground">Key Specializations</h2>
          <div className="mx-8 mb-1.5 h-px flex-1 bg-border" />
        </div>
        <div className="grid gap-x-12 gap-y-14 md:grid-cols-2">
          {GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="font-serif text-2xl leading-tight">{group.title}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-foreground/70">
                    <span className="text-gold">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
