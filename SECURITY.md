# CHÍNH SÁCH BẢO MẬT DỮ LIỆU & QUẢN TRỊ AN TOÀN AI (DATA SECURITY & SAFETY POLICY)

> **Dự án:** Adaptive Knowledge-to-Lesson Studio  
> **Nhóm thực hiện:** Rùa Tai Đỏ (Trần Anh Đăng · Nguyễn Khánh Đô · Bùi Lê Gia Huy)  
> **Lớp:** 3B · **Phòng:** E402 · **Track:** C1 — Lesson Studio  
> **Văn bản căn cứ:** Quy định bảo mật dữ liệu Hackathon K4 (README mục 348–360) & Nghị định 13/2023/NĐ-CP về Bảo vệ Dữ liệu Cá nhân.

---

## 1. CAM KẾT 6 ĐIỀU KHOẢN VỀ DỮ LIỆU ĐƯỢC CUNG CẤP

Nhóm Rùa Tai Đỏ cam kết tuân thủ nghiêm ngặt 6 quy định bảo mật dữ liệu của Ban Tổ Chức:

1. **Phạm vi sử dụng:** Dữ liệu trong `data/` (transcript, slide, chatlog) chỉ được sử dụng duy nhất trong khuôn khổ Mini Hackathon K4 phục vụ việc phân tích bằng chứng, xây dựng Golden Set và chạy thử nghiệm Prototype. Tuyệt đối không dùng cho mục đích thương mại hoặc dự án cá nhân ngoài khóa.
2. **Không phát tán ra ngoài:** Toàn bộ dữ liệu, prompt nội bộ và tài liệu không được đăng tải lên mạng xã hội, diễn đàn, hoặc chia sẻ cho bất kỳ cá nhân/tổ chức nào ngoài khóa học.
3. **Không commit raw data pack vào repo GitHub nộp bài:** Repo nộp bài `K4-3B-E402-Rua_Tai_Do` chỉ chứa mã nguồn prototype, tài liệu spec và các trích đoạn đối chiếu ngắn có ghi rõ mã định danh (`[Slide p.X]` hoặc `[Txx-NNN]`). Tuyệt đối không đưa toàn bộ transcript hay slide nguyên bản vào git tracking.
4. **Tối thiểu hóa dữ liệu gửi ra LLM ngoài (Data Minimization):** Khi gọi API của Google Gemini, hệ thống chỉ gửi trích đoạn văn bản tối thiểu (vài dòng slide/transcript liên quan trực tiếp đến Concept mà người học làm sai), không gửi nguyên bài giảng hay toàn bộ tài liệu để phòng ngừa rủi ro mô hình AI bên thứ ba sử dụng dữ liệu huấn luyện.
5. **Không suy ngược danh tính (Zero De-anonymization):** Tôn trọng tuyệt đối dữ liệu đã được ẩn danh (`[HV]`, `S####`, `T#####`). Không phỏng đoán, tìm kiếm hoặc liên kết thông tin với người học thật trong lớp.
6. **Xóa bản sao sau sự kiện:** Nhóm cam kết xóa toàn bộ bản sao dữ liệu thô trên thiết bị cá nhân ngay sau khi kết thúc Hackathon theo yêu cầu của BTC.

---

## 2. KIẾN TRÚC BẢO MẬT & BỘ LỌC AN TOÀN TRONG PROTOTYPE

Hệ thống được thiết kế theo nguyên tắc **Security by Design** với 4 lớp phòng thủ:

```
[Người dùng / Học viên]
        │
        ▼ (Gửi câu hỏi / Trả lời quiz)
┌─────────────────────────────────────────────────────────┐
│ 🛡️ LỚP 1: PII SANITIZATION & INPUT GUARDRAIL            │
│  - Tự động Regex Mask Email, SĐT, MSSV (2A...)           │
│  - Phát hiện Prompt Injection & Yêu cầu trích xuất Data │
└─────────────────────────────────────────────────────────┘
        │ (Dữ liệu đã làm sạch + Ngữ cảnh tối thiểu)
        ▼
┌─────────────────────────────────────────────────────────┐
│ 🤖 LỚP 2: LỜI GỌI AI THẬT (GOOGLE GEMINI 1.5 FLASH)     │
│  - Gọi trực tiếp qua HTTPS từ Client đến Google API     │
│  - Không qua trung gian server bên thứ ba               │
└─────────────────────────────────────────────────────────┘
        │ (Remediation JSON + Provenance)
        ▼
┌─────────────────────────────────────────────────────────┐
│ 🔍 LỚP 3: OUTPUT GROUNDING & ANTI-HALLUCINATION VERIFIER│
│  - Kiểm tra bắt buộc có mã [Slide p.X] hoặc [Txx-NNN]   │
│  - Gắn cờ nếu phát hiện bịa số trang hoặc sai lệch       │
└─────────────────────────────────────────────────────────┘
        │
        ▼ (Hiển thị bài học bổ trợ an toàn)
[Audit Trail & Giao diện Học viên]
```

---

## 3. QUẢN LÝ AN TOÀN KHÓA BÍ MẬT (API KEY MANAGEMENT)

- **Nguyên tắc không commit Secret:** Tuyệt đối không lưu API Key trong mã nguồn JavaScript hoặc đẩy lên Git.
- **Lưu trữ cục bộ phiên làm việc (Session-only Storage):**
  - Khi người dùng nhập API Key trong modal "Cấu hình AI", Key được lưu trong `sessionStorage` của trình duyệt.
  - Key tự động bị hủy khi đóng tab trình duyệt, không tồn tại vĩnh viễn trên máy tính.
- **Cấu hình `.gitignore` chuẩn:** Chặn toàn bộ các file `.env`, `*.env`, `api_keys.json`, `credentials.json`.
- **Chế độ Dự phòng (Verified AI Trace Fallback):** Khi chưa nhập API Key hoặc khi mạng phòng lab gặp sự cố, hệ thống tự động chuyển sang chế độ Trace giả lập AI có kiểm định sẵn, đảm bảo không làm gián đoạn buổi demo mà vẫn giữ an toàn 100%.

---

## 4. BẢO VỆ QUYỀN TỰ CHỦ CỦA NGƯỜI HỌC (LEARNER AUTONOMY)

Theo nguyên tắc **Responsible AI**:
- Hệ thống hỗ trợ đề xuất nhánh ôn tập bổ trợ nhưng **không tước đoạt quyền tự quyết của học viên**.
- Học viên luôn có nút *"⏭️ Bỏ qua nhánh này"* để tiếp tục bài học nếu muốn.
- Mọi quyết định bỏ qua hoặc hoàn thành đều được lưu vết minh bạch trong **Audit Trail** để phục vụ việc rà soát sư phạm của giảng viên.
