import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { MessageCircle, ClipboardList, Tag, PenLine, FileEdit, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  numFa: string;
  numEn: string;
  fa: string;
  en: string;
  bodyFa: string;
  bodyEn: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    numFa: "۱", numEn: "1",
    fa: "تماس و مشاوره رایگان", en: "Free Consultation",
    bodyFa: "یک مشاوره رایگان و بدون تعهد رزرو کنید تا نیازها و اهداف آکادمیک خود را بررسی کنیم.",
    bodyEn: "Book a free no-obligation consultation to discuss your academic needs and goals.",
    icon: MessageCircle,
  },
  {
    numFa: "۲", numEn: "2",
    fa: "ارسال اطلاعات پروژه", en: "Submit Project Details",
    bodyFa: "موضوع، راهنمایی‌ها، مهلت و هرگونه الزامات خاص دانشگاه خود را به اشتراک بگذارید.",
    bodyEn: "Share your topic, guidelines, deadline, and any university-specific requirements.",
    icon: ClipboardList,
  },
  {
    numFa: "۳", numEn: "3",
    fa: "دریافت قیمت و زمان‌بندی", en: "Receive Quote & Timeline",
    bodyFa: "ما یک پیشنهاد قیمت شفاف همراه با زمان‌بندی و پروفایل نویسنده اختصاصی ارسال خواهیم کرد.",
    bodyEn: "We'll send you a transparent quote with timeline and assigned writer profile.",
    icon: Tag,
  },
  {
    numFa: "۴", numEn: "4",
    fa: "قرارداد و پیش‌پرداخت", en: "Contract & Down Payment",
    bodyFa: "یک قرارداد ساده امضا کنید و پرداخت جزئی امن انجام دهید تا کار شروع شود.",
    bodyEn: "Sign a simple service agreement and make a secure partial payment to begin.",
    icon: PenLine,
  },
  {
    numFa: "۵", numEn: "5",
    fa: "شروع نگارش و ارسال پیش‌نویس", en: "Writing & Draft Delivery",
    bodyFa: "نویسنده متخصص شما پیش‌نویس کامل را برای بررسی و بازخورد شما ارسال می‌کند.",
    bodyEn: "Your expert writer delivers a full draft for your review and feedback.",
    icon: FileEdit,
  },
  {
    numFa: "۶", numEn: "6",
    fa: "بازخورد، اصلاحات و تحویل نهایی", en: "Revisions & Final Delivery",
    bodyFa: "ما تا زمان رضایت کامل شما اصلاح می‌کنیم و سپس سند نهایی پرداخت‌شده را تحویل می‌دهیم.",
    bodyEn: "We refine until you're fully satisfied, then deliver the polished final document.",
    icon: CheckCircle,
  },
];

const ProcessSection = () => {
  const { t, lang } = useLang();

  return (
    <section
      id="process"
      style={{
        background: "#ffffff",
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
            {t("فرآیند کار", "OUR PROCESS")}
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
            t("نحوه سفارش و انجام پروژه", "")
          ) : (
            <>
              <span style={{ color: "#1a1a2e" }}>How We Work</span>{" "}
              <span style={{ color: "#2BC0B4" }}>Together</span>
            </>
          )}
        </h2>

        {/* Subtitle */}
        <p
          style={{
            textAlign: "center",
            color: "#666666",
            fontSize: "16px",
            fontWeight: 400,
            marginTop: "12px",
            marginBottom: "48px",
          }}
        >
          {t(
            "فرآیندی ساده و شفاف از اولین تماس تا تحویل نهایی.",
            "A simple, transparent process from first contact to final delivery."
          )}
        </p>

        {/* Card grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "24px" }}
        >
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  background: "#ffffff",
                  border: "1px solid #eeeeee",
                  borderRadius: "16px",
                  padding: "28px",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                  transition: "box-shadow 0.3s, border-color 0.3s",
                  cursor: "default",
                }}
                whileHover={{
                  boxShadow: "0 8px 30px rgba(43,192,180,0.15)",
                  borderColor: "#2BC0B4",
                }}
              >
                {/* Step number badge */}
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #2BC0B4 0%, #14a085 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "16px",
                    boxShadow: "0 4px 12px rgba(43,192,180,0.4)",
                  }}
                >
                  {t(s.numFa, s.numEn)}
                </div>

                {/* Icon */}
                <Icon size={28} color="#2BC0B4" style={{ marginTop: "14px" }} />

                {/* Title */}
                <h3
                  style={{
                    color: "#1a1a2e",
                    fontSize: "17px",
                    fontWeight: 700,
                    marginTop: "14px",
                    marginBottom: 0,
                  }}
                >
                  {t(s.fa, s.en)}
                </h3>

                {/* Body */}
                <p
                  style={{
                    color: "#666666",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    marginTop: "8px",
                    marginBottom: 0,
                  }}
                >
                  {t(s.bodyFa, s.bodyEn)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
