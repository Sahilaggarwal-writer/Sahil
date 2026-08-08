const ARTICLES = [
  {
    outlet: "Forbes",
    title: "Mobile Apps In The FMCG Industry",
    summary:
      "How consumer goods brands use mobile experiences to shorten the distance between shelf and shopper.",
  },
  {
    outlet: "Forbes",
    title: "Dinner Dating Apps: The Burgeoning Concept",
    summary:
      "A look at the rise of experience-led dating platforms and the product thinking behind them.",
  },
  {
    outlet: "Business of Apps",
    title: "App Development Trends & Mobile Industry Insights",
    summary:
      "Ongoing coverage of platform shifts, development economics, and what they mean for product teams.",
  },
  {
    outlet: "Hindustan Times",
    title: "Guest Features on Technology & Digital Growth",
    summary:
      "Guest posts published as part of The NineHertz content and PR strategy for mainstream tech audiences.",
  },
];

const CLIENTS = [
  "Belrose Diamonds (Belgium)",
  "Jeans-Land (Germany)",
  "Bajao Radio",
  "Neo Thermal Insulation",
];

export function Publications() {
  return (
    <section id="publications" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="label-caps text-muted-foreground">Featured Bylines</h2>
          <div className="mx-8 mb-1.5 h-px flex-1 bg-border" />
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
          {ARTICLES.map((article) => (
            <article key={article.title} className="group">
              <div className="mb-3 text-[10px] font-medium tracking-widest uppercase text-gold">
                {article.outlet}
              </div>
              <h3 className="font-serif text-2xl leading-tight text-balance decoration-border underline-offset-4 transition-all group-hover:underline">
                {article.title}
              </h3>
              <p className="mt-4 max-w-[40ch] text-sm text-muted-foreground">{article.summary}</p>
            </article>
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-8">
          <p className="label-caps mb-4 text-muted-foreground">Client Portfolio Work</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-foreground/70">
            {CLIENTS.map((client) => (
              <li key={client}>{client}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
