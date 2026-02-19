import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const stats = [
  { number: "2,400+", label: "Theses Completed", labelFa: "پایان‌نامه تکمیل‌شده" },
  { number: "47", label: "Expert Academic Writers", labelFa: "نویسنده آکادمیک متخصص" },
  { number: "1,850+", label: "Satisfied Students", labelFa: "دانشجوی راضی" },
];

const CountsSection = () => {
  const { t, lang } = useLang();

  return (
    <section
      style={{
        background: "radial-gradient(ellipse at top center, #e8f5e8 0%, #f5faf5 50%, #ffffff 100%)",
        padding: "100px 16px 60px",
        position: "relative",
      }}
    >
      {/* Side edge vignette overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          background: "linear-gradient(to right, #ffffff 0%, transparent 12%, transparent 88%, #ffffff 100%)",
        }}
      />
      {/* Top/bottom edge vignette overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          background: "linear-gradient(to bottom, #ffffff 0%, transparent 12%, transparent 88%, #ffffff 100%)",
        }}
      />
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            fontSize: "42px",
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: 0,
          }}
        >
          {lang === "fa" ? (
            <>
              <span style={{ color: "#1BA8A0" }}>خدمات</span>{" "}
              <span style={{ color: "#2DB89A" }}>نگارش</span>{" "}
              <span style={{ color: "#4CAF7D" }}>آکادمیک</span>
              <br />
              <span style={{ color: "#1a1a2e" }}>در اعداد</span>
            </>
          ) : (
            <>
              <span style={{ color: "#1BA8A0" }}>Academic</span>{" "}
              <span style={{ color: "#2DB89A" }}>Writing</span>{" "}
              <span style={{ color: "#4CAF7D" }}>Services</span>
              <br />
              <span style={{ color: "#1a1a2e" }}>in Numbers</span>
            </>
          )}
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            textAlign: "center",
            color: "#666666",
            fontSize: "16px",
            fontWeight: 400,
            maxWidth: "640px",
            margin: "16px auto 0",
            letterSpacing: "0.2px",
            lineHeight: 1.7,
          }}
        >
          {t(
            "اعداد دروغ نمی‌گویند. خدمات نگارش آکادمیک ما دستاوردهای چشمگیری داشته که مورد اعتماد دانشجویان سراسر جهان است.",
            "Numbers never lie. Our academic writing service has scored impressive achievements trusted by students worldwide."
          )}
        </motion.p>

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "32px",
            marginTop: "48px",
          }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              style={{ textAlign: "center" }}
            >
              <div
                style={{
                  fontFamily: "'Inter', 'Poppins', sans-serif",
                  color: "#F5A800",
                  fontSize: "64px",
                  fontWeight: 200,
                  lineHeight: 1,
                  letterSpacing: "-1px",
                  textShadow: "0 0 25px rgba(245, 168, 0, 0.20), 0 0 60px rgba(245, 168, 0, 0.10)",
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  color: "#555555",
                  fontSize: "15px",
                  fontWeight: 400,
                  marginTop: "10px",
                }}
              >
                {lang === "fa" ? stat.labelFa : stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountsSection;
