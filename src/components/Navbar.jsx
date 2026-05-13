import { useState } from "react";
import { Menu, X } from "lucide-react";

import profil from "../assets/profil.webp";

function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <>
    
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800 bg-black/60 backdrop-blur-2xl">

        <div className="container h-[80px] flex items-center justify-between">

          {/* LEFT SIDE */}

          <div className="flex items-center gap-4">

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

            <h1 className="text-2xl font-bold tracking-tight text-white">
              Hamza Abusal
            </h1>

          </div>

          {/* DESKTOP MENU */}

          <ul className="hidden md:flex items-center gap-10 text-sm text-zinc-400">

            <a href="#home">
              <li className="hover:text-white transition duration-300">
                Home
              </li>
            </a>

            <a href="#about">
              <li className="hover:text-white transition duration-300">
                About
              </li>
            </a>

            <a href="#skills">
              <li className="hover:text-white transition duration-300">
                Skills
              </li>
            </a>

            <a href="#projects">
              <li className="hover:text-white transition duration-300">
                Projects
              </li>
            </a>

            <a href="#contact">
              <li className="hover:text-white transition duration-300">
                Contact
              </li>
            </a>

          </ul>

          {/* RIGHT SIDE */}

          <div className="flex items-center gap-3">

            {/* RESUME BUTTON */}

            <a
              href="Hamza-Abusall-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                min-w-[120px]
                h-[32px]
                flex items-center justify-center
                rounded-full
                border border-zinc-700
                bg-white/[0.13]
                backdrop-blur-2xl
                text-white
                text-sm
                hover:bg-white
                hover:text-black
                hover:border-white
                transition-all duration-300
              "
            >
              My Resume
            </a>

            {/* MOBILE MENU BUTTON */}

            <button
              onClick={() => setOpen(!open)}
              className="
                md:hidden
                w-11 h-11
                rounded-xl
                border border-zinc-700
                bg-white/[0.03]
                backdrop-blur-xl
                flex items-center justify-center
                text-white
                relative z-[60]
              "
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>

        </div>

      </nav>

      {/* OVERLAY */}

      {open && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE MENU */}

      {open && (

        <div
          className="
            md:hidden
            fixed
            top-[80px]
            left-0
            w-full
            z-50
            border-t border-zinc-800
            bg-black/49
            backdrop-blur-2xl
          "
        >

          <div className="container py-8 flex flex-col gap-8 text-zinc-300">

            <a
              href="#home"
              className="hover:text-white transition duration-300"
              onClick={() => setOpen(false)}
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-white transition duration-300"
              onClick={() => setOpen(false)}
            >
              About
            </a>

            <a
              href="#skills"
              className="hover:text-white transition duration-300"
              onClick={() => setOpen(false)}
            >
              Skills
            </a>

            <a
              href="#projects"
              className="hover:text-white transition duration-300"
              onClick={() => setOpen(false)}
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-white transition duration-300"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>

          </div>

        </div>

      )}

    </>
  );
}

export default Navbar;