import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { Menu, X, Globe, UserRound, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { lang, t, toggleLang } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: t("صفحه اصلی", "Home"), href: "#hero" },
    { label: t("فرآیند کار", "Process"), href: "#process" },
    { label: t("تعرفه‌ها", "Pricing"), href: "#pricing" },
    { label: t("تماس با ما", "Contact"), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50" style={{ background: "rgba(255,255,255,0.55)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}>
      <div className="container-custom flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          {/* Fountain pen nib SVG */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{ flexShrink: 0 }}
          >
            {/* Nib body */}
            <path
              d="M14 3L24 10L14 25L4 10Z"
              fill="#2BC0B4"
              fillOpacity="0.15"
              stroke="#2BC0B4"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* Nib center slit */}
            <line
              x1="14"
              y1="10"
              x2="14"
              y2="25"
              stroke="#2BC0B4"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* Nib highlight left */}
            <path
              d="M14 10L4 10L14 25"
              fill="#2BC0B4"
              fillOpacity="0.25"
            />
            {/* Tip dot */}
            <circle cx="14" cy="24" r="1.5" fill="#2BC0B4" />
            {/* Cap band */}
            <rect x="6" y="8.5" width="16" height="2.5" rx="1.2" fill="#1a1a2e" fillOpacity="0.18" />
          </svg>

          {lang === "fa" ? (
            <span className="text-xl font-bold" style={{ color: "#2BC0B4" }}>
              پژوهش‌یار
            </span>
          ) : (
            <span className="text-xl font-bold leading-none">
              <span style={{ color: "#1a1a2e" }}>Academia</span>
              <span style={{ color: "#2BC0B4" }}>Pen</span>
            </span>
          )}
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center" style={{ gap: "32px" }}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors duration-200 no-underline"
              style={{
                color: "#2d2d2d",
                fontWeight: 500,
                fontSize: "15px",
                letterSpacing: "0.2px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2BC0B4")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#2d2d2d")}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full border transition-colors duration-200"
            style={{ borderColor: "#E0E0E0", color: "#2d2d2d", background: "transparent" }}
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === "fa" ? "EN" : "فا"}
          </button>

          {/* Free Consult CTA */}
          <button
            className="hidden sm:inline-flex items-center gap-1.5 font-semibold transition-all duration-200"
            style={{
              border: "1.5px solid #2BC0B4",
              color: "#2BC0B4",
              background: "transparent",
              borderRadius: "20px",
              padding: "10px 24px",
              fontSize: "14px",
              cursor: "pointer",
              lineHeight: 1,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#2BC0B4";
              (e.currentTarget as HTMLButtonElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              (e.currentTarget as HTMLButtonElement).style.color = "#2BC0B4";
            }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <UserRound className="h-4 w-4" />
            {t("مشاوره رایگان", "Free Consult")}
          </button>

          {/* Order Now CTA */}
          <button
            className="hidden sm:inline-flex items-center gap-1.5 font-semibold transition-all duration-200"
            style={{
              border: "1.5px solid #F5A800",
              color: "#F5A800",
              background: "transparent",
              borderRadius: "20px",
              padding: "10px 24px",
              fontSize: "14px",
              cursor: "pointer",
              lineHeight: 1,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#F5A800";
              (e.currentTarget as HTMLButtonElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              (e.currentTarget as HTMLButtonElement).style.color = "#F5A800";
            }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ShoppingCart className="h-4 w-4" />
            {t("سفارش", "Order Now")}
          </button>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2"
            style={{ color: "#2d2d2d" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="container-custom py-4 px-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="py-2 font-medium"
                  style={{ color: "#2d2d2d", fontSize: "15px" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-2">
                <button
                  className="flex items-center justify-center gap-1.5 font-semibold w-full py-3 rounded-full transition-all duration-200"
                  style={{ border: "1.5px solid #2BC0B4", color: "#2BC0B4", background: "transparent", fontSize: "14px" }}
                  onClick={() => { setMobileOpen(false); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                >
                  <UserRound className="h-4 w-4" />
                  {t("مشاوره رایگان", "Free Consult")}
                </button>
                <button
                  className="flex items-center justify-center gap-1.5 font-semibold w-full py-3 rounded-full transition-all duration-200"
                  style={{ border: "1.5px solid #F5A800", color: "#F5A800", background: "transparent", fontSize: "14px" }}
                  onClick={() => { setMobileOpen(false); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                >
                  <ShoppingCart className="h-4 w-4" />
                  {t("سفارش", "Order Now")}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
