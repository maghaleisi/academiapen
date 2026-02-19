import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const tabs = ["Paperwork", "Subject", "Formats"] as const;
type Tab = typeof tabs[number];

const paperworkColumns = [
  ["Essay", "Book Report", "Movie Review", "Article Critique", "Case Study", "Lab Report"],
  ["Assignment", "Reflection", "Creative Writing", "Literature Review", "Annotated Bibliography", "Admission Writing"],
  ["Research Proposal", "Research Paper", "Term Paper", "Coursework", "Thesis/Dissertation", "Presentation/Speech"],
];

const subjectColumns = [
  ["Mathematics", "Physics", "Chemistry", "Biology", "History", "Geography"],
  ["Economics", "Psychology", "Sociology", "Philosophy", "Political Science", "Law"],
  ["Literature", "Business", "Marketing", "Accounting", "Computer Science", "Nursing"],
];

const formatsColumns = [
  ["APA", "MLA", "Chicago", "Harvard", "Turabian", "IEEE"],
  ["AMA", "Vancouver", "Oxford", "ASA", "APSA", "Bluebook"],
  ["CSE", "MHRA", "AGLC", "AAA", "ACS", "AIP"],
];

const tabData: Record<Tab, string[][]> = {
  Paperwork: paperworkColumns,
  Subject: subjectColumns,
  Formats: formatsColumns,
};

const PaperTypesSection = () => {
  const { t, lang } = useLang();
  const [activeTab, setActiveTab] = useState<Tab>("Paperwork");

  const columns = tabData[activeTab];

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "80px 16px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
            marginBottom: "0",
          }}
        >
          {lang === "fa" ? (
            <>
              <span style={{ color: "#1BA8A0" }}>کمک</span>{" "}
              <span style={{ color: "#1BA8A0" }}>نگارش</span>{" "}
              <span style={{ color: "#4CAF7D" }}>آکادمیک</span>
            </>
          ) : (
            <>
              <span style={{ color: "#1BA8A0" }}>Academic</span>{" "}
              <span style={{ color: "#1BA8A0" }}>Writing</span>{" "}
              <span style={{ color: "#4CAF7D" }}>Help</span>
            </>
          )}
          <br />
          <span style={{ color: "#1a1a2e" }}>{t("با هر نوع مقاله", "With Any Paper")}</span>
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
            marginTop: "16px",
            maxWidth: "640px",
            margin: "16px auto 0",
          }}
        >
          {t(
            "کمک حرفه‌ای آکادمیک برای هر مقاله، در هر موضوع و هر سطحی. از تمام سبک‌های اصلی استناد از جمله APA، MLA و Chicago پشتیبانی می‌کنیم.",
            "Get professional academic assistance for any paper, in any subject, at any level. We support all major citation styles including APA, MLA, and Chicago."
          )}
        </motion.p>

        {/* YOU CAN ORDER label */}
        <div
          style={{
            textAlign: "center",
            fontSize: "12px",
            letterSpacing: "3px",
            color: "#aaaaaa",
            fontWeight: 500,
            textTransform: "uppercase",
            marginTop: "40px",
          }}
        >
          {t("سفارش رایگان !", "ORDER for free !")}
        </div>

        {/* Tab buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "16px",
          }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  borderRadius: "20px",
                  padding: "10px 28px",
                  fontSize: "15px",
                  fontWeight: 600,
                  border: isActive ? "1.5px solid #2BC0B4" : "1.5px solid #cccccc",
                  color: isActive ? "#2BC0B4" : "#2d2d2d",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  transition: "border-color 0.2s ease, color 0.2s ease",
                }}
              >
                {t(
                  tab === "Paperwork" ? "نوع مقاله" : tab === "Subject" ? "موضوع" : "فرمت",
                  tab
                )}
              </button>
            );
          })}
        </div>

        {/* 3-column list */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "0",
            marginTop: "40px",
          }}
        >
          {columns.map((col, colIdx) => (
            <ul
              key={colIdx}
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {col.map((item, itemIdx) => (
                <li
                  key={itemIdx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    paddingLeft: "20px",
                    lineHeight: 2,
                    color: "#2d2d2d",
                    fontSize: "15px",
                    fontWeight: 400,
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#2BC0B4",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PaperTypesSection;
