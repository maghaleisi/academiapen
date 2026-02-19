import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { BookOpen, Brain, Languages, FileText, PenTool, Globe } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    fa: "نگارش پایان‌نامه ادبیات انگلیسی",
    en: "English Literature Thesis",
    descFa: "نگارش تخصصی پایان‌نامه برای مقاطع ارشد و دکتری در تمام گرایش‌های ادبیات انگلیسی، از نقد ادبی تا مطالعات فرهنگی.",
    descEn: "Specialized thesis writing for MA & PhD across all English Literature tracks, from Literary Criticism to Cultural Studies.",
  },
  {
    icon: Brain,
    fa: "پایان‌نامه روانشناسی و روان‌کاوی",
    en: "Psychology & Psychoanalysis",
    descFa: "پوشش کامل گرایش‌های بالینی، اجتماعی، شناختی و روان‌کاوی با رویکرد پژوهشی معتبر.",
    descEn: "Complete coverage of clinical, social, cognitive psychology & psychoanalysis with rigorous research methodology.",
  },
  {
    icon: FileText,
    fa: "مقاله‌نویسی ISI و Scopus",
    en: "ISI & Scopus Articles",
    descFa: "نگارش و چاپ تضمینی مقالات در مجلات معتبر بین‌المللی با نرخ پذیرش بالای ۹۰٪.",
    descEn: "Guaranteed writing and publication in prestigious international journals with 90%+ acceptance rate.",
  },
  {
    icon: PenTool,
    fa: "پروپوزال و طرح تحقیق",
    en: "Proposal Writing",
    descFa: "تدوین پروپوزال استاندارد با ساختار علمی دقیق، متناسب با الزامات هر دانشگاه.",
    descEn: "Standard proposal development with precise scientific structure, tailored to each university's requirements.",
  },
  {
    icon: Languages,
    fa: "ویرایش و ترجمه تخصصی",
    en: "Editing & Translation",
    descFa: "ویراستاری حرفه‌ای توسط بومی‌های زبان انگلیسی و ترجمه تخصصی متون آکادمیک.",
    descEn: "Professional editing by native English speakers and specialized academic translation services.",
  },
  {
    icon: Globe,
    fa: "مشاوره و انتخاب موضوع",
    en: "Topic Consultation",
    descFa: "راهنمایی در انتخاب موضوع پایان‌نامه، تعیین روش تحقیق و چارچوب نظری.",
    descEn: "Guidance in thesis topic selection, research methodology, and theoretical framework design.",
  },
];

const ServicesSection = () => {
  const { lang, t } = useLang();

  return (
    <section id="services" style={{ background: "#ffffff", padding: "64px 16px 96px" }}>
      <div className="container-custom">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              color: "#2BC0B4",
              fontSize: "12px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "3px",
            }}
          >
            {t("خدمات ما", "OUR SERVICES")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: "38px",
              fontWeight: 700,
              textAlign: "center",
              marginTop: "8px",
              lineHeight: 1.2,
            }}
          >
            {lang === "fa" ? (
              t("خدمات تخصصی نگارش آکادمیک", "")
            ) : (
              <>
                <span style={{ color: "#001f5b" }}>Specialized Academic Writing</span>{" "}
                <span style={{ color: "#4CAF7D" }}>Services</span>
              </>
            )}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: "#ffffff",
                  borderRadius: "12px",
                  padding: "32px",
                  border: "1px solid #eeeeee",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  transition: "box-shadow 0.3s, border-color 0.3s",
                }}
                className="group hover:shadow-lg"
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "#e6f7f5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon style={{ width: "24px", height: "24px", color: "#2BC0B4" }} />
                </div>
                <h3
                  style={{
                    color: "#1a1a2e",
                    fontSize: "18px",
                    fontWeight: 700,
                    marginTop: "16px",
                    marginBottom: "8px",
                  }}
                >
                  {t(s.fa, s.en)}
                </h3>
                <p
                  style={{
                    color: "#666666",
                    fontSize: "15px",
                    lineHeight: 1.7,
                    fontWeight: 400,
                  }}
                >
                  {t(s.descFa, s.descEn)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
