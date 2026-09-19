# Reflection — Bùi Lê Gia Huy (2A202602607)

## Vai trò

Đội trưởng (Lead) · Kiến trúc Dữ liệu & Đánh giá (QA) — Điều phối nhóm, thiết kế Schema Knowledge Graph & Remediation, xây dựng bộ Golden Set kiểm thử và quản lý chất lượng (Quality Bar), điều phối thử nghiệm người dùng và chuẩn bị nội dung thuyết trình sản phẩm.

## Phần tôi thực hiện

* Thiết kế cấu trúc dữ liệu Schema Knowledge Graph và Learner Mastery / Remediation Graph (định dạng Concept/Quiz JSON, provenance tracking liên kết slide và transcript).
* Xây dựng bộ Golden Set 20 test case chuẩn phủ 4 lớp chỗ khó (Factuality, Ambiguity, Security/PII, Domain Misconception).
* Trực tiếp thực hiện đo lường Run 1, phân tích kết quả và khóa cứng tiêu chí chất lượng (Quality Bar 85.0%).
* Điều phối quy trình User Validation với 4 người dùng thực tế, thu thập phản hồi và lập báo cáo đánh giá cải tiến sản phẩm.
* Theo dõi tiến độ các mốc Checkpoint (CP1 - CP5) của nhóm và chuẩn bị nội dung Slide thuyết trình vòng thi chung kết tại phòng E402.

## AI hỗ trợ thế nào

AI hỗ trợ tôi nhanh chóng lên khung mẫu JSON Schema cho Knowledge Graph, gợi ý các trường dữ liệu và ràng buộc sư phạm. Trong quá trình xây dựng bộ Golden Set, AI giúp tạo ra các kịch bản kiểm thử phong phú (từ adversarial prompts, dữ liệu PII đến các tình huống mơ hồ và ngộ nhận tư duy sản phẩm). Ngoài ra, AI hỗ trợ tổng hợp nhanh các nhận xét từ người dùng thử nghiệm. Tuy nhiên, tôi nhận thấy AI vẫn có xu hướng tự suy diễn hoặc bịa trích dẫn (hallucination về số trang/mã bài giảng), vì vậy việc con người trực tiếp rà soát, kiểm chứng nguồn gốc (grounding & provenance) và thiết lập guardrail là hoàn toàn không thể thay thế.

## Bài học từ case fail của nhóm

Qua 3 ca kiểm thử thất bại trong bộ Golden Set (TC-10 về xung đột First Principles với framework Scrum; TC-19 về lỗi quy kết chủ quan trong Five Whys; TC-20 về việc bỏ qua pha Hội tụ trong Double Diamond), tôi hiểu rằng một hệ thống AI muốn hữu ích trong thực tế thì không thể chỉ dựa vào prompt chung chung mà bắt buộc phải có guardrail nghiệp vụ sâu sắc. Việc ghi nhận trung thực các case fail, tìm ra đúng nguyên nhân gốc rễ và xác định rõ phương án tinh chỉnh cho các mốc tiếp theo có giá trị lớn hơn nhiều so với việc chỉ khoe các trường hợp chạy đúng. Đó là bài học lớn nhất về tư duy phát triển sản phẩm AI có trách nhiệm và thực chất.
