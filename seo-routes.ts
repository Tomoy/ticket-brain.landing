// Per-route SEO metadata.
//
// The app is a client-rendered SPA served from a single HTML file, so every
// route used to inherit the homepage's <head> — including its canonical URL.
// That made Google (and Ahrefs) treat /blog, /frequently-asked-questions and
// /privacy-policy as duplicates of the homepage.
//
// At build time `generateRouteHtml` in vite.config.ts copies the compiled
// index.html once per entry below, swapping in the head tags declared here.
// Vercel then serves each file on its own path (see vercel.json), so the
// correct canonical is present in the raw HTML, before any JavaScript runs.

export const SITE_URL = "https://www.ticketbrain.app";

export interface SeoRoute {
  /** Public URL path, used for the canonical and og:url. */
  path: string;
  /** File emitted into dist/, relative to the dist root. */
  file: string;
  title: string;
  description: string;
}

export const seoRoutes: SeoRoute[] = [
  {
    path: "/blog",
    file: "blog.html",
    title: "TicketBrain Blog | Smart Grocery Shopping Insights",
    description:
      "Insights on smart grocery shopping, AI-powered receipt analysis, and practical money-saving tips.",
  },
  {
    path: "/frequently-asked-questions",
    file: "frequently-asked-questions.html",
    title: "Frequently Asked Questions | TicketBrain",
    description:
      "Everything you need to know about TicketBrain: how receipt scanning works, what we do with your data, and how the app helps you cut your grocery bill.",
  },
  {
    path: "/privacy-policy",
    file: "privacy-policy.html",
    title: "Privacy Policy | TicketBrain",
    description:
      "How TicketBrain collects, stores and protects your data. GDPR-compliant privacy policy for our grocery receipt scanning app.",
  },

  // Blog posts. Keep in sync with the English files in src/posts/ and with
  // public/sitemap.xml when a post is added or its slug changes.
  {
    path: "/blog/why-your-grocery-bill-doubled",
    file: "blog/why-your-grocery-bill-doubled.html",
    title: "Why Your Grocery Bill Doubled | TicketBrain Blog",
    description:
      "Inflation, shrinkflation, or habits? Break down the real reasons behind rising grocery costs and learn what's actually in your control.",
  },
  {
    path: "/blog/smart-grocery-shopping-with-ai",
    file: "blog/smart-grocery-shopping-with-ai.html",
    title: "Smart Grocery Shopping with AI | TicketBrain Blog",
    description:
      "Discover how artificial intelligence can transform your grocery shopping experience and help you save money.",
  },
  {
    path: "/blog/understanding-your-receipt-data",
    file: "blog/understanding-your-receipt-data.html",
    title: "Understanding Your Receipt Data | TicketBrain Blog",
    description:
      "Learn how to decode the valuable insights hidden in your grocery receipts and make data-driven shopping decisions.",
  },
];
