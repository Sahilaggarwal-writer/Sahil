const ROLES = [
  {
    period: "May 2026 — Present",
    title: "Senior Content Manager",
    company: "The NineHertz",
    tag: "STRATEGY",
    detail:
      "Own content strategy across AI-native service verticals, full-funnel editorial operations, AEO/LLM visibility, and brand voice governance. Mentor a team of 6–8 freelance writers.",
  },
  {
    period: "May 2024 — Apr 2026",
    title: "Senior Content Writer",
    company: "The NineHertz",
    tag: "EDITORIAL",
    detail:
      "Coordinated a writer team end-to-end, produced first-page-ranking technical content, and streamlined production with Claude AI and n8n workflows.",
  },
  {
    period: "May 2023 — Apr 2024",
    title: "Content Writer",
    company: "The NineHertz",
    tag: "TECH WRITING",
    detail:
      "SEO blogs, service and industry pages across mobile app development, IoT, and enterprise software. Guest posts placed on Forbes and Hindustan Times.",
  },
  {
    period: "May 2022 — May 2023",
    title: "Web Content Writer",
    company: "Emizen Tech",
    tag: "SEO",
    detail:
      "Website copy, guest posts, and social content built alongside SEO specialists; editorial QA across service and industry pages.",
  },
  {
    period: "Oct 2020 — Apr 2022",
    title: "Content Writer",
    company: "Zucol Group",
    tag: "CREATIVE",
    detail:
      "Reports, articles, and management-focused content; proofreading and mentoring junior writers.",
  },
  {
    period: "Jun 2019 — Oct 2020",
    title: "Content Writer (Internships)",
    company: "Dainik Bhaskar & Dainik Arthprakash",
    tag: "JOURNALISM",
    detail:
      "News articles, features, and web content for two of India's major Hindi publications, covering digital media trends.",
  },
];

export function Journey() {
  return (
    <section id="journey" className="border-b border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="label-caps mb-16 text-muted-foreground">Chronology of Impact</h2>
        <div className="divide-y divide-border border-t border-b border-border">
          {ROLES.map((role) => (
            <div key={role.period} className="grid gap-4 py-8 md:grid-cols-12">
              <div className="text-sm text-muted-foreground md:col-span-3">{role.period}</div>
              <div className="md:col-span-6">
                <h3 className="text-xl font-medium">{role.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{role.company}</p>
                <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-pretty text-foreground/70">
                  {role.detail}
                </p>
              </div>
              <div className="md:col-span-3 md:text-right">
                <span className="rounded bg-muted px-2 py-1 text-[10px] font-medium tracking-wide">
                  {role.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted-foreground">
          B.A. Journalism &amp; Mass Communication, NIMS University, Jaipur — 2018–2021.
        </p>
      </div>
    </section>
  );
}
