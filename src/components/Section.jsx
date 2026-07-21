import React from "react";

function Section() {
  return (
    <>
      {/* Section 1 - Hero */}
<section
  id="home"
  className="min-h-screen bg-[#070B17] text-white flex items-center"
>
  <div className="container mx-auto px-8 flex flex-col-reverse md:flex-row items-center justify-between">

    {/* Text */}
    <div className="md:w-1/2 text-center md:text-left">
      <h1 className="text-5xl md:text-6xl font-bold">
        Hi, I'm <span className="text-cyan-400">Oybek Rayimov</span>
      </h1>

      <p className="text-2xl mt-4 text-gray-300">
        15 Years Old • Front-End Developer
      </p>

      <p className="mt-6 text-gray-400 max-w-lg">
        I create modern and responsive websites using HTML, CSS,
        JavaScript, Tailwind CSS and React.
      </p>

      <button className="mt-8 px-8 py-3 bg-cyan-500 rounded-xl hover:bg-cyan-600 duration-300">
        View Projects
      </button>
    </div>

    {/* Image */}
    <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
      <img
        src="./public/oybek.jpg"
        alt="Oybek"
        className="w-80 h-80 object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_40px_#22d3ee]"
      />
    </div>

  </div>
</section>

      {/* Section 2 - About */}
      <section
        id="about"
        className="py-24 bg-[#0C1222] text-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-8 text-cyan-400">
            About Me
          </h2>

          <p className="text-xl text-gray-300 leading-10">
            Hello! My name is <b>Oybek Rayimov</b>. I am 15 years old and I
            enjoy creating beautiful and responsive websites. I currently
            work with HTML, CSS, JavaScript, Tailwind CSS and React.
            Every day I improve my programming skills by building real
            projects.
          </p>
        </div>
      </section>

      {/* Section 3 - Skills */}
      <section
        id="skills"
        className="py-24 bg-[#070B17] text-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12 text-center">
            My Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

            <div className="bg-[#111827] p-6 rounded-xl text-center hover:bg-cyan-500 duration-300">
              HTML
            </div>

            <div className="bg-[#111827] p-6 rounded-xl text-center hover:bg-cyan-500 duration-300">
              CSS
            </div>

            <div className="bg-[#111827] p-6 rounded-xl text-center hover:bg-cyan-500 duration-300">
              JavaScript
            </div>

            <div className="bg-[#111827] p-6 rounded-xl text-center hover:bg-cyan-500 duration-300">
              Tailwindcss
            </div>

            <div className="bg-[#111827] p-6 rounded-xl text-center hover:bg-cyan-500 duration-300">
              React
            </div>

            <div className="bg-[#111827] p-6 rounded-xl text-center hover:bg-cyan-500 duration-300">
              Git
            </div>

          </div>
        </div>
      </section>

     {/* Section 4 - Projects */}
<section
  id="projects"
  className="py-24 bg-[#0C1222] text-white"
>
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-5xl font-bold mb-12 text-center">
      My Projects
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Calculator */}
      <a
        href="https://oybekning2.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#111827] p-8 rounded-xl hover:bg-[#1f2937] hover:scale-105 duration-300 cursor-pointer block"
      >
        <h3 className="text-2xl font-bold mb-4">Calculator</h3>
        <p className="text-gray-400">
          Responsive Online Calculator built with React and Tailwind CSS.
        </p>
      </a>

      {/* Student Leaderboard */}
      <a
        href="https://oybekning3.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#111827] p-8 rounded-xl hover:bg-[#1f2937] hover:scale-105 duration-300 cursor-pointer block"
      >
        <h3 className="text-2xl font-bold mb-4">
          Student Leaderboard
        </h3>
        <p className="text-gray-400">
          Responsive Student Leaderboard built with React.
        </p>
      </a>

      {/* Contact */}
      <a
        href="https://candid-profiterole-1bb246.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#111827] p-8 rounded-xl hover:bg-[#1f2937] hover:scale-105 duration-300 cursor-pointer block"
      >
        <h3 className="text-2xl font-bold mb-4">Contact</h3>
        <p className="text-gray-400">
          Modern Contact Manager UI created using React.
        </p>
      </a>

    </div>
  </div>
</section>
      {/* Section 5 - Contact */}
      <section
        id="contact"
        className="py-24 bg-[#070B17] text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-10">
            Contact Me
          </h2>

          <div className="space-y-5 text-xl">
            <p>📍 Uzbekistan</p>
            <p>📧 rayimovoybek17@gmail.com</p>
            <p>📱 +998 99 054 15 14 </p>
            <p><a href="#">💻 GitHub</a></p>
            <p>💼 LinkedIn</p>
            <p> <a href="https://t.me/Rayimov_oybek">✈️ Telegram</a></p>
            <p><a href="https://www.instagram.com/oybek857248?igsh=MWN5dmkycXphZWpidQ%3D%3D&utm_source=qr">📷 Instagram</a> </p>
          </div>

          <button className="mt-10 px-8 py-3 bg-cyan-500 rounded-xl hover:bg-cyan-600 duration-300">
            
<a href="https://t.me/Rayimov_oybek">Send Message</a>
          </button>
        </div>
      </section>
    </>
  );
}

export default Section;