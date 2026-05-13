import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";

import profil from "../assets/profil.webp";

function Footer() {

  return (

    <footer className="border-t border-zinc-800  bg-black/60 backdrop-blur-xl py-14">

      <div className="container">

        <div className="flex flex-col items-center gap-4">
          

          {/* TOP */}

          <div className="flex items-center gap-1">

            {/* PROFILE IMAGE */}

            <img
              src={profil}
              alt="Hamza"
              className="
                w-16 h-16
                rounded-full
                object-cover
                border border-zinc-700
              "
            />

            {/* NAME */}

            <div>

              <h2 className="text- font-bold tracking-tight text-white">
                Hamza Abusal
              </h2>

              <p className="text-zinc-500 mt-2 text-[15px]">
                full-Stack Developer
              </p>

             

            </div>


          </div>


          <p className="text-zinc-500 leading-7 text-[19px] max-w-md gap-4">
             full-Stack Developer building modern,
             responsive and user-focused web experiences.
            </p>

          {/* NAV LINKS */}

          <div className="flex items-center gap-5 text-sm uppercase tracking-[1px]">

            <a
              href="#home"
              className="text-zinc-500 hover:text-white transition duration-300"
            >
              Home
            </a>

            <a
              href="#projects"
              className="text-zinc-500 hover:text-white transition duration-300"
            >
              Projects
            </a>

            <a
              href="#skills"
              className="text-zinc-500 hover:text-white transition duration-300"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="text-zinc-500 hover:text-white transition duration-300"
            >
              Contact
            </a>

          </div>

          {/* SOCIAL ICONS */}

          <div className="flex gap-5">

            <a
              href="https://github.com/hamzaabusall4"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-12 h-12
                rounded-2xl
                border border-zinc-800
                flex items-center justify-center
                text-zinc-400
                hover:bg-white
                hover:text-black
                hover:border-white
                transition duration-300
              "
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/hamza-abu-sall-aab114235"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-12 h-12
                rounded-2xl
                border border-zinc-800
                flex items-center justify-center
                text-zinc-400
                hover:bg-white
                hover:text-black
                hover:border-white
                transition duration-300
              "
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="https://www.instagram.com/hamza.abusall3"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-12 h-12
                rounded-2xl
                border border-zinc-800
                flex items-center justify-center
                text-zinc-400
                hover:bg-white
                hover:text-black
                hover:border-white
                transition duration-300
              "
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="mailto:Hamzaabusall4@gmail.com"
              className="
                w-12 h-12
                rounded-2xl
                border border-zinc-800
                flex items-center justify-center
                text-zinc-400
                hover:bg-white
                hover:text-black
                hover:border-white
                transition duration-300
              "
            >
              <FaEnvelope size={18} />
            </a>

            <a
                      href="tel:+962777824049"
                      className="
                       w-12 h-12
                rounded-2xl
                border border-zinc-800
                flex items-center justify-center
                text-zinc-400
                hover:bg-white
                hover:text-black
                hover:border-white
                transition duration-300
              "
                    >
                      <FaPhone
                        size={18}
                        className="group-hover:scale-110 transition duration-300"
                      />
                    </a>

          </div>

          {/* CONTACT INFO */}

          <div className="text-center">

            <a
              href="mailto:Hamzaabusall4@gmail.com"
              className="block text-zinc-400 hover:text-white transition duration-300 mb-2"
            >
              Hamzaabusall4@gmail.com
            </a>

            <a
              href="tel:+962777824049"
              className="block text-zinc-400 hover:text-white transition duration-300 mb-4"
            >
              +962777824049
            </a>

            <p className="text-zinc-600 text-sm">
              © 2026 All rights reserved.
            </p>

          </div>

        </div>

      </div>

    </footer>

  );
}

export default Footer;

            
