import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import ctaImage from "@/assets/cta-student.jpg";

const CtaBannerSection = () => {
  const { t, lang } = useLang();

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #a8e6cf 0%, #c8e6f5 50%, #ffffff 100%)",
        height: "420px",
        display: "flex",
        overflow: "hidden",
        width: "100%",
        position: "relative",
      }}
    >
      {/* White overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,255,255,0.35)",
          zIndex: 0,
        }}
      />
      {/* Horizontal edge vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(255,255,255,0.3) 0%, transparent 5%, transparent 95%, rgba(255,255,255,0.3) 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      {/* Vertical edge vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, #ffffff 0%, transparent 12%, transparent 88%, #ffffff 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Left half */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        style={{
          width: "58%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "80px",
          paddingRight: "40px",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2 style={{ fontSize: "42px", fontWeight: 700, lineHeight: 1.2, margin: 0 }}>
          {lang === "fa" ? (
            t("با پایان‌نامه‌تان مشکل دارید؟", "")
          ) : (
            <>
              <span style={{ color: "#1a1a2e" }}>Struggling with</span>{" "}
              <span style={{ color: "#2BC0B4" }}>your</span>{" "}
              <span style={{ color: "#4CAF7D" }}>thesis?</span>
            </>
          )}
        </h2>
        <p
          style={{
            color: "#666666",
            fontSize: "17px",
            fontWeight: 400,
            lineHeight: 1.6,
            marginTop: "16px",
          }}
        >
          {t(
            "نویسندگان آکادمیک متخصص ما آماده‌اند — متخصص در رشته شما، متعهد به موفقیت شما.",
            "Our expert academic writers are ready — specialized in your field, dedicated to your success."
          )}
        </p>
        <div style={{ marginTop: "28px" }}>
          <a
            href="#contact"
            style={{
              display: "inline-block",
              background: "linear-gradient(90deg, #F09800 0%, #F8B800 100%)",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "16px",
              borderRadius: "8px",
              padding: "14px 28px",
              boxShadow: "0 4px 16px rgba(245,168,0,0.45)",
              textDecoration: "none",
              transition: "filter 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "brightness(1.08)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "none";
              e.currentTarget.style.transform = "none";
            }}
          >
            {t("مشاوره رایگان با نویسنده →", "Consult a Writer Free →")}
          </a>
        </div>
      </motion.div>

      {/* Right panel — image */}
      <div
        style={{
          width: "42%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingRight: "40px",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
      >
        <img
          src={ctaImage}
          alt="Academic student studying"
          style={{
            width: "100%",
            height: "340px",
            objectFit: "cover",
            borderRadius: "12px",
            boxShadow: "-8px 0 30px rgba(0,0,0,0.08)",
          }}
        />
      </div>
    </section>
  );
};

export default CtaBannerSection;
