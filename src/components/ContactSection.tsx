import { useLang } from "@/contexts/LanguageContext";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle, Star, GraduationCap } from "lucide-react";

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "1.5px solid #e0e0e0",
  borderRadius: "8px",
  padding: "12px 16px",
  fontSize: "15px",
  color: "#333",
  background: "#ffffff",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
  boxSizing: "border-box",
};

const focusHandler = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  e.currentTarget.style.borderColor = "#2BC0B4";
  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(43,192,180,0.15)";
};

const blurHandler = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  e.currentTarget.style.borderColor = "#e0e0e0";
  e.currentTarget.style.boxShadow = "none";
};

const trustPoints = [
  { fa: "پاسخ‌دهی در کمتر از ۲ ساعت", en: "Response within 2 hours" },
  { fa: "مشاوره کاملاً محرمانه", en: "100% confidential consultation" },
  { fa: "بدون هیچ تعهدی", en: "No commitment required" },
  { fa: "خدمت‌رسانی به دانشجویان ایرانی از سال ۱۳۹۳", en: "Serving Iranian students since 2014" },
];

const ContactSection = () => {
  const { t, lang } = useLang();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    try {
      await fetch("https://formspree.io/f/xlgwbdgo", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      setSent(true);
      form.reset();
    } catch {
      // silent fail
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        background: "radial-gradient(ellipse at bottom center, #e8f5f0 0%, #f5fffe 50%, #ffffff 100%)",
        padding: "80px 16px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Label */}
        <div style={{ textAlign: "center", marginBottom: "8px" }}>
          <span
            style={{
              color: "#2BC0B4",
              fontSize: "12px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "3px",
            }}
          >
            {t("تماس با ما", "CONTACT US")}
          </span>
        </div>

        {/* Title */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "38px",
            fontWeight: 700,
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          {lang === "fa" ? (
            t("همین حالا مشاوره رایگان دریافت کنید", "")
          ) : (
            <>
              <span style={{ color: "#1a1a2e" }}>Get Your Free Consultation</span>{" "}
              <span style={{ color: "#2BC0B4" }}>Now</span>
            </>
          )}
        </h2>

        {/* Subtitle */}
        <p
          style={{
            textAlign: "center",
            color: "#666666",
            fontSize: "15px",
            marginTop: "8px",
            marginBottom: "48px",
          }}
        >
          {t(
            "بدون هیچ تعهدی. ظرف ۲ ساعت پاسخ خواهیم داد.",
            "No obligation. We'll respond within 2 hours."
          )}
        </p>

        {/* Two-column layout */}
        <div
          className="grid grid-cols-1 md:grid-cols-5"
          style={{ gap: "24px", alignItems: "stretch" }}
        >
          {/* Left trust panel - 2/5 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "32px",
              border: "1px solid #eeeeee",
              boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Logo icon */}
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "12px",
                background: "#e6f7f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px",
              }}
            >
              <GraduationCap size={28} color="#2BC0B4" />
            </div>

            {/* Trust bullets */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {trustPoints.map((tp, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <CheckCircle size={18} color="#2BC0B4" style={{ flexShrink: 0 }} />
                  <span style={{ color: "#1a1a2e", fontSize: "14px", fontWeight: 500 }}>
                    {t(tp.fa, tp.en)}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background: "linear-gradient(to right, transparent, #2BC0B4, transparent)",
                opacity: 0.3,
                margin: "24px 0",
              }}
            />

            {/* Mini testimonial */}
            <div>
              <div style={{ display: "flex", gap: "3px", marginBottom: "8px" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="#F5A800"
                    color="#F5A800"
                    style={{ filter: "drop-shadow(0 0 6px rgba(245,168,0,0.3))" }}
                  />
                ))}
              </div>
              <p
                style={{
                  color: "#666666",
                  fontSize: "14px",
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {t(
                  "«تیم فوق‌العاده حرفه‌ای. پایان‌نامه‌ام با بالاترین نمره تایید شد.»",
                  '"Incredibly professional team. My thesis was approved with the highest grade."'
                )}
              </p>
              <p style={{ color: "#888888", fontSize: "12px", marginTop: "6px" }}>
                — Ali R., PhD, Shahid Beheshti
              </p>
            </div>
          </motion.div>

          {/* Right form card - 3/5 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "36px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            }}
          >
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: "#e6f7f5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <Send size={28} color="#2BC0B4" />
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1a1a2e", marginBottom: "8px" }}>
                  {t("پیام شما ارسال شد!", "Message Sent!")}
                </h3>
                <p style={{ color: "#666666", fontSize: "15px" }}>
                  {t("به زودی با شما تماس خواهیم گرفت.", "We'll get back to you soon.")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Row 1: Name + Phone */}
                <div
                  className="grid grid-cols-1 sm:grid-cols-2"
                  style={{ gap: "16px", marginBottom: "16px" }}
                >
                  <input
                    name="name"
                    required
                    maxLength={100}
                    placeholder={t("نام و نام خانوادگی", "Full Name")}
                    style={inputStyle}
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                  />
                  <input
                    name="phone"
                    required
                    maxLength={20}
                    placeholder={t("شماره تماس", "Phone Number")}
                    style={inputStyle}
                    dir="ltr"
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                  />
                </div>

                {/* Row 2: Email */}
                <div style={{ marginBottom: "16px" }}>
                  <input
                    name="email"
                    type="email"
                    maxLength={255}
                    placeholder={t("ایمیل (اختیاری)", "Email (optional)")}
                    style={inputStyle}
                    dir="ltr"
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                  />
                </div>

                {/* Row 3: Select */}
                <div style={{ marginBottom: "16px" }}>
                  <select
                    name="service"
                    required
                    style={{
                      ...inputStyle,
                      appearance: "none",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%232BC0B4' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: lang === "fa" ? "16px center" : "calc(100% - 16px) center",
                      paddingRight: lang === "fa" ? "16px" : "40px",
                      paddingLeft: lang === "fa" ? "40px" : "16px",
                    }}
                    onFocus={focusHandler as any}
                    onBlur={blurHandler as any}
                  >
                    <option value="">{t("نوع خدمات مورد نیاز", "Select Service")}</option>
                    <option>{t("پایان‌نامه ادبیات انگلیسی", "English Literature Thesis")}</option>
                    <option>{t("مقاله روانشناسی", "Psychology Paper")}</option>
                    <option>{t("تحقیق زبان‌شناسی", "Linguistics Research")}</option>
                    <option>{t("مقاله ISI/Scopus", "ISI/Scopus Article")}</option>
                    <option>{t("خدمات ترجمه", "Translation Services")}</option>
                    <option>{t("سایر", "Other")}</option>
                  </select>
                </div>

                {/* Row 4: Textarea */}
                <div style={{ marginBottom: "16px" }}>
                  <textarea
                    name="message"
                    required
                    maxLength={2000}
                    placeholder={t("توضیحات پروژه", "Project Description")}
                    style={{
                      ...inputStyle,
                      height: "120px",
                      resize: "vertical",
                    }}
                    onFocus={focusHandler as any}
                    onBlur={blurHandler as any}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    height: "52px",
                    background: "linear-gradient(90deg, #F09800 0%, #F8B800 100%)",
                    color: "#ffffff",
                    fontSize: "16px",
                    fontWeight: 700,
                    border: "none",
                    borderRadius: "8px",
                    cursor: loading ? "not-allowed" : "pointer",
                    boxShadow: "0 4px 16px rgba(245,168,0,0.45)",
                    transition: "filter 0.2s, transform 0.2s",
                    marginTop: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    opacity: loading ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      e.currentTarget.style.filter = "brightness(1.08)";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = "none";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  {loading ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <>
                      {t("ارسال درخواست", "Send Request")} →
                    </>
                  )}
                </button>

                {/* Confidentiality note */}
                <p
                  style={{
                    textAlign: "center",
                    color: "#888888",
                    fontSize: "13px",
                    marginTop: "12px",
                  }}
                >
                  {t("🔒 اطلاعات شما کاملاً محرمانه است.", "🔒 Your information is completely confidential.")}
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
