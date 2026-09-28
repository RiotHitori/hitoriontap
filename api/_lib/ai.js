// Kết nối model AI qua API dạng OpenAI Chat Completions.
// Cần đặt trên Vercel: GOSLYNK_API_URL (vd. https://.../v1/chat/completions), GOSLYNK_API_KEY, tuỳ chọn GOSLYNK_MODEL.
export const aiModel = () => process.env.GOSLYNK_MODEL || "goslynk-n7";

export function aiEnabled() {
  return { enabled: Boolean(process.env.GOSLYNK_API_URL && process.env.GOSLYNK_API_KEY), model: "Goslynk N7" };
}

const SYSTEM = [
  "Bạn là gia sư Toán lớp 7 (sách Kết nối tri thức với cuộc sống) cho người mất gốc, học bổ túc.",
  "Giải thích bằng tiếng Việt, câu ngắn, từng bước đánh số, tránh thuật ngữ khó; nếu dùng thuật ngữ thì giải nghĩa.",
  "Viết công thức bằng LaTeX đặt trong \\( ... \\). Không bịa số liệu. Nếu người học trả lời sai, chỉ ra sai ở bước nào.",
  "Trả lời tối đa khoảng 200 từ."
].join(" ");

export async function askModel({ question, exercise, answer }) {
  const user = [
    exercise ? `Đề bài: ${exercise}` : "",
    answer ? `Người học đã trả lời: ${answer}` : "",
    `Câu hỏi của người học: ${question}`
  ].filter(Boolean).join("\n");

  const res = await fetch(process.env.GOSLYNK_API_URL, {
    method: "POST",
    headers: { "content-type": "application/json", authorization: `Bearer ${process.env.GOSLYNK_API_KEY}` },
    body: JSON.stringify({
      model: aiModel(),
      temperature: 0.3,
      messages: [{ role: "system", content: SYSTEM }, { role: "user", content: user }]
    })
  });
  if (!res.ok) throw new Error(`AI HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
  const data = await res.json();
  const text = data?.choices?.[0]?.message?.content ?? data?.output_text ?? data?.answer ?? data?.text;
  if (!text) throw new Error("AI trả về dữ liệu rỗng");
  return String(text);
}
