import { useRef, useState } from "react";
import ResumeModal from "./ResumeModal";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          alert("Email sent successfully!");

          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email!");
        },
      );
  };

  return (
    <section
      id="contact"
      className="bg-bg-secondary px-[clamp(1.25rem,5vw,5rem)] py-[clamp(5rem,9vw,8rem)]"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-text-muted">
            05 — Contact
          </p>

          <h2 className="max-w-3xl text-[clamp(3rem,7vw,6rem)] font-medium leading-[0.9] tracking-tighter text-primary">
            Let&apos;s work
            <span className="text-secondary"> together.</span>
          </h2>
        </div>

        {/* Main */}
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          {/* Left */}
          <div>
            <p className="mb-3 text-sm text-text-muted">Get in touch</p>

            <a
              href="mailto:work.mdirfan@gmail.com"
              className="text-lg text-primary transition-colors hover:text-secondary sm:text-xl"
            >
              work.mdirfan@gmail.com
            </a>

            <div className="mt-10 flex gap-6 text-sm">
              <a
                href="#"
                className="text-text-muted transition-colors hover:text-secondary"
              >
                GitHub ↗
              </a>

              <a
                href="#"
                className="text-text-muted transition-colors hover:text-secondary"
              >
                LinkedIn ↗
              </a>

              <a
                href="#"
                onClick={() => setIsResumeOpen(true)}
                className="text-text-muted transition-colors hover:text-secondary"
              >
                Resume ↗
              </a>
            </div>
          </div>

          {/* Right */}
          <form ref={form} className="space-y-7" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm text-text-muted"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                value={name}
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
                placeholder="Your name"
                className="
                  w-full
                  border-b
                  border-white/15
                  bg-transparent
                  py-3
                  text-sm
                  text-primary
                  outline-none
                  placeholder:text-text-muted/30
                  focus:border-secondary
                "
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm text-text-muted"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                value={email}
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                placeholder="your@email.com"
                className="
                  w-full
                  border-b
                  border-white/15
                  bg-transparent
                  py-3
                  text-sm
                  text-primary
                  outline-none
                  placeholder:text-text-muted/30
                  focus:border-secondary
                "
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-text-muted"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                value={message}
                required
                placeholder="Tell me about your project..."
                className="
                  w-full
                  resize-none
                  border-b
                  border-white/15
                  bg-transparent
                  py-3
                  text-sm
                  text-primary
                  outline-none
                  placeholder:text-text-muted/30
                  focus:border-secondary
                "
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="
                mt-2
                bg-primary
                px-6
                py-3
                text-sm
                text-black
                transition-colors
                hover:bg-secondary
                rounded-sm
                font-bold
                active:scale-95
              "
            >
              Send Message ↗
            </button>
          </form>
        </div>

        {/* Bottom */}
        <div className="mt-20 border-t border-white/10 pt-5">
          <p className="text-xs text-text-muted">
            Available for internships, freelance work & opportunities.
          </p>
        </div>
      </div>

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </section>
  );
};

export default Contact;
