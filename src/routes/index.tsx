import { createFileRoute } from "@tanstack/react-router";

import { Masthead } from "@/components/portfolio/Masthead";
import { Hero } from "@/components/portfolio/Hero";
import { Metrics } from "@/components/portfolio/Metrics";
import { About } from "@/components/portfolio/About";
import { Journey } from "@/components/portfolio/Journey";
import { Expertise } from "@/components/portfolio/Expertise";
import { Publications } from "@/components/portfolio/Publications";
import { ContactFooter } from "@/components/portfolio/ContactFooter";

const title = "Sahil Aggarwal — Senior Content Manager, SEO & AEO Strategy";
const description =
  "Portfolio of Sahil Aggarwal, Senior Content Manager with 6+ years leading SEO, AEO, and AI-driven technical content programs for IT, SaaS, and B2B brands.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Masthead />
      <main>
        <Hero />
        <Metrics />
        <About />
        <Journey />
        <Expertise />
        <Publications />
      </main>
      <ContactFooter />
    </div>
  );
}
