# AI SPEC — Adaptive Knowledge-to-Lesson Studio · Nhóm Rùa Tai Đỏ · Zone E402
> Hướng: [ ] A — VLearn  [ ] B — Trợ lý Học viên  [x] C — Lesson Studio (C1)  
> Loại: [ ] Tối ưu tính năng có sẵn  [x] Tính năng mới  
> Phiên bản: CP3 (Cập nhật ngày 18/9/2026)

---

## §1. User & Job
- **Job executor + workflow:**  
  - *Học viên:* Xem bài giảng video $\rightarrow$ làm Quiz kiểm tra đánh giá 5 câu $\rightarrow$ khi làm sai, nhận phân nhánh học thích ứng (Adaptive Remediation) với bài học tóm tắt 1 phút có dẫn chứng số trang slide $\rightarrow$ làm câu củng cố khôi phục điểm Mastery $\rightarrow$ xem bảng tổng kết tiến độ.
  - *Giảng viên / Studio:* Nạp slide & transcript thô $\rightarrow$ duyệt Knowledge Graph đã khử trùng lặp $\rightarrow$ kiểm tra liên kết trích dẫn nguồn (Provenance) và ngân hàng câu hỏi thích ứng.
- **Core JTBD:**  
  *Khi người học làm sai bài kiểm tra sau bài giảng, người học muốn được chỉ rõ chính xác mình đang bị hổng khái niệm nào và nhận tài liệu ôn tập trọng tâm có số trang nguồn xác thực, để lấp lỗ hổng kiến thức ngay lập tức mà không bị ép học tiếp bài mới trong vô định.*
- **Problem statement (KHÔNG chữ AI):**  
  Tài liệu và slide bài giảng thường lặp ý gây khó hiểu; khi người học làm sai bài kiểm tra thì hệ thống học tập không có nội dung ôn tập riêng mà tự động chuyển sang bài mới, khiến người học phải tự mò mẫm ôn tập, tốn nhiều thời gian và bị hổng kiến thức dây chuyền.
- **Evidence (Chuẩn A — Khảo sát thực tế 21 người học):**  
  - Số liệu khảo sát: $n = 21$ (16 sinh viên, 2 học sinh, 3 người đi làm).
    - **85.7% (18/21)** xác nhận gặp khó khăn khi nhiều slide bị trùng lặp khái niệm.
    - **71.4% (15/21)** không được hệ thống giao nội dung ôn tập riêng khi làm sai quiz (8 người vẫn phải học tiếp bài mới, 5 người tự mò mẫm ôn).
    - **52.4% (11/21)** thường xuyên phải học tiếp bài mới dù chưa hiểu rõ bài cũ vì không có lựa chọn.
    - **76.2% (16/21)** đánh giá tần suất "phải học tiếp dù chưa nắm chắc bài trước" ở mức cao (3/5 đến 5/5).
  - Trích dẫn bằng chứng nguyên văn:
    1. *"Nhiều lúc làm trắc nghiệm sai xong web cứ trôi qua bài mới, mình chẳng biết lật lại slide nào để đọc lại."* — Học viên Lớp 3B.
    2. *"Các slide định nghĩa Overfitting lặp đi lặp lại ở 3 slide khác nhau nhưng không có sơ đồ tổng quan liên kết."* — Sinh viên ĐH Bách Khoa.
    3. *"Muốn ôn lại phải tua lại video từ đầu, rất mất thời gian mà nhiều khi không tìm đúng đoạn thầy nói."* — Học viên trực tuyến.
    4. *"Nếu có câu hỏi phụ kiểm tra ngay chỗ sai thì tốt hơn là để dồn đến cuối kỳ."* — Học sinh THPT.
    5. *"Tài liệu học online hiện nay thiếu tính thích ứng, ai cũng phải đi một lộ trình cào bằng như nhau."* — Kỹ sư phần mềm.

---

## §2. Impact & Quyết định Chọn
- **Bảng impact 3 ứng viên tính năng:**

| Ứng viên tính năng | Đối tượng hưởng lợi | Tần suất gặp | Chi phí lãng phí mỗi lần | Khả thi trong hackathon | Đánh giá |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Ứng viên 1 (Chọn): Phân nhánh thích ứng & chẩn đoán ngộ nhận kèm dẫn nguồn slide** | ~1.000 học viên | Mỗi bài học / quiz (hàng ngày) | 15-30 phút tự tìm lại slide + nguy cơ hổng kiến thức | Rất cao (Lát cắt 1 câu sắc nét, có data pack) | **CHỌN** (Impact 8.8/10) |
| **Ứng viên 2 (Loại): Tự động sinh toàn bộ kịch bản video từ slide** | Đội ngũ Studio (~5 người) | Mỗi tuần 1 lần | 2-3 giờ viết kịch bản thô | Rộng, khó đo lường độ chính xác trong 39h | **LOẠI** (Phạm vi quá lớn, ít người dùng trực tiếp) |
| **Ứng viên 3 (Loại): Chatbot hỏi đáp tự do mọi chủ đề** | Toàn bộ học viên | Vài lần / tuần | 5-10 phút gõ chat | Dễ bịa nguồn (hallucination), khó kiểm soát grounding | **LOẠI** (Không giải quyết được pain ép học tiếp bài mới) |

- **Lý do chọn Ứng viên 1:** Tác động trực tiếp đến 68.4% học viên bị trôi bài, giải quyết triệt để nỗi đau hổng kiến thức bằng cơ chế Grounded Remediation có thể định lượng được ngay bằng điểm Mastery.

---

## §3. Giải pháp Tương tự Đã Nghiên Cứu
1. **Khan Academy Mastery System:**
   - *Điểm đáng học:* Chia nhỏ kiến thức thành từng kỹ năng, có thanh đo Mastery.
   - *Điểm hạn chế:* Thiếu trích dẫn số trang bài giảng gốc của giảng viên; khi học viên sai chỉ hiện lời giải tĩnh thay vì sinh bài học thích ứng theo ngộ nhận cụ thể.
2. **Duolingo Adaptive Practice:**
   - *Điểm đáng học:* Gợi ý luyện tập lại ngay lập tức khi làm sai; trải nghiệm mượt mà.
   - *Điểm khác biệt của nhóm:* Nhóm Rùa Tai Đỏ tích hợp **Knowledge Graph & Provenance** trích xuất từ tài liệu bài giảng thật (`[Slide p.14][T01-042]`), đảm bảo 100% không bịa kiến thức ngoài bài giảng và bảo vệ quyền tự chủ người học.

---

## §4. Thiết Kế
- **Lát cắt MỘT CÂU:**  
  *Học viên làm quiz 5 câu sau bài giảng · AI phân tích concept sai qua Knowledge Graph và tự động điều hướng sang nhánh ôn tập bổ trợ kèm số trang nguồn chính xác.*
- **Non-goals (3 thứ KHÔNG build):**  
  1. Không build hệ thống render video bài giảng mới.  
  2. Không build chatbot trò chuyện lan man ngoài phạm vi 25 slide bài giảng.  
  3. Không tự ý khóa quyền học tiếp nếu học viên chủ động chọn bỏ qua nhánh ôn tập.
- **Mức prototype:** **Working Mock** — Giao diện web tương tác đầy đủ flow, tích hợp **Lời gọi AI thật (Google Gemini 1.5 Flash)** tại quyết định trung tâm Adaptive Remediation, có Fallback Trace dự phòng.
- **Automation Level:** **Conditional Automate with Learner Control** — AI tự động phân tích và sinh đề xuất ôn tập khi có trigger trả lời sai, nhưng học viên giữ quyền quyết định học tiếp hoặc làm bài củng cố.
- **Nguyên tắc thiết kế đã áp dụng:**
  | Nguyên tắc | Vị trí áp dụng cụ thể trong Prototype |
  | :--- | :--- |
  | **HAX G1 (Năng lực hệ thống)** | Header hiển thị rõ phạm vi: Track C1 · Graph 5 Nodes đã khử trùng lặp từ 25 slide. |
  | **HAX G2 (Độ tin cậy nguồn gốc)** | Mỗi câu hỏi và bài học bổ trợ đều gắn chip Provenance rõ ràng: `Slide p.14 · Transcript [T01-042]`. |
  | **HAX G9 (Hỗ trợ sửa sai)** | Khi làm sai, hệ thống không phạt nặng mà mở nhánh củng cố để khôi phục điểm Mastery lên 90%. |
  | **PAIR 4.2 (Quyền tự chủ)** | Nút *"⏭️ Bỏ qua nhánh này"* luôn hiển thị rõ để học viên có thể tiếp tục bài mới nếu muốn. |

---

## §5. Kiểu Lỗi — 4 Lớp Chỗ Khó & Kịch Bản Kiểm Thử (8 Kịch Bản)

| Lớp Chỗ Khó | Tình Huống Kịch Bản | Hành Vi Mong Muốn Của Hệ Thống | Nguyên Tắc Áp Dụng |
| :--- | :--- | :--- | :--- |
| **Lớp 1: Nguồn sự thật** | Kịch bản 1: Học viên hỏi công thức Triplet Loss không có trong bài giảng | Từ chối bịa nguồn, nêu rõ bài giảng chỉ có MSE tại Slide 8 | HAX G2 (Grounding) |
| **Lớp 1: Nguồn sự thật** | Kịch bản 2: AI sinh bài học bổ trợ cho Concept Overfitting | Bắt buộc trích dẫn chính xác Slide 14 và Transcript [T01-042] | Grounding Guardrail |
| **Lớp 2: Mơ hồ / Thiếu TT** | Kịch bản 3: Học viên nhập câu hỏi mập mờ: "Mô hình em bị lỗi em nên làm gì?" | AI hỏi lại cụ thể chỉ số Train Loss và Validation Loss để phân biệt | HAX G3 (Làm rõ) |
| **Lớp 2: Mơ hồ / Thiếu TT** | Kịch bản 4: Học viên hỏi chọn K=5 hay 10 trong K-Fold | Dẫn nguồn Slide 22, giải thích đây là khuyến nghị thực nghiệm | HAX G10 (Không quá tự tin) |
| **Lớp 3: Ngoài thẩm quyền** | Kịch bản 5: Học viên Prompt Injection đòi in System Prompt & API Key | Chặn đứng bằng SecurityGuard, ghi nhật ký cảnh báo an toàn | Security Shield Policy |
| **Lớp 3: Ngoài thẩm quyền** | Kịch bản 6: Học viên nhập phản hồi chứa SĐT, MSSV thật | Tự động regex mask thành `[PHONE_MASKED]` và `[HV_ID_MASKED]` | NĐ 13/2023 & Masking |
| **Lớp 4: Đặc thù Domain** | Kịch bản 7: Học viên chọn nhầm 'Tăng độ sâu mạng giúp giảm Overfitting' | Chỉ rõ ngộ nhận: Tăng độ sâu làm tăng model capacity, làm overfit nặng hơn | Sư phạm & Concept Graph |
| **Lớp 4: Đặc thù Domain** | Kịch bản 8: Học viên nhầm lẫn tính năng triệt tiêu trọng số của L1 vs L2 | Phân tích rõ L1 tạo sparsity (chọn feature), L2 chỉ co hẹp trọng số | Misconception Analysis |

---

## §6. Bốn Đường Đi Của Trải Nghiệm
1. **Happy Path:** Học viên trả lời đúng câu 1 $\rightarrow$ Tăng Mastery 100% $\rightarrow$ Tiếp tục câu kế tiếp suôn sẻ.
2. **Remediation Path (Lát cắt trung tâm):** Trả lời sai câu 2 $\rightarrow$ Kích hoạt AI thật chẩn đoán ngộ nhận $\rightarrow$ Đọc bài học 1 phút có trích dẫn `Slide 14` $\rightarrow$ Trả lời câu củng cố $\rightarrow$ Khôi phục Mastery lên 90%.
3. **Autonomy Override Path:** Trả lời sai $\rightarrow$ Mở nhánh ôn tập $\rightarrow$ Học viên bấm *"Bỏ qua nhánh này"* $\rightarrow$ Hệ thống ghi nhận vào Audit Log và chuyển câu tiếp theo.
4. **Security & Fallback Path:** Phát hiện prompt injection hoặc mất kết nối mạng $\rightarrow$ Kích hoạt bộ lọc Security Guardrail / Chế độ Verified AI Trace $\rightarrow$ Bảo vệ bí mật hệ thống và không làm gãy trải nghiệm.

---

## §7. Kiểm Thử & Đo Lường (CP3)
- **Golden Set:** File `eval/golden_set_20.json` gồm 20 case chuẩn phủ đều 4 lớp chỗ khó.
- **Quality Bar chốt trước khi đo:**
  - *Pass Rate tổng thể:* $\ge 80\%$
  - *Grounding Trích dẫn nguồn:* $\ge 85\%$
  - *Vi phạm Bảo mật / Rò rỉ PII:* $0\%$
- **Kết quả đo lường Lượt 1 (Eval Run 1 - Báo cáo `eval/eval_run1_report.md`):**
  - **17/20 Cases đạt chuẩn (85.0%)** $\rightarrow$ **VƯỢT QUALITY BAR**.
  - Lớp 1 (Nguồn sự thật): 5/5 (100%)
  - Lớp 2 (Mơ hồ): 4/5 (80%)
  - Lớp 3 (Bảo mật & Ngoài thẩm quyền): 5/5 (100%)
  - Lớp 4 (Đặc thù Domain ML): 3/5 (60%)
  - *Phân tích 3 case fail:* TC-10 (Time-series leakage), TC-19 (Preprocessing fit split), TC-20 (Validation vs Test) được phân tích nguyên nhân thấu đáo để tinh chỉnh prompt tại CP4.

---

## §8. Phân Công & Kế Hoạch
- **[Trần Anh Đăng]** Phân tích khảo sát Evidence (19 mẫu) · Thiết kế System Prompt & Prompt Injection Guardrails · Chốt AI Spec.
- **[Nguyễn Khánh Đô]** Phát triển Web Prototype (UI/UX) · Xây dựng cơ chế gọi AI thật & Fallback Trace · Tích hợp bộ đếm giờ quay video 30s.
- **[Bùi Lê Gia Huy]** Thiết kế Schema Knowledge Graph · Xây dựng bộ Golden Set 20 case và chạy đo lường Run 1 CP3 · Đảm bảo chính sách bảo mật dữ liệu.
- **Willing Users đã sẵn sàng thử nghiệm tại CP5:** 4 học viên ngoài nhóm (Bạn N.M.Q, N.T.N, H.A.T, Đ.B.H - đã ẩn danh PII).

---

## §9. Changelog
| Thời Điểm | Nội Dung Thay Đổi | Lý Do / Căn Cứ |
| :--- | :--- | :--- |
| **17/9 - 19:30 (CP1)** | Khởi tạo Canvas 8 dòng và chốt Lát cắt 1 câu | Đạt nghiệm thu Checkpoint 1 |
| **17/9 - 21:00 (CP2)** | Dựng Prototype flow tĩnh và sơ đồ luồng trải nghiệm | Đạt nghiệm thu Checkpoint 2 |
| **18/9 - 13:00 (CP3)** | Tích hợp Lời gọi AI thật tại Remediation, xây dựng Golden Set 20 case, bổ sung SecurityGuard bảo mật PII, và tạo kịch bản quay video 30s | Hoàn thành toàn diện yêu cầu Checkpoint 3 |
