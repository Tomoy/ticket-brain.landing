/**
 * Tiny static server for local preview. Mirrors how Vercel serves dist/:
 * extension-less paths resolve to <name>.html, unknown paths return 404.html
 * with a real 404 status. No dependencies.
 */
import { createServer } from "http";
import { existsSync, readFileSync, statSync } from "fs";
import { extname, join, resolve } from "path";

const DIST = resolve(process.cwd(), "dist");
const PORT = Number(process.env.PORT) || 8080;
const TYPES = {
  ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript",
  ".json": "application/json", ".xml": "application/xml", ".svg": "image/svg+xml",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".webp": "image/webp", ".ico": "image/x-icon", ".txt": "text/plain; charset=utf-8",
};

const send = (res, code, file) => {
  res.writeHead(code, { "Content-Type": TYPES[extname(file)] || "application/octet-stream" });
  res.end(readFileSync(file));
};

createServer((req, res) => {
  const url = decodeURIComponent(req.url.split("?")[0]);
  const base = join(DIST, url.replace(/\/+$/, "") || "/index.html");
  for (const candidate of [base, `${base}.html`, join(base, "index.html")]) {
    if (existsSync(candidate) && statSync(candidate).isFile()) return send(res, 200, candidate);
  }
  send(res, 404, join(DIST, "404.html"));
}).listen(PORT, () => console.log(`\n  http://localhost:${PORT}\n`));
