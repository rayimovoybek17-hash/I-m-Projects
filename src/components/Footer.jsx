import React from "react";

function Footer() {
  return (
    <footer className="bg-[#050816] border-t border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* About */}
          <div>
            <h2 className="text-4xl font-bold text-cyan-400 mb-5">
              Oybek Rayimov
            </h2>

            <p className="text-gray-400 leading-8">
              I'm a 15-year-old Front-End Developer from Uzbekistan.
              I build modern and responsive websites using HTML, CSS,
              JavaScript, Tailwind CSS and React.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Navigation
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400">About</a></li>
              <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
              <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
              <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Technologies
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
              <li>React JS</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>📍 Uzbekistan</p>
              <p>📧 rayimovoybek17@gmail.com</p>
              <p>📱 +998 99 054 14 15</p>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#111827] hover:bg-cyan-500 flex items-center justify-center duration-300"
              >
                G
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#111827] hover:bg-blue-600 flex items-center justify-center duration-300"
              >
                L
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#111827] hover:bg-sky-500 flex items-center justify-center duration-300"
              >
                T
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#111827] hover:bg-pink-500 flex items-center justify-center duration-300"
              >
                I
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500">
            © 2026 Oybek Rayimov. All Rights Reserved.
          </p>

          <p className="text-cyan-400 mt-4 md:mt-0">
            Made with ❤️ using React & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;