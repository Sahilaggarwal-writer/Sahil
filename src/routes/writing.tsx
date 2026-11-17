import { createFileRoute, Link } from "@tanstack/react-router";

import { Masthead } from "@/components/portfolio/Masthead";
import { ContactFooter } from "@/components/portfolio/ContactFooter";

type Piece = { title: string; client: string; url?: string };

const BLOGS: Piece[] = [
  {
    title: "Custom Software Modernization: Benefits, Process, and Best Practices",
    client: "The NineHertz",
    url: "https://theninehertz.com/blog/custom-software-modernization-benefits-process-best-practices",
  },
  {
    title: "15 Top Predictive Maintenance Companies & Solution Providers (2026)",
    client: "The NineHertz",
    url: "https://theninehertz.com/blog/top-predictive-maintenance-companies",
  },
  {
    title: "Software Development Cost in California in 2026",
    client: "The NineHertz",
    url: "https://theninehertz.com/blog/software-development-cost-in-california-complete-break-down",
  },
  {
    title: "How to Make a Social Media App",
    client: "The NineHertz",
    url: "https://theninehertz.com/blog/how-to/build-an-app-like-instagram-cost",
  },
  {
    title: "Ecommerce chatbots: Features, Use Cases, Examples, Costs",
    client: "The NineHertz",
    url: "https://theninehertz.com/artificial-intelligence/ecommerce-chatbots",
  },
];

const SERVICE_PAGES: Piece[] = [
  {
    title: "AI Development Services",
    client: "The NineHertz",
    url: "https://theninehertz.com/artificial-intelligence",
  },
  {
    title: "Generative AI Development Company",
    client: "The NineHertz",
    url: "https://theninehertz.com/artificial-intelligence/generative-ai-development-services",
  },
  {
    title: "Workflow Orchestration",
    client: "The NineHertz",
    url: "https://theninehertz.com/services/workflow-orchestration",
  },
  {
    title: "AI Consulting Services",
    client: "The NineHertz",
    url: "https://theninehertz.com/artificial-intelligence/ai-consulting-services",
  },
  {
    title: "Custom Mobile App Development Company",
    client: "The NineHertz",
    url: "https://theninehertz.com/services/custom-mobile-app-development-services",
  },
  {
    title: "Custom Software Development services",
    client: "The NineHertz",
    url: "https://theninehertz.com/services/custom-software-development-services",
  },
  {
    title: "IoT App Development Company",
    client: "The NineHertz",
    url: "https://theninehertz.com/services/iot-app-development-company",
  },
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
          {items.length} ENTRIES
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
          My Writings&nbsp;
        </h1>
        <PieceList heading="Blogs & Articles" items={BLOGS} />
        <PieceList heading="Service Pages" items={SERVICE_PAGES} />
      </main>
      <ContactFooter />
    </div>
  );
}
