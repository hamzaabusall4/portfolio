import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope 
} from "react-icons/fa";

function Contact() {

  // const handleSubmit = async (e) => {
  // e.preventDefault();

  // const form = e.target;

  // const data = new FormData(form);

  // try {
  //   const res = await fetch(
  //     "https://formsubmit.co/ajax/hamzaabusall4@gmail.com",
  //     {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //       },
  //       body: data,
  //     }
  //   );

  //   if (res.ok) {
  //     alert("Message sent successfully!");
  //   } else {
  //     alert("Failed to send message!");
  //   }

//   } catch (error) {
//     console.log(error);
//     alert("Something went wrong!");
//   }

//   form.reset();
// };
  return (

    <section
      id="contact"
      className="py-28 border-t border-zinc-900"
    >

      <div className="container">

        {/* HEADER */}

        <div className="max-w-3xl mb-20">

          <p className="text-zinc-500 uppercase tracking-[4px] text-sm mb-5">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-[1.1] mb-7">
            Let's build something
            great together.
          </h2>

          <p className="text-zinc-400 text-lg leading-9 max-w-2xl">
            {/* Have a project in mind or looking for a Front-End Developer? */}
            Feel free to contact me anytime.
          </p>

        </div>

        {/* MAIN GRID */}

        <div className="grid lg:grid-cols-[880px_1fr] gap-10 items-start">

          {/* LEFT CARD */}

          <div className="border border-zinc-800 rounded-xl bg-zinc-950 p-8 space-y-12">

            {/* EMAIL */}





        <div
  className="
    mt-11
    relative
    overflow-hidden
    rounded-xl
    rounded-[0px]
    border border-zinc-800
    bg-zinc-950/60
    backdrop-blur-2xl
    p-8 sm:p-10 md:p-14
  "
>

  {/* TOP GRADIENT */}

  <div
    className="
      absolute top-0 left-0
      w-full h-px
      bg-gradient-to-r from-transparent via-white/130 to-transparent
    "
  />

  {/* CONTENT */}

  <div className="flex flex-col gap-7">

    {/* EMAIL */}

   <div className="flex flex-col items-center gap-3 w-full">

      <span
        className="
          text-zinc-500
          text-[20px]
          uppercase
          tracking-[9px]
        "
      >
        Email
      </span>

      <a
        href="mailto:Hamzaabusall4@gmail.com"
        className="
          text-lg sm:text-xl
          font-bold
          text-white
          tracking-tight
          hover:text-zinc-300
          transition duration-300
        "
      >
        Hamzaabusall4@gmail.com
      </a>

    </div>

    {/* LOCATION */}

    <div className="flex flex-col items-center gap-3 w-full">

      <span
        className="
           text-zinc-500
          text-[20px]
          uppercase
          tracking-[9px]
        "
      >
        Location
      </span>

      <h3
        className="
          text-lg sm:text-xl
          font-bold
          text-white
          tracking-tight
        "
      >
        Amman / Jordan
      </h3>

    </div>

    {/* SOCIALS */}

    <div className="flex flex-col items-center gap-3 w-full">

      <span
        className="
           text-zinc-500
          text-[20px]
          uppercase
          tracking-[9px]
        "
      >
        Socials
      </span>

      <div className="flex flex-full gap-4">

        <a
          href="https://github.com/hamzaabusall4"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            w-16 h-16
            rounded-2xl
            border border-zinc-800
            bg-black/20
            backdrop-blur-xl
            flex items-center justify-center
            text-zinc-400
            hover:bg-white
            hover:text-black
            hover:border-white
            transition-all duration-300
          "
        >
          <FaGithub
            size={22}
            className="group-hover:scale-110 transition duration-300"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/hamza-abu-sall-aab114235"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            w-16 h-16
            rounded-2xl
            border border-zinc-800
            bg-black/20
            backdrop-blur-xl
            flex items-center justify-center
            text-zinc-400
            hover:bg-white
            hover:text-black
            hover:border-white
            transition-all duration-300
          "
        >
          <FaLinkedin
            size={22}
            className="group-hover:scale-110 transition duration-300"
          />
        </a>

        <a
          href="tel:+962777824049"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            w-16 h-16
            rounded-2xl
            border border-zinc-800
            bg-black/20
            backdrop-blur-xl
            flex items-center justify-center
            text-zinc-400
            hover:bg-white
            hover:text-black
            hover:border-white
            transition-all duration-300
          "
        >
          <FaPhone
            size={22}
            className="group-hover:scale-110 transition duration-300"
          />
        </a>

        <a
          href="mailto:Hamzaabusall4@gmail.com"
          className="
            group
            w-16 h-16
            rounded-2xl
            border border-zinc-800
            bg-black/20
            backdrop-blur-xl
            flex items-center justify-center
            text-zinc-400
            hover:bg-white
            hover:text-black
            hover:border-white
            transition-all duration-300
          "
        >
          <FaEnvelope
            size={22}
            className="group-hover:scale-110 transition duration-300"
          />
        </a>
        

</div>
</div>
</div>
</div>
</div>          
</div>
</div>     
    </section>
  );
}
export default Contact;