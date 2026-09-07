const socialLinks = {
  github: "https://github.com/workmdirfan29",
  linkedin: "https://www.linkedin.com/in/mdirfan2470",
  email: "work.mdirfan@gmail.com",
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary px-[clamp(1.25rem,5vw,5rem)] pb-8 pt-20">
      <div className="mx-auto max-w-[1400px]">
        {/* Main Footer */}
        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
            {/* Brand */}
            <div>
              <p className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-none tracking-[-0.06em] text-primary">
                MD <span className="text-secondary">IRFAN</span>
              </p>

              <p className="mt-4 max-w-xs text-sm leading-6 text-text-muted">
                Frontend developer focused on building clean, responsive and
                interactive web experiences.
              </p>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-10 sm:grid-cols-3">
              {/* Navigation */}
              <div>
                <p className="mb-4 text-[9px] uppercase tracking-[0.25em] text-text-muted/40">
                  Navigate
                </p>

                <nav className="flex flex-col gap-2.5 text-sm text-text-muted">
                  <a
                    href="#about"
                    className="transition-colors hover:text-secondary"
                  >
                    About
                  </a>

                  <a
                    href="#techstack"
                    className="transition-colors hover:text-secondary"
                  >
                    Skills
                  </a>

                  <a
                    href="#projects"
                    className="transition-colors hover:text-secondary"
                  >
                    Projects
                  </a>

                  <a
                    href="#contact"
                    className="transition-colors hover:text-secondary"
                  >
                    Contact
                  </a>
                </nav>
              </div>

              {/* Social */}
              <div>
                <p className="mb-4 text-[9px] uppercase tracking-[0.25em] text-text-muted/40">
                  Social
                </p>

                <div className="flex flex-col gap-2.5 text-sm text-text-muted">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-secondary"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-secondary"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>

              {/* Contact */}
              <div>
                <p className="mb-4 text-[9px] uppercase tracking-[0.25em] text-text-muted/40">
                  Contact
                </p>

                <a
                  href="mailto:work.mdirfan@gmail.com"
                  className="text-sm text-text-muted transition-colors hover:text-secondary"
                >
                  Email ↗
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted/40">
              © {currentYear} MD Irfan
            </p>

            <div className="flex items-center gap-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted/40">
                Designed & Built with React
              </span>

              <a
                href="#home"
                className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-text-muted transition-colors hover:text-secondary"
              >
                Back to top
                <span className="transition-transform duration-300 group-hover:-translate-y-1">
                  ↑
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
