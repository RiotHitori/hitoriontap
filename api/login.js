import { checkPassword, cleanName, json, nameKey, readBody, signToken } from "./_lib/auth.js";
import { emptyProgress, readProgress, storageMode, writeProgress } from "./_lib/store.js";

export async function POST(request) {
  const { password, name: rawName } = await readBody(request);
  if (!checkPassword(password)) return json({ error: "Mật khẩu chưa đúng. Kiểm tra lại chữ hoa, dấu gạch ngang nhé." }, 401);

  const name = cleanName(rawName);
  const key = nameKey(name);
  if (name.length < 2 || !key) return json({ error: "Hãy nhập họ tên người học (ít nhất 2 chữ cái)." }, 400);

  try {
    let progress = await readProgress(key);
    if (!progress) progress = emptyProgress(name, key);
    progress.lastLogin = new Date().toISOString();
    await writeProgress(key, progress);
    return json({ token: signToken(name), name: progress.name || name, progress, storage: storageMode() });
  } catch (e) {
    console.error("login failed", e);
    return json({ error: "Máy chủ chưa lưu được dữ liệu. Thử lại sau ít phút." }, 500);
  }
}
