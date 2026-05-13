import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope 
} from "react-icons/fa";

import profil from "../assets/profil.png"; // حط صورتك هون

function Footer() {
  return (

    <footer className="border-t border-b border-zinc-800 bg-black/66 py-14 ">
{/* fixed top-0 left-0 w-full z-50 border-b border-zinc-800 bg-black/70 backdrop-blur-xl */}
      <div className="container">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* LEFT */}

          <div className="text-center lg:text-left gap-4" >


{/* PROFILE IMAGE */}

          <img
            src={profil}
            alt="Hamza"
            className="
              w-13 h-13
              rounded-full
              object-cover
              border border-zinc-700
            "
          />



            <h2 className="text-4xl font-black tracking-tight mb-3 gap-7">
              Hamza Abusal
            </h2>
            

            <p className="text-zinc-500 leading-7 text-[18px] max-w-md gap-7">
              Frontend Developer building modern,
              responsive and user-focused web experiences.
            </p>

          </div>

          {/* CENTER */}

          <div className="flex items-center gap-8 text-sm uppercase tracking-[1px]">

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

            <div className="flex gap-8">
          
                          <a
                            href="https://github.com/hamzaabusall4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition duration-300"
                          >
                            <FaGithub size={20} />
                          </a>
          
                          <a
                            href="https://www.linkedin.com/in/hamza-abu-sall-aab114235"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition duration-300"
                          >
                            <FaLinkedin size={20} />
                          </a>
          
                          <a
                            href="https://www.instagram.com/hamza.abusall3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition duration-300"
                          >
                            <FaInstagram size={20} />
                          </a>
          
                           <a
                            href="mailto:Hamzaabusall4@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition duration-300"
                          >
                            <FaEnvelope  size={20} />
                          </a>
          
                        </div>

          {/* RIGHT */}

          <div className="text-center lg:text-right">

            <a
              href="mailto:Hamzaabusall4@gmail.com"
              className="block text-zinc-400 hover:text-white transition duration-300 mb-2"
            >
              Hamzaabusall4@gmail.com
            </a>
            <a
              href="tel: +962777824049"
              className="block text-zinc-400 hover:text-white transition duration-300 mb-2"
            >
              phone : +962777824049
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