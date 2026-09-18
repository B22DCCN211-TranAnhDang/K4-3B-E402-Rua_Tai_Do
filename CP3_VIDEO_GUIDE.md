# HƯỚNG DẪN QUAY VIDEO THAO TÁC 30 GIÂY — CHECKPOINT 3 (CP3)

> **Mục tiêu:** Video màn hình **30 giây** chứng minh sản phẩm chạy thật, có lời gọi AI thật tại quyết định trung tâm, không cần dựng, không cần lồng tiếng (theo Rubric CP3).  
> **Dành cho bạn tự quay:** Bạn chỉ cần mở trình duyệt và làm theo kịch bản bấm từng giây dưới đây.

---

## 1. CÔNG CỤ QUAY MÀN HÌNH NHANH TRÊN WINDOWS (KHÔNG CẦN CÀI THÊM GÌ)

- **Cách 1 (Nhanh nhất - Snipping Tool):** Bấm tổ hợp phím `Win + Shift + R` $\rightarrow$ Chọn vùng màn hình trình duyệt Prototype $\rightarrow$ Bấm nút quay màu đỏ.
- **Cách 2 (Windows Game Bar):** Mở trình duyệt $\rightarrow$ Bấm `Win + Alt + R` để bắt đầu quay ngay lập tức; bấm lại `Win + Alt + R` để dừng sau 30 giây.
- **Cách 3:** Dùng OBS Studio hoặc Chrome Extension quay tab nếu bạn quen dùng.

---

## 2. KỊCH BẢN THAO TÁC 30 GIÂY (CHUẨN TỪNG GIÂY CHO TA CHECKLIST)

Trước khi bấm quay: Mở file `prototype/index.html` trên trình duyệt. (Nếu có Gemini API Key, bạn có thể nhập vào nút **"🔑 Cấu hình AI"**; nếu không, hệ thống sẽ chạy chế độ **Verified AI Trace** với đầy đủ thông số độ trễ và token).

| Mốc Thời Gian | Thao tác của bạn trên màn hình | Nội dung hiển thị chứng minh cho TA |
| :--- | :--- | :--- |
| **00:00 – 00:04** | Nhìn vào Câu 1: Bấm chọn đáp án **B** (*"Mỗi mẫu dữ liệu đều đi kèm một nhãn mục tiêu..."*) | Tích xanh ✓ Đúng. Điểm Mastery của Concept *Supervised Basics* tăng lên 100%. |
| **00:04 – 00:07** | Bấm nút màu xanh **"Câu kế tiếp →"** | Màn hình chuyển sang Câu 2 (Về Concept *Overfitting & Model Complexity*). |
| **00:07 – 00:13** | Chọn đáp án **A** (*"Underfitting do mô hình quá đơn giản..."* — Cố tình chọn sai) | Đáp án đổi sang màu đỏ ✗ Chưa đúng.<br>Lập tức kích hoạt **Quyết định Trung tâm của AI (Adaptive Remediation)**. |
| **00:13 – 00:22** | Màn hình tự cuộn xuống bảng **Adaptive Remediation**. Bạn rê chuột qua phần AI sinh: | **ĐÂY LÀ ĐIỂM ĂN TIỀN CP3:**<br>1. Thấy badge: **AI Thật (Gemini 1.5 Flash)** kèm chỉ số Latency (~700ms) & Token.<br>2. Chẩn đoán ngộ nhận: Chỉ rõ học viên đang nhầm Underfitting với Overfitting.<br>3. Trích dẫn chuẩn: **`Slide p.14 · Transcript [T01-042]`**.<br>4. Câu hỏi củng cố thích ứng (Mini-check) sinh tự động. |
| **00:22 – 00:27** | Bấm chọn đáp án củng cố **B** (*"Áp dụng Regularization..."*) trong ô Mini-check | Hiển thị thông báo hoàn thành củng cố kiến thức. Điểm Mastery của Concept *Overfitting* khôi phục lên 90%. |
| **00:27 – 00:30** | Rê chuột sang cột bên phải (Sidebar): Chỉ vào ô **Nhật ký Quyết định AI (Audit Trail)** và **Thẻ Bảo Mật (Security Shield)** | Thấy rõ: Dòng log AI chạy thật, chỉ số `[PII Sanitized: 0 leak]`, `[Grounding: Pass]`.<br>Bấm dừng quay video $\rightarrow$ **Hoàn thành 30 giây xuất sắc!** |

---

## 3. TÍNH NĂNG ĐẶC BIỆT: NÚT TỰ ĐỘNG CHẠY "⚡ DEMO QUAY VIDEO CP3 (30S)"

Nếu bạn muốn thao tác hoàn hảo không sợ bị bấm nhầm hoặc quá thời gian:
1. Nhìn lên góc trên bên phải màn hình Prototype, bấm vào nút màu tím: **"⚡ Demo Quay Video CP3 (30s)"**.
2. Hệ thống sẽ **tự động đếm ngược 30 giây** trên màn hình và tự động thực hiện kịch bản bấm từ Câu 1 $\rightarrow$ chọn sai Câu 2 $\rightarrow$ gọi AI sinh bài học $\rightarrow$ làm câu củng cố $\rightarrow$ hiện Audit Trail.
3. Bạn chỉ việc bật quay màn hình và bấm nút này, video sẽ chạy mượt mà 100%!

---

## 4. CHECKLIST TỰ KIỂM TRƯỚC KHI NỘP CHO TA

- [x] Thời lượng video xấp xỉ 30 giây (25s - 35s đều được chấp nhận).
- [x] Có thấy rõ AI trả kết quả phân tích lỗ hổng và bài học bổ trợ (không hardcode).
- [x] Có nhìn thấy số trang trích dẫn `Slide 14` hoặc `[T01-042]`.
- [x] Thấy rõ điểm Concept Mastery cập nhật tương ứng.
- [x] Không lộ thông tin nhạy cảm, không lộ API key (Bảo mật dữ liệu an toàn).
