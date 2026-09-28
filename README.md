# TicketBrain landing page

The marketing site for [TicketBrain](https://www.ticketbrain.app), a grocery
receipt scanner for iPhone. You photograph a supermarket receipt, the app reads
every line item, sorts it into categories, and shows which purchases are
pushing your grocery budget up. No bank connection, no account.

**Live:** [ticketbrain.app](https://www.ticketbrain.app) ·
[/es](https://www.ticketbrain.app/es) ·
[App Store](https://apps.apple.com/app/id6809745492)

---

## What this is

A static site generator in one file. No framework, no client-side router, no
build pipeline beyond `node site/build.mjs`. It reads a handful of content
files and writes 25 HTML pages plus a sitemap and an `llms.txt`.

The site previously ran on Vite + React + Tailwind + shadcn. It was rewritten
as static HTML for one reason: **search and answer engines read HTML, and many
of them do not run JavaScript.** A React landing page ships a near-empty
document and fills it in on the client. Whatever did not execute was, for
those crawlers, not there. Ahrefs put the old version at 46 words of
machine-readable content across one indexable page.

Today every page is complete in the HTML response.

```
npm install
npm run dev     # build + serve on :8080
npm run build   # write dist/
```

One runtime dependency: [`marked`](https://github.com/markedjs/marked), for
the blog posts.

## Layout

```
site/
  build.mjs      the generator: routes, <head>, nav, footer, JSON-LD, sitemap
  content.mjs    FAQ, privacy policy, support page, UI strings, store config
  styles.css     one stylesheet, inlined into every page
  pages/         hand-authored homepage bodies (home.en.html, home.es.html)
  posts/         blog posts as markdown with frontmatter, *.md and *.es.md
  assets/        blog images
public/          static files copied to dist/ as-is
api/             one Vercel function: the email signup
dist/            build output, not committed
```

`vercel.json` points Vercel at `node site/build.mjs` and serves `dist/` with
`cleanUrls` on.

## Two languages, one tree

English lives at the root, Spanish under `/es` with translated slugs:

| English | Español |
|---|---|
| `/frequently-asked-questions` | `/es/preguntas-frecuentes` |
| `/privacy` | `/es/privacidad` |
| `/blog/ynab-alternative-groceries` | `/es/blog/alternativa-a-ynab-supermercado` |

The path table lives in `P` at the top of `build.mjs`; add a route there and
both languages get it. Every page carries reciprocal `hreflang` plus
`x-default`, and a translated page always links to its real counterpart rather
than to the other homepage.

A visitor whose browser language does not match the page they landed on gets a
one-line banner offering the other one. It is a suggestion, never a redirect:
redirecting by IP hides content from crawlers and takes the choice away from
people who deliberately asked for a language.

## Built to be quoted, not just ranked

Classic SEO competes for a link in a list. Answer engines, which is what most
people now ask first, quote a passage and name a source. The two overlap but
they are not the same job, and this site is built for both.

What that means concretely here:

- **Everything is in the HTML.** The single biggest factor, and the reason for
  the rewrite.
- **Structured data on every page.** `Organization` with a named founder,
  `WebSite`, `MobileApplication`, `FAQPage` over 13 questions, `BlogPosting`
  per article, `WebPage` for privacy and support. Both languages, identical
  coverage.
- **FAQ questions phrased the way people actually type them.** "Where does all
  my grocery money actually go?" rather than "Features".
- **Comparison tables in the alternative posts**, each conceding the rows a
  competitor wins. A table where the author wins every row reads as marketing
  and gets skipped. The honest one gets quoted.
- **Concrete numbers over adjectives.** "34 items, 11 categories, €87.40"
  survives extraction; "powerful insights" does not.
- **Claims match the code.** The privacy page was written against the actual
  API, and says so in a comment in `content.mjs`. The store badges and the
  `operatingSystem` field follow one `STORES` constant, so the site cannot
  advertise an Android build that has not shipped.
- **[`llms.txt`](https://www.ticketbrain.app/llms.txt)**, generated from the
  real page list so it cannot drift out of sync.

Ahrefs Health Score: 100, zero errors, 22 indexable pages.

## Analytics, only with consent

The site reports to Google Analytics 4 (the `ticketbrain-landing-page` Firebase
project), but nothing from Google loads until the visitor presses "Allow
analytics" in the cookie notice: no script, no cookie, no cookieless ping.
Refusing is one click, the same size as accepting, and "Cookie settings" in
the footer reopens the choice. Withdrawing deletes the `_ga` cookies.

Page views and referrers (including visits from ChatGPT, Perplexity and other
answer engines) come automatically. On top of that, `CONSENT_JS` in
`build.mjs` sends a short list of events: `app_store_click`, `generate_lead`
(Android waitlist), `lang_switch`, `nav_click`, `get_app_click`, `faq_open`,
`related_post_click`, `contact_click`. The list and its parameters are
documented above the code.

The privacy policy's "This Website" section describes exactly this. Change one,
change the other.

## Adding things

**A blog post.** Drop `slug.md` and `slug.es.md` in `site/posts/`. Frontmatter:

```yaml
title: "The headline, as it appears as the H1"
seoTitle: "Shorter, if the H1 runs past 60 characters"
date: "2026-04-07"
updated: "2026-09-28"   # optional, emits dateModified
description: "One sentence. Becomes the meta description and the card text."
slug: "url-slug"
image: "blog-name.jpg"  # from site/assets/
```

Markdown tables become comparison tables automatically: on a phone each row
folds into a card so no column ends up scrolled off the edge.

**A store link.** When the Android build ships, set `STORES.play` in
`content.mjs`. Six badges, the schema and `llms.txt` all follow.

**An FAQ entry.** Append to the `faq` array in `content.mjs`. The `FAQPage`
JSON-LD is generated from the same array, so the page and the structured data
cannot disagree.

## License

Not open source. The code is public so the approach can be read and argued
with; the TicketBrain name, logo and copy are not free to reuse.

Built by [Tomás Moyano](https://github.com/Tomoy) in Barcelona.
