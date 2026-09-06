/**
 * Static site generator for ticketbrain.app.
 *
 * The site used to be a React SPA: every route served the same empty
 * <div id="root"> and the content only appeared after 569KB of JavaScript
 * ran. Crawlers that do not execute JS saw nothing, and the homepage had to
 * be split off as hand-written HTML, which left two navigations that could
 * drift apart. This script replaces the whole thing: one layout, one
 * stylesheet, real HTML on every page, no client framework.
 *
 * Content sources:
 *   - home body      site/pages/home.html
 *   - blog posts     src/posts/*.md  (English files; *.es.md are ignored
 *                    while ticketbrain.es is not ours)
 *   - FAQ + privacy  site/content.mjs
 *
 * Output goes to dist/, which is what Vercel serves.
 */
import { marked } from "marked";
import {
  cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync,
} from "fs";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";
import { faq, privacy } from "./content.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const SITE_URL = "https://www.ticketbrain.app";

const read = (p) => readFileSync(join(ROOT, p), "utf-8");
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
  .replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const CSS = read("site/styles.css");
const SIGNUP_JS = read("site/pages/_signup.js");

marked.setOptions({ breaks: true, gfm: true });

/* ---------------------------------------------------------------- layout */

// Anchors are absolute (/#how) so the same markup works on every page.
const NAV = [
  ["/#how", "How it works", ""],
  ["/#features", "Features", ""],
  ["/#coupons", "Coupons", " class=\"is-new\""],
  ["/blog", "Blog", ""],
  ["/frequently-asked-questions", "FAQ", ""],
  ["/#privacy", "Privacy", ""],
];

const header = () => `
    <header class="nav">
      <div class="wrap nav-in">
        <a class="brand" href="/">
          <img src="/lovable-uploads/logo-medium-light.png" alt="" width="34" height="34">
          <span>Ticket<b>Brain</b></span>
        </a>
        <nav class="nav-links">
${NAV.map(([h, t, c]) => `          <a href="${h}"${c}>${t}</a>`).join("\n")}
        </nav>
        <a class="btn" href="/#get">Get the app</a>
        <details class="menu">
          <summary aria-label="Open menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10261d" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </summary>
          <div class="menu-panel">
${NAV.map(([h, t, c]) => `            <a href="${h}"${c}>${t}</a>`).join("\n")}
            <a class="btn" href="/#get">Get the app</a>
          </div>
        </details>
      </div>
    </header>`;

const footer = () => `
    <footer>
      <div class="wrap">
        <div class="fgrid2">
          <div>
            <span class="brand" style="margin-bottom:16px">
              <img src="/lovable-uploads/logo-medium-light.png" alt="" width="34" height="34" loading="lazy">
              <span>Ticket<b>Brain</b></span>
            </span>
            <p style="max-width:34ch">Turn your grocery receipts into clear insights that actually help you save money.</p>
            <div class="cta-row" style="margin-top:22px">
              <span class="store store-dark"><span><small>Coming soon</small><strong>App Store</strong></span></span>
              <span class="store store-dark"><span><small>Coming soon</small><strong>Google Play</strong></span></span>
            </div>
          </div>
          <div>
            <h4>Product</h4>
            <ul>
              <li><a href="/#how">How it works</a></li>
              <li><a href="/#features">Features</a></li>
              <li><a href="/#coupons" class="is-new">Coupons</a></li>
            </ul>
          </div>
          <div>
            <h4>More</h4>
            <ul>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/frequently-asked-questions">FAQ</a></li>
              <li><a href="/privacy-policy">Privacy policy</a></li>
            </ul>
          </div>
        </div>
        <p class="legal">© 2026 TicketBrain · Barcelona</p>
      </div>
    </footer>`;

function page({ path, title, description, body, jsonLd = [], noindex = false, script = "" }) {
  const url = SITE_URL + path;
  const ld = jsonLd
    .map((d) => `    <script type="application/ld+json">${JSON.stringify(d)}</script>`)
    .join("\n");
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}">
    <meta name="robots" content="${noindex ? "noindex, follow" : "index, follow"}">
    <meta name="author" content="TicketBrain" />
${noindex ? "" : `    <link rel="canonical" href="${url}">\n`}    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${SITE_URL}/sharing-image.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <meta name="twitter:site" content="TicketBrain" />
    <meta name="twitter:image" content="${SITE_URL}/sharing-image.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Karla:wght@400;500;600;700&display=swap" rel="stylesheet">
${ld}
    <style>${CSS}</style>
  </head>
  <body>
${header()}
    <main>
${body}
    </main>
${footer()}
${script ? `    <script>${script}</script>` : ""}
  </body>
</html>
`;
}

/* ------------------------------------------------------------ blog posts */

function loadPosts() {
  const dir = join(ROOT, "src/posts");
  return readdirSync(dir)
    .filter((f) => f.endsWith(".md") && !f.endsWith(".es.md"))
    .map((f) => {
      const raw = readFileSync(join(dir, f), "utf-8");
      const parts = raw.split("---");
      const meta = {};
      parts[1].trim().split("\n").forEach((line) => {
        const i = line.indexOf(":");
        if (i > 0) meta[line.slice(0, i).trim()] =
          line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
      });
      const md = parts.slice(2).join("---").trim();
      return {
        slug: meta.slug,
        title: meta.title,
        date: meta.date,
        description: meta.description,
        image: meta.image ? `/blog-media/${meta.image}` : null,
        html: marked.parse(md),
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

const fmtDate = (d) =>
  new Date(d).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" });

const ORG = {
  "@type": "Organization", name: "TicketBrain", url: SITE_URL,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/icon-512x512.png`, width: 512, height: 512 },
};

/* ------------------------------------------------------------- the build */

const write = (rel, html) => {
  const out = join(DIST, rel);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
  console.log(`  ${rel.padEnd(46)} ${String(html.length).padStart(6)} bytes`);
};

function build() {
  rmSync(DIST, { recursive: true, force: true });
  mkdirSync(DIST, { recursive: true });

  // static assets
  cpSync(join(ROOT, "public"), DIST, { recursive: true });
  const media = join(DIST, "blog-media");
  mkdirSync(media, { recursive: true });
  for (const f of readdirSync(join(ROOT, "src/assets"))) {
    if (/^blog-.*\.(jpg|jpeg|png|webp)$/i.test(f)) {
      cpSync(join(ROOT, "src/assets", f), join(media, f));
    }
  }

  const posts = loadPosts();
  console.log(`\nGenerating ${posts.length + 5} pages\n`);

  /* home ---------------------------------------------------------------- */
  write("index.html", page({
    path: "/",
    title: "Grocery Receipt Scanner App to Cut Your Grocery Bill | TicketBrain",
    description: "Scan any supermarket receipt and TicketBrain reads every item, categorises it, and shows which purchases are driving your grocery budget up. Join the early access list.",
    body: read("site/pages/home.html"),
    script: SIGNUP_JS,
    jsonLd: [
      { "@context": "https://schema.org", ...ORG,
        description: "Receipt scanning app that turns grocery receipts into spending insights.",
        email: "hello@ticketbrain.app",
        address: { "@type": "PostalAddress", addressLocality: "Barcelona", addressCountry: "ES" } },
      { "@context": "https://schema.org", "@type": "WebSite", name: "TicketBrain", url: SITE_URL },
      { "@context": "https://schema.org", "@type": "MobileApplication", name: "TicketBrain",
        applicationCategory: "FinanceApplication", operatingSystem: "iOS, Android",
        description: "Scan grocery receipts and see item-level spending by category and store, plus coupon reminders. No bank connection required." },
    ],
  }));

  /* blog index ---------------------------------------------------------- */
  write("blog.html", page({
    path: "/blog",
    title: "TicketBrain Blog | Smart Grocery Shopping Insights",
    description: "Insights on smart grocery shopping, AI-powered receipt analysis, and practical money-saving tips.",
    body: `      <section class="page-hero"><div class="wrap">
        <p class="kicker">Blog</p>
        <h1>Grocery spending, explained</h1>
        <p>Insights on smart grocery shopping, AI-powered receipt analysis, and practical money-saving tips.</p>
      </div></section>
      <section><div class="wrap">
        <div class="posts">
${posts.map((p) => `          <a class="post" href="/blog/${p.slug}">
            ${p.image ? `<img src="${p.image}" alt="" width="800" height="512" loading="lazy">` : ""}
            <span class="in">
              <time datetime="${p.date}">${fmtDate(p.date)}</time>
              <h3>${esc(p.title)}</h3>
              <p>${esc(p.description)}</p>
              <span class="more">Read more →</span>
            </span>
          </a>`).join("\n")}
        </div>
      </div></section>`,
    jsonLd: [{ "@context": "https://schema.org", "@type": "Blog", name: "TicketBrain Blog",
      url: `${SITE_URL}/blog`, publisher: ORG }],
  }));

  /* posts --------------------------------------------------------------- */
  for (const p of posts) {
    const others = posts.filter((o) => o.slug !== p.slug).slice(0, 2);
    write(`blog/${p.slug}.html`, page({
      path: `/blog/${p.slug}`,
      title: `${p.title} | TicketBrain Blog`,
      description: p.description,
      body: `      <section class="page-hero"><div class="wrap">
        <a class="crumb" href="/blog">← Back to blog</a>
        <h1>${esc(p.title)}</h1>
        <p><time datetime="${p.date}">${fmtDate(p.date)}</time></p>
      </div></section>
      <section><div class="wrap">
        ${p.image ? `<img class="hero-img" src="${p.image}" alt="" width="800" height="512">` : ""}
        <article class="prose">
${p.html}
        </article>
${others.length ? `        <aside class="related">
          <h2>Keep reading</h2>
          <div class="related-grid">
${others.map((o) => `            <a href="/blog/${o.slug}"><b>${esc(o.title)}</b><span>${esc(o.description)}</span></a>`).join("\n")}
          </div>
        </aside>` : ""}
      </div></section>`,
      jsonLd: [{ "@context": "https://schema.org", "@type": "BlogPosting",
        headline: p.title, description: p.description, datePublished: p.date,
        image: `${SITE_URL}/sharing-image.png`, author: ORG, publisher: ORG,
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${p.slug}` } }],
    }));
  }

  /* FAQ ----------------------------------------------------------------- */
  write("frequently-asked-questions.html", page({
    path: "/frequently-asked-questions",
    title: "Frequently Asked Questions | TicketBrain",
    description: "Everything you need to know about TicketBrain: how receipt scanning works, what we do with your data, and how the app helps you cut your grocery bill.",
    body: `      <section class="page-hero"><div class="wrap">
        <p class="kicker">FAQ</p>
        <h1>Frequently asked questions</h1>
        <p>Everything you need to know about TicketBrain.</p>
      </div></section>
      <section><div class="wrap">
        <div class="faq-list">
${faq.map((f, i) => `          <details class="faq-item"${i === 0 ? " open" : ""}>
            <summary>${esc(f.q)}</summary>
            <div class="a">${esc(f.a)}</div>
          </details>`).join("\n")}
        </div>
      </div></section>`,
    jsonLd: [{ "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a } })) }],
  }));

  /* privacy policy ------------------------------------------------------ */
  const P = privacy;
  write("privacy-policy.html", page({
    path: "/privacy-policy",
    title: "Privacy Policy | TicketBrain",
    description: "How TicketBrain collects, stores and protects your data. GDPR-compliant privacy policy for our grocery receipt scanning app.",
    body: `      <section class="page-hero"><div class="wrap">
        <p class="kicker">Legal</p>
        <h1>${esc(P.title)}</h1>
        <p class="updated">${esc(P.lastUpdated)}</p>
      </div></section>
      <section><div class="wrap"><div class="doc">
        <h2>${esc(P.whoWeAre_title)}</h2><p>${esc(P.whoWeAre_content)}</p>
        <h2>${esc(P.infoCollect_title)}</h2>
        <p>${esc(P.infoCollect_receipt)}</p><p>${esc(P.infoCollect_email)}</p><p>${esc(P.infoCollect_usage)}</p>
        <h2>${esc(P.howStore_title)}</h2><p>${esc(P.howStore_content)}</p>
        <h2>${esc(P.gdprRights_title)}</h2>
        <p>${esc(P.gdprRights_access)}</p><p>${esc(P.gdprRights_rectification)}</p>
        <p>${esc(P.gdprRights_erasure)}</p><p>${esc(P.gdprRights_portability)}</p>
        <p>${esc(P.gdprRights_objection)}</p>
        <h2>${esc(P.contact_title)}</h2><p>${esc(P.contact_content)}</p>
        <div class="box"><p>${esc(P.contact_email)}<br>${esc(P.contact_address)}</p></div>
        <p>${esc(P.contact_authority)}</p>
      </div></div></section>`,
  }));

  /* 404 ----------------------------------------------------------------- */
  write("404.html", page({
    path: "/404", noindex: true,
    title: "Page not found | TicketBrain",
    description: "This page does not exist.",
    body: `      <section class="page-hero"><div class="wrap">
        <p class="kicker">404</p>
        <h1>This page does not exist</h1>
        <p>The link may be old or mistyped. <a class="crumb" href="/">Go back to the homepage</a>.</p>
      </div></section>`,
  }));

  /* sitemap ------------------------------------------------------------- */
  const urls = [
    ["/", "1.0"], ["/blog", "0.8"],
    ...posts.map((p) => [`/blog/${p.slug}`, "0.7"]),
    ["/frequently-asked-questions", "0.7"], ["/privacy-policy", "0.6"],
  ];
  const today = new Date().toISOString().slice(0, 10);
  writeFileSync(join(DIST, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(([u, pr]) =>
      `  <url>\n    <loc>${SITE_URL}${u}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${pr}</priority>\n  </url>`
    ).join("\n") + `\n</urlset>\n`);
  console.log(`  sitemap.xml                                    ${urls.length} URLs`);

  if (existsSync(join(DIST, "sitemap-es.xml"))) rmSync(join(DIST, "sitemap-es.xml"));
  console.log("\nDone. No JavaScript framework shipped.\n");
}

build();
