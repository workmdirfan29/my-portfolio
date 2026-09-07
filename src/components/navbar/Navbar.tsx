import { useState } from "react";
import ResumeModal from "../sections/ResumeModal";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#techstack" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleResumeClick = () => {
    setIsOpen(false);
    setIsResumeOpen(true);
  };

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full px-4 pt-5 sm:px-6">
        <nav
          className="
            mx-auto
            w-full
            max-w-fit
            rounded-full
            border-2
            border-white/20
            bg-black/60
            px-4
            py-3
            backdrop-blur-xl
          "
        >
          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            <div className="flex items-center gap-7">
              {navLinks.map((link) =>
                link.name === "Resume" ? (
                  <button
                    key={link.name}
                    type="button"
                    onClick={handleResumeClick}
                    className="
                      relative
                      text-[11px]
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      text-text-muted
                      transition-colors
                      duration-300
                      hover:text-primary
                      after:absolute
                      after:-bottom-1
                      after:left-0
                      after:h-px
                      after:w-0
                      after:bg-secondary
                      after:transition-all
                      after:duration-300
                      hover:after:w-full
                    "
                  >
                    {link.name}
                  </button>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="
                      relative
                      text-[11px]
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      text-text-muted
                      transition-colors
                      duration-300
                      hover:text-primary
                      after:absolute
                      after:-bottom-1
                      after:left-0
                      after:h-px
                      after:w-0
                      after:bg-secondary
                      after:transition-all
                      after:duration-300
                      hover:after:w-full
                    "
                  >
                    {link.name}
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Mobile */}
          <div className="flex items-center justify-between gap-8 md:hidden">
            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex h-7 w-7 flex-col items-center justify-center gap-1.5"
            >
              <span
                className={`h-px w-5 bg-primary transition-all duration-300 ${
                  isOpen ? "translate-y-0.75 rotate-45" : ""
                }`}
              />

              <span
                className={`h-px w-5 bg-primary transition-all duration-300 ${
                  isOpen ? "-translate-y-0.75  -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`
            mx-auto
            mt-2
            w-full
            max-w-sm
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-black/85
            backdrop-blur-xl
            transition-all
            duration-300
            md:hidden
            ${
              isOpen
                ? "max-h-96 opacity-100"
                : "pointer-events-none max-h-0 opacity-0"
            }
          `}
        >
          <div className="flex flex-col p-3">
            {navLinks.map((link) =>
              link.name === "Resume" ? (
                <button
                  key={link.name}
                  type="button"
                  onClick={handleResumeClick}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    px-4
                    py-4
                    text-left
                    text-sm
                    uppercase
                    tracking-[0.12em]
                    text-text-muted
                    transition-all
                    duration-300
                    hover:bg-white/5
                    hover:text-primary
                  "
                >
                  <span>{link.name}</span>
                </button>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    px-4
                    py-4
                    text-sm
                    uppercase
                    tracking-[0.12em]
                    text-text-muted
                    transition-all
                    duration-300
                    hover:bg-white/5
                    hover:text-primary
                  "
                >
                  <span>{link.name}</span>
                </a>
              ),
            )}
          </div>
        </div>
      </header>

      {/* Resume Component */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
};

export default Navbar;
