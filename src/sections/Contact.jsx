import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope ,
  FaPhone
  
} from "react-icons/fa";

function Contact() {

  const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  try {
    const res = await fetch(
      "https://formsubmit.co/ajax/hamzaabusall4@gmail.com",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      }
    );

    const result = await res.json();

    if (res.ok) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      console.log("ERROR:", result);
      alert("Message failed to send");
    }
  } catch (err) {
    console.log("NETWORK ERROR:", err);
    alert("Something went wrong");
  }
};

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
            Have a project in mind or looking for a Full-Stack developer?
            Feel free to contact me anytime.
          </p>

        </div>

        {/* MAIN GRID */}

        <div className="grid lg:grid-cols-[330px_1fr] gap-10 items-start">

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

    <div className="flex flex-col items-center gap-2 w-full">

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
          href="https://www.instagram.com/hamza.abusall3"
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
          <FaInstagram
            size={22}
            className="group-hover:scale-110 transition duration-300"
          />
        </a>

        <a
          href="tel:+962777824049"
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

<a
          href="tel:+962777824049"
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
        

      </div>

    </div>

  </div>

</div>

          </div>
          

          {/* RIGHT FORM */}

         <div className="bg-zinc-950/60 border border-zinc-800 rounded-xl p-8 md:p-10 backdrop-blur-xl">

  <form
    onSubmit={handleSubmit}
    className="space-y-6"
  >

    {/* HIDDEN INPUTS */}

    <input
      type="hidden"
      name="_subject"
      value="New Portfolio Message"
    />

    <input
      type="hidden"
      name="_captcha"
      value="false"
    />

    {/* NAME */}

    <div>

      <label className="block text-zinc-400 text-sm mb-3">
          Full Name
      </label>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="
          w-full
          h-[48px]
          rounded-xl
          bg-zinc-900
          border border-zinc-800
          px-5
          text-white
          placeholder:text-zinc-500
          outline-none
          focus:border-zinc-600
          transition duration-300
        "
      />

    </div>

    {/* EMAIL */}

    <div>

      <label className="block text-zinc-400 text-sm mb-3">
        Email Address
      </label>

      <input
        type="email"
        name="email"
        placeholder="abc@example.com"
        required
        className="
          w-full
          h-[48px]
          rounded-xl
          bg-zinc-900
          border border-zinc-800
          px-5
          text-white
          placeholder:text-zinc-500
          outline-none
          focus:border-zinc-600
          transition duration-300
        "
      />

    </div>

    {/* MESSAGE */}

    <div>

      <label className="block text-zinc-400 text-sm mb-3">
        Message
      </label>

      <textarea
        rows="6"
        name="message"
        placeholder="Tell me about your project..."
        required
        className="
          w-full
          rounded-xl
          bg-zinc-900
          border border-zinc-800
          px-5
          py-4
          text-white
          placeholder:text-zinc-500
          outline-none
          focus:border-zinc-600
          transition duration-300
          resize-none
        "
      ></textarea>

    </div>

    {/* BUTTON */}

    <button
      type="submit"
      className="
        w-full
        h-[38px]
        rounded-xl
        bg-white
        text-black
        font-medium
        hover:bg-zinc-200
        transition duration-300
      "
    >
      Send Message
    </button>

  </form>

</div>

        </div>

      </div>

    </section>
  );
}

export default Contact;