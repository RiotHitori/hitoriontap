# Ôn Toán 7 – Học lại từ gốc

Website ôn Toán 7 tập một (Kết nối tri thức, SGK trang 5–119) cho người mất gốc, học bổ túc. Tạo bởi **Nguyễn Phú Quốc**.

- Mỗi bài: *Hiểu nhanh* (lý thuyết ngắn), *Ví dụ mẫu* xem từng bước, *Bài tập* có Gợi ý, Giải giúp tôi và giải thích.
- Vào web phải nhập **mật khẩu lớp** và **họ tên người học**.
- Tiến độ của mỗi người được lưu thành file `progress/<ten-khong-dau>.json` trên máy chủ (Vercel Blob), không lưu trong trình duyệt.
- Lần đầu đăng nhập có bảng hướng dẫn từng nút; mở lại được từ menu tên người học.
- Có chỗ tích hợp model AI **Goslynk N7** của Goslynk.com (nút *Hỏi AI* dưới mỗi bài tập).

## Chạy thử trên máy

```bash
npm install
npm run dev        # http://localhost:5174
```

Trên máy, tiến độ được ghi vào thư mục `.data/progress/`.

## Deploy lên Vercel

1. Vào [vercel.com/new](https://vercel.com/new), chọn *Import* repo `RiotHitori/hitoriontap`. Framework Preset: **Other**, không cần Build Command.
2. Trong project, mở tab **Storage → Create → Blob**, tạo một Blob store (chọn *Private*) và bấm *Connect* vào project. Vercel sẽ tự thêm biến `BLOB_READ_WRITE_TOKEN`.
3. Mở **Settings → Environment Variables**, thêm:

| Biến | Bắt buộc | Ý nghĩa |
| --- | --- | --- |
| `SESSION_SECRET` | Nên có | Chuỗi ngẫu nhiên dài, dùng để ký phiên đăng nhập |
| `APP_PASSWORD` | Không | Đổi mật khẩu lớp. Bỏ trống thì dùng mật khẩu mặc định đã cài |
| `GOSLYNK_API_URL` | Để bật AI | Địa chỉ API dạng chat completions, ví dụ `https://.../v1/chat/completions` |
| `GOSLYNK_API_KEY` | Để bật AI | Khoá API của Goslynk |
| `GOSLYNK_MODEL` | Không | Tên model gửi lên API, mặc định `goslynk-n7` |

4. Bấm **Redeploy** để biến môi trường có hiệu lực.

Nếu chưa tạo Blob store, web vẫn chạy nhưng tiến độ chỉ nằm tạm trong `/tmp` của máy chủ và có thể mất.

## Ghi chú bảo mật

- Repo công khai nên trong mã chỉ có **mã băm SHA-256** của mật khẩu, không có mật khẩu gốc.
- Mật khẩu được kiểm tra ở máy chủ; API tiến độ và AI chỉ trả lời khi có phiên đăng nhập hợp lệ.
- Nội dung bài học là file tĩnh, người rành kỹ thuật vẫn có thể mở trực tiếp. Lớp mật khẩu dùng để quản lý lớp học và giữ riêng tiến độ từng người, không phải để giấu nội dung.
- Tiến độ gắn với họ tên, nên ai biết mật khẩu lớp và tên của bạn thì xem được tiến độ của bạn.

## Cấu trúc

```
index.html            khung trang
assets/app.js         giao diện, đăng nhập, lưu tiến độ, hướng dẫn, Hỏi AI
assets/data/*.js      nội dung từng chương
assets/figures.js     hình vẽ SVG
api/login.js          POST: kiểm tra mật khẩu, tạo/đọc file tiến độ
api/progress.js       GET/PUT: đọc/ghi tiến độ
api/ai.js             POST: chuyển câu hỏi tới model Goslynk N7
api/_lib/             xác thực, lưu trữ (Vercel Blob hoặc file), gọi AI
dev-server.mjs        máy chủ chạy thử trên máy
```
