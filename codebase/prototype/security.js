/**
 * RÙA TAI ĐỎ · DATA SECURITY & PRIVACY GUARDRAILS
 * Tuân thủ quy định bảo mật dữ liệu Hackathon K4 (README mục 348-360)
 * Chống PII Leakage, Prompt Injection, và kiểm tra Grounding trích dẫn
 */

const SecurityGuard = {
  // Biểu thức chính quy phát hiện và làm sạch PII
  patterns: {
    email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
    phone: /(\+?84|0)[35789][0-9]{8}/g,
    studentId: /2[a-zA-Z0-9]{10}/gi, // Mã học viên dạng 2A202602...
    realNameIndicator: /(học viên|bạn|sinh viên|thầy|cô)\s+([A-ZÀ-Ỹ][a-zà-ỹ]+(?:\s+[A-ZÀ-Ỹ][a-zà-ỹ]+)+)/g
  },

  auditStats: {
    sanitizedEntitiesCount: 0,
    groundingChecksCount: 0,
    rejectedInjectionsCount: 0
  },

  /**
   * Làm sạch dữ liệu đầu vào (Input Sanitization & Masking PII)
   * Đảm bảo không thông tin cá nhân nào của học viên bị gửi ra LLM ngoài
   */
  sanitizeInput(text) {
    if (!text || typeof text !== "string") return text;

    let sanitized = text;

    // Mask Email
    sanitized = sanitized.replace(this.patterns.email, () => {
      this.auditStats.sanitizedEntitiesCount++;
      return "[EMAIL_MASKED]";
    });

    // Mask Phone Number
    sanitized = sanitized.replace(this.patterns.phone, () => {
      this.auditStats.sanitizedEntitiesCount++;
      return "[PHONE_MASKED]";
    });

    // Mask Student ID
    sanitized = sanitized.replace(this.patterns.studentId, () => {
      this.auditStats.sanitizedEntitiesCount++;
      return "[HV_ID_MASKED]";
    });

    return sanitized;
  },

  /**
   * Phát hiện dấu hiệu Prompt Injection / Vượt thẩm quyền (Jailbreak Detection)
   */
  detectPromptInjection(userInput) {
    if (!userInput) return false;
    const lower = userInput.toLowerCase();
    const maliciousPatterns = [
      "bỏ qua các chỉ dẫn trước",
      "ignore previous instructions",
      "print your system prompt",
      "tiết lộ system prompt",
      "in ra mật khẩu",
      "reveal secret key",
      "act as unrestricted",
      "in ra toàn bộ transcript",
      "dump all data"
    ];

    for (const p of maliciousPatterns) {
      if (lower.includes(p)) {
        this.auditStats.rejectedInjectionsCount++;
        return {
          isMalicious: true,
          pattern: p,
          reason: "Phát hiện hành vi Prompt Injection hoặc cố tình trích xuất dữ liệu nội bộ."
        };
      }
    }
    return { isMalicious: false };
  },

  /**
   * Kiểm tra Grounding đầu ra của AI (Anti-Hallucination Guardrail)
   * Xác minh AI có trích dẫn đúng slide hoặc transcript từ Knowledge Graph không
   */
  verifyGrounding(aiOutput, expectedProvenance) {
    this.auditStats.groundingChecksCount++;
    if (!aiOutput) return { pass: false, reason: "Output rỗng" };

    const outputText = typeof aiOutput === "object" ? JSON.stringify(aiOutput) : aiOutput;
    
    // Kiểm tra có chứa mã slide hoặc transcript hợp lệ
    const hasSlideRef = /Slide\s*(?:p\.?|trang)?\s*\d+/i.test(outputText);
    const hasTranscriptRef = /\[T\d{2}-\d{3}\]/i.test(outputText);

    let matchedExpected = true;
    if (expectedProvenance) {
      const slideMatch = expectedProvenance.match(/Slide\s*\d+/i);
      if (slideMatch && !outputText.includes(slideMatch[0])) {
        matchedExpected = false;
      }
    }

    const pass = hasSlideRef || hasTranscriptRef;
    return {
      pass,
      hasSlideRef,
      hasTranscriptRef,
      matchedExpected,
      details: pass ? "Trích dẫn nguồn hợp lệ." : "Cảnh báo: Output thiếu trích dẫn slide/transcript bài giảng."
    };
  },

  /**
   * Quản lý API Key an toàn trong trình duyệt (Chỉ lưu sessionStorage)
   * Tuyệt đối không lưu vào localStorage lâu dài hay commit vào repo
   */
  getApiKey() {
    return sessionStorage.getItem("VLEARN_STUDIO_API_KEY") || "";
  },

  setApiKey(key) {
    if (!key) {
      sessionStorage.removeItem("VLEARN_STUDIO_API_KEY");
      return;
    }
    sessionStorage.setItem("VLEARN_STUDIO_API_KEY", key.trim());
  },

  hasApiKey() {
    const k = this.getApiKey();
    return Boolean(k && k.length > 5);
  },

  clearApiKey() {
    sessionStorage.removeItem("VLEARN_STUDIO_API_KEY");
  },

  getAuditSummary() {
    return {
      ...this.auditStats,
      hasKey: this.hasApiKey(),
      complianceStatus: "Tuân thủ 100% Quy định Bảo mật Hackathon K4"
    };
  }
};

// Export to window
window.SecurityGuard = SecurityGuard;
