import React, { useState } from "react";
import certificateImg from "../assets/certificateImg.png";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaBootstrap,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaTrophy,
  FaMedal,
  FaAward,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaLaptopCode,
  FaRocket,
  FaCode,
  FaDownload
} from "react-icons/fa";
import { HiSparkles as FaSparkles } from "react-icons/hi2";

import {
  SiJavascript,
  SiTailwindcss,
  SiFastapi,
  SiVite,
  SiNetlify
} from "react-icons/si";

function Section({ darkMode, language }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [selectedImage, setSelectedImage] = useState(null);

  const BOT_TOKEN = "8826533176:AAG-Uipkghlko0pDjeJiJeZz8wStNRes1uU";
  const DEFAULT_CHAT_ID = "";

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setStatus({ type: "", msg: "" });

    let targetChatId = DEFAULT_CHAT_ID;

    if (!targetChatId) {
      try {
        const updateRes = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`);
        const updateData = await updateRes.json();
        if (updateData.ok && updateData.result && updateData.result.length > 0) {
          for (let i = updateData.result.length - 1; i >= 0; i--) {
            const item = updateData.result[i];
            if (item.message && item.message.chat) {
              targetChatId = item.message.chat.id;
              break;
            }
          }
        }
      } catch (err) {
        console.error("Telegram updates error:", err);
      }
    }

    if (!targetChatId) {
      setStatus({
        type: "error",
        msg: "Telegram botingiz hali chat ID qabul qilmagan. Iltimos, Telegram'da @oybekportfolio_bot botingizga kiring va /start tugmasini bosing!"
      });
      setLoading(false);
      return;
    }

    const formattedMessage =
      `<b>📩 YANGI ALOQA XABARI</b>\n` +
      `<b>🌐 Manbaa:</b> Portfolio Veb-sayti\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `<b>👤 Ism:</b> ${formData.name}\n` +
      `<b>📧 Email:</b> ${formData.email}\n` +
      `<b>💬 Xabar:</b>\n<i>${formData.message}</i>\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `<b>📅 Vaqt:</b> ${new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" })}`;

    try {
      const res = await fetch(`https://t.me/oybekportfolio_bot`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: targetChatId,
          text: formattedMessage,
          parse_mode: "HTML"
        })
      });

      const data = await res.json();
      if (data.ok) {
        setStatus({
          type: "success",
          msg: "🚀 Xabaringiz Telegram botingizga chiroyli tarzda yuborildi!"
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.description || "Telegram API xatoligi");
      }
    } catch (err) {
      setStatus({
        type: "error",
        msg: `❌ Xatolik yuz berdi: ${err.message}`
      });
    } finally {
      setLoading(false);
    }
  };

  const content = {
    uz: {
      hello: "Salom, men",
      name: "Oybek Rayimov",
      ageRole: "15 yosh • Front-End & AI Dasturchi",
      heroText:
        "Men HTML, CSS, JavaScript, Tailwind CSS, React va zamonaviy AI agentlari (ChatGPT, Gemini, Cursor, Antigravity) yordamida tezyurar, responsive va intellektual veb-saytlar yarataman.",
      viewProjects: "Loyihalarni ko'rish →",
      getInTouch: "Bog'lanish",
      availableHire: "Ishga va hamkorlikka tayyor",

      // About
      aboutNum: "01",
      aboutTitle: "Men Haqimda",
      aboutSubtitle: "Fikrni kodga, fikrni mahsulotga aylantiradigan dasturchi",
      aboutText:
        "Salom! Mening ismim Oybek Rayimov. Men 15 yoshdaman va zamonaviy, tez ishlaydigan va chiroyli veb-saytlar va AI ilovalari yaratishga qiziqaman. React, Tailwind CSS va ilg'or AI vositalaridan unumli foydalanaman. Har kuni haqiqiy loyihalar yozish va xakatons (hackathons)da qatnashish orqali tajribamni oshirib boraman.",
      
      // Skills
      skillsNum: "02",
      skillsTitle: "Texnologiyalar va Ko'nikmalar",
      skillsSubtitle: "Ishlab chiqarish darajasidagi loyihalarda foydalanadigan vositalarim",
      frontendCat: "Front-End Texnologiyalar",
      toolsCat: "Vositalar & Platformalar",

      // AI Section
      aiNum: "03",
      aiTitle: "AI Bo'limi & Sun'iy Intellekt Vositalari",
      aiSubtitle: "Dasturlash unumdorligini oshirish va intellektual funksiyalar qo'shish uchun foydalanadigan AI ekotizimim",

      // Experience
      expNum: "04",
      expTitle: "Ish Tajribasi & Faoliyat",
      expSubtitle: "Dasturlashdagi va jamoaviy loyihalardagi amaliy tajribam",

      // Projects
      projectsNum: "05",
      projectsTitle: "Mening Loyihalarim",
      projectsSubtitle: "Yaratgan zamonaviy va ishlaydigan veb-ilovalarim",
      calculatorDesc: "React va Tailwind CSS yordamida yaratilgan responsive va chiroyli onlayn kalkulyator.",
      leaderboardDesc: "React yordamida yaratilgan darajalar va ballarni hisoblovchi responsive o'quvchilar reytingi.",
      contactDesc: "React va Tailwind yordamida yaratilgan zamonaviy va qulay kontakt menejeri interfeysi.",

      // Certificates & Stickers
      certNum: "06",
      certTitle: "Sertifikatlar & Hackathon Stikerlari",
      certSubtitle: "Xakatons va nufuzli musobaqalarda erishilgan nishonlar, stikerlar va diplomlar",

      // Contact
      contactNum: "07",
      contactTitle: "Men Bilan Bog'lanish",
      contactSubtitle: "Birgalikda yangi loyihalar yarataylik va g'oyalarni amalga oshiraylik",
      sendMsg: "Xabar Yuborish",
      yourName: "Ismingiz",
      yourEmail: "Email manzilingiz",
      yourMessage: "Xabaringizni yozing...",
    },

    en: {
      hello: "Hi, I'm",
      name: "Oybek Rayimov",
      ageRole: "15 Years Old • Front-End & AI Developer",
      heroText:
        "I build modern, high-performance, and AI-powered web applications using HTML, CSS, JavaScript, Tailwind CSS, React, and cutting-edge AI tools (ChatGPT, Gemini, Cursor, Antigravity).",
      viewProjects: "View Projects →",
      getInTouch: "Get In Touch",
      availableHire: "Available for hire & freelance projects",

      aboutNum: "01",
      aboutTitle: "About Me",
      aboutSubtitle: "Turning ideas into high-impact digital experiences",
      aboutText:
        "Hello! My name is Oybek Rayimov. I'm a 15-year-old Front-End & AI developer passionate about creating pixel-perfect web interfaces and leveraging artificial intelligence for seamless user experiences. I practice daily by shipping real-world apps and competing in hackathons.",

      skillsNum: "02",
      skillsTitle: "Tech Stack & Skills",
      skillsSubtitle: "Technologies I rely on for building robust software",
      frontendCat: "Front-End Engineering",
      toolsCat: "Tools & Ecosystem",

      aiNum: "03",
      aiTitle: "AI Tools & Ecosystem",
      aiSubtitle: "Primary AI models and autonomous agents driving my coding velocity",

      expNum: "04",
      expTitle: "Work Experience & Journey",
      expSubtitle: "My professional path building web apps & hackathon projects",

      projectsNum: "05",
      projectsTitle: "Featured Projects",
      projectsSubtitle: "A selection of production-ready applications built by me",
      calculatorDesc: "Responsive digital calculator UI crafted with React and Tailwind CSS.",
      leaderboardDesc: "Interactive student ranking leaderboard with real-time state updates.",
      contactDesc: "Sleek and responsive Contact Manager web app built with React.",

      certNum: "06",
      certTitle: "Certificates & Hackathon Stickers",
      certSubtitle: "Badges, holographic laptop stickers, and verified awards earned at hackathons",

      contactNum: "07",
      contactTitle: "Contact Me",
      contactSubtitle: "Let's collaborate on your next big idea or project",
      sendMsg: "Send Message",
      yourName: "Your Name",
      yourEmail: "Your Email Address",
      yourMessage: "Write your message here...",
    },

    ru: {
      hello: "Привет, я",
      name: "Ойбек Райимов",
      ageRole: "15 лет • Front-End и AI Разработчик",
      heroText:
        "Я создаю современные, производительные и ИИ-интегрированные веб-сайты с использованием React, Tailwind CSS, JavaScript и передовых ИИ-агентов (ChatGPT, Gemini, Cursor, Antigravity).",
      viewProjects: "Проекты →",
      getInTouch: "Связаться",
      availableHire: "Открыт для заказов и сотрудничества",

      aboutNum: "01",
      aboutTitle: "Обо мне",
      aboutSubtitle: "Превращаю идейные концепции в готовый веб-продукт",
      aboutText:
        "Привет! Меня зовут Ойбек Райимов. Мне 15 лет, и я увлечен веб-разработкой и искусственным интеллектом. Активно участвую в хакатонах и развиваю навыки создания удобных пользовательских интерфейсов.",

      skillsNum: "02",
      skillsTitle: "Стек технологий",
      skillsSubtitle: "Инструменты, с которыми я работаю каждый день",
      frontendCat: "Front-End Разработка",
      toolsCat: "Инструменты и Платформы",

      aiNum: "03",
      aiTitle: "AI Раздел и Инструменты",
      aiSubtitle: "ИИ-агенты и языковые модели, ускоряющие процесс разработки",

      expNum: "04",
      expTitle: "Опыт работы и Участие",
      expSubtitle: "Мой путь в веб-разработке и хакатонах",

      projectsNum: "05",
      projectsTitle: "Мои Проекты",
      projectsSubtitle: "Примеры веб-приложений, созданных мной",
      calculatorDesc: "Адаптивный онлайн-калькулятор на React и Tailwind CSS.",
      leaderboardDesc: "Интерактивный рейтинг студентов на React.",
      contactDesc: "Современный интерфейс менеджера контактов на React.",

      certNum: "06",
      certTitle: "Сертификаты и Стикеры Хакатона",
      certSubtitle: "Значки, стикеры для ноутбука и сертификаты с хакатонов",

      contactNum: "07",
      contactTitle: "Связаться со мной",
      contactSubtitle: "Давайте обсудим идеи и создадим крутой проект вместе",
      sendMsg: "Отправить сообщение",
      yourName: "Ваше имя",
      yourEmail: "Ваш Email",
      yourMessage: "Текст сообщения...",
    },
    tr: {
      hello: "Merhaba, ben",
      name: "Oybek Rayimov",
      ageRole: "15 yaşında • Front-End & AI Geliştirici",
      heroText: "React, Tailwind CSS ve gelişmiş AI araçları ile modern web siteleri geliştiriyorum.",
      viewProjects: "Projeler →",
      getInTouch: "İletişim",
      availableHire: "Projelere açık",
      aboutNum: "01",
      aboutTitle: "Hakkımda",
      aboutSubtitle: "Fikirleri koda dönüştüren geliştirici",
      aboutText: "Ben Oybek Rayimov. 15 yaşındayım ve modern web arayüzleri ve yapay zeka araçları geliştirmeyi seviyorum.",
      skillsNum: "02",
      skillsTitle: "Yetenekler",
      skillsSubtitle: "Kullandığım teknolojiler",
      frontendCat: "Front-End",
      toolsCat: "Araçlar",
      aiNum: "03",
      aiTitle: "Yapay Zeka Bölümü",
      aiSubtitle: "Geliştirmede kullandığım yapay zeka sistemleri",
      expNum: "04",
      expTitle: "Deneyim",
      expSubtitle: "Çalışmalarım ve hackathon geçmişim",
      projectsNum: "05",
      projectsTitle: "Projelerim",
      projectsSubtitle: "Geliştirdiğim projeler",
      calculatorDesc: "React ile yapılmış online hesap makinesi.",
      leaderboardDesc: "Öğrenci sıralama tablosu.",
      contactDesc: "Modern iletişim yöneticisi.",
      certNum: "06",
      certTitle: "Sertifikalar & Etiketler",
      certSubtitle: "Hackathon розетleri ve etiketleri",
      contactNum: "07",
      contactTitle: "İletişim",
      contactSubtitle: "Bana ulaşın",
      sendMsg: "Mesaj Gönder",
      yourName: "Adınız",
      yourEmail: "E-postanız",
      yourMessage: "Mesajınız...",
    },
    ar: {
      hello: "مرحباً، أنا",
      name: "أويبك رايموف",
      ageRole: "15 سنة • مطور Front-End & AI",
      heroText: "أقوم بإنشاء مواقع ويب حديثة باستخدام React و Tailwind CSS وأدوات الذكاء الاصطناعي.",
      viewProjects: "عرض المشاريع ←",
      getInTouch: "تواصل معي",
      availableHire: "متاح للعمل",
      aboutNum: "01",
      aboutTitle: "عني",
      aboutSubtitle: "تحويل الأفكار إلى تطبيقات حديثة",
      aboutText: "أنا أويبك رايموف، عمري 15 عاماً وشغوف بتطوير الويب والذكاء الاصطناعي.",
      skillsNum: "02",
      skillsTitle: "المهارات",
      skillsSubtitle: "التقنيات المستخدمة",
      frontendCat: "تطوير الواجهات",
      toolsCat: "الأدوات",
      aiNum: "03",
      aiTitle: "قسم الذكاء الاصطناعي",
      aiSubtitle: "أدوات AI المستخدمة",
      expNum: "04",
      expTitle: "الخبرة",
      expSubtitle: "مسيرتي في التطوير",
      projectsNum: "05",
      projectsTitle: "المشاريع",
      projectsSubtitle: "أبرز أعمالي",
      calculatorDesc: "آلة حاسبة باستخدام React.",
      leaderboardDesc: "جدول ترتيب الطلاب.",
      contactDesc: "مدير جهات الاتصال.",
      certNum: "06",
      certTitle: "الشهادات والملصقات",
      certSubtitle: "ملصقات وشارات الهاكاثون",
      contactNum: "07",
      contactTitle: "اتصل بي",
      contactSubtitle: "تواصل معي للأعمال",
      sendMsg: "إرسال رسالة",
      yourName: "اسمك",
      yourEmail: "بريدك",
      yourMessage: "رسالتك...",
    },
    es: {
      hello: "Hola, soy",
      name: "Oybek Rayimov",
      ageRole: "15 años • Desarrollo Front-End e IA",
      heroText: "Desarrollo sitios web modernos y aplicaciones potenciadas con IA usando React y Tailwind CSS.",
      viewProjects: "Ver Proyectos →",
      getInTouch: "Contacto",
      availableHire: "Disponible para proyectos",
      aboutNum: "01",
      aboutTitle: "Sobre mí",
      aboutSubtitle: "Transformando ideas en código",
      aboutText: "Hola, mi nombre es Oybek Rayimov. Tengo 15 años y me apasiona la programación y la IA.",
      skillsNum: "02",
      skillsTitle: "Habilidades",
      skillsSubtitle: "Mis tecnologías principales",
      frontendCat: "Front-End",
      toolsCat: "Herramientas",
      aiNum: "03",
      aiTitle: "Sección de IA",
      aiSubtitle: "Herramientas de IA que utilizo",
      expNum: "04",
      expTitle: "Experiencia",
      expSubtitle: "Mi trayectoria y hackathons",
      projectsNum: "05",
      projectsTitle: "Proyectos",
      projectsSubtitle: "Mis aplicaciones web",
      calculatorDesc: "Calculadora web con React.",
      leaderboardDesc: "Tabla de líderes estudiantil.",
      contactDesc: "Gestor de contactos moderno.",
      certNum: "06",
      certTitle: "Certificados y Stickers",
      certSubtitle: "Insignias de hackathon",
      contactNum: "07",
      contactTitle: "Contacto",
      contactSubtitle: "Envíame un mensaje",
      sendMsg: "Enviar Mensaje",
      yourName: "Tu Nombre",
      yourEmail: "Tu Email",
      yourMessage: "Tu Mensaje...",
    },
    fr: {
      hello: "Bonjour, je suis",
      name: "Oybek Rayimov",
      ageRole: "15 ans • Développeur Front-End & IA",
      heroText: "Je crée des applications web modernes et performantes avec React et des outils d'IA.",
      viewProjects: "Projets →",
      getInTouch: "Contact",
      availableHire: "Disponible pour projets",
      aboutNum: "01",
      aboutTitle: "À propos",
      aboutSubtitle: "Transformer des idées en réalité",
      aboutText: "Bonjour, je m'appelle Oybek Rayimov, développeur de 15 ans passionné par le web et l'IA.",
      skillsNum: "02",
      skillsTitle: "Compétences",
      skillsSubtitle: "Mes technologies",
      frontendCat: "Front-End",
      toolsCat: "Outils",
      aiNum: "03",
      aiTitle: "Section IA",
      aiSubtitle: "Agents d'IA utilisés",
      expNum: "04",
      expTitle: "Expérience",
      expSubtitle: "Parcours et hackathons",
      projectsNum: "05",
      projectsTitle: "Projets",
      projectsSubtitle: "Mes réalisations",
      calculatorDesc: "Calculatrice responsive en React.",
      leaderboardDesc: "Classement d'étudiants en React.",
      contactDesc: "Gestionnaire de contacts moderne.",
      certNum: "06",
      certTitle: "Certificats & Stickers",
      certSubtitle: "Stickers et prix de hackathons",
      contactNum: "07",
      contactTitle: "Contact",
      contactSubtitle: "Contactez-moi",
      sendMsg: "Envoyer Message",
      yourName: "Votre Nom",
      yourEmail: "Votre Email",
      yourMessage: "Votre Message...",
    }
  };

  const currentLang = content[language?.toLowerCase()] ? language.toLowerCase() : "uz";
  const t = content[currentLang];

  // AI Tools Data with SVGs
  const aiToolsList = [
    {
      id: "chatgpt",
      name: "ChatGPT / Chat (OpenAI)",
      subtitle: "GPT-4o & LLM Reasoning",
      border: "border-emerald-500/30 hover:border-emerald-400",
      glow: "shadow-[0_0_30px_rgba(16,163,127,0.15)]",
      badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      iconBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9013 6.0651 6.0651 0 0 0-4.9542-2.4357 6.048 6.048 0 0 0-5.764 4.1006 6.0076 6.0076 0 0 0-4.148 2.9234 6.0443 6.0443 0 0 0 .7534 6.993 5.9847 5.9847 0 0 0 .5157 4.9108 6.0462 6.0462 0 0 0 6.5098 2.9013 6.0651 6.0651 0 0 0 4.9542 2.4357 6.048 6.048 0 0 0 5.764-4.1006 6.0076 6.0076 0 0 0 4.148-2.9234 6.0443 6.0443 0 0 0-.7534-6.993zm-9.5938 12.028a4.4073 4.4073 0 0 1-2.6074-.8637l.1352-.0779 4.3168-2.4925a.8.8 0 0 0 .3992-.6915v-6.0965l1.8315 1.0573a.07.07 0 0 1 .0396.0526v5.6983a4.4178 4.4178 0 0 1-4.1149 3.4139zm-8.4807-4.3013a4.4073 4.4073 0 0 1-.5552-2.684l.1352.078 4.3168 2.4924a.8.8 0 0 0 .7984 0l5.2796-3.0482v2.1147a.07.07 0 0 1-.0273.0597l-4.9351 2.8493a4.4178 4.4178 0 0 1-5.0124-1.8619zm-1.1213-9.5399a4.4073 4.4073 0 0 1 2.0522-1.8203l-.0001.1558v4.9849a.8.8 0 0 0 .3992.6914l5.2796 3.0483-1.8315 1.0573a.07.07 0 0 1-.0669.0071l-4.9351-2.8493a4.4178 4.4178 0 0 1-.8974-5.2752zm14.3986 3.6558l-5.2796-3.0483 1.8315-1.0573a.07.07 0 0 1 .0669-.0071l4.9351 2.8493a4.4178 4.4178 0 0 1 .8974 5.2752 4.4073 4.4073 0 0 1-2.0522 1.8203v-5.1407a.8.8 0 0 0-.3991-.6914zm2.1465-3.0401l-.1352-.078-4.3168-2.4924a.8.8 0 0 0-.7984 0l-5.2796 3.0482v-2.1147a.07.07 0 0 1 .0273-.0597l4.9351-2.8493a4.4178 4.4178 0 0 1 5.5676 4.5459zm-10.9859-4.8876l.0001-.1558a4.4178 4.4178 0 0 1 6.72 2.7258l-.1352.0779-4.3168 2.4925a.8.8 0 0 0-.3992.6915v6.0965l-1.8315-1.0573a.07.07 0 0 1-.0396-.0526v-5.6983a4.4073 4.4073 0 0 1 2.6074-.8637z"/>
        </svg>
      ),
      description:
        "Prompt engineering, mantiqiy algoritmlar yozish, koddagi xatoliklarni aniqlash hamda loyiha arxitekturasini rejalashtirish uchun faol ishlataman.",
      tags: ["ChatGPT-4o", "OpenAI", "Prompting", "Code Assistant"],
    },
    {
      id: "gemini",
      name: "Google Gemini",
      subtitle: "Multimodal AI & 2M Context",
      border: "border-cyan-500/30 hover:border-cyan-400",
      glow: "shadow-[0_0_30px_rgba(34,211,238,0.15)]",
      badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      iconBg: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4771 12 22C12 16.4771 16.4771 12 22 12C16.4771 12 12 7.52285 12 2Z"
            fill="url(#geminiGradient)"
          />
          <defs>
            <linearGradient id="geminiGradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#22D3EE" />
              <stop offset="0.5" stopColor="#3B82F6" />
              <stop offset="1" stopColor="#A78BFA" />
            </linearGradient>
          </defs>
        </svg>
      ),
      description:
        "Google'ning multimodal intellekti — katta hajmdagi hujjatlar, rasmlar, kodlar bazasini tezkor tahlil qilish hamda API integratsiyalari uchun tayanch vositam.",
      tags: ["Gemini 1.5 Pro", "Google AI", "Multimodal", "2M Tokens"],
    },
    {
      id: "cursor",
      name: "Cursor AI IDE",
      subtitle: "AI-Native Code Editor",
      border: "border-purple-500/30 hover:border-purple-400",
      glow: "shadow-[0_0_30px_rgba(167,139,250,0.15)]",
      badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      iconBg: "bg-purple-500/10 border-purple-500/30 text-purple-400",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 9L4.5 7.25 12 11l7.5-3.75L12 11zm-10 1l10 5 10-5v6.5L12 22 2 17.5V12z"/>
        </svg>
      ),
      description:
        "Dasturlash muharririm! AI Composer yordamida ko'p faylli avtomatik refaktoring, aqlli tab auto-complete va tezkor kod tahrirlash tajribasi.",
      tags: ["Cursor IDE", "AI Composer", "Tab Completion", "Fast Coding"],
    },
    {
      id: "antigravity",
      name: "Google Antigravity",
      subtitle: "Autonomous Agentic AI",
      border: "border-[#00E87A]/30 hover:border-[#00E87A]",
      glow: "shadow-[0_0_30px_rgba(0,232,122,0.15)]",
      badgeBg: "bg-[#00E87A]/10 text-[#00E87A] border-[#00E87A]/20",
      iconBg: "bg-[#00E87A]/10 border-[#00E87A]/30 text-[#00E87A]",
      icon: (
        <svg className="w-8 h-8 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" strokeDasharray="4 2" />
          <circle cx="12" cy="12" r="4" fill="currentColor" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3" strokeLinecap="round" />
        </svg>
      ),
      description:
        "Google DeepMind jamoasining avtonom multi-agent tizimi. Murakkab loyihalar arxitekturasini qurish, avtomatik testlash va ko'p agentli orkestratsiya.",
      tags: ["Google Antigravity", "DeepMind", "Multi-Agent", "AGY SDK"],
    },
  ];

 // Hackathon Stickers & Certificates Data

const stickersList = [
  {
    id: "ai-hackathon",

    title: "Sertifikat & Hackathon Stikeri",

    subtitle: "G'olib • 1-o'rin Nishoni 🏆",

    date: "2026",

    organizer: "AI & Tech Community",

    badgeColor:
      "from-amber-500/20 to-yellow-500/20 text-amber-400 border-amber-500/40",

    glowColor:
      "shadow-[0_0_30px_rgba(245,158,11,0.2)]",

    icon: "🏆",

    type: "Official Certificate & Sticker",

    // Assets ichidagi rasm
    image: certificateImg,

    desc:
      "Sun'iy intellekt va zamonaviy Front-End texnologiyalari bo'yicha erishilgan rasmiy sertifikat hamda xakaton stikeri.",

    tags: [
      "React.js",
      "AI Integration",
      "Tailwind CSS",
      "Certificate",
    ],
  },
];

  const bgMain = darkMode
    ? "bg-[#030308] text-[#F0F0F8]"
    : "bg-slate-50 text-slate-900";

  const bgSecond = darkMode
    ? "bg-[#060616] text-[#F0F0F8]"
    : "bg-white text-slate-900";

  const cardBg = darkMode
    ? "bg-[#080818] border-white/10 hover:border-[#00E87A]/50"
    : "bg-white border-slate-200 shadow-xl hover:border-cyan-500/50";

  return (
    <div className={bgMain}>

      {/* 01. HERO / BOSH SAHIFA */}
      <section
        id="home"
        className="min-h-screen relative pt-32 pb-20 flex items-center overflow-hidden"
      >
        {/* Background Ambient Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#00E87A]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#5B8BFF]/5 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10">
          
          {/* Hire Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-8 bg-[#00E87A]/10 border border-[#00E87A]/30 rounded-full text-xs font-mono font-semibold text-[#00E87A]">
            <span className="w-2 h-2 rounded-full bg-[#00E87A] animate-pulse-accent inline-block" />
            {t.availableHire}
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                {t.hello} <span className="gradient-text">{t.name}</span>
                <br />
                <span className="text-2xl sm:text-3xl text-[#00E87A] font-mono font-bold block mt-2">
                  {t.ageRole}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#9898B0] leading-relaxed max-w-2xl mb-8">
                {t.heroText}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 mb-12 font-mono text-sm">
                <a
                  href="#projects"
                  className="px-6 py-3.5 rounded-xl bg-[#00E87A] text-[#030310] font-bold hover:bg-[#00c968] transition-all duration-200 shadow-[0_0_30px_rgba(0,232,122,0.3)]"
                >
                  {t.viewProjects}
                </a>

                <a
                  href="#contact"
                  className="px-6 py-3.5 rounded-xl border border-white/10 hover:border-[#00E87A]/50 text-gray-300 hover:text-white transition-all duration-200 bg-[#080818]"
                >
                  {t.getInTouch}
                </a>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 font-mono">
                <div>
                  <div className="text-2xl font-black text-[#00E87A]">2+</div>
                  <div className="text-xs text-[#686884] uppercase tracking-wider mt-0.5">Yillik Tajriba</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-cyan-400">6+</div>
                  <div className="text-xs text-[#686884] uppercase tracking-wider mt-0.5">Loyihalar</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-purple-400">4+</div>
                  <div className="text-xs text-[#686884] uppercase tracking-wider mt-0.5">Hackathon Stiker</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-pink-400">4 AI</div>
                  <div className="text-xs text-[#686884] uppercase tracking-wider mt-0.5">AI Vositalar</div>
                </div>
              </div>
            </div>

            {/* Right Terminal Code Preview */}
            <div className="lg:col-span-5">
              <div className="animate-float rounded-2xl overflow-hidden bg-[#060616] border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.6)] font-mono text-xs">
                
                {/* Header Dots */}
                <div className="bg-[#0B0B20] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F57] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#FEBC2E] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#28C840] inline-block" />
                  </div>
                  <span className="text-[#686884] text-[11px]">oybek@portfolio ~ %</span>
                </div>

                {/* Body */}
                <div className="p-5 text-gray-300 leading-relaxed space-y-2">
                  <p><span className="text-[#00E87A]">&gt;</span> <span className="text-purple-400">const</span> developer = &#123;</p>
                  <p className="pl-4"><span className="text-cyan-400">name</span>: <span className="text-emerald-300">"Oybek Rayimov"</span>,</p>
                  <p className="pl-4"><span className="text-cyan-400">age</span>: <span className="text-amber-400">15</span>,</p>
                  <p className="pl-4"><span className="text-cyan-400">role</span>: <span className="text-emerald-300">"Front-End &amp; AI Developer"</span>,</p>
                  <p className="pl-4"><span className="text-cyan-400">aiTools</span>: [</p>
                  <p className="pl-8 text-amber-300">"ChatGPT", "Gemini", "Cursor", "Antigravity"</p>
                  <p className="pl-4">],</p>
                  <p className="pl-4"><span className="text-cyan-400">achievements</span>: <span className="text-emerald-300">"4+ Hackathon Badges"</span>,</p>
                  <p className="pl-4"><span className="text-cyan-400">status</span>: <span className="text-[#00E87A]">"Coding active 🚀"</span></p>
                  <p>&#125;;</p>
                  <p className="pt-2 text-[#00E87A] flex items-center gap-1">
                    <span>&gt; developer.buildAwesomeWebsites();</span>
                    <span className="w-2 h-4 bg-[#00E87A] animate-pulse inline-block" />
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 02. MEN HAQIMDA */}
      <section id="about" className={`py-24 ${bgSecond} border-t border-white/5`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          {/* Section Heading */}
          <div className="mb-16">
            <div className="font-mono text-xs text-[#00E87A] font-bold tracking-widest uppercase mb-3 flex items-center gap-3">
              <span>{t.aboutNum}</span>
              <span className="w-12 h-[1px] bg-[#00E87A]/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
              {t.aboutTitle.split(" ")[0]} <span className="gradient-text">{t.aboutTitle.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="text-[#9898B0] text-sm sm:text-base max-w-xl">
              {t.aboutSubtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Story */}
            <div className="lg:col-span-7 space-y-6 text-[#9898B0] leading-relaxed text-base">
              <p className="text-lg text-white font-medium">
                {t.aboutText}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 pt-4 font-mono text-xs">
                <a href="mailto:rayimovoybek17@gmail.com" className="p-4 rounded-xl bg-[#080818] border border-white/10 flex items-center gap-3 hover:border-[#00E87A] transition-colors">
                  <FaEnvelope className="text-[#00E87A] text-lg" />
                  <div>
                    <div className="text-[10px] text-[#686884] uppercase">Email</div>
                    <div className="text-white font-bold">rayimovoybek17@gmail.com</div>
                  </div>
                </a>

                <a href="tel:+998990541514" className="p-4 rounded-xl bg-[#080818] border border-white/10 flex items-center gap-3 hover:border-[#00E87A] transition-colors">
                  <FaPhoneAlt className="text-[#00E87A] text-lg" />
                  <div>
                    <div className="text-[10px] text-[#686884] uppercase">Telefon</div>
                    <div className="text-white font-bold">+998 99 054 15 14</div>
                  </div>
                </a>

                <a href="https://t.me/rayimovoybek" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-[#080818] border border-white/10 flex items-center gap-3 hover:border-[#00E87A] transition-colors">
                  <FaPaperPlane className="text-[#00E87A] text-lg" />
                  <div>
                    <div className="text-[10px] text-[#686884] uppercase">Telegram</div>
                    <div className="text-white font-bold">@rayimovoybek</div>
                  </div>
                </a>

                <div className="p-4 rounded-xl bg-[#080818] border border-white/10 flex items-center gap-3">
                  <FaMapMarkerAlt className="text-[#00E87A] text-lg" />
                  <div>
                    <div className="text-[10px] text-[#686884] uppercase">Joylashuv</div>
                    <div className="text-white font-bold">Uzbekistan 🇺🇿</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#080818] border border-white/10 hover:border-[#00E87A]/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#00E87A]/10 border border-[#00E87A]/30 text-[#00E87A] flex items-center justify-center text-xl mb-4 font-bold">
                  <FaLaptopCode />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Front-End Developer</h3>
                <p className="text-xs text-[#9898B0] leading-relaxed">
                  React.js va Tailwind CSS yordamida tezkor, chiroyli va responsive veb-ilovalar.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#080818] border border-white/10 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center text-xl mb-4 font-bold">
                  <FaSparkles />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">AI Integratsiyasi</h3>
                <p className="text-xs text-[#9898B0] leading-relaxed">
                  ChatGPT, Gemini, Cursor va Antigravity agentlarini dasturlashga qo'llash.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#080818] border border-white/10 hover:border-purple-400/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center text-xl mb-4 font-bold">
                  <FaTrophy />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Hackathon G'olibi</h3>
                <p className="text-xs text-[#9898B0] leading-relaxed">
                  Nufuzli xakatons musobaqalarida ishtirok etib stikerlar va diplomlar egasi.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#080818] border border-white/10 hover:border-pink-400/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 text-pink-400 flex items-center justify-center text-xl mb-4 font-bold">
                  <FaRocket />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Tezkor Ijro</h3>
                <p className="text-xs text-[#9898B0] leading-relaxed">
                  G'oyadan tayyor ishlaydigan loyihagacha qisqa muddatda sifatli yaratish.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 03. SKILLS / KO'NIKMALAR */}
      <section id="skills" className={`py-24 ${bgMain} border-t border-white/5`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          <div className="mb-16">
            <div className="font-mono text-xs text-[#00E87A] font-bold tracking-widest uppercase mb-3 flex items-center gap-3">
              <span>{t.skillsNum}</span>
              <span className="w-12 h-[1px] bg-[#00E87A]/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
              {t.skillsTitle.split(" ")[0]} <span className="gradient-text">{t.skillsTitle.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="text-[#9898B0] text-sm sm:text-base max-w-xl">
              {t.skillsSubtitle}
            </p>
          </div>

          {/* Frontend Category */}
          <div className="mb-12">
            <h3 className="font-mono text-xs text-[#00E87A] font-bold tracking-wider uppercase mb-6 flex items-center gap-4">
              <span>{t.frontendCat}</span>
              <span className="flex-1 h-[1px] bg-gradient-to-r from-[#00E87A]/30 to-transparent" />
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="p-5 rounded-2xl bg-[#080818] border border-[#E34F26]/20 flex flex-col items-center justify-center gap-3 hover:-translate-y-1.5 transition-all duration-300">
                <FaHtml5 className="text-4xl text-[#E34F26]" />
                <span className="text-sm font-bold text-white">HTML5</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#080818] border border-[#1572B6]/20 flex flex-col items-center justify-center gap-3 hover:-translate-y-1.5 transition-all duration-300">
                <FaCss3Alt className="text-4xl text-[#1572B6]" />
                <span className="text-sm font-bold text-white">CSS3</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#080818] border border-yellow-400/20 flex flex-col items-center justify-center gap-3 hover:-translate-y-1.5 transition-all duration-300">
                <SiJavascript className="text-4xl text-yellow-400" />
                <span className="text-sm font-bold text-white">JavaScript</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#080818] border border-cyan-400/20 flex flex-col items-center justify-center gap-3 hover:-translate-y-1.5 transition-all duration-300">
                <FaReact className="text-4xl text-cyan-400 animate-spin-[12s]" />
                <span className="text-sm font-bold text-white">React.js</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#080818] border border-cyan-400/20 flex flex-col items-center justify-center gap-3 hover:-translate-y-1.5 transition-all duration-300">
                <SiTailwindcss className="text-4xl text-cyan-400" />
                <span className="text-sm font-bold text-white">Tailwind CSS</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#080818] border border-purple-500/20 flex flex-col items-center justify-center gap-3 hover:-translate-y-1.5 transition-all duration-300">
                <FaBootstrap className="text-4xl text-purple-500" />
                <span className="text-sm font-bold text-white">Bootstrap</span>
              </div>
            </div>
          </div>

          {/* Tools Category */}
          <div>
            <h3 className="font-mono text-xs text-cyan-400 font-bold tracking-wider uppercase mb-6 flex items-center gap-4">
              <span>{t.toolsCat}</span>
              <span className="flex-1 h-[1px] bg-gradient-to-r from-cyan-400/30 to-transparent" />
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 font-mono text-xs">
              <div className="p-4 rounded-2xl bg-[#080818] border border-white/10 flex items-center gap-3 text-gray-300">
                <FaGithub className="text-2xl text-white" />
                <span>Git / GitHub</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#080818] border border-white/10 flex items-center gap-3 text-gray-300">
                <SiVite className="text-2xl text-purple-400" />
                <span>Vite</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#080818] border border-white/10 flex items-center gap-3 text-gray-300">
                <SiNetlify className="text-2xl text-cyan-400" />
                <span>Netlify</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#080818] border border-white/10 flex items-center gap-3 text-gray-300">
                <SiFastapi className="text-2xl text-emerald-400" />
                <span>REST APIs</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#080818] border border-white/10 flex items-center gap-3 text-gray-300">
                <FaCode className="text-2xl text-blue-400" />
                <span>VS Code</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#080818] border border-white/10 flex items-center gap-3 text-gray-300">
                <FaLaptopCode className="text-2xl text-[#00E87A]" />
                <span>Web UX/UI</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* 04. AI BO'LIMI (ChatGPT, Gemini, Cursor, Antigravity) */}
      <section id="ai-tools" className={`py-24 ${bgSecond} border-t border-white/5 relative overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          
          <div className="mb-16">
            <div className="font-mono text-xs text-[#00E87A] font-bold tracking-widest uppercase mb-3 flex items-center gap-3">
              <span>{t.aiNum}</span>
              <span className="w-12 h-[1px] bg-[#00E87A]/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
              {t.aiTitle.split(" ")[0]} <span className="gradient-text">{t.aiTitle.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="text-[#9898B0] text-sm sm:text-base max-w-2xl">
              {t.aiSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiToolsList.map((ai) => (
              <div
                key={ai.id}
                className={`p-8 rounded-3xl bg-[#080818] border ${ai.border} ${ai.glow} transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl border ${ai.iconBg} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      {ai.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00E87A] transition-colors">
                        {ai.name}
                      </h3>
                      <div className="text-xs font-mono text-[#686884] font-semibold mt-1">
                        {ai.subtitle}
                      </div>
                    </div>
                  </div>

                  <span className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full border ${ai.badgeBg}`}>
                    ACTIVE AI
                  </span>
                </div>

                <p className="text-sm text-[#9898B0] leading-relaxed mb-6">
                  {ai.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 font-mono text-xs">
                  {ai.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-white/5 text-gray-300 border border-white/5">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 05. TAJRIBA (EXPERIENCE - Styled matching akmaljonmordayev.uz/#experience) */}
      <section id="experience" className={`py-24 ${bgMain} border-t border-white/5`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          <div className="mb-16">
            <div className="font-mono text-xs text-[#00E87A] font-bold tracking-widest uppercase mb-3 flex items-center gap-3">
              <span>{t.expNum}</span>
              <span className="w-12 h-[1px] bg-[#00E87A]/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
              {t.expTitle.split(" ")[0]} <span className="gradient-text">{t.expTitle.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="text-[#9898B0] text-sm sm:text-base max-w-xl">
              {t.expSubtitle}
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative pl-6 sm:pl-8 space-y-12">
            
            {/* Timeline Vertical Gradient Bar */}
            <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#00E87A] via-cyan-400 to-purple-500 rounded-full" />

            {/* Experience Item 1 */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-3 w-4 h-4 rounded-full bg-[#FF5680] border-4 border-[#030308] shadow-[0_0_15px_#FF5680]" />
              
              <div className="p-6 sm:p-8 rounded-2xl bg-[#080818] border border-white/10 hover:border-[#FF5680]/50 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FF5680]/10 border border-[#FF5680]/30 text-[#FF5680] flex items-center justify-center text-xl">
                      <FaSparkles />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Front-End &amp; AI Product Builder</h3>
                      <div className="text-xs font-mono text-[#FF5680] font-semibold">Mustaqil Dasturchi &amp; Loyihalar</div>
                    </div>
                  </div>
                  
                  <span className="px-3 py-1.5 rounded-full bg-[#FF5680]/10 border border-[#FF5680]/30 text-[#FF5680] text-xs font-mono font-bold">
                    2025 — Hozirda
                  </span>
                </div>

                <ul className="space-y-2.5 text-sm text-[#9898B0]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#FF5680] mt-1">▸</span>
                    <span>React.js, Tailwind CSS va modern JavaScript texnologiyalarida veb-saytlar va foydalanuvchi interfeyslarini yaratish</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#FF5680] mt-1">▸</span>
                    <span>ChatGPT, Google Gemini va Cursor AI agentlarini dasturlash jarayoniga tatbiq etib samaradorlikni 3x oshirish</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#FF5680] mt-1">▸</span>
                    <span>Hackathon musobaqalari uchun AI-driven prototiplar va responsive ilovalar yaratish</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-3 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#030308] shadow-[0_0_15px_#22D3EE]" />
              
              <div className="p-6 sm:p-8 rounded-2xl bg-[#080818] border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center text-xl">
                      <FaLaptopCode />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">React.js Web Developer</h3>
                      <div className="text-xs font-mono text-cyan-400 font-semibold">Web Applications &amp; UI Design</div>
                    </div>
                  </div>
                  
                  <span className="px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
                    2024 — 2025
                  </span>
                </div>

                <ul className="space-y-2.5 text-sm text-[#9898B0]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>Online Calculator, Student Leaderboard hamda Contact Manager loyihalarini React komponentlar yordamida noldan qurish</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>Tailwind CSS, Bootstrap va DaisyUI yordamida moslashuvchan (responsive) mobil va kross-brauzer dizaynlar yaratish</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* 06. LOYIHALAR */}
      <section id="projects" className={`py-24 ${bgSecond} border-t border-white/5`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          <div className="mb-16">
            <div className="font-mono text-xs text-[#00E87A] font-bold tracking-widest uppercase mb-3 flex items-center gap-3">
              <span>{t.projectsNum}</span>
              <span className="w-12 h-[1px] bg-[#00E87A]/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
              {t.projectsTitle.split(" ")[0]} <span className="gradient-text">{t.projectsTitle.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="text-[#9898B0] text-sm sm:text-base max-w-xl">
              {t.projectsSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Project 1 */}
            <a
              href="https://oybekning2.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-3xl bg-[#080818] border border-white/10 hover:border-cyan-400 transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-cyan-400">REACT + TAILWIND</span>
                  <FaExternalLinkAlt className="text-gray-500 group-hover:text-cyan-400 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  Online Calculator
                </h3>
                <p className="text-sm text-[#9898B0] leading-relaxed mb-6">
                  {t.calculatorDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-cyan-400 font-bold">
                <span>DEMO SAHIFA →</span>
                <span className="px-2 py-0.5 rounded bg-cyan-500/10">LIVE</span>
              </div>
            </a>

            {/* Project 2 */}
            <a
              href="https://oybekning3.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-3xl bg-[#080818] border border-white/10 hover:border-[#00E87A] transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#00E87A]">REACT + STATE</span>
                  <FaExternalLinkAlt className="text-gray-500 group-hover:text-[#00E87A] transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00E87A] transition-colors">
                  Student Leaderboard
                </h3>
                <p className="text-sm text-[#9898B0] leading-relaxed mb-6">
                  {t.leaderboardDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#00E87A] font-bold">
                <span>DEMO SAHIFA →</span>
                <span className="px-2 py-0.5 rounded bg-[#00E87A]/10">LIVE</span>
              </div>
            </a>

            {/* Project 3 */}
            <a
              href="https://candid-profiterole-1bb246.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-3xl bg-[#080818] border border-white/10 hover:border-purple-400 transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-purple-400">REACT + UI</span>
                  <FaExternalLinkAlt className="text-gray-500 group-hover:text-purple-400 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  Contact Manager
                </h3>
                <p className="text-sm text-[#9898B0] leading-relaxed mb-6">
                  {t.contactDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-purple-400 font-bold">
                <span>DEMO SAHIFA →</span>
                <span className="px-2 py-0.5 rounded bg-purple-500/10">LIVE</span>
              </div>
            </a>

          </div>
        </div>
      </section>


      {/* 06. SERTIFIKATLAR & HACKATHON STIKERLARI */}
      <section id="certificates" className={`py-24 ${bgMain} border-t border-white/5 relative overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          
          <div className="mb-16">
            <div className="font-mono text-xs text-[#00E87A] font-bold tracking-widest uppercase mb-3 flex items-center gap-3">
              <span>{t.certNum}</span>
              <span className="w-12 h-[1px] bg-[#00E87A]/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
              {t.certTitle.split(" ")[0]} <span className="gradient-text">{t.certTitle.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="text-[#9898B0] text-sm sm:text-base max-w-xl">
              {t.certSubtitle}
            </p>
          </div>

          <div className={`grid ${stickersList.length === 1 ? "grid-cols-1 max-w-3xl mx-auto" : "md:grid-cols-2"} gap-8`}>
            {stickersList.map((stk) => (
              <div
                key={stk.id}
                className={`p-6 sm:p-8 rounded-3xl bg-[#080818] border border-white/10 ${stk.glowColor} transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden group flex flex-col justify-between`}
              >
                {/* Holographic Top Corner Banner */}
                <div className="absolute top-0 right-0 bg-gradient-to-l from-white/10 to-transparent px-4 py-1 text-[10px] font-mono text-gray-300 font-bold rounded-bl-xl border-l border-b border-white/10 z-10">
                  {stk.type}
                </div>

                <div>
                  {/* Certificate / Sticker Image Display Container */}
                  {stk.image ? (
                    <div
                      onClick={() => setSelectedImage(stk.image)}
                      className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden mb-6 border border-white/10 cursor-pointer group/img"
                    >
                      <img
                        src={stk.image}
                        alt={stk.title}
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080818] via-transparent to-transparent opacity-60" />
                      <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-mono text-white flex items-center gap-1.5 opacity-0 group-hover/img:opacity-100 transition-opacity">
                        <span>Kattalashtirish 🔍</span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-40 w-full rounded-2xl overflow-hidden mb-6 border border-dashed border-white/15 bg-white/[0.02] flex flex-col items-center justify-center text-center p-4 group-hover:border-[#00E87A]/40 transition-colors">
                      <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">{stk.icon}</span>
                      <span className="text-xs font-mono text-[#686884]">
                        Rasm joylash uchun <code className="text-[#00E87A]">image: "URL"</code> berishingiz mumkin
                      </span>
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center text-2xl shadow-xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 shrink-0">
                      {stk.icon}
                    </div>

                    <div>
                      <span className="text-xs font-mono font-bold text-[#686884] block mb-1">
                        {stk.date} • {stk.organizer}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00E87A] transition-colors">
                        {stk.title}
                      </h3>
                      <div className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-mono font-bold border ${stk.badgeColor}`}>
                        {stk.subtitle}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-[#9898B0] leading-relaxed mb-6">
                    {stk.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 font-mono text-xs">
                  {stk.tags.map((tg, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-white/5 text-gray-300 border border-white/5">
                      #{tg}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal for Certificate / Sticker Image Preview */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer animate-fadeIn"
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
            <img src={selectedImage} alt="Certificate Preview" className="w-full h-full object-contain" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center text-lg font-bold border border-white/20 hover:bg-red-500 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}


      {/* 08. ALOQA (CONTACT) */}
      <section id="contact" className={`py-24 ${bgSecond} border-t border-white/5`}>
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          
          <div className="text-center mb-16">
            <div className="font-mono text-xs text-[#00E87A] font-bold tracking-widest uppercase mb-3 inline-flex items-center gap-3">
              <span>{t.contactNum}</span>
              <span className="w-12 h-[1px] bg-[#00E87A]/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
              {t.contactTitle.split(" ")[0]} <span className="gradient-text">{t.contactTitle.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="text-[#9898B0] text-sm sm:text-base max-w-lg mx-auto">
              {t.contactSubtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Info Cards */}
            <div className="lg:col-span-5 space-y-4 font-mono text-xs">
              <a
                href="mailto:rayimovoybek17@gmail.com"
                className="p-6 rounded-2xl bg-[#080818] border border-white/10 flex items-center gap-4 hover:border-[#00E87A] transition-all duration-300 group block"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00E87A]/10 text-[#00E87A] border border-[#00E87A]/30 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-[#686884] uppercase font-bold tracking-wider text-[10px]">EMAIL</div>
                  <div className="text-white text-sm font-bold mt-1">rayimovoybek17@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+998990541514"
                className="p-6 rounded-2xl bg-[#080818] border border-white/10 flex items-center gap-4 hover:border-cyan-400 transition-all duration-300 group block"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  <FaPhoneAlt />
                </div>
                <div>
                  <div className="text-[#686884] uppercase font-bold tracking-wider text-[10px]">TELEFON</div>
                  <div className="text-white text-sm font-bold mt-1">+998 99 054 15 14</div>
                </div>
              </a>

              <a
                href="https://t.me/rayimovoybek"
                target="_blank"
                rel="noreferrer"
                className="p-6 rounded-2xl bg-[#080818] border border-white/10 flex items-center gap-4 hover:border-purple-400 transition-all duration-300 group block"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/30 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  <FaPaperPlane />
                </div>
                <div>
                  <div className="text-[#686884] uppercase font-bold tracking-wider text-[10px]">TELEGRAM</div>
                  <div className="text-white text-sm font-bold mt-1">@rayimovoybek</div>
                </div>
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleFormSubmit}
                className="p-8 rounded-3xl bg-[#080818] border border-white/10 space-y-5"
              >
                {status.msg && (
                  <div
                    className={`p-4 rounded-xl font-mono text-xs border transition-all ${
                      status.type === "success"
                        ? "bg-[#00E87A]/10 border-[#00E87A]/30 text-[#00E87A]"
                        : "bg-red-500/10 border-red-500/30 text-red-400"
                    }`}
                  >
                    {status.msg}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-mono text-[#9898B0] mb-2 uppercase font-bold">
                    {t.yourName}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Oybek Rayimov"
                    className="w-full px-5 py-4 rounded-xl bg-[#060616] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#00E87A] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#9898B0] mb-2 uppercase font-bold">
                    {t.yourEmail}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full px-5 py-4 rounded-xl bg-[#060616] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#00E87A] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#9898B0] mb-2 uppercase font-bold">
                    {t.yourMessage}
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.yourMessage}
                    className="w-full px-5 py-4 rounded-xl bg-[#060616] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#00E87A] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-[#00E87A] text-[#030310] font-mono font-extrabold text-sm hover:bg-[#00c968] disabled:opacity-50 transition-all duration-200 shadow-[0_0_30px_rgba(0,232,122,0.3)] flex items-center justify-center gap-3 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin inline-block" />
                      Yuborilmoqda...
                    </>
                  ) : (
                    <>
                      {t.sendMsg} <FaPaperPlane />
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Section;