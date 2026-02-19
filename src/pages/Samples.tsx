import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLang } from "@/contexts/LanguageContext";
import { ChevronDown } from "lucide-react";

const samplePapers = [
  {
    subject: "English Literature",
    title: "The Role of Symbolism in Virginia Woolf's To the Lighthouse",
    level: "MA",
    type: "Thesis",
    format: "APA",
    excerpt:
      "This thesis explores the intricate use of symbolism in Woolf's modernist novel, examining how the lighthouse itself serves as a multifaceted symbol representing aspiration, loss, and the passage of time…",
  },
  {
    subject: "Psychology",
    title: "Cognitive Behavioral Therapy and Its Efficacy in Treating Adolescent Anxiety",
    level: "PhD",
    type: "Journal Article",
    format: "APA",
    excerpt:
      "This article presents a systematic review of randomized controlled trials evaluating CBT interventions for anxiety disorders in adolescents aged 12–18, highlighting treatment outcomes and long-term efficacy…",
  },
  {
    subject: "Linguistics",
    title: "Code-Switching Patterns Among Bilingual University Students",
    level: "MA",
    type: "Research Paper",
    format: "MLA",
    excerpt:
      "This study investigates the sociolinguistic motivations behind code-switching in bilingual academic settings, analyzing conversational data from Persian-English speakers in university contexts…",
  },
  {
    subject: "Psychology",
    title: "The Impact of Social Media on Self-Esteem in Young Adults",
    level: "Bachelor",
    type: "Essay",
    format: "Chicago",
    excerpt:
      "This essay examines the relationship between social media usage patterns and self-reported self-esteem levels among university students, drawing on recent survey data and psychological frameworks…",
  },
  {
    subject: "English Literature",
    title: "Postcolonial Identity in Chimamanda Ngozi Adichie's Americanah",
    level: "PhD",
    type: "Journal Article",
    format: "MLA",
    excerpt:
      "This article critically analyzes the construction of postcolonial identity through the lens of migration, race, and belonging in Adichie's celebrated novel, situating it within broader diaspora literature…",
  },
  {
    subject: "General",
    title: "Sustainable Urban Planning: A Comparative Analysis of European Models",
    level: "MA",
    type: "Research Paper",
    format: "Vancouver",
    excerpt:
      "This research paper compares sustainable urban development strategies across three European cities, evaluating green infrastructure policies, public transport integration, and community engagement models…",
  },
];

const subjectOptions = ["All", "English Literature", "Psychology", "Linguistics", "General"];
const typeOptions = ["All", "Thesis", "Journal Article", "Essay", "Research Paper"];
const levelOptions = ["All", "Bachelor", "MA", "PhD"];
const formatOptions = ["All", "APA", "MLA", "Chicago", "Vancouver"];

const Samples = () => {
  const { t } = useLang();
  const [subject, setSubject] = useState("All");
  const [paperType, setPaperType] = useState("All");
  const [level, setLevel] = useState("All");
  const [format, setFormat] = useState("All");

  const filtered = samplePapers.filter((p) => {
    if (subject !== "All" && p.subject !== subject) return false;
    if (paperType !== "All" && p.type !== paperType) return false;
    if (level !== "All" && p.level !== level) return false;
    if (format !== "All" && p.format !== format) return false;
    return true;
  });

  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #a8e6cf 0%, #c8e6f5 60%, #ffffff 100%)",
          paddingTop: 80,
          paddingBottom: 80,
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          {/* Breadcrumb */}
          <div style={{ marginTop: 24, fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}>
            <a href="/" style={{ color: "#2BC0B4", textDecoration: "none", fontWeight: 500 }}>
              {t("صفحه اصلی", "Home")}
            </a>
            <span style={{ color: "#aaaaaa" }}>›</span>
            <span style={{ color: "#666666" }}>{t("نمونه‌کارها", "Work Samples")}</span>
          </div>

          {/* Hero icon */}
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <div style={{ display: "inline-block", marginBottom: 20 }}>
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <defs>
                  <linearGradient id="docGrad" x1="40" y1="0" x2="40" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5BC8F5" />
                    <stop offset="1" stopColor="#2BC0B4" />
                  </linearGradient>
                </defs>
                {/* Back page */}
                <rect x="18" y="8" width="48" height="60" rx="6" fill="url(#docGrad)" opacity="0.35" />
                {/* Front page */}
                <rect x="14" y="14" width="48" height="60" rx="6" fill="url(#docGrad)" />
                {/* Lines on front page */}
                <rect x="24" y="30" width="28" height="3" rx="1.5" fill="#ffffff" opacity="0.7" />
                <rect x="24" y="38" width="22" height="3" rx="1.5" fill="#ffffff" opacity="0.5" />
                <rect x="24" y="46" width="26" height="3" rx="1.5" fill="#ffffff" opacity="0.4" />
              </svg>
            </div>

            {/* Heading */}
            <h1 style={{ fontSize: 52, fontWeight: 700, margin: 0, lineHeight: 1.15 }}>
              <span
                style={{
                  background: "linear-gradient(90deg, #2BC0B4, #4CAF7D)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t("نمونه‌کارهای", "Academic")}
              </span>{" "}
              <span style={{ color: "#1a1a2e" }}>{t("آکادمیک", "Samples")}</span>
            </h1>

            {/* Body paragraph */}
            <p
              style={{
                maxWidth: 860,
                margin: "20px auto 0",
                fontSize: 16,
                color: "#555555",
                lineHeight: 1.8,
                textAlign: "center",
              }}
            >
              {t(
                "هر نمونه کار، تخصص متخصصان ما را در رشته‌ها و سطوح مختلف نشان می‌دهد. این نمونه‌ها صرفاً برای نمایش کیفیت و سبک نگارش ارائه شده‌اند — ما هرگز کارهای مشتریان را مجدداً استفاده یا بازفروش نمی‌کنیم.",
                "Each writing sample showcases our specialists' expertise across different disciplines and complexity levels. These examples are shared solely to demonstrate writing quality and style — we never reuse or resell client work under any circumstances."
              )}
            </p>
          </div>

          {/* Filter bar */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #eeeeee",
              borderRadius: 12,
              padding: "20px 28px",
              marginTop: 40,
              display: "flex",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: 14, color: "#888888", whiteSpace: "nowrap" }}>
              {t("فیلتر:", "Filter by:")}
            </span>
            <FilterDropdown label={t("موضوع", "Subject")} options={subjectOptions} value={subject} onChange={setSubject} />
            <FilterDropdown label={t("نوع مقاله", "Paper Type")} options={typeOptions} value={paperType} onChange={setPaperType} />
            <FilterDropdown label={t("مقطع", "Level")} options={levelOptions} value={level} onChange={setLevel} />
            <FilterDropdown label={t("فرمت", "Format")} options={formatOptions} value={format} onChange={setFormat} />
          </div>

          {/* Cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 24,
              marginTop: 32,
            }}
          >
            {filtered.map((paper, i) => (
              <div
                key={i}
                style={{
                  background: "#ffffff",
                  border: "1px solid #eeeeee",
                  borderRadius: 12,
                  padding: 24,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {/* Subject tag */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span
                    style={{
                      background: "#e6f7f5",
                      color: "#2BC0B4",
                      fontSize: 12,
                      fontWeight: 600,
                      padding: "4px 12px",
                      borderRadius: 999,
                    }}
                  >
                    {paper.subject}
                  </span>
                  <span
                    style={{
                      background: "#e6f7f5",
                      color: "#2BC0B4",
                      fontSize: 12,
                      fontWeight: 600,
                      padding: "4px 10px",
                      borderRadius: 999,
                    }}
                  >
                    {paper.level}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a2e", margin: 0, lineHeight: 1.4 }}>
                  {paper.title}
                </h3>

                {/* Excerpt */}
                <p style={{ fontSize: 14, color: "#666666", lineHeight: 1.6, margin: 0, flex: 1 }}>
                  {paper.excerpt}
                </p>

                {/* View link */}
                <a
                  href="#"
                  style={{
                    color: "#2BC0B4",
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                    marginTop: 4,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                  onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                >
                  {t("مشاهده نمونه →", "View Sample →")}
                </a>
              </div>
            ))}

            {filtered.length === 0 && (
              <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: 48, color: "#888888", fontSize: 16 }}>
                {t("نمونه‌ای با این فیلترها یافت نشد.", "No samples found matching your filters.")}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

/* ---- Filter Dropdown Component ---- */
interface FilterDropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}

const FilterDropdown = ({ label, options, value, onChange }: FilterDropdownProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ position: "relative", flex: 1, minWidth: 140 }}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          appearance: "none",
          WebkitAppearance: "none",
          border: focused ? "1px solid #2BC0B4" : "1px solid #e0e0e0",
          borderRadius: 8,
          padding: "10px 36px 10px 14px",
          fontSize: 14,
          color: "#333333",
          background: "#ffffff",
          outline: "none",
          cursor: "pointer",
          boxShadow: focused ? "0 0 0 3px rgba(43,192,180,0.12)" : "none",
          transition: "border-color 0.2s, box-shadow 0.2s",
        }}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt === "All" ? label : opt}
          </option>
        ))}
      </select>
      <ChevronDown
        style={{
          position: "absolute",
          right: 12,
          top: "50%",
          transform: "translateY(-50%)",
          width: 16,
          height: 16,
          color: "#2BC0B4",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default Samples;
