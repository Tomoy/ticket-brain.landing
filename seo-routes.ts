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
  /** Marks the page noindex and drops its canonical (used for 404.html). */
  noindex?: boolean;
  /** Injected into <head> as an application/ld+json block. */
  jsonLd?: Record<string, unknown>;
}

const ORG = {
  "@type": "Organization",
  name: "TicketBrain",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/icon-512x512.png`,
    width: 512,
    height: 512,
  },
};

/**
 * Shared shape for the three blog posts. `description` is not passed here --
 * generateRouteHtml merges the route's own description in, so the text lives
 * in exactly one place.
 */
const blogPosting = (
  path: string,
  headline: string,
  datePublished: string
) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline,
  datePublished,
  image: `${SITE_URL}/sharing-image.png`,
  author: ORG,
  publisher: ORG,
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${path}` },
});

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
    jsonLd: blogPosting(
      "/blog/why-your-grocery-bill-doubled",
      "Why Your Grocery Bill Doubled",
      "2025-09-28"
    ),
  },
  {
    path: "/blog/smart-grocery-shopping-with-ai",
    file: "blog/smart-grocery-shopping-with-ai.html",
    title: "Smart Grocery Shopping with AI | TicketBrain Blog",
    description:
      "Discover how artificial intelligence can transform your grocery shopping experience and help you save money.",
    jsonLd: blogPosting(
      "/blog/smart-grocery-shopping-with-ai",
      "Smart Grocery Shopping with AI",
      "2025-09-18"
    ),
  },
  {
    path: "/blog/understanding-your-receipt-data",
    file: "blog/understanding-your-receipt-data.html",
    title: "Understanding Your Receipt Data | TicketBrain Blog",
    description:
      "Learn how to decode the valuable insights hidden in your grocery receipts and make data-driven shopping decisions.",
    jsonLd: blogPosting(
      "/blog/understanding-your-receipt-data",
      "Understanding Your Receipt Data",
      "2025-09-17"
    ),
  },

  {
    path: "/blog/spendscan-alternative",
    file: "blog/spendscan-alternative.html",
    title: "SpendScan Alternative for Grocery Budgeting | TicketBrain",
    description:
      "SpendScan and TicketBrain both read your grocery receipts with AI. The difference is what they optimise for. Here is an honest comparison to help you pick.",
    jsonLd: blogPosting(
      "/blog/spendscan-alternative",
      "SpendScan Alternative: Receipt Scanning Focused on Your Budget",
      "2026-09-06"
    ),
  },
  {
    path: "/blog/fetch-alternative",
    file: "blog/fetch-alternative.html",
    title: "Fetch Alternative: Receipt Insights, Not Points | TicketBrain",
    description:
      "Fetch turns your receipts into gift cards. If you would rather have your receipts explain where your grocery money goes, here is what changes.",
    jsonLd: blogPosting(
      "/blog/fetch-alternative",
      "Fetch Alternative: Turn Receipts Into Insights, Not Points",
      "2026-09-06"
    ),
  },
  {
    path: "/blog/ynab-alternative-groceries",
    file: "blog/ynab-alternative-groceries.html",
    title: "YNAB Alternative for Grocery Spending | TicketBrain",
    description:
      "Budgeting apps track groceries as one category. Here is why item-level receipt data changes what you can actually cut, and when a budgeting app is still the right tool.",
    jsonLd: blogPosting(
      "/blog/ynab-alternative-groceries",
      "YNAB Alternative for Groceries: See the Items, Not Just the Total",
      "2026-09-06"
    ),
  },

  // Vercel serves this with a real 404 status for any path that matches no
  // rewrite. It boots the same SPA, so React Router still renders NotFound.
  {
    path: "/404",
    file: "404.html",
    title: "Page not found | TicketBrain",
    description: "This page does not exist.",
    noindex: true,
  },
];
