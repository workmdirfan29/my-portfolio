const projects = [
  {
    number: "01",
    name: "JobSprint",
    type: "Full Stack Job Portal",

    description:
      "A full-stack job portal where users can discover, search and filter job opportunities through a clean and responsive interface.",

    features: [
      "Job Search",
      "Job Filters",
      "Job Details",
      "User Authentication",
      "Job Applications",
      "Responsive UI",
    ],

    stack: {
      frontend: ["React.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "REST API"],
      database: ["MongoDB", "Mongoose"],
    },

    live: "#",
    github: "#",
  },
];

const Projects = () => {
  const project = projects[0];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-bg-secondary px-[clamp(1.25rem,5vw,5rem)] py-[clamp(5rem,8vw,6rem)]"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-secondary" />

              <span className="text-[10px] uppercase tracking-[0.35em] text-text-muted">
                04 — Selected Work
              </span>
            </div>

            <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-semibold uppercase leading-[0.82] tracking-[-0.055em] text-primary">
              Featured
              <span className="text-secondary"> Project.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-text-muted md:text-right">
            A full-stack project built to practice real-world frontend, backend
            and database development.
          </p>
        </div>

        {/* ================= PROJECT ================= */}
        <article className="grid overflow-hidden border border-text-muted/15 lg:grid-cols-[1.05fr_0.95fr]">
          {/* ================= PREVIEW ================= */}
          <div className="group relative min-h-[360px] overflow-hidden bg-[#0b0b0b] sm:min-h-[420px] lg:min-h-[520px]">
            {/* Replace with your JobSprint screenshot */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#151515] via-[#101010] to-[#080808]">
              <div className="text-center">
                <p className="text-[clamp(4rem,9vw,8rem)] font-bold leading-none tracking-[-0.08em] text-white/[0.035]">
                  JOB
                </p>

                <p className="text-[clamp(4rem,9vw,8rem)] font-bold leading-none tracking-[-0.08em] text-secondary/[0.08]">
                  SPRINT
                </p>
              </div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Number */}
            <span className="absolute left-6 top-6 font-mono text-xs tracking-[0.25em] text-white/40 md:left-8 md:top-8">
              {project.number}
            </span>

            {/* Type */}
            <span className="absolute bottom-6 left-6 rounded-full border border-white/15 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-white/60 md:bottom-8 md:left-8">
              {project.type}
            </span>

            {/* Hover */}
            <div className="absolute inset-0 bg-secondary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>

          {/* ================= CONTENT ================= */}
          <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
            <div>
              {/* Top */}
              <div className="mb-7 flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.3em] text-secondary">
                  Full Stack Project
                </span>

                <span className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(235,89,57,0.6)]" />
              </div>

              {/* Title */}
              <h3 className="text-[clamp(3rem,6vw,5rem)] font-semibold leading-[0.8] tracking-[-0.06em] text-primary">
                {project.name}
              </h3>

              {/* Description */}
              <p className="mt-6 max-w-lg text-sm leading-6 text-text-muted">
                {project.description}
              </p>

              {/* ================= FEATURES ================= */}
              <div className="mt-7">
                <p className="mb-3 text-[9px] uppercase tracking-[0.3em] text-text-muted/40">
                  Features
                </p>

                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="flex items-center gap-2 text-[10px] text-text-muted"
                    >
                      <span className="h-1 w-1 rounded-full bg-secondary" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-3">
                {/* Frontend */}
                <div>
                  <p className="mb-3 text-[9px] uppercase tracking-[0.25em] text-secondary">
                    Frontend
                  </p>

                  <div className="space-y-1.5">
                    {project.stack.frontend.map((tech) => (
                      <p key={tech} className="text-xs text-text-muted">
                        {tech}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-[9px] uppercase tracking-[0.25em] text-secondary">
                    Backend
                  </p>

                  <div className="space-y-1.5">
                    {project.stack.backend.map((tech) => (
                      <p key={tech} className="text-xs text-text-muted">
                        {tech}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Database */}
                <div>
                  <p className="mb-3 text-[9px] uppercase tracking-[0.25em] text-secondary">
                    Database
                  </p>

                  <div className="space-y-1.5">
                    {project.stack.database.map((tech) => (
                      <p key={tech} className="text-xs text-text-muted">
                        {tech}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.live}
                className="group/btn flex items-center gap-3 bg-primary px-5 py-3 text-[10px] font-medium uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-secondary"
              >
                Live Demo
                <span className="transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5">
                  ↗
                </span>
              </a>

              <a
                href={project.github}
                className="group/btn flex items-center gap-3 border border-text-muted/20 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.15em] text-primary transition-all duration-300 hover:border-secondary hover:text-secondary"
              >
                Source Code
                <span className="transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </article>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-[12px] uppercase tracking-[0.3em] text-text-muted/40">
            01 / 01
          </span>

          <span className="text-[12px] uppercase tracking-[0.3em] text-text-muted/40">
            Full Stack Development
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
