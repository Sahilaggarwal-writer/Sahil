import { createFileRoute, Link } from "@tanstack/react-router";

import { Masthead } from "@/components/portfolio/Masthead";
import { ContactFooter } from "@/components/portfolio/ContactFooter";

type Piece = { title: string; client: string; url?: string };

// Add your pieces here. `url` is optional — leave it out if the page isn't public.
const BLOGS: Piece[] = [
  { title: "Your blog title here", client: "The NineHertz" },
  { title: "Your blog title here", client: "Emizen Tech" },
];

const SERVICE_PAGES: Piece[] = [
  { title: "Your service page title here", client: "The NineHertz" },
  { title: "Your service page title here", client: "Emizen Tech" },
];

const title = "Writing Archive — Sahil Aggarwal";
const description =
  "A full archive of blogs, articles, and service pages written by Sahil Aggarwal for IT, SaaS, and B2B brands.";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WritingPage,
});

function PieceList({ heading, items }: { heading: string; items: Piece[] }) {
  return (
    <section className="py-16">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="label-caps text-muted-foreground">{heading}</h2>
        <div className="mx-8 mb-1.5 h-px flex-1 rule-gold" />
        <span className="text-[10px] tracking-widest uppercase text-muted-foreground">
          {items.length} entries
        </span>
      </div>
      <ol className="divide-y divide-border border-y border-border">
        {items.map((item, i) => {
          const inner = (
            <>
              <span className="index-num w-10 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <span className="flex-1 font-serif text-xl leading-snug">{item.title}</span>
              <span className="text-[10px] font-medium tracking-widest uppercase text-gold">
                {item.client}
              </span>
            </>
          );
          return (
            <li key={`${item.title}-${i}`}>
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-baseline gap-4 py-5 transition-colors hover:text-gold"
                >
                  {inner}
                </a>
              ) : (
                <div className="flex items-baseline gap-4 py-5">{inner}</div>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function WritingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Masthead />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <Link to="/" className="label-caps text-muted-foreground hover:text-foreground">
          ← Back to portfolio
        </Link>
        <h1 className="mt-8 font-serif text-5xl leading-none md:text-7xl">
          The Writing <span className="font-light italic">Archive</span>
        </h1>
        <PieceList heading="Blogs & Articles" items={BLOGS} />
        <PieceList heading="Service Pages" items={SERVICE_PAGES} />
      </main>
      <ContactFooter />
    </div>
  );
}
