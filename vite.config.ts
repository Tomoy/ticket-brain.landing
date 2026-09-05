import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, resolve } from "path";
import { seoRoutes, SITE_URL } from "./seo-routes";

const escapeAttr = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

/**
 * Emits one static HTML file per entry in seo-routes.ts, cloned from the
 * compiled index.html so the hashed asset references stay correct, with the
 * head tags swapped for that route's own. Nothing about the runtime changes:
 * every file still boots the same SPA bundle and React Router picks the page
 * from the URL. Crawlers that don't execute JavaScript now read the right
 * canonical, title and description instead of the homepage's.
 */
const generateRouteHtml = (): Plugin => ({
  name: "generate-route-html",
  apply: "build",
  closeBundle() {
    const distDir = resolve(__dirname, "dist");
    const template = readFileSync(resolve(distDir, "index.html"), "utf-8");

    for (const route of seoRoutes) {
      const url = `${SITE_URL}${route.path}`;
      const title = escapeAttr(route.title);
      const description = escapeAttr(route.description);

      const html = template
        .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
        .replace(
          /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
          `<meta name="description" content="${description}">`
        )
        .replace(
          /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
          `<link rel="canonical" href="${url}">`
        )
        .replace(
          /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
          `<meta property="og:title" content="${title}" />`
        )
        .replace(
          /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
          `<meta property="og:description" content="${description}" />`
        )
        .replace(
          /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
          `<meta property="og:url" content="${url}" />`
        )
        .replace(
          /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
          `<meta name="twitter:title" content="${title}" />`
        )
        .replace(
          /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
          `<meta name="twitter:description" content="${description}" />`
        );

      const outFile = resolve(distDir, route.file);
      mkdirSync(dirname(outFile), { recursive: true });
      writeFileSync(outFile, html);
      console.log(`  generated ${route.file}  ->  ${route.path}`);
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    generateRouteHtml(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html")
      },
    },
  },
  assetsInclude: ['**/*.md'],
}));
