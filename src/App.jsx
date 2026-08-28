import React, { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("uz");

  return (
    <div
      className={`min-h-screen duration-500 ${
        darkMode
          ? "bg-[#070B17] text-white"
          : "bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-100 text-gray-900"
      }`}
    >
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
      />

      <Section darkMode={darkMode} language={language} />

      <Footer darkMode={darkMode} language={language} />
    </div>
  );
}

export default App;