import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800 bg-black/70 backdrop-blur-xl">

      <div className="container h-[80px] flex items-center justify-between">

        {/* LOGO */}

        <h1 className="text-2xl font-bold tracking-tight text-white">
          Hamza Abusal
        </h1>

        {/* DESKTOP MENU */}

        <ul className="hidden md:flex items-center gap-10 text-sm text-zinc-400">

          <a
            href="Hamza-Abusall-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-full border border-zinc-700 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300"
          >
            My Resume
          </a>

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

        {/* MOBILE BUTTON */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* MOBILE MENU */}

      {open && (

        <div className="md:hidden border-t border-zinc-800 bg-black/95 backdrop-blur-xl">

          <div className="flex flex-col gap-6 p-8 text-zinc-300 text-lg">

            <a
              href="Hamza-Abusall-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="border border-zinc-700 px-5 py-3 rounded-xl text-center text-white hover:bg-white hover:text-black transition duration-300"
            >
              My Resume
            </a>

            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="hover:text-white transition"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="hover:text-white transition"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={() => setOpen(false)}
              className="hover:text-white transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="hover:text-white transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="hover:text-white transition"
            >
              Contact
            </a>

          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;