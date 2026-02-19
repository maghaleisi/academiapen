import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    nameFa: "سارا محمدی", nameEn: "Sara M.",
    fieldFa: "دکتری ادبیات انگلیسی، دانشگاه تهران", fieldEn: "PhD English Literature, University of Tehran",
    textFa: "با کمک این موسسه، پایان‌نامه ادبیات انگلیسی‌ام با نمره عالی تایید شد. تیم بسیار حرفه‌ای و دقیق بودند.",
    textEn: "With their help, my English literature thesis was approved with an excellent grade. Very professional and thorough team.",
    rating: 5, initials: "SM",
  },
  {
    nameFa: "علی رضایی", nameEn: "Ali R.",
    fieldFa: "دکتری ادبیات انگلیسی، دانشگاه شهید بهشتی", fieldEn: "PhD English Literature, Shahid Beheshti",
    textFa: "مقاله ISI من در کمتر از ۳ ماه در مجله معتبر Q1 پذیرفته شد. واقعاً سپاسگزارم.",
    textEn: "My ISI article was accepted in a Q1 journal in less than 3 months. Truly grateful for the quality of work.",
    rating: 5, initials: "AR",
  },
  {
    nameFa: "مریم حسینی", nameEn: "Sara M.",
    fieldFa: "ارشد روانشناسی، دانشگاه تهران", fieldEn: "MA Psychology, University of Tehran",
    textFa: "پروپوزالم با یک بار ارائه تایید شد. مشاوره‌های دقیق و علمی ایشان بسیار کمک‌کننده بود.",
    textEn: "My proposal was approved on the first submission. Their precise scientific consultation was incredibly helpful.",
    rating: 5, initials: "SM",
  },
  {
    nameFa: "حسن کریمی", nameEn: "Hassan K.",
    fieldFa: "انتشار مقاله ISI", fieldEn: "ISI Journal Publication",
    textFa: "تیم نگارش بسیار حرفه‌ای بود و مقاله من در ژورنال معتبر بین‌المللی پذیرفته شد.",
    textEn: "The writing team was extremely professional and my paper was accepted in a reputable international journal.",
    rating: 5, initials: "HK",
  },
  {
    nameFa: "فاطمه نوری", nameEn: "Fateme N.",
    fieldFa: "ارشد زبان‌شناسی، دانشگاه علامه", fieldEn: "MA Linguistics, Allameh University",
    textFa: "کیفیت نگارش و دقت در رعایت استانداردهای آکادمیک فوق‌العاده بود. بسیار توصیه می‌کنم.",
    textEn: "The writing quality and attention to academic standards was outstanding. I highly recommend their services.",
    rating: 5, initials: "FN",
  },
  {
    nameFa: "رضا توکلی", nameEn: "Reza T.",
    fieldFa: "دکتری، دانشگاه صنعتی شریف", fieldEn: "PhD Dissertation, Sharif University",
    textFa: "رساله دکتری من با بالاترین نمره دفاع شد. همکاری با این تیم تجربه‌ای عالی بود.",
    textEn: "My PhD dissertation was defended with the highest grade. Working with this team was an excellent experience.",
    rating: 5, initials: "RT",
  },
];

const PAGE_SIZE = 3;

const TestimonialsSection = () => {
  const { lang, t } = useLang();
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / PAGE_SIZE);
  const visible = testimonials.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  return (
    <section
      id="testimonials"
      style={{ background: "#f7fffe", padding: "80px 16px" }}
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
            {t("نظرات مشتریان", "TESTIMONIALS")}
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
            t("مشتریان ما چه می‌گویند؟", "")
          ) : (
            <>
              <span style={{ color: "#1a1a2e" }}>What Our Clients</span>{" "}
              <span style={{ color: "#2BC0B4" }}>Say</span>
            </>
          )}
        </h2>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "24px", marginTop: "48px" }}
        >
          {visible.map((testi, i) => (
            <motion.div
              key={page * PAGE_SIZE + i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "32px",
                border: "1px solid #eeeeee",
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                transition: "box-shadow 0.3s, border-color 0.3s",
                position: "relative",
                overflow: "hidden",
                textAlign: "center",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 30px rgba(43,192,180,0.12)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "#2BC0B4";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.06)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "#eeeeee";
              }}
            >
              {/* Decorative quote mark */}
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "20px",
                  fontSize: "72px",
                  lineHeight: 0,
                  color: "#2BC0B4",
                  opacity: 0.15,
                  fontWeight: 900,
                  pointerEvents: "none",
                  fontFamily: "Georgia, serif",
                }}
              >
                &ldquo;
              </div>

              {/* Stars */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "4px",
                  marginBottom: "12px",
                }}
              >
                {Array.from({ length: testi.rating }).map((_, si) => (
                  <Star
                    key={si}
                    size={16}
                    fill="#F5A800"
                    color="#F5A800"
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(245,168,0,0.4))",
                    }}
                  />
                ))}
              </div>

              {/* Review text */}
              <p
                style={{
                  color: "#444444",
                  fontSize: "15px",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                  margin: 0,
                }}
              >
                {t(testi.textFa, testi.textEn)}
              </p>

              {/* Reviewer info */}
              <div style={{ marginTop: "20px" }}>
                {/* Avatar */}
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #2BC0B4, #14a085)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: 700,
                    margin: "0 auto 8px",
                  }}
                >
                  {testi.initials}
                </div>
                <div
                  style={{
                    color: "#1a1a2e",
                    fontSize: "15px",
                    fontWeight: 700,
                  }}
                >
                  {t(testi.nameFa, testi.nameEn)}
                </div>
                <div
                  style={{
                    color: "#888888",
                    fontSize: "13px",
                    marginTop: "2px",
                  }}
                >
                  {t(testi.fieldFa, testi.fieldEn)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            marginTop: "32px",
          }}
        >
          {/* Prev arrow */}
          <button
            onClick={prev}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1.5px solid #2BC0B4",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.3s, color 0.3s",
              color: "#2BC0B4",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#2BC0B4";
              (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              (e.currentTarget as HTMLButtonElement).style.color = "#2BC0B4";
            }}
          >
            {lang === "fa" ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>

          {/* Dots */}
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  border: "none",
                  background: i === page ? "#2BC0B4" : "#d0d0d0",
                  cursor: "pointer",
                  padding: 0,
                  transition: "background 0.3s",
                }}
              />
            ))}
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1.5px solid #2BC0B4",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.3s, color 0.3s",
              color: "#2BC0B4",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#2BC0B4";
              (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              (e.currentTarget as HTMLButtonElement).style.color = "#2BC0B4";
            }}
          >
            {lang === "fa" ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
