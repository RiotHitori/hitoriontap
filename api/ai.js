import { json, readBody, readToken } from "./_lib/auth.js";
import { aiEnabled, askModel } from "./_lib/ai.js";

export function GET() {
  return json(aiEnabled());
}

export async function POST(request) {
  if (!readToken(request)) return json({ error: "Phiên đăng nhập đã hết hạn." }, 401);
  if (!aiEnabled().enabled) return json({ error: "Trợ lý AI chưa được bật trên máy chủ." }, 503);
  const { question, exercise, answer } = await readBody(request);
  const q = String(question || "").trim().slice(0, 800);
  if (!q) return json({ error: "Bạn hãy gõ câu hỏi trước nhé." }, 400);
  try {
    const reply = await askModel({ question: q, exercise: String(exercise || "").slice(0, 1500), answer: String(answer || "").slice(0, 200) });
    return json({ reply });
  } catch (e) {
    console.error("ai failed", e);
    return json({ error: "Trợ lý AI đang bận, thử lại sau nhé." }, 502);
  }
}
