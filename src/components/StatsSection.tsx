import { useLang } from "@/contexts/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Rocket, Smile, Clock, Headset } from "lucide-react";

const stats = [
  { valueFa: "۵۰۰+", valueEn: "500+", num: 500, labelFa: "پروژه موفق", labelEn: "Successful Projects", icon: Rocket },
  { valueFa: "۹۸٪", valueEn: "98%", num: 98, labelFa: "رضایت مشتریان", labelEn: "Client Satisfaction", icon: Smile },
  { valueFa: "۱۰+", valueEn: "10+", num: 10, labelFa: "سال تجربه", labelEn: "Years Experience", icon: Clock },
  { valueFa: "۲۴/۷", valueEn: "24/7", num: 24, labelFa: "پشتیبانی آنلاین", labelEn: "Online Support", icon: Headset },
];

const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.max(1, Math.floor(target / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const { lang, t } = useLang();

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0d7377 0%, #14a085 50%, #0d7377 100%)",
        padding: "60px 16px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* White overlay to soften/lighten */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,255,255,0.15)",
          zIndex: 0,
        }}
      />
      {/* Left/right edge fade into white */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, #ffffff 0%, transparent 10%, transparent 90%, #ffffff 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      {/* Top/bottom edge fade into white */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, #ffffff 0%, transparent 12%, transparent 88%, #ffffff 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ textAlign: "center" }}
              >
                <Icon size={28} color="#ffffff" style={{ opacity: 0.85, margin: "0 auto 12px" }} />
                <div
                  style={{
                    color: "#F5A800",
                    fontSize: "48px",
                    fontWeight: 200,
                    lineHeight: 1,
                    letterSpacing: "1px",
                    textShadow: "0 0 20px rgba(245,168,0,0.4), 0 0 50px rgba(245,168,0,0.2)",
                  }}
                >
                  {lang === "fa" ? s.valueFa : (
                    <>
                      <Counter target={s.num} />
                      {s.valueEn.includes("+") ? "+" : s.valueEn.includes("%") ? "%" : s.valueEn.includes("/") ? "/7" : ""}
                    </>
                  )}
                </div>
                <div
                  style={{
                    color: "#ffffff",
                    fontSize: "13px",
                    fontWeight: 400,
                    letterSpacing: "1px",
                    marginTop: "8px",
                    opacity: 0.9,
                  }}
                >
                  {t(s.labelFa, s.labelEn)}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
