import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Shield, Users, Fingerprint, Lock, Gift, CheckCircle } from "lucide-react";

const featureCards = [
  {
    icon: Users,
    titleEn: "Adept Writers",
    titleFa: "نویسندگان ماهر",
    descEn: "Our team of skilled academic writers brings deep subject expertise and years of experience to every order.",
    descFa: "تیم ما از نویسندگان آکادمیک ماهر با تخصص عمیق موضوعی و سال‌ها تجربه در هر سفارش کار می‌کنند.",
  },
  {
    icon: Fingerprint,
    titleEn: "Personalized Approach",
    titleFa: "رویکرد شخصی‌سازی‌شده",
    descEn: "Every paper is tailored to your unique requirements, academic level, and personal instructions.",
    descFa: "هر مقاله بر اساس نیازهای منحصربه‌فرد، سطح آکادمیک و دستورالعمل‌های شخصی شما تهیه می‌شود.",
  },
  {
    icon: Shield,
    titleEn: "100% Original Papers",
    titleFa: "مقالات ۱۰۰٪ اصیل",
    descEn: "All work is written from scratch and scanned with advanced plagiarism tools to guarantee full originality.",
    descFa: "تمام کارها از ابتدا نوشته شده و با ابزارهای پیشرفته سرقت ادبی بررسی می‌شوند.",
  },
  {
    icon: Lock,
    titleEn: "Absolute Confidentiality",
    titleFa: "محرمانه بودن مطلق",
    descEn: "Your personal data and order details are always protected with strict confidentiality and full privacy.",
    descFa: "اطلاعات شخصی و جزئیات سفارش شما همیشه با محرمانه بودن کامل محافظت می‌شود.",
  },
];

const includedItems = [
  { nameEn: "Best Writer", nameFa: "بهترین نویسنده", priceEn: "$19.99", priceFa: "$19.99" },
  { nameEn: "Paper Formatting", nameFa: "فرمت‌بندی مقاله", priceEn: "$17.49", priceFa: "$17.49" },
  { nameEn: "Title Page", nameFa: "صفحه عنوان", priceEn: "$14.99", priceFa: "$14.99" },
  { nameEn: "Table of Contents", nameFa: "فهرست مطالب", priceEn: "$3.49", priceFa: "$3.49" },
  { nameEn: "Unlimited Revision", nameFa: "ویرایش نامحدود", priceEn: "$6.99", priceFa: "$6.99" },
];

const FeaturesSection = () => {
  const { t } = useLang();

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "80px 16px" }}>
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold leading-tight mb-4"
            style={{ fontSize: "36px", color: "#1a1a2e" }}
          >
            {t("خدمات نگارش آکادمیک با ویژگی‌های برتر", "AcademiaPen\nPowered by Features")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: "16px", color: "#777" }}
            className="max-w-2xl mx-auto"
          >
            {t(
              "ویژگی‌هایی که خدمات نگارش آکادمیک ما را منحصربه‌فرد می‌کنند!",
              "Perceive these hallmarks that make our custom academic writing service truly unique!"
            )}
          </motion.p>
        </div>

        {/* Main 3-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {/* Left 2 columns: 2x2 feature cards grid */}
          <div
            style={{
              gridColumn: "span 2",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
          >
            {featureCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    padding: "32px",
                    borderRadius: "12px",
                    backgroundColor: "#ffffff",
                    border: "1px solid #eeeeee",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  }}
                >
                  <Icon size={40} style={{ color: "#5BC4BE", marginBottom: "20px" }} />
                  <h3
                    className="font-bold mb-3"
                    style={{ fontSize: "20px", color: "#1a1a2e" }}
                  >
                    {t(card.titleFa, card.titleEn)}
                  </h3>
                  <p style={{ fontSize: "15px", color: "#777", lineHeight: 1.7 }}>
                    {t(card.descFa, card.descEn)}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right column: What's included card spanning both rows */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              gridColumn: "3",
              gridRow: "1 / span 1",
              padding: "32px",
              borderRadius: "16px",
              background: "linear-gradient(180deg, #e8f4fb 0%, #d6eef8 100%)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
              border: "none",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header: bare gift icon + title */}
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <Gift
                size={40}
                style={{ color: "#5BC4BE", marginBottom: "12px" }}
              />
              <h3
                className="font-bold"
                style={{ fontSize: "22px", color: "#1a1a2e" }}
              >
                {t("شامل چه مواردی است", "What's included")}
              </h3>
            </div>

            {/* Item rows */}
            <div className="flex flex-col" style={{ flex: 1 }}>
              {includedItems.map((item, i) => (
                <div key={i}>
                  <div
                    className="flex items-center justify-between"
                    style={{ height: "48px" }}
                  >
                    <span style={{ fontSize: "15px", color: "#2d2d2d", fontWeight: 400 }}>
                      {t(item.nameFa, item.nameEn)}
                    </span>
                    <div className="flex items-center" style={{ gap: "8px" }}>
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#aaaaaa",
                          textDecoration: "line-through",
                        }}
                      >
                        {t(item.priceFa, item.priceEn)}
                      </span>
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#2BC0B4",
                          fontWeight: 700,
                        }}
                      >
                        FREE
                      </span>
                    </div>
                  </div>
                  <div style={{ height: "1px", backgroundColor: "#c8dfe8" }} />
                </div>
              ))}

              {/* Summary block */}
              <div
                style={{
                  paddingTop: "16px",
                  borderTop: "2px solid #b8d8e8",
                  marginTop: "4px",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "15px",
                    color: "#2d2d2d",
                    fontWeight: 600,
                    marginBottom: "6px",
                  }}
                >
                  {t("مجموع:", "Get all of these for:")}
                </span>
                <div className="flex items-baseline justify-center" style={{ gap: "10px" }}>
                  <span
                    style={{
                      fontSize: "18px",
                      color: "#aaaaaa",
                      textDecoration: "line-through",
                    }}
                  >
                    $62.95
                  </span>
                  <span
                    style={{
                      fontSize: "22px",
                      color: "#4CAF7D",
                      fontWeight: 800,
                    }}
                  >
                    FREE
                  </span>
                </div>
              </div>

              {/* Place Order button */}
              <button
                style={{
                  marginTop: "16px",
                  width: "100%",
                  height: "52px",
                  background: "linear-gradient(90deg, #F09800 0%, #F8B800 100%)",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "16px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 16px rgba(245,168,0,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  transition: "filter 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.08)";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                }}
              >
                {t("ثبت سفارش رایگان", "Place Order for Free")}
                <CheckCircle size={20} style={{ color: "#ffffff" }} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
