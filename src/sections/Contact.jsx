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
      className="py-24 border-t border-zinc-900 flex justify-center px-4"
    >
      {/* CONTAINER أصغر ومركزي */}
      <div className="w-full max-w-4xl">

        {/* HEADER */}
        <div className="max-w-2xl mb-14 mx-auto text-center lg:text-left">
          <p className="text-zinc-500 uppercase tracking-[4px] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-black leading-[1.1] mb-5">
            Let's build something great together.
          </h2>

          <p className="text-zinc-400 text-base md:text-lg leading-8">
            Have a project in mind or looking for a Full-Stack developer?
            Feel free to contact me anytime.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start justify-center">

          {/* LEFT CARD */}
          <div className="w-full max-w-[280px] mx-auto lg:mx-0">
            <div className="border border-zinc-800 rounded-xl bg-zinc-950 p-5 space-y-8">

              {/* EMAIL */}
              <div className="text-center">
                <p className="text-zinc-500 text-xs tracking-[4px] uppercase mb-2">
                  Email
                </p>
                <a
                  href="mailto:Hamzaabusall4@gmail.com"
                  className="text-white font-semibold text-sm hover:text-zinc-300"
                >
                  Hamzaabusall4@gmail.com
                </a>
              </div>

              {/* LOCATION */}
              <div className="text-center">
                <p className="text-zinc-500 text-xs tracking-[4px] uppercase mb-2">
                  Location
                </p>
                <p className="text-white font-semibold text-sm">
                  Amman / Jordan
                </p>
              </div>

              {/* SOCIALS */}
              <div className="text-center">
                <p className="text-zinc-500 text-xs tracking-[4px] uppercase mb-3">
                  Socials
                </p>

                <div className="flex justify-center gap-3 flex-wrap">

                  <a className="w-10 h-10 flex items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:bg-white hover:text-black">
                    <FaGithub size={16} />
                  </a>

                  <a className="w-10 h-10 flex items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:bg-white hover:text-black">
                    <FaLinkedin size={16} />
                  </a>

                  <a className="w-10 h-10 flex items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:bg-white hover:text-black">
                    <FaInstagram size={16} />
                  </a>

                  <a className="w-10 h-10 flex items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:bg-white hover:text-black">
                    <FaEnvelope size={16} />
                  </a>

                  <a className="w-10 h-10 flex items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:bg-white hover:text-black">
                    <FaPhone size={16} />
                  </a>

                </div>
              </div>

            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full max-w-[420px] mx-auto lg:mx-0">
            <div className="bg-zinc-950/60 border border-zinc-800 rounded-xl p-5 md:p-7 backdrop-blur-xl">

              <form onSubmit={handleSubmit} className="space-y-4">

                <input type="hidden" name="_subject" value="New Portfolio Message" />
                <input type="hidden" name="_captcha" value="false" />

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full h-[42px] rounded-lg bg-zinc-900 border border-zinc-800 px-4 text-white"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full h-[42px] rounded-lg bg-zinc-900 border border-zinc-800 px-4 text-white"
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-4 py-3 text-white resize-none"
                />

                <button
                  type="submit"
                  className="w-full h-[38px] rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition"
                >
                  Send Message
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;