import { BiLogoVisualStudio } from "react-icons/bi";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiShadcnui,
  SiFramer,
  SiGsap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
  SiCss,
} from "react-icons/si";

const techGroups = [
  {
    number: "01",
    label: "CORE",
    title: "Languages",
    description: "The foundation of everything I build.",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },

  {
    number: "02",
    label: "BUILD",
    title: "Frontend",
    description: "Modern tools for scalable interfaces.",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Shadcn/ui", icon: SiShadcnui, color: "#FFFFFF" },
    ],
  },

  {
    number: "03",
    label: "MOTION",
    title: "Animation",
    description: "Motion that makes interfaces feel alive.",
    skills: [
      { name: "Framer Motion", icon: SiFramer, color: "#FF0055" },
      { name: "GSAP", icon: SiGsap, color: "#88CE02" },
      {
        name: "ScrollTrigger",
        icon: SiGsap,
        color: "#88CE02",
      },
    ],
  },

  {
    number: "04",
    label: "CONNECT",
    title: "Backend & API",
    description: "Connecting interfaces with real data.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "REST APIs", icon: null, color: "#EB5939" },
    ],
  },

  {
    number: "05",
    label: "DATA",
    title: "Database",
    description: "Managing data with flexible solutions.",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Mongoose", icon: null, color: "#880000" },
    ],
  },

  {
    number: "06",
    label: "WORKFLOW",
    title: "Tools",
    description: "Tools behind my everyday workflow.",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      {
        name: "VS Code",
        icon: BiLogoVisualStudio,
        color: "#007ACC",
      },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
];

const TechStack = () => {
  return (
    <section
      id="techstack"
      className="relative overflow-hidden bg-bg-secondary px-[clamp(1.25rem,5vw,5rem)] py-[clamp(5rem,9vw,5rem)]"
    >
      <div className="mx-auto max-w-350">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            {/* Section Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-secondary" />

              <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-text-muted">
                02 — Tech Stack
              </span>
            </div>

            <h2 className="max-w-3xl text-[clamp(3.2rem,7vw,6.5rem)] font-semibold uppercase leading-[0.82] tracking-[-0.055em] text-primary">
              What I<span className="block text-secondary">work with.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-text-muted lg:pb-1 lg:text-right">
            A focused set of technologies I use to create fast, responsive and
            interactive digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 overflow-hidden border border-text-muted/15 bg-text-muted/15 sm:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((group) => (
            <article
              key={group.number}
              className="
                group
                relative
                min-h-[215px]
                bg-bg-secondary
                p-6
                transition-all
                duration-500
                hover:bg-white/[0.035]
                md:p-7
                lg:p-8
              "
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.3em] text-secondary">
                  {group.label}
                </span>

                <span className="font-mono text-[10px] text-text-muted/35">
                  {group.number}
                </span>
              </div>

              <div className="mt-8">
                <h3 className="text-[clamp(1.4rem,2vw,1.75rem)] font-medium tracking-[-0.025em] text-primary">
                  {group.title}
                </h3>

                <p className="mt-2 max-w-[280px] text-xs leading-relaxed text-text-muted">
                  {group.description}
                </p>
              </div>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="
                        group/skill
                        flex
                        cursor-default
                        items-center
                        gap-2.5
                        text-xs
                        text-text-muted
                        transition-all
                        duration-300
                        hover:text-primary
                      "
                    >
                      {Icon ? (
                        <Icon
                          className="
                            text-[18px]
                            opacity-90
                            transition-all
                            duration-300
                            group-hover/skill:scale-110
                          "
                          style={{
                            color: skill.color,
                          }}
                        />
                      ) : (
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{
                            backgroundColor: skill.color,
                          }}
                        />
                      )}

                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>

              {/* Hover Accent */}
              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-0
                  bg-secondary
                  transition-all
                  duration-500
                  ease-out
                  group-hover:w-full
                "
              />
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3  pt-5 sm:flex-row sm:items-center">
          <span className="text-[12px] uppercase tracking-[0.3em] text-text-muted/50">
            Frontend focused · Full-stack capable
          </span>

          <span className="text-[12px] uppercase tracking-[0.3em] text-text-muted/35">
            Always learning · Always building
          </span>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
