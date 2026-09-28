/**
 * Static site generator for ticketbrain.app — bilingual (en / es).
 *
 * English lives at the root, Spanish under /es with translated slugs. Every
 * page declares its own canonical plus hreflang alternates when a counterpart
 * exists, and carries a language switcher that jumps to that counterpart
 * rather than dumping you on the other homepage.
 *
 * Sources:
 *   site/pages/home.<lang>.html   hand-authored homepage body
 *   site/posts/*.md               English posts; *.es.md are their Spanish
 *                                 counterparts, matched by base filename
 *   site/content.mjs              FAQ, privacy policy, privacy page, UI strings
 *
 * Only three of the six posts have a Spanish version, so the Spanish blog is
 * shorter and those three are the only posts with hreflang pairs. That is
 * correct: hreflang must only point at a real translation.
 */
import { marked } from "marked";
import { cpSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "fs";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";
import { STORES, faq, privacyDoc, privacyPage, supportPage, ui } from "./content.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const SITE = "https://www.ticketbrain.app";
const LANGS = ["en", "es"];

const read = (p) => readFileSync(join(ROOT, p), "utf-8");
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
  .replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const CSS = read("site/styles.css");
const SIGNUP_JS = read("site/pages/_signup.js");
marked.setOptions({ breaks: true, gfm: true });

/* ------------------------------------------------------------------ paths */

const P = {
  en: { home: "/", blog: "/blog", post: (s) => `/blog/${s}`,
        faq: "/frequently-asked-questions", privacy: "/privacy", policy: "/privacy-policy",
        support: "/support" },
  es: { home: "/es", blog: "/es/blog", post: (s) => `/es/blog/${s}`,
        faq: "/es/preguntas-frecuentes", privacy: "/es/privacidad",
        policy: "/es/politica-de-privacidad", support: "/es/soporte" },
};
const fileFor = (p) =>
  p === "/" ? "index.html" : p === "/es" ? "es/index.html" : `${p.slice(1)}.html`;

/* ----------------------------------------------------------------- layout */

/** Link to a homepage section: "/#how" in English, "/es#how" in Spanish. */
const anchor = (lang, id) => `${P[lang].home === "/" ? "/" : P[lang].home}#${id}`;

const navFor = (lang) => {
  const t = ui[lang], p = P[lang];
  return [
    [anchor(lang, "how"), t.nav[0], ""],
    [anchor(lang, "features"), t.nav[1], ""],
    [anchor(lang, "coupons"), t.nav[2], ""],
    [p.blog, t.nav[3], ""],
    [p.faq, t.nav[4], ""],
    [p.privacy, t.nav[5], ""],
  ];
};

/** Switcher target: the counterpart page, or the other language's home. */
const switcher = (lang, alt) => {
  const other = lang === "en" ? "es" : "en";
  const href = alt || P[other].home;
  const globe = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" '
    + 'stroke-width="1.9" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/>'
    + '<path d="M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3z"/></svg>';
  return `<a class="langswitch" href="${href}" hreflang="${other}" lang="${other}">${globe}${ui[lang].otherLangName}</a>`;
};

/**
 * `active` is the nav entry matching the page being rendered, so the current
 * section is marked with aria-current. The three homepage anchors never get it:
 * without scroll-spy there is no honest way to say which one you are "on".
 */
const activeFor = (path) => {
  if (/^\/(es\/)?blog(\/|$)/.test(path)) return "blog";
  if (/(frequently-asked-questions|preguntas-frecuentes)$/.test(path)) return "faq";
  if (/(privacy|privacidad|privacy-policy|politica-de-privacidad)$/.test(path)) return "privacy";
  return null;
};

const header = (lang, alt, active) => {
  const t = ui[lang], p = P[lang], nav = navFor(lang);
  const keyed = [null, null, null, "blog", "faq", "privacy"];
  const links = (indent) => nav.map(([h, l, c], i) => {
    const cur = keyed[i] && keyed[i] === active ? ' aria-current="page"' : "";
    return `${indent}<a href="${h}"${c}${cur}>${esc(l)}</a>`;
  }).join("\n");
  return `
    <header class="nav">
      <div class="wrap nav-in">
        <a class="brand" href="${P[lang].home}">
          <img src="/lovable-uploads/logo-medium-light.png" alt="" width="34" height="34">
          <span>Ticket<b>Brain</b></span>
        </a>
        <nav class="nav-links">
${links("          ")}
          ${switcher(lang, alt)}
        </nav>
        <a class="btn" href="${anchor(lang, "get")}">${esc(t.getApp)}</a>
        <details class="menu">
          <summary aria-label="${esc(t.openMenu)}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10261d" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </summary>
          <div class="menu-panel">
${links("            ")}
            ${switcher(lang, alt)}
            <a class="btn" href="${anchor(lang, "get")}">${esc(t.getApp)}</a>
          </div>
        </details>
      </div>
    </header>`;
};

/* ---------------------------------------------------------- store badges */

const APPLE_ICON = `<svg viewBox="0 0 16 20" width="19" height="23" aria-hidden="true"><path d="M13.1 10.6c0-2 1.6-3 1.7-3-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.2 2C1.7 10.6 2.8 14.4 4 16.5c.6 1 1.4 2.1 2.3 2.1.9 0 1.3-.6 2.4-.6 1.1 0 1.4.6 2.4.6 1 0 1.6-1 2.2-2 .7-1.1 1-2.2 1-2.3 0 0-1.9-.7-2-2.9zM11.2 4c.5-.6.9-1.5.8-2.4-.8 0-1.7.5-2.3 1.2-.5.6-.9 1.5-.8 2.4.9 0 1.8-.5 2.3-1.2z"/></svg>`;
const PLAY_ICON = `<svg viewBox="0 0 14 16" width="17" height="19" aria-hidden="true"><path d="M.6.4C.3.7.1 1.1.1 1.7v12.6c0 .6.2 1 .5 1.3l.1.1L7.8 8.6v-.2L.7.3.6.4z"/><path d="M10.2 11l-2.4-2.4v-.2l2.4-2.4.1.1 2.8 1.6c.8.5.8 1.2 0 1.7L10.2 11z"/></svg>`;

/**
 * One badge per store. With a URL in STORES it is a real link ("Download on
 * the App Store"); without one it stays an inert "Coming soon to" label. The
 * same markup feeds the hero, the final CTA and the footer, so the day the
 * Android build ships only STORES.play changes.
 */
const storeBadges = (lang, { dark = false, indent = "" } = {}) => {
  const t = ui[lang];
  const badge = (url, icon, name, label) => {
    const cls = `store${dark ? " store-dark" : ""}${url ? "" : " store-soon"}`;
    const inner = `${icon}<span><small>${esc(url ? t.storeLive : t.storeSoon)}</small><strong>${name}</strong></span>`;
    return url
      ? `<a class="${cls}" href="${url}" aria-label="${esc(label)}">${inner}</a>`
      : `<span class="${cls}">${inner}</span>`;
  };
  return [
    badge(STORES.apple, APPLE_ICON, "App Store", t.appStoreLabel),
    badge(STORES.play, PLAY_ICON, "Google Play", t.playStoreLabel),
  ].map((b) => indent + b).join("\n");
};

/**
 * Comparison tables are the densest answer to "how does this compare to X",
 * and the shape quoting engines extract most reliably, so the alternative
 * posts lean on them. Two things have to happen for them to survive a phone:
 * a wrapper that scrolls on its own (the page must never slide sideways), and
 * a copy of each column heading on every cell, so CSS can stack the rows into
 * cards instead of hiding the column the reader came for.
 */
const dressTables = (html) =>
  html.replace(/<table>([\s\S]*?)<\/table>/g, (_, inner) => {
    const head = inner.match(/<thead>([\s\S]*?)<\/thead>/);
    const cols = head
      ? [...head[1].matchAll(/<th[^>]*>([\s\S]*?)<\/th>/g)]
          .map((m) => m[1].replace(/<[^>]+>/g, "").trim())
      : [];
    let col = 0;
    const body = inner.replace(/<tbody>([\s\S]*?)<\/tbody>/, (__, rows) =>
      `<tbody>${rows.replace(/<tr>|<td[^>]*>/g, (tag) => {
        if (tag === "<tr>") { col = 0; return tag; }
        const label = cols[col++] || "";
        return label ? `<td data-col="${esc(label)}">` : tag;
      })}</tbody>`);
    return `<div class="tablewrap"><table>${body}</table></div>`;
  });

/* Minimal WebPage entity for the pages that are not the home, the blog or the
   FAQ. "Is TicketBrain safe?" and "how do I contact them?" are questions an
   answer engine gets asked, and these are the pages that hold the answer. */
const webPage = (lang, path, name, description) => ({
  "@context": "https://schema.org", "@type": "WebPage",
  "@id": SITE + path, url: SITE + path, name, description,
  inLanguage: ui[lang].locale, isPartOf: { "@type": "WebSite", name: "TicketBrain", url: SITE },
  publisher: ORG,
});

const footer = (lang) => {
  const t = ui[lang], p = P[lang];
  return `
    <footer>
      <div class="wrap">
        <div class="fgrid2">
          <div>
            <span class="brand" style="margin-bottom:16px">
              <img src="/lovable-uploads/logo-medium-light.png" alt="" width="34" height="34" loading="lazy">
              <span>Ticket<b>Brain</b></span>
            </span>
            <p style="max-width:34ch">${esc(t.footerTag)}</p>
            <div class="cta-row" style="margin-top:22px">
${storeBadges(lang, { dark: true, indent: "              " })}
            </div>
          </div>
          <div>
            <h4>${esc(t.product)}</h4>
            <ul>
              <li><a href="${anchor(lang, "how")}">${esc(t.nav[0])}</a></li>
              <li><a href="${anchor(lang, "features")}">${esc(t.nav[1])}</a></li>
              <li><a href="${anchor(lang, "coupons")}">${esc(t.nav[2])}</a></li>
            </ul>
          </div>
          <div>
            <h4>${esc(t.more)}</h4>
            <ul>
              <li><a href="${p.blog}">${esc(t.nav[3])}</a></li>
              <li><a href="${p.faq}">${esc(t.nav[4])}</a></li>
              <li><a href="${p.privacy}">${esc(t.nav[5])}</a></li>
              <li><a href="${p.policy}">${esc(t.privacyPolicy)}</a></li>
              <li><a href="${p.support}">${esc(t.support)}</a></li>
            </ul>
          </div>
        </div>
        <p class="legal">© 2026 TicketBrain · Barcelona</p>
      </div>
    </footer>`;
};

function page({ lang, path, alt, title, description, body, jsonLd = [], noindex = false, script = "" }) {
  const url = SITE + path;
  const alts = alt
    ? `    <link rel="alternate" hreflang="${lang}" href="${url}">
    <link rel="alternate" hreflang="${lang === "en" ? "es" : "en"}" href="${SITE}${alt}">
    <link rel="alternate" hreflang="x-default" href="${SITE}${lang === "en" ? path : alt}">\n`
    : "";
  const ld = jsonLd.map((d) =>
    `    <script type="application/ld+json">${JSON.stringify(d)}</script>`).join("\n");
  const other = lang === "en" ? "es" : "en";
  const o = ui[other];
  // Sólo se ofrece el idioma contrario si esta página tiene equivalente: los
  // tres posts que existen únicamente en inglés no lo tienen.
  const langbar = alt
    ? `    <div class="langbar" id="langbar" data-lang="${other}" hidden>
      <img src="/lovable-uploads/logo-medium-light.png" alt="" width="26" height="26">
      <span>${esc(o.offerTitle)}</span>
      <a href="${alt}" hreflang="${other}" lang="${other}">${esc(o.offerCta)}</a>
      <button type="button" class="langbar-close" aria-label="${esc(o.offerClose)}">&times;</button>
    </div>\n`
    : "";

  return `<!doctype html>
<html lang="${lang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}">
    <meta name="robots" content="${noindex ? "noindex, follow" : "index, follow"}">
    <meta name="author" content="TicketBrain" />
${noindex ? "" : `    <link rel="canonical" href="${url}">\n`}${alts}    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${url}" />
    <meta property="og:locale" content="${lang === "es" ? "es_ES" : "en_GB"}" />
    <meta property="og:image" content="${SITE}/sharing-image.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <meta name="twitter:site" content="TicketBrain" />
    <meta name="twitter:image" content="${SITE}/sharing-image.png" />
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
${header(lang, alt, activeFor(path))}
    <main>
${body}
    </main>
${footer(lang)}
${langbar}    <script>
      // Cierra el menú móvil al pulsar un enlace: es un <details>, y al saltar
      // a un ancla de la misma página se quedaba abierto tapándola.
      document.querySelectorAll(".menu-panel a").forEach(function (a) {
        a.addEventListener("click", function () {
          var m = document.querySelector(".menu");
          if (m) m.open = false;
        });
      });

      // Sugerencia de idioma: se muestra sólo si el navegador está en el otro
      // idioma y no se ha descartado antes. localStorage puede lanzar en modo
      // privado, así que todo va envuelto.
      (function () {
        var bar = document.getElementById("langbar");
        if (!bar) return;
        var KEY = "tb-lang-choice";
        var seen;
        try { seen = localStorage.getItem(KEY); } catch (e) {}
        var browser = (navigator.language || "").toLowerCase().split("-")[0];
        if (seen || browser !== bar.getAttribute("data-lang")) return;
        bar.hidden = false;
        function remember() {
          try { localStorage.setItem(KEY, "1"); } catch (e) {}
        }
        bar.querySelector(".langbar-close").addEventListener("click", function () {
          remember();
          bar.hidden = true;
        });
        bar.querySelector("a").addEventListener("click", remember);
      })();
    </script>
${script ? `    <script>${script}</script>` : ""}
  </body>
</html>
`;
}

/* ------------------------------------------------------------------ posts */

function loadPosts() {
  const dir = join(ROOT, "site/posts");
  const parse = (file) => {
    const parts = readFileSync(join(dir, file), "utf-8").split("---");
    const meta = {};
    parts[1].trim().split("\n").forEach((line) => {
      const i = line.indexOf(":");
      if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
    });
    return { ...meta, image: meta.image ? `/blog-media/${meta.image}` : null,
             html: dressTables(marked.parse(parts.slice(2).join("---").trim())) };
  };
  const files = readdirSync(dir).filter((f) => f.endsWith(".md"));
  const out = { en: [], es: [] };
  for (const f of files.filter((f) => !f.endsWith(".es.md"))) {
    const base = f.replace(/\.md$/, "");
    const en = parse(f);
    const esFile = `${base}.es.md`;
    const es = files.includes(esFile) ? parse(esFile) : null;
    en.alt = es ? P.es.post(es.slug) : null;
    out.en.push(en);
    if (es) { es.alt = P.en.post(en.slug); out.es.push(es); }
  }
  const byDate = (a, b) => new Date(b.date) - new Date(a.date);
  out.en.sort(byDate); out.es.sort(byDate);
  return out;
}

const fmtDate = (d, lang) => new Date(d).toLocaleDateString(ui[lang].locale,
  { year: "numeric", month: "long", day: "numeric" });

/* sameAs is how a search or answer engine confirms this is a real entity and
   not just a site making claims about itself: every profile it can corroborate
   against. Add a URL here only once it actually exists and names TicketBrain. */
const SAME_AS = ["https://apps.apple.com/app/id6809745492"];

const ORG = { "@type": "Organization", name: "TicketBrain", url: SITE,
  sameAs: SAME_AS,
  logo: { "@type": "ImageObject", url: `${SITE}/icon-512x512.png`, width: 512, height: 512 } };

/* ------------------------------------------------------------------ build */

let count = 0;
const write = (path, html) => {
  const out = join(DIST, fileFor(path));
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
  count++;
  console.log(`  ${path.padEnd(40)} ${fileFor(path).padEnd(40)} ${String(html.length).padStart(6)}b`);
};

function build() {
  rmSync(DIST, { recursive: true, force: true });
  mkdirSync(DIST, { recursive: true });
  // .DS_Store rides along in public/ on macOS. Vercel does not serve dotfiles,
  // so it never leaked, but there is no reason to ship it either.
  cpSync(join(ROOT, "public"), DIST, {
    recursive: true,
    filter: (src) => !src.endsWith(".DS_Store"),
  });
  rmSync(join(DIST, "sitemap-es.xml"), { force: true });
  const media = join(DIST, "blog-media");
  mkdirSync(media, { recursive: true });
  for (const f of readdirSync(join(ROOT, "site/assets"))) {
    if (/^blog-.*\.(jpg|jpeg|png|webp)$/i.test(f)) cpSync(join(ROOT, "site/assets", f), join(media, f));
  }

  const posts = loadPosts();
  const urls = [];
  console.log("");

  for (const lang of LANGS) {
    const t = ui[lang], p = P[lang], L = posts[lang];

    /* home */
    write(p.home, page({
      lang, path: p.home, alt: lang === "en" ? P.es.home : P.en.home,
      title: lang === "en"
        ? "Grocery Receipt Scanner App to Cut Your Bill | TicketBrain"
        : "Escanea tickets del súper y baja tu factura | TicketBrain",
      description: lang === "en"
        ? "Scan any supermarket receipt and TicketBrain reads every item, categorises it, and shows which purchases are driving your grocery budget up."
        : "Escanea cualquier ticket del supermercado y TicketBrain lee cada producto, lo categoriza y te muestra qué compras están disparando tu presupuesto.",
      body: read(`site/pages/home.${lang}.html`)
        .replaceAll("<!--STORES-->", storeBadges(lang, { indent: "              " }).trimStart()),
      script: SIGNUP_JS,
      /* Both homepages carry the full entity graph. The Spanish one used to
         ship none at all, which left half the site structurally invisible to
         anything reading the page as data rather than as prose. */
      jsonLd: [
        { "@context": "https://schema.org", ...ORG,
          description: lang === "en"
            ? "Receipt scanning app that turns grocery receipts into spending insights."
            : "App de escaneo de tickets que convierte la compra del súper en información sobre tu gasto.",
          email: "hello@ticketbrain.app",
          address: { "@type": "PostalAddress", addressLocality: "Barcelona", addressCountry: "ES" } },
        { "@context": "https://schema.org", "@type": "WebSite", name: "TicketBrain",
          url: SITE + (lang === "en" ? "" : "/es"), inLanguage: ui[lang].locale },
        { "@context": "https://schema.org", "@type": "MobileApplication", name: "TicketBrain",
          applicationCategory: "FinanceApplication",
          /* Only the platforms you can actually install today. Listing Android
             here while it is still in testing is the kind of small inaccuracy
             an answer engine repeats back to someone as fact. */
          operatingSystem: STORES.play ? "iOS, Android" : "iOS",
          downloadUrl: STORES.apple, installUrl: STORES.apple,
          inLanguage: ui[lang].locale,
          offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
          description: lang === "en"
            ? "Scan grocery receipts and see item-level spending by category and store, plus coupon reminders. No bank connection required."
            : "Escanea tickets del súper y ve el gasto producto a producto por categoría y tienda, con avisos de cupones. Sin conectar el banco." },
      ],
    }));
    urls.push([p.home, "1.0"]);

    /* blog index */
    write(p.blog, page({
      lang, path: p.blog, alt: lang === "en" ? P.es.blog : P.en.blog,
      title: lang === "en" ? "TicketBrain Blog | Smart Grocery Shopping Insights"
                           : "Blog de TicketBrain | Compra inteligente en el súper",
      description: t.blogLede,
      body: `      <section class="page-hero"><div class="wrap">
        <p class="kicker">Blog</p>
        <h1>${esc(t.blogTitle)}</h1>
        <p>${esc(t.blogLede)}</p>
      </div></section>
      <section><div class="wrap">
        <div class="posts">
${L.map((x) => `          <a class="post" href="${p.post(x.slug)}">
            ${x.image ? `<img src="${x.image}" alt="" width="800" height="512" loading="lazy">` : ""}
            <span class="in">
              <time datetime="${x.date}">${fmtDate(x.date, lang)}</time>
              <h3>${esc(x.title)}</h3>
              <p>${esc(x.description)}</p>
              <span class="more">${esc(t.readMore)}</span>
            </span>
          </a>`).join("\n")}
        </div>
      </div></section>`,
      jsonLd: [{ "@context": "https://schema.org", "@type": "Blog",
        name: "TicketBrain Blog", url: SITE + p.blog, publisher: ORG, inLanguage: lang }],
    }));
    urls.push([p.blog, "0.8"]);

    /* posts */
    for (const x of L) {
      const others = L.filter((o) => o.slug !== x.slug).slice(0, 2);
      write(p.post(x.slug), page({
        lang, path: p.post(x.slug), alt: x.alt,
        title: `${x.seoTitle || x.title} | TicketBrain`, description: x.description,
        body: `      <section class="page-hero"><div class="wrap narrow">
        <a class="crumb" href="${p.blog}">${esc(t.backToBlog)}</a>
        <h1>${esc(x.title)}</h1>
        <p><time datetime="${x.date}">${fmtDate(x.date, lang)}</time></p>
      </div></section>
      <section><div class="wrap narrow">
        ${x.image ? `<img class="hero-img" src="${x.image}" alt="" width="800" height="512">` : ""}
        <article class="prose">
${x.html}
        </article>
${others.length ? `        <aside class="related">
          <h2>${esc(t.keepReading)}</h2>
          <div class="related-grid">
${others.map((o) => `            <a href="${p.post(o.slug)}"><b>${esc(o.title)}</b><span>${esc(o.description)}</span></a>`).join("\n")}
          </div>
        </aside>` : ""}
      </div></section>`,
        jsonLd: [{ "@context": "https://schema.org", "@type": "BlogPosting",
          headline: x.title, description: x.description, datePublished: x.date,
          dateModified: x.updated || x.date, inLanguage: lang,
          image: `${SITE}/sharing-image.png`, author: ORG, publisher: ORG,
          mainEntityOfPage: { "@type": "WebPage", "@id": SITE + p.post(x.slug) } }],
      }));
      urls.push([p.post(x.slug), "0.7"]);
    }

    /* FAQ */
    const F = faq[lang];
    write(p.faq, page({
      lang, path: p.faq, alt: lang === "en" ? P.es.faq : P.en.faq,
      title: lang === "en" ? "Frequently Asked Questions | TicketBrain"
                           : "Preguntas frecuentes | TicketBrain",
      description: lang === "en"
        ? "Everything you need to know about TicketBrain: how receipt scanning works, what we do with your data, and how the app helps you cut your grocery bill."
        : "Todo lo que necesitas saber sobre TicketBrain: cómo funciona el escaneo de tickets, qué hacemos con tus datos y cómo te ayuda a ahorrar.",
      body: `      <section class="page-hero"><div class="wrap narrow">
        <p class="kicker">${esc(t.nav[4])}</p>
        <h1>${esc(t.faqTitle)}</h1>
        <p>${esc(t.faqLede)}</p>
      </div></section>
      <section><div class="wrap narrow">
        <div class="faq-list">
${F.map((f, i) => `          <details class="faq-item"${i === 0 ? " open" : ""}>
            <summary>${esc(f.q)}</summary>
            <div class="a">${esc(f.a)}</div>
          </details>`).join("\n")}
        </div>
      </div></section>`,
      jsonLd: [{ "@context": "https://schema.org", "@type": "FAQPage", inLanguage: lang,
        mainEntity: F.map((f) => ({ "@type": "Question", name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a } })) }],
    }));
    urls.push([p.faq, "0.7"]);

    /* privacy approach page */
    const PP = privacyPage[lang];
    write(p.privacy, page({
      lang, path: p.privacy, alt: lang === "en" ? P.es.privacy : P.en.privacy,
      title: lang === "en" ? "Privacy: no bank connection, no stored photos | TicketBrain"
                           : "Privacidad: sin conexión bancaria | TicketBrain",
      description: PP.lede,
      jsonLd: [webPage(lang, p.privacy, PP.title, PP.lede)],
      body: `      <section class="page-hero"><div class="wrap narrow">
        <p class="kicker">${esc(PP.kicker)}</p>
        <h1>${esc(PP.title)}</h1>
        <p>${esc(PP.lede)}</p>
      </div></section>
      <section><div class="wrap narrow">
        <div class="faq-list">
${PP.cards.map(([h, b]) => `          <div class="faq-item" style="padding:22px 24px">
            <h2 style="font-size:19px;margin-bottom:8px">${esc(h)}</h2>
            <p style="margin:0">${esc(b)}</p>
          </div>`).join("\n")}
          <p style="margin-top:26px"><a class="lnk" href="${p.policy}">${esc(PP.docLink)}</a></p>
        </div>
      </div></section>`,
    }));
    urls.push([p.privacy, "0.6"]);

    /* privacy policy (legal) */
    const D = privacyDoc[lang];
    write(p.policy, page({
      lang, path: p.policy, alt: lang === "en" ? P.es.policy : P.en.policy,
      title: lang === "en" ? "Privacy Policy | TicketBrain" : "Política de Privacidad | TicketBrain",
      description: lang === "en"
        ? "How TicketBrain collects, stores and protects your data. GDPR-compliant privacy policy for our grocery receipt scanning app."
        : "Cómo TicketBrain recoge, almacena y protege tus datos. Política de privacidad conforme al RGPD de nuestra app de escaneo de tickets.",
      jsonLd: [webPage(lang, p.policy, D.title, D.summary)],
      body: `      <section class="page-hero"><div class="wrap narrow">
        <p class="kicker">${esc(t.legalKicker)}</p>
        <h1>${esc(D.title)}</h1>
        <p class="updated">${esc(D.lastUpdated)}</p>
      </div></section>
      <section><div class="wrap narrow"><div class="doc">
        <div class="box"><p style="margin:0">${esc(D.summary)}</p></div>
${D.sections.map(s => `        <h2>${esc(s.h)}</h2>
${s.body.map(b => b.list
  ? `        <ul>\n${b.list.map(i => `          <li>${esc(i)}</li>`).join("\n")}\n        </ul>`
  : `        <p>${esc(b.p)}</p>`).join("\n")}`).join("\n")}
        <h2>${esc(D.contact_title)}</h2><p>${esc(D.contact_content)}</p>
        <div class="box"><p>${esc(D.contact_email)}<br>${esc(D.contact_address)}</p></div>
        <p>${esc(D.contact_authority)}</p>
      </div></div></section>`,
    }));
    urls.push([p.policy, "0.6"]);

    /* support: the URL App Store Connect and Play Console point at */
    const S = supportPage[lang];
    const mailto = `mailto:${S.email}?subject=${encodeURIComponent(S.emailSubject)}`;
    write(p.support, page({
      lang, path: p.support, alt: lang === "en" ? P.es.support : P.en.support,
      title: lang === "en" ? "Support | TicketBrain" : "Soporte | TicketBrain",
      description: S.lede,
      jsonLd: [webPage(lang, p.support, S.title, S.lede)],
      body: `      <section class="page-hero"><div class="wrap narrow">
        <p class="kicker">${esc(S.kicker)}</p>
        <h1>${esc(S.title)}</h1>
        <p>${esc(S.lede)}</p>
      </div></section>
      <section><div class="wrap narrow">
        <div class="support-contact">
          <a class="btn" href="${mailto}">${esc(S.emailCta)}</a>
          <a class="support-email" href="${mailto}">${esc(S.email)}</a>
          <p>${esc(S.emailNote)}</p>
        </div>
        <h2 class="support-h2">${esc(S.faqTitle)}</h2>
        <div class="faq-list">
${S.faq.map(([q, a]) => `          <details class="faq-item">
            <summary>${esc(q)}</summary>
            <div class="a">${esc(a)}</div>
          </details>`).join("\n")}
        </div>
        <h2 class="support-h2">${esc(S.moreTitle)}</h2>
        <ul class="support-links">
${S.links.map(([l, k]) => `          <li><a class="lnk" href="${p[k]}">${esc(l)}</a></li>`).join("\n")}
        </ul>
      </div></section>`,
    }));
    urls.push([p.support, "0.6"]);
  }

  /* 404 — English only; Vercel serves one file for every unmatched path */
  const t = ui.en;
  writeFileSync(join(DIST, "404.html"), page({
    lang: "en", path: "/404", noindex: true,
    title: "Page not found | TicketBrain", description: "This page does not exist.",
    body: `      <section class="page-hero"><div class="wrap">
        <p class="kicker">404</p>
        <h1>${esc(t.notFoundTitle)}</h1>
        <p>${esc(t.notFoundLede)} <a class="crumb" href="/">${esc(t.notFoundCta)}</a>.</p>
      </div></section>`,
  }));
  count++;

  const today = new Date().toISOString().slice(0, 10);
  writeFileSync(join(DIST, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(([u, pr]) => `  <url>\n    <loc>${SITE}${u}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${pr}</priority>\n  </url>`).join("\n") +
    `\n</urlset>\n`);

  /* llms.txt: the same map the sitemap gives a crawler, written as prose an
     answer engine can read in one pass. Support for it is still patchy, but
     it is generated from the real page list, so it cannot drift. */
  const lines = (lang) => {
    const p = P[lang], L = posts[lang];
    return [`- [${lang === "en" ? "Home" : "Inicio"}](${SITE}${p.home})`,
            `- [${ui[lang].faqTitle}](${SITE}${p.faq})`,
            `- [${ui[lang].privacyPolicy}](${SITE}${p.privacy})`,
            `- [Blog](${SITE}${p.blog})`,
            ...L.map((x) => `- [${x.title}](${SITE}${p.post(x.slug)}): ${x.description}`)].join("\n");
  };
  writeFileSync(join(DIST, "llms.txt"), `# TicketBrain

> A grocery receipt scanner for iPhone. Photograph a supermarket receipt and
> the app reads every line item, sorts it into categories, and shows which
> purchases are pushing your grocery budget up. No bank connection and no
> account; receipts are stored on the phone, and the photo is read once and
> never kept. Free to download, with a free tier and a subscription for
> unlimited scanning. Made in Barcelona. Android is in testing.

## English
${lines("en")}

## Español
${lines("es")}

## Notes
- The site is static HTML; nothing requires JavaScript to read.
- App Store: ${STORES.apple}
- Google Play: ${STORES.play || "not released yet, the Android build is in final testing"}
- Contact: hello@ticketbrain.app
`);

  console.log(`\n  ${count} pages · sitemap with ${urls.length} URLs · llms.txt · no JavaScript framework\n`);
}

build();
