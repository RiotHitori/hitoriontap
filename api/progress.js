import { json, readBody, readToken } from "./_lib/auth.js";
import { emptyProgress, readProgress, writeProgress } from "./_lib/store.js";

const ID = /^[a-z0-9-]{1,24}$/;
const STATES = new Set(["ok", "shown"]);

export async function GET(request) {
  const user = readToken(request);
  if (!user) return json({ error: "Phiên đăng nhập đã hết hạn." }, 401);
  try {
    const progress = (await readProgress(user.key)) || emptyProgress(user.name, user.key);
    return json({ name: progress.name || user.name, progress });
  } catch (e) {
    console.error("read progress failed", e);
    return json({ error: "Không đọc được tiến độ." }, 500);
  }
}

export async function PUT(request) {
  const user = readToken(request);
  if (!user) return json({ error: "Phiên đăng nhập đã hết hạn." }, 401);
  const body = await readBody(request);
  try {
    const progress = (await readProgress(user.key)) || emptyProgress(user.name, user.key);
    const incoming = body && typeof body.ex === "object" && body.ex ? body.ex : {};
    const entries = Object.entries(incoming).slice(0, 2000);
    for (const [id, st] of entries) {
      if (!ID.test(id) || !STATES.has(st)) continue;
      // Không bao giờ hạ "tự giải đúng" xuống "đã xem lời giải".
      if (progress.ex[id] === "ok") continue;
      progress.ex[id] = st;
    }
    if (body.seenGuide === true) progress.seenGuide = true;
    progress.updatedAt = new Date().toISOString();
    await writeProgress(user.key, progress);
    return json({ ok: true, updatedAt: progress.updatedAt });
  } catch (e) {
    console.error("write progress failed", e);
    return json({ error: "Chưa lưu được tiến độ." }, 500);
  }
}
