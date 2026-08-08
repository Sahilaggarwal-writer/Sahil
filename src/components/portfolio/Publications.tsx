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

const OUTLETS = ["Forbes", "Business of Apps", "Hindustan Times", "The NineHertz", "Emizen Tech"];

export function Publications() {
  return (
    <section id="publications" className="pt-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="label-caps text-muted-foreground">GUEST PUBLISHINGS</h2>
          <div className="mx-8 mb-1.5 h-px flex-1 rule-gold" />
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
          {ARTICLES.map((article, i) => (
            <article key={article.title} className="group relative pl-10">
              <span className="index-num absolute top-1 left-0">
                {String(i + 1).padStart(2, "0")}
              </span>
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

      <div className="mt-20 overflow-hidden border-y border-border py-5">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
          {[...OUTLETS, ...OUTLETS, ...OUTLETS, ...OUTLETS].map((outlet, i) => (
            <span
              key={`${outlet}-${i}`}
              className="flex items-center gap-12 font-serif text-2xl text-foreground/25"
            >
              {outlet}
              <span className="text-gold/50">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

