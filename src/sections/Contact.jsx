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
      className="py-24 border-t border-zinc-900 flex justify-center"
    >
      {/* MAIN WRAPPER */}
      <div className="w-full px-6 flex flex-col items-center">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-zinc-500 uppercase tracking-[4px] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Let’s build something great together
          </h2>

          <p className="text-zinc-400 max-w-xl mx-auto leading-7">
            Have a project in mind or looking for a Full-Stack developer?
            Feel free to contact me anytime.
          </p>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col md:flex-row gap-8 items-start justify-center">

          {/* LEFT CARD */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 md:p-8 w-[320px]">

            <div className="flex flex-col items-center text-center gap-10">

              {/* EMAIL */}
              <div>
                <p className="text-zinc-500 uppercase tracking-[5px] text-sm mb-2">
                  Email
                </p>
                <a
                  href="mailto:Hamzaabusall4@gmail.com"
                  className="text-white font-semibold hover:text-zinc-300"
                >
                  Hamzaabusall4@gmail.com
                </a>
              </div>

              {/* LOCATION */}
              <div>
                <p className="text-zinc-500 uppercase tracking-[5px] text-sm mb-2">
                  Location
                </p>
                <p className="text-white font-semibold">
                  Amman / Jordan
                </p>
              </div>

              {/* SOCIALS */}
              <div>
                <p className="text-zinc-500 uppercase tracking-[5px] text-sm mb-4">
                  Socials
                </p>

                <div className="flex gap-3 justify-center flex-wrap">

                  {[FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone].map(
                    (Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-11 h-11 flex items-center justify-center border border-zinc-800 rounded-xl text-zinc-400 hover:bg-white hover:text-black transition"
                      >
                        <Icon />
                      </a>
                    )
                  )}

                </div>
              </div>

            </div>
          </div>

          {/* RIGHT FORM (SMALL FIXED WIDTH) */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 md:p-8 w-[420px]">

            <form onSubmit={handleSubmit} className="space-y-4">

              <input type="hidden" name="_subject" value="New Portfolio Message" />
              <input type="hidden" name="_captcha" value="false" />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full h-[42px] rounded-xl bg-zinc-900 border border-zinc-800 px-4 text-white outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full h-[42px] rounded-xl bg-zinc-900 border border-zinc-800 px-4 text-white outline-none"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full rounded-xl bg-zinc-900 border border-zinc-800 px-4 py-3 text-white outline-none resize-none"
              />

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