import React from "react";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B1020]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
            OR
          </div>

          <div>
            <h1 className="text-2xl font-bold text-white animated-text">
  Oybek Rayimov
</h1>

            {/* <p className="text-sm text-purple-400 tracking-widest">
              FULL-STACK DEVELOPER
            </p> */}
          </div>
        </div>

        <nav>
          <ul className="flex items-center gap-10 text-white font-medium">
            <li><a href="#about" className="hover:text-cyan-400 duration-300">About</a></li>
            <li><a href="#skills" className="hover:text-cyan-400 duration-300">Skills</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 duration-300">Projects</a></li>
            {/* <li><a href="#experience" className="hover:text-cyan-400 duration-300">Experience</a></li> */}
            <li><a href="#contact" className="hover:text-cyan-400 duration-300">Contact</a></li>
          </ul>
        </nav>

        {/* <button className="px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-105 duration-300">
          Hire Me
        </button> */}

      </div>
    </header>
  );
}

export default Header;