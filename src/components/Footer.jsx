import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaGithub, FaPaperPlane } from "react-icons/fa";

function Footer({ darkMode, language }) {
  const content = {
    uz: {
      description:
        "Men O'zbekistondan Front-End va AI dasturchiman. React, Tailwind CSS hamda ilg'or AI agentlari (ChatGPT, Gemini, Cursor, Antigravity) yordamida zamonaviy va responsive veb-saytlar yarataman.",
      navigation: "Navigatsiya",
      home: "Bosh sahifa",
      about: "Men haqimda",
      skills: "Ko'nikmalar",
      aiTools: "AI Bo'limi",
      experience: "Tajriba",
      projects: "Loyihalar",
      certificates: "Sertifikatlar & Stikerlar",
      contact: "Aloqa",
      technologies: "Texnologiyalar & AI",
      rights: "Barcha huquqlar himoyalangan.",
      made: "React.js, Tailwind CSS va AI yordamida yaratilgan",
    },

    en: {
      description:
        "Front-End & AI Developer from Uzbekistan. Building high-performance, modern web applications with React, Tailwind CSS, and AI ecosystems.",
      navigation: "Navigation",
      home: "Home",
      about: "About Me",
      skills: "Skills",
      aiTools: "AI Tools",
      experience: "Experience",
      projects: "Projects",
      certificates: "Certificates & Stickers",
      contact: "Contact",
      technologies: "Tech & AI Stack",
      rights: "All Rights Reserved.",
      made: "Crafted with React.js, Tailwind CSS & AI",
    },

    ru: {
      description:
        "Front-End и AI разработчик из Узбекистана. Создаю современные веб-приложения с использованием React, Tailwind CSS и ИИ-инструментов.",
      navigation: "Навигация",
      home: "Главная",
      about: "Обо мне",
      skills: "Навыки",
      aiTools: "AI Раздел",
      experience: "Опыт",
      projects: "Проекты",
      certificates: "Сертификаты и Стикеры",
      contact: "Контакты",
      technologies: "Технологии и ИИ",
      rights: "Все права защищены.",
      made: "Создано с помощью React.js, Tailwind CSS и AI",
    },

    tr: {
      description: "Özbekistan'dan Front-End & AI geliştirici.",
      navigation: "Navigasyon",
      home: "Ana Sayfa",
      about: "Hakkımda",
      skills: "Yetenekler",
      aiTools: "Yapay Zeka",
      experience: "Deneyim",
      projects: "Projeler",
      certificates: "Sertifikalar",
      contact: "İletişim",
      technologies: "Teknolojiler",
      rights: "Tüm hakları saklıdır.",
      made: "React.js ve Tailwind CSS ile yapıldı",
    },

    ar: {
      description: "مطور Front-End و الذكاء الاصطناعي من أوزبكستان.",
      navigation: "التنقل",
      home: "الرئيسية",
      about: "عني",
      skills: "المهارات",
      aiTools: "أدوات AI",
      experience: "الخبرة",
      projects: "المشاريع",
      certificates: "الشهادات والملصقات",
      contact: "اتصال",
      technologies: "التقنيات",
      rights: "جميع الحقوق محفوظة.",
      made: "تم الإنشاء باستخدام React و AI",
    },

    es: {
      description: "Desarrollador Front-End e IA de Uzbekistán.",
      navigation: "Navegación",
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      aiTools: "Sección IA",
      experience: "Experiencia",
      projects: "Proyectos",
      certificates: "Certificados",
      contact: "Contacto",
      technologies: "Tecnologías",
      rights: "Todos los derechos reservados.",
      made: "Creado con React.js e IA",
    },

    fr: {
      description: "Développeur Front-End & IA d'Ouzbékistan.",
      navigation: "Navigation",
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      aiTools: "Section IA",
      experience: "Expérience",
      projects: "Projets",
      certificates: "Certificats",
      contact: "Contact",
      technologies: "Technologies",
      rights: "Tous droits réservés.",
      made: "Créé avec React.js & IA",
    },
  };

  const currentLanguage = language?.toLowerCase() || "uz";
  const t = content[currentLanguage] || content.uz;

  return (
    <footer
      className={`border-t font-mono text-xs duration-500 ${
        darkMode
          ? "bg-[#030308] border-white/10 text-white"
          : "bg-slate-100 border-slate-200 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        
        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND ABOUT */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#00E87A]/20 border border-[#00E87A]/40 flex items-center justify-center text-[#00E87A] font-bold text-sm">
                OR
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                Oybek Rayimov
              </h2>
            </div>

            <p className="text-[#9898B0] leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-sm font-bold text-[#00E87A] uppercase tracking-wider mb-5">
              {t.navigation}
            </h3>

            <ul className="space-y-2.5 text-[#9898B0]">
              <li>
                <a href="#home" className="hover:text-[#00E87A] transition-colors">
                  ▸ {t.home}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#00E87A] transition-colors">
                  ▸ {t.about}
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#00E87A] transition-colors">
                  ▸ {t.skills}
                </a>
              </li>
              <li>
                <a href="#ai-tools" className="hover:text-[#00E87A] transition-colors">
                  ▸ {t.aiTools}
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#00E87A] transition-colors">
                  ▸ {t.experience}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#00E87A] transition-colors">
                  ▸ {t.projects}
                </a>
              </li>
              <li>
                <a href="#certificates" className="hover:text-[#00E87A] transition-colors">
                  ▸ {t.certificates}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#00E87A] transition-colors">
                  ▸ {t.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* TECHNOLOGIES */}
          <div>
            <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-5">
              {t.technologies}
            </h3>

            <ul className="space-y-2 text-[#9898B0]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E87A]" />
                React.js &amp; Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10A37F]" />
                ChatGPT (OpenAI)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Google Gemini 1.5 Pro
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Cursor AI IDE
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E87A]" />
                Google Antigravity
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                JavaScript ES6+ &amp; HTML5
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-5">
              {t.contact}
            </h3>

            <div className="space-y-3 text-[#9898B0]">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#00E87A]" />
                <span>Uzbekistan 🇺🇿</span>
              </div>

              <a
                href="mailto:rayimovoybek17@gmail.com"
                className="flex items-center gap-3 hover:text-white transition-colors block"
              >
                <FaEnvelope className="text-cyan-400" />
                <span>rayimovoybek17@gmail.com</span>
              </a>

              <a
                href="tel:+998990541514"
                className="flex items-center gap-3 hover:text-white transition-colors block"
              >
                <FaPhoneAlt className="text-purple-400" />
                <span>+998 99 054 15 14</span>
              </a>

              <a
                href="https://t.me/rayimovoybek"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors block"
              >
                <FaPaperPlane className="text-pink-400" />
                <span>@rayimovoybek</span>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[#686884]">
          <p className="text-center md:text-left">
            © 2026 Oybek Rayimov. {t.rights}
          </p>

          <p className="text-[#00E87A] text-center font-bold">
            {t.made} 🚀
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;