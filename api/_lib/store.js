import { promises as fs } from "node:fs";
import path from "node:path";
import { get, put } from "@vercel/blob";

const useBlob = () => Boolean(process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_STORE_ID);
const access = () => (process.env.BLOB_ACCESS === "public" ? "public" : "private");
// Trên Vercel mà chưa gắn Blob thì chỉ ghi được vào /tmp (mất khi hàm khởi động lại).
const localDir = () => (process.env.VERCEL ? "/tmp/ontoan7/progress" : path.join(process.cwd(), ".data", "progress"));

export const storageMode = () => (useBlob() ? "blob" : process.env.VERCEL ? "tmp" : "file");

export async function readProgress(key) {
  if (useBlob()) {
    const res = await get(`progress/${key}.json`, { access: access(), useCache: false });
    if (!res || res.statusCode !== 200) return null;
    return JSON.parse(await new Response(res.stream).text());
  }
  try {
    return JSON.parse(await fs.readFile(path.join(localDir(), `${key}.json`), "utf8"));
  } catch (e) {
    if (e.code === "ENOENT") return null;
    throw e;
  }
}

export async function writeProgress(key, data) {
  const body = JSON.stringify(data, null, 2);
  if (useBlob()) {
    await put(`progress/${key}.json`, body, {
      access: access(),
      allowOverwrite: true,
      addRandomSuffix: false,
      contentType: "application/json"
    });
    return;
  }
  await fs.mkdir(localDir(), { recursive: true });
  await fs.writeFile(path.join(localDir(), `${key}.json`), body, "utf8");
}

export function emptyProgress(name, key) {
  const now = new Date().toISOString();
  return { name, key, createdAt: now, updatedAt: now, lastLogin: now, seenGuide: false, ex: {} };
}
