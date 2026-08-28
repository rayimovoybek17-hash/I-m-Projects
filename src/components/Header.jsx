import React, { useState } from "react";
import { FaMoon, FaSun, FaGlobe, FaBars, FaTimes } from "react-icons/fa";

function Header({
  darkMode,
  setDarkMode,
  language,
  setLanguage,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages = [
    { code: "uz", name: "O'zbek", flag: "🇺🇿" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
    { code: "tr", name: "Türkçe", flag: "🇹🇷" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ];

  const text = {
    uz: {
      home: "Bosh sahifa",
      about: "Men haqimda",
      skills: "Ko'nikmalar",
      aiTools: "AI Bo'limi",
      experience: "Tajriba",
      projects: "Loyihalar",
      certificates: "Sertifikatlar",
      contact: "Aloqa",
      hireMe: "Bog'lanish ✦",
    },
    en: {
      home: "Home",
      about: "About",
      skills: "Skills",
      aiTools: "AI Tools",
      experience: "Experience",
      projects: "Projects",
      certificates: "Certificates",
      contact: "Contact",
      hireMe: "Hire Me ✦",
    },
    ru: {
      home: "Главная",
      about: "Обо мне",
      skills: "Навыки",
      aiTools: "AI Раздел",
      experience: "Опыт",
      projects: "Проекты",
      certificates: "Сертификаты",
      contact: "Контакты",
      hireMe: "Связаться ✦",
    },
    tr: {
      home: "Ana Sayfa",
      about: "Hakkımda",
      skills: "Yetenekler",
      aiTools: "Yapay Zeka",
      experience: "Deneyim",
      projects: "Projeler",
      certificates: "Sertifikalar",
      contact: "İletişim",
      hireMe: "İletişim ✦",
    },
    ar: {
      home: "الرئيسية",
      about: "عني",
      skills: "المهارات",
      aiTools: "أدوات AI",
      experience: "الخبرة",
      projects: "المشاريع",
      certificates: "الشهادات",
      contact: "اتصال",
      hireMe: "وظفني ✦",
    },
    es: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      aiTools: "Sección IA",
      experience: "Experiencia",
      projects: "Proyectos",
      certificates: "Certificados",
      contact: "Contacto",
      hireMe: "Contratar ✦",
    },
    fr: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      aiTools: "Section IA",
      experience: "Expérience",
      projects: "Projets",
      certificates: "Certificats",
      contact: "Contact",
      hireMe: "Engager ✦",
    },
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const currentLang = text[language] ? language : "uz";
  const t = text[currentLang];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b duration-500 ${
        darkMode
          ? "bg-[#030308]/85 border-white/10"
          : "bg-white/85 border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-4">
        
        {/* LOGO BRAND */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E87A]/20 to-cyan-500/20 border border-[#00E87A]/40 flex items-center justify-center text-[#00E87A] font-mono font-bold text-sm shadow-[0_0_15px_rgba(0,232,122,0.2)] transition-transform duration-300 group-hover:scale-105">
            OR
          </div>

          <div>
            <h1
              className={`text-base font-bold leading-tight ${
                darkMode ? "text-[#F0F0F8]" : "text-gray-900"
              }`}
            >
              Oybek Rayimov
            </h1>
            <div className="text-[10px] text-[#00E87A] font-mono tracking-widest font-semibold">
              FRONT-END &amp; AI
            </div>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:block">
          <ul
            className={`flex items-center gap-5 xl:gap-7 text-[13.5px] font-medium ${
              darkMode ? "text-[#9898B0]" : "text-gray-600"
            }`}
          >
            <li>
              <a href="#home" className="hover:text-[#00E87A] duration-200">
                {t.home}
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#00E87A] duration-200">
                {t.about}
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-[#00E87A] duration-200">
                {t.skills}
              </a>
            </li>
            <li>
              <a href="#ai-tools" className="hover:text-[#00E87A] duration-200">
                {t.aiTools}
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-[#00E87A] duration-200">
                {t.experience}
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#00E87A] duration-200">
                {t.projects}
              </a>
            </li>
            <li>
              <a href="#certificates" className="hover:text-[#00E87A] duration-200">
                {t.certificates}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#00E87A] duration-200">
                {t.contact}
              </a>
            </li>
          </ul>
        </nav>

        {/* SETTINGS & CTA */}
        <div className="flex items-center gap-3">
          
          {/* LANGUAGE */}
          <div className="flex items-center gap-1.5">
            <FaGlobe className="text-[#00E87A] text-lg" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className={`px-2.5 py-1.5 rounded-lg text-xs outline-none cursor-pointer border duration-300 font-mono ${
                darkMode
                  ? "bg-[#080818] text-white border-white/10"
                  : "bg-white text-gray-900 border-gray-300"
              }`}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.code.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          {/* DARK MODE */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-lg bg-[#080818] border border-white/10 text-[#00E87A] flex items-center justify-center hover:scale-105 duration-200"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-indigo-400" />}
          </button>

          {/* HIRE ME BUTTON */}
          <a
            href="#contact"
            className="hidden sm:inline-flex px-4 py-2 text-xs font-bold font-mono rounded-lg bg-[#00E87A] text-[#030310] hover:bg-[#00c968] transition-all duration-200 shadow-[0_0_20px_rgba(0,232,122,0.3)]"
          >
            {t.hireMe}
          </a>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-xl text-gray-300 focus:outline-none"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#030308]/95 border-b border-white/10 px-6 py-6 flex flex-col gap-4 font-mono text-sm backdrop-blur-2xl">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-[#00E87A] transition-colors"
          >
            01. {t.home}
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-[#00E87A] transition-colors"
          >
            02. {t.about}
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-[#00E87A] transition-colors"
          >
            03. {t.skills}
          </a>
          <a
            href="#ai-tools"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-[#00E87A] transition-colors"
          >
            04. {t.aiTools}
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-[#00E87A] transition-colors"
          >
            05. {t.experience}
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-[#00E87A] transition-colors"
          >
            06. {t.projects}
          </a>
          <a
            href="#certificates"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-[#00E87A] transition-colors"
          >
            07. {t.certificates}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-[#00E87A] transition-colors"
          >
            08. {t.contact}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-2.5 bg-[#00E87A] text-[#030310] font-bold rounded-lg"
          >
            {t.hireMe}
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;