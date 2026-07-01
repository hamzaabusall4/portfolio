import { useState } from "react";

import app from "../assets/app.webp";
import choice from "../assets/choice.webp";
import start from "../assets/start.webp";
import login from "../assets/login.webp";
import home from "../assets/home.webp";
import profile from "../assets/profile.webp";

import home2 from "../assets/home2.webp";
import school from "../assets/school.webp";
import school2 from "../assets/school2.webp";
import school3 from "../assets/school3.webp";
import school4 from "../assets/school4.webp";

import pro1 from "../assets/pro1.webp";
import pro2 from "../assets/pro2.webp";
import pro3 from "../assets/pro3.webp";
import pro4 from "../assets/pro4.webp";

import wwww from "../assets/wwww.webp";
import wwswsws from "../assets/wwswsws.webp";
import sxsxs from "../assets/sxsxs.webp";

const projects = [
  {
    title: "EduChoice",

    description:
      "EduChoice is a full-stack bilingual platform that helps parents in Jordan discover, compare, and apply to schools through one centralized system.The platform simplifies school selection by providing organized school information, smart filtering, and dedicated dashboards for both parents and schools.",

    image: choice,

    images: [choice, home2, school, school2, school3, school4],

    tech: [""],

    github: "https://github.com/hamzaabusall4/my-projects",
  },

  {
    title: "rooh travel ",

    description:
      "Rooh Travel is a modern travel booking platform designed to help users explore destinations, plan trips, and manage travel experiences through a clean and user-friendly interface.The platform offers responsive design, smooth navigation, and interactive features that provide an enjoyable and seamless travel experience.",

    image: wwww,

    images: [wwww, wwswsws, sxsxs],

    tech: [""],

    github: "https://github.com/hamzaabusall4/my-projects",
  },

  {
    title: "App_Salford",

    description:
      "SALFORD is a modern e-learning mobile application built with React Native that helps users explore IT courses such as programming, cybersecurity, and UI/UX design.The app delivers a smooth learning experience with secure authentication, interactive course browsing, and a clean modern interface.",

    image: app,

    images: [app, start, login, home, profile],

    tech: [""],

    github: "https://github.com/hamzaabusall4/my-projects",
  },

  {
    title: "Portfolio Website",

    description:
      "A modern personal portfolio website built with React and Tailwind CSS to showcase projects, skills, and professional experience through a clean and responsive design.The portfolio features smooth animations, interactive UI elements, and a fully responsive layout optimized for all devices.",

    image: pro1,

    images: [pro1, pro2, pro3, pro4],

    tech: [""],

    github: "https://github.com/hamzaabusall4/my-projects",
  },

    {
    title: "E-Commerce Website",

    description:
      "A modern personal portfolio website built with React and Tailwind CSS to showcase projects, skills, and professional experience through a clean and responsive design.The portfolio features smooth animations, interactive UI elements, and a fully responsive layout optimized for all devices.",

    image: pro1,

    images: [pro1, pro2, pro3, pro4],

    tech: [""],

    github: "https://github.com/hamzaabusall4/ecommerce",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImage(0);

    // document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);

    // document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1,
    );
  };

  return (
    <>
      <section id="projects" className="border-t border-zinc-900 py-32">
        <div className="container">
          <p className="text-zinc-500 uppercase tracking-[5px] text-sm mb-5">
            Projects
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-20">
            Selected Work.
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => openProject(project)}
                className="group bg-zinc-950 border rounded-xl border-zinc-800 overflow-hidden cursor-pointer hover:border-zinc-500 transition duration-500 hover:-translate-y-2"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt=""
                    className="h-[320px] w-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-10">
                  <h3 className="text-3xl font-bold tracking-tight mb-5">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 leading-8 text-[16px] mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className="border border-zinc-700 px-4 py-2 rounded-full text-sm text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <button className="text-sm uppercase tracking-[3px] border-b border-white pb-1 hover:text-zinc-400 transition">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}

      {selectedProject && (
        <div
          className="
      fixed inset-0 z-50
      bg-black/80 backdrop-blur-md
      flex items-center justify-center
      p-4
    "
          onClick={closeProject}
        >
          {/* CONTAINER */}

          <div
            onClick={(e) => e.stopPropagation()}
            className="
        relative
        w-full
        max-w-5xl
        bg-[#0b0b0b]
        border border-zinc-800
        rounded-[30px]
        overflow-hidden
        shadow-[0_0_60px_rgba(0,0,0,0.6)]
        animate-in fade-in zoom-in duration-300
      "
          >
            {/* CLOSE BUTTON */}

            <button
              onClick={closeProject}
              className="
          absolute top-5 right-5 z-50
          w-11 h-11
          rounded-full
          bg-black/60
          backdrop-blur-xl
          border border-zinc-700
          text-white
          flex items-center justify-center
          hover:bg-white hover:text-black
          transition duration-300
        "
            >
              ✕
            </button>

            {/* IMAGE AREA */}

            <div className="relative bg-black">
              <img
                src={selectedProject.images[currentImage]}
                alt=""
                className="
            w-full
            h-[260px]
            sm:h-[420px]
            md:h-[520px]
            object-cover
          "
              />

              {/* DARK OVERLAY */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              {/* PREV */}

              <button
                onClick={prevImage}
                className="
            absolute left-4 sm:left-6 top-1/2 -translate-y-1/2
            w-12 h-12 sm:w-14 sm:h-14
            rounded-full
            border border-white/10
            bg-black/40
            backdrop-blur-xl
            text-white
            text-xl
            flex items-center justify-center
            hover:bg-white hover:text-black
            transition duration-300
          "
              >
                ←
              </button>

              {/* NEXT */}

              <button
                onClick={nextImage}
                className="
            absolute right-4 sm:right-6 top-1/2 -translate-y-1/2
            w-12 h-12 sm:w-14 sm:h-14
            rounded-full
            border border-white/10
            bg-black/40
            backdrop-blur-xl
            text-white
            text-xl
            flex items-center justify-center
            hover:bg-white hover:text-black
            transition duration-300
          "
              >
                →
              </button>

              {/* COUNTER */}

              <div
                className="
            absolute bottom-5 right-5
            px-4 py-2
            rounded-full
            bg-black/50
            backdrop-blur-xl
            border border-white/10
            text-sm text-zinc-300
          "
              >
                {currentImage + 1} / {selectedProject.images.length}
              </div>
            </div>

            {/* CONTENT */}

            <div
              className="
          p-6 sm:p-8 md:p-12
          bg-gradient-to-b from-[#0b0b0b] to-black
        "
            >
              {/* TITLE */}

              <h3
                className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-black
            tracking-tight
            mb-5
          "
              >
                {selectedProject.title}
              </h3>

              {/* DESCRIPTION */}

              <p
                className="
            text-zinc-400
            text-base sm:text-lg
            leading-8
            max-w-3xl
            mb-8
          "
              >
                {selectedProject.description}
              </p>

              {/* TECH STACK */}

              <div className="flex flex-wrap gap-3 mb-10">
                {selectedProject.tech.map((item, i) => (
                  <span
                    key={i}
                    className="
                px-4 py-2
                rounded-full
                border border-zinc-700
                bg-zinc-900
                text-sm text-zinc-300
              "
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}

              <div className="flex flex-wrap gap-5">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
              inline-flex items-center justify-center
              px-8 py-4
              rounded-2xl
              border border-zinc-700
              bg-black text-white
              font-medium
              hover:bg-black hover:text-black hover:border-white
              transition duration-300
            "
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
