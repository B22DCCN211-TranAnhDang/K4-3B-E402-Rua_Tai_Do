# CANVAS CHECKPOINT 1 (CP1) — MINI HACKATHON AI K4

> **Lớp:** 3B · **Phòng:** E402 · **Cụm:** C4 · **Track:** C1 — Knowledge-to-Lesson (Lesson Studio)  
> **Đội trưởng:** Trần Anh Đăng (Mã HV: 2A202602992)  
> **Nhóm:** Rùa Tai Đỏ  
> **Thành viên:** Trần Anh Đăng · Nguyễn Khánh Đô · Bùi Lê Gia Huy  

---

## 📋 BẢNG CANVAS 8 DÒNG CHUẨN (CP1)

| DÒNG | NỘI DUNG ĐIỀN VÀO CANVAS |
| :--- | :--- |
| **1 · TRACK + ĐỀ** | **C1 · Knowledge-to-Lesson (Lesson Studio)**<br>Graph tri thức và bài học thích ứng từ slide/tài liệu bài giảng |
| **2 · NGƯỜI ĐANG LÀM VIỆC** | **Học viên học qua video/bài giảng online & Giảng viên/Studio sản xuất nội dung**<br>Học viên làm quiz sau bài học, cần biết chính xác mình sai ở đâu và nhận lộ trình ôn tập bổ trợ (remediation) thay vì bị cuốn tiếp vào bài mới một cách thụ động |
| **3 · NỖI ĐAU MỘT CÂU** | **Tài liệu/slide lặp ý gây khó hiểu; làm quiz sai không có lộ trình ôn tập riêng mà bị ép học tiếp bài mới dù chưa nắm chắc kiến thức**<br>Tự loay hoay tìm cách ôn · mất thời gian · hổng kiến thức dây chuyền do phải học tiếp trong vô định |
| **4 · BẰNG CHỨNG** | **Khảo sát thực tế 19 người học online (15 SV, 2 HS, 2 người đi làm) trong 3 tháng gần nhất:**<br>• **15/18 (83.3%)** xác nhận gặp khó khăn khi nhiều slide trùng lặp nhau, lặp ý.<br>• **13/19 (68.4%)** không được hệ thống/giáo viên giao nội dung ôn riêng khi sai (8 người vẫn phải học tiếp dù chưa hiểu, 5 người tự mò mẫm ôn).<br>• **10/19 (52.6%)** thường xuyên học tiếp bài mới dù chưa hiểu rõ bài cũ vì không có lựa chọn.<br>• **13/19 (68.4%)** đánh giá tần suất "phải học tiếp dù chưa nắm chắc bài trước" ở mức cao (từ 3/5 đến 5/5). |
| **5 · LÁT CẮT MỘT CÂU** | **Học viên làm quiz 5 câu sau bài giảng · AI phân tích concept sai qua Knowledge Graph và tự động điều hướng sang nhánh ôn tập bổ trợ kèm số trang nguồn chính xác**<br>Kết quả: Gợi ý nội dung ôn tập đúng lỗ hổng kiến thức kèm mã trang/đoạn trích dẫn (`[Slide_pX]` / `[Txx-NNN]`) và giải thích rõ lý do phân nhánh |
| **6 · PHẠM VI AI** | **Tự:** Khử trùng lặp concept giữa các slide, xây dựng Graph quan hệ tiên quyết (prerequisites), theo dõi mức độ nắm bắt (mastery), chọn nhánh ôn tập bổ trợ và trích dẫn trang nguồn.<br>**Không tự:** Không tự ý tước quyền học tiếp của học viên nếu họ chủ động bỏ qua ôn tập; không suy đoán ngoài tài liệu cung cấp.<br>**Lý do:** Cá nhân hóa bài học, giải quyết hổng kiến thức nhưng vẫn đảm bảo quyền tự chủ của người học (Learner autonomy). |
| **7 · NGƯỜI THỬ (WILLING USERS)** | **Đã có 4 người học ngoài nhóm đồng ý tham gia thử nghiệm tại CP5 (vượt chuẩn tối thiểu ≥2 người — danh sách ẩn danh):**<br>1. Bạn N.M.Q (Mã HV: 2A202602490 · Lớp 3B)<br>2. Bạn N.T.N (Mã HV: 2A202602694 · Lớp 3B)<br>3. Bạn H.A.T (Mã HV: 2A202602643 · Lớp 3B)<br>4. Bạn Đ.B.H (Mã HV: 2A202602524 · Lớp 3B) |
| **8 · PHÂN CÔNG CÓ TÊN** | **[Trần Anh Đăng]** Phân tích khảo sát Evidence (19 mẫu) · Thiết kế Prompt trích xuất Concept Graph & Provenance · Chốt AI Spec<br>**[Nguyễn Khánh Đô]** Phát triển Prototype Web UI bài học/quiz thích ứng · Xây dựng Golden Set 20 case phân nhánh ôn tập<br>**[Bùi Lê Gia Huy]** Thiết kế Schema Learner Mastery & Remediation Graph · Điều phối User Test với 4 willing users và đo lường độ chính xác CP3 |

---

## 📝 BẢN TEXT 8 DÒNG (ĐỂ DÁN VÀO FORM NỘP BÀI CP1)

1. **TRACK + ĐỀ:**  
   C1 · Knowledge-to-Lesson (Lesson Studio) — Graph tri thức và bài học thích ứng từ slide/tài liệu bài giảng.

2. **NGƯỜI ĐANG LÀM VIỆC:**  
   Học viên học qua video/bài giảng online & Giảng viên/Studio sản xuất nội dung: Học viên làm quiz sau bài học, cần biết chính xác mình sai ở đâu và nhận lộ trình ôn tập bổ trợ (remediation) thay vì bị cuốn tiếp vào bài mới một cách thụ động.

3. **NỖI ĐAU MỘT CÂU:**  
   Tài liệu/slide lặp ý gây khó hiểu; làm quiz sai không có lộ trình ôn tập riêng mà bị ép học tiếp bài mới dù chưa nắm chắc kiến thức — Tự loay hoay tìm cách ôn, mất thời gian và hổng kiến thức dây chuyền.

4. **BẰNG CHỨNG (INSIGHT KHẢO SÁT 19 NGƯỜI DÙNG THỰC TẾ):**  
   - 15/18 (83.3%) người học gặp khó khăn khi học các tài liệu/slide trùng lặp nhau.  
   - 13/19 (68.4%) không được hệ thống giao nội dung ôn riêng khi làm sai quiz (8/19 vẫn phải học tiếp bài mới dù chưa hiểu, 5/19 phải tự mò mẫm ôn).  
   - 10/19 (52.6%) thường xuyên phải học tiếp bài mới dù chưa hiểu bài trước vì không có lựa chọn.  
   - 13/19 (68.4%) đánh giá tần suất gặp tình trạng "phải học tiếp dù chưa nắm chắc bài trước" ở mức cao (3–5/5).

5. **LÁT CẮT MỘT CÂU:**  
   Học viên làm quiz 5 câu sau bài giảng · AI phân tích concept sai qua Knowledge Graph và tự động điều hướng sang nhánh ôn tập bổ trợ kèm số trang nguồn chính xác. Kết quả: Gợi ý nội dung ôn tập đúng lỗ hổng kiến thức kèm mã trang/đoạn trích dẫn (`[Slide_pX]` / `[Txx-NNN]`) và giải thích rõ lý do phân nhánh.

6. **PHẠM VI AI:**  
   - **Tự:** Khử trùng lặp concept giữa các slide, xây dựng Graph quan hệ tiên quyết (prerequisites), theo dõi mức độ nắm vững (mastery), đề xuất nhánh bài học/nội dung ôn tập bổ trợ và trích dẫn trang nguồn.  
   - **Không tự:** Không tự ý tước quyền học tiếp của học viên nếu họ chủ động chọn bỏ qua ôn tập; không bịa đặt kiến thức ngoài tài liệu cung cấp.  
   - **Lý do:** Cá nhân hóa lộ trình học tập, giải quyết triệt để tình trạng hổng kiến thức nhưng vẫn đảm bảo quyền tự chủ của người học (Learner autonomy).

7. **NGƯỜI THỬ (WILLING USERS — ĐÃ ẨN DANH THEO QUY ĐỊNH PII):**  
   Đã có 4 người học ngoài nhóm đồng ý tham gia thử nghiệm tại CP5 (vượt chuẩn tối thiểu ≥2 người):  
   1. Bạn N.M.Q (Mã HV: 2A202602490 · Lớp 3B)  
   2. Bạn N.T.N (Mã HV: 2A202602694 · Lớp 3B)  
   3. Bạn H.A.T (Mã HV: 2A202602643 · Lớp 3B)  
   4. Bạn Đ.B.H (Mã HV: 2A202602524 · Lớp 3B)

8. **PHÂN CÔNG CÓ TÊN:**  
   - **[Trần Anh Đăng]** Phân tích khảo sát Evidence (19 mẫu) · Thiết kế Prompt trích xuất Concept Graph & Provenance · Chốt AI Spec.  
   - **[Nguyễn Khánh Đô]** Phát triển Prototype Web UI bài học/quiz thích ứng · Xây dựng Golden Set 20 case phân nhánh ôn tập.  
   - **[Bùi Lê Gia Huy]** Thiết kế Schema Learner Mastery & Remediation Graph · Điều phối User Test với 4 willing users và đo lường độ chính xác CP3.

---