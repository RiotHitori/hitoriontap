import crypto from "node:crypto";

const sha256 = (s) => crypto.createHash("sha256").update(String(s), "utf8").digest("hex");

// Repo công khai nên chỉ lưu mã băm của mật khẩu mặc định. Đặt APP_PASSWORD trên Vercel để đổi mật khẩu.
const DEFAULT_PASSWORD_SHA256 = "ee6ca19a4277ca4ef832417504ec135f96564252ae606e042418adfffb8b9c4a";

function passwordHash() {
  if (process.env.APP_PASSWORD) return sha256(process.env.APP_PASSWORD);
  return process.env.APP_PASSWORD_SHA256 || DEFAULT_PASSWORD_SHA256;
}

function safeEqual(a, b) {
  const x = Buffer.from(a), y = Buffer.from(b);
  return x.length === y.length && crypto.timingSafeEqual(x, y);
}

export function checkPassword(pw) {
  return typeof pw === "string" && safeEqual(sha256(pw.trim()), passwordHash());
}

const TOKEN_DAYS = 90;
const secret = () => process.env.SESSION_SECRET || `${passwordHash()}:ontoan7-session`;
const b64 = (s) => Buffer.from(s, "utf8").toString("base64url");
const hmac = (s) => crypto.createHmac("sha256", secret()).update(s).digest("base64url");

export function nameKey(name) {
  return String(name)
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d").replace(/Đ/g, "D")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

export function cleanName(name) {
  return String(name || "").replace(/\s+/g, " ").trim().slice(0, 40);
}

export function signToken(name) {
  const payload = b64(JSON.stringify({ n: name, k: nameKey(name), t: Date.now() }));
  return `${payload}.${hmac(payload)}`;
}

export function readToken(request) {
  const auth = request.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  const [payload, sig] = token.split(".");
  if (!payload || !sig || !safeEqual(hmac(payload), sig)) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    if (!data || !data.k || Date.now() - data.t > TOKEN_DAYS * 864e5) return null;
    return { name: data.n, key: data.k };
  } catch {
    return null;
  }
}

export const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } });

export async function readBody(request) {
  try {
    return await request.json();
  } catch {
    return {};
  }
}
