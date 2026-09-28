// Máy chủ chạy thử trên máy: phục vụ file tĩnh + các hàm trong /api giống Vercel.
import http from "node:http";
import { promises as fs, existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const port = Number(process.env.PORT) || 5174;

if (existsSync(".env.local")) {
  for (const line of readFileSync(".env.local", "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".svg": "image/svg+xml", ".json": "application/json", ".png": "image/png" };

async function handleApi(req, res, name) {
  const file = path.join(root, "api", `${name}.js`);
  if (name.startsWith("_") || !existsSync(file)) return send(res, 404, "Not found");
  const mod = await import(`${pathToFileURL(file).href}?t=${Date.now()}`);
  const fn = mod[req.method];
  if (!fn) return send(res, 405, "Method not allowed");
  const chunks = [];
  for await (const c of req) chunks.push(c);
  const request = new Request(`http://localhost:${port}${req.url}`, {
    method: req.method,
    headers: req.headers,
    body: ["GET", "HEAD"].includes(req.method) ? undefined : Buffer.concat(chunks)
  });
  const response = await fn(request);
  res.writeHead(response.status, Object.fromEntries(response.headers));
  res.end(Buffer.from(await response.arrayBuffer()));
}

function send(res, status, body) {
  res.writeHead(status, { "content-type": "text/plain; charset=utf-8" });
  res.end(body);
}

http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, "http://x");
    const api = url.pathname.match(/^\/api\/([\w-]+)\/?$/);
    if (api) return await handleApi(req, res, api[1]);
    let p = path.normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, "");
    if (p.endsWith("/")) p += "index.html";
    const file = path.join(root, p);
    if (!file.startsWith(root) || /[/\\](\.data|node_modules|api)[/\\]/.test(file)) return send(res, 403, "Forbidden");
    const data = await fs.readFile(file);
    res.writeHead(200, { "content-type": TYPES[path.extname(file)] || "application/octet-stream", "cache-control": "no-store" });
    res.end(data);
  } catch (e) {
    if (e.code === "ENOENT") return send(res, 404, "Not found");
    console.error(e);
    send(res, 500, "Server error");
  }
}).listen(port, () => console.log(`Ôn Toán 7 đang chạy tại http://localhost:${port}`));
