import { useLang } from "@/contexts/LanguageContext";
import { ShieldCheck } from "lucide-react";
import academiapenLogo from "@/assets/academiapen-logo.png";

const Footer = () => {
  const { lang, t } = useLang();

  const companyLinks = [
    { label: t("صفحه اصلی", "Home"), href: "#hero" },
    { label: t("خدمات", "Services"), href: "#services" },
    { label: t("فرآیند کار", "Process"), href: "#process" },
    { label: t("تعرفه‌ها", "Pricing"), href: "#pricing" },
    { label: t("تماس با ما", "Contact"), href: "#contact" },
  ];

  const legalLinks = [
    { label: t("حریم خصوصی", "Privacy Policy"), href: "#" },
    { label: t("قوانین و مقررات", "Terms and Conditions"), href: "#" },
    { label: t("گارانتی بازگشت وجه", "Money Back Guarantee"), href: "#" },
    { label: t("سیاست محرمانگی", "Confidentiality Policy"), href: "#" },
    { label: t("سیاست سرقت ادبی و هوش مصنوعی", "Plagiarism and AI Policy"), href: "#" },
  ];

  return (
    <footer style={{ background: "#ffffff", borderTop: "1px solid #eeeeee" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", paddingTop: 50, paddingBottom: 50, paddingLeft: 24, paddingRight: 24 }}>
        {/* 4-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "35% 25% 20% 20%",
            gap: 0,
          }}
          className="footer-grid"
        >
          {/* Column 1 — Brand info */}
          <div>
            {/* Logo */}
            <a href="#hero" style={{ textDecoration: "none", display: "inline-block" }}>
              <img src={academiapenLogo} alt="AcademiaPen" style={{ width: 200, height: "auto" }} />
            </a>

            {/* DMCA badge */}
            <div style={{ marginTop: 24 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  border: "1px solid #e0e0e0",
                  borderRadius: 4,
                  padding: "6px 10px",
                }}
              >
                <ShieldCheck style={{ width: 16, height: 16, color: "#4CAF50" }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: "#4CAF50", letterSpacing: 0.5 }}>DMCA PROTECTED</span>
              </div>
            </div>

            {/* Payment icons row 1 */}
            <div style={{ marginTop: 20, display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Visa", "Mastercard", "Amex", "UnionPay"].map((name) => (
                <div
                  key={name}
                  style={{
                    width: 44,
                    border: "1px solid #eeeeee",
                    borderRadius: 4,
                    padding: "4px 8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 9,
                    fontWeight: 700,
                    color: name === "Visa" ? "#1A1F71" : name === "Mastercard" ? "#EB001B" : name === "Amex" ? "#006FCF" : "#002E6E",
                    lineHeight: 1,
                  }}
                >
                  {name === "Visa" && "VISA"}
                  {name === "Mastercard" && "MC"}
                  {name === "Amex" && "AMEX"}
                  {name === "UnionPay" && "UP"}
                </div>
              ))}
            </div>

            {/* Payment icons row 2 */}
            <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
              {["G Pay", "Apple Pay"].map((name) => (
                <div
                  key={name}
                  style={{
                    width: 44,
                    border: "1px solid #eeeeee",
                    borderRadius: 4,
                    padding: "4px 8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 9,
                    fontWeight: 700,
                    color: name === "G Pay" ? "#4285F4" : "#333333",
                    lineHeight: 1,
                  }}
                >
                  {name}
                </div>
              ))}
            </div>

            {/* Copyright */}
            <p style={{ marginTop: 28, fontSize: 14, color: "#333333", lineHeight: 1.6 }}>
              © Copyright 2024-2026 AcademiaPen.<br />All rights reserved.
            </p>

            {/* Legal disclaimer */}
            <p style={{ marginTop: 16, fontSize: 12, color: "#888888", lineHeight: 1.6 }}>
              All services provided through AcademiaPen are intended strictly for academic support, learning, and research purposes. Users must not submit our work as their own original work.
            </p>

            {/* Address */}
            <p style={{ marginTop: 12, fontSize: 12, color: "#888888" }}>
              Mashhad, Iran | m.amin.rezai@gmail.com
            </p>
          </div>

          {/* Column 2 — Spacer */}
          <div />

          {/* Column 3 — Company */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: 18, color: "#1a1a2e", marginBottom: 20 }}>
              {t("شرکت", "Company")}
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {companyLinks.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    style={{ color: "#555555", fontSize: 15, lineHeight: 2.2, textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#2BC0B4")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#555555")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Legal info */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: 18, color: "#1a1a2e", marginBottom: 20 }}>
              {t("اطلاعات حقوقی", "Legal info")}
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{ color: "#555555", fontSize: 15, lineHeight: 2.2, textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#2BC0B4")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#555555")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid #eeeeee", marginTop: 40, paddingTop: 20, textAlign: "center" }}>
          <span style={{ fontSize: 13, color: "#aaaaaa" }}>
            {t("ساخته‌شده با عشق برای تعالی آکادمیک دانشجویان.", "Built with care for student academic excellence.")}
          </span>
        </div>
      </div>

      {/* Responsive override for mobile */}
      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
