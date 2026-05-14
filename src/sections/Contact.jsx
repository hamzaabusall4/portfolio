import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
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
      className="py-28 border-t border-zinc-900 w-full flex justify-center"
    >
      <div className="max-w-6xl w-full mx-auto px-4">

        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <p className="text-zinc-500 uppercase tracking-[4px] text-sm mb-5">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-[1.1] mb-7">
            Let's build something great together.
          </h2>

          <p className="text-zinc-400 text-lg leading-9 max-w-2xl">
            Have a project in mind or looking for a Full-Stack developer?
            Feel free to contact me anytime.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[330px_1fr] gap-10 items-start w-full px-4 sm:px-6 lg:px-0">
          {/* LEFT CARD */}
          <div className="border border-zinc-800 rounded-xl bg-zinc-950 p-8 space-y-12">

            <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/60 backdrop-blur-2xl p-8 sm:p-10 md:p-14">

              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="flex flex-col gap-7">

                {/* EMAIL */}
                <div className="flex flex-col items-center gap-3 w-full">
                  <span className="text-zinc-500 text-[18px] uppercase tracking-[6px]">
                    Email
                  </span>

                  <a
                    href="mailto:Hamzaabusall4@gmail.com"
                    className="text-lg font-bold text-white hover:text-zinc-300 transition"
                  >
                    Hamzaabusall4@gmail.com
                  </a>
                </div>

                {/* LOCATION */}
                <div className="flex flex-col items-center gap-3 w-full">
                  <span className="text-zinc-500 text-[18px] uppercase tracking-[6px]">
                    Location
                  </span>

                  <h3 className="text-lg font-bold text-white">
                    Amman / Jordan
                  </h3>
                </div>

                {/* SOCIALS */}
                <div className="flex flex-col items-center gap-3 w-full">

                  <span className="text-zinc-500 text-[18px] uppercase tracking-[6px]">
                    Socials
                  </span>

                  <div className="flex gap-4 flex-wrap justify-center">

                    <a href="https://github.com/hamzaabusall4" target="_blank"
                      className="w-14 h-14 flex items-center justify-center rounded-xl border border-zinc-800 text-zinc-400 hover:bg-white hover:text-black transition">
                      <FaGithub />
                    </a>

                    <a href="https://www.linkedin.com/in/hamza-abu-sall-aab114235" target="_blank"
                      className="w-14 h-14 flex items-center justify-center rounded-xl border border-zinc-800 text-zinc-400 hover:bg-white hover:text-black transition">
                      <FaLinkedin />
                    </a>

                    <a href="https://www.instagram.com/hamza.abusall3" target="_blank"
                      className="w-14 h-14 flex items-center justify-center rounded-xl border border-zinc-800 text-zinc-400 hover:bg-white hover:text-black transition">
                      <FaInstagram />
                    </a>

                    {/* EMAIL */}
                    <a href="mailto:Hamzaabusall4@gmail.com"
                      className="w-14 h-14 flex items-center justify-center rounded-xl border border-zinc-800 text-zinc-400 hover:bg-white hover:text-black transition">
                      <FaEnvelope />
                    </a>

                    {/* PHONE */}
                    <a href="tel:+962777824049"
                      className="w-14 h-14 flex items-center justify-center rounded-xl border border-zinc-800 text-zinc-400 hover:bg-white hover:text-black transition">
                      <FaPhone />
                    </a>

                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-zinc-950/60 border border-zinc-800 rounded-xl p-8 md:p-10 backdrop-blur-xl">

            <form onSubmit={handleSubmit} className="space-y-6">

              <input type="hidden" name="_subject" value="New Portfolio Message" />
              <input type="hidden" name="_captcha" value="false" />

              {/* NAME */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full h-[48px] rounded-xl bg-zinc-900 border border-zinc-800 px-5 text-white"
              />

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full h-[48px] rounded-xl bg-zinc-900 border border-zinc-800 px-5 text-white"
              />

              {/* MESSAGE */}
              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                required
                className="w-full rounded-xl bg-zinc-900 border border-zinc-800 px-5 py-4 text-white resize-none"
              />

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full h-[42px] rounded-xl bg-white text-black font-medium hover:bg-zinc-200 transition"
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