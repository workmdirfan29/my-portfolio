export function meta() {
  return [
    { title: "MD IRFAN | ABOUT" },
    {
      name: "description",
      content: "About MD Irfan - Frontend Developer",
    },
  ];
}
import firstImg from "../../assets/AboutMe.png";

const aboutPoints = [
  {
    number: "01",
    title: "Frontend Developer",
    description:
      "Building modern, scalable web experiences with clean and thoughtful code.",
  },
  {
    number: "02",
    title: "Clean & Responsive",
    description:
      "Focused on intuitive, responsive and accessible interfaces across every device.",
  },
  {
    number: "03",
    title: "Modern Technologies",
    description:
      "Working with modern frontend tools to create scalable and high-quality solutions.",
  },
  {
    number: "04",
    title: "Quality Driven",
    description:
      "Driven by performance, usability and meaningful digital experiences that deliver value.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-bg-secondary px-[clamp(1.25rem,5vw,5rem)] py-[clamp(3rem,5vw,5rem)]"
    >
      <div className="mx-auto max-w-7xl relative">
        {/* Header */}
        <div className="mb-[clamp(1.5rem,3vw,3rem)] flex items-center gap-4">
          <span className="h-px w-12 bg-secondary" />

          <p className="text-xs font-medium uppercase tracking-[0.35em] text-text-muted">
            About Me
          </p>
        </div>
        <img
          className="
          absolute left-1/2 top-1/2 z-40
          translate-x-[-50%] translate-[-50%] opacity-25 rounded-2xl
          w-full
          object-contain
          pointer-events-none
  "
          src={firstImg}
          alt="mdirfan"
        />

        {/* Intro */}
        <div className="mb-[clamp(2rem,4vw,4rem)] max-w-5xl">
          <p className="text-[clamp(1.5rem,3.5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-primary">
            I create digital experiences that balance{" "}
            <span className="text-secondary">design, technology</span> and
            performance.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Main vertical line */}
          <div className="absolute left-1.75 top-0 h-full w-px bg-text-muted/20 md:left-4.75" />

          {aboutPoints.map((item) => (
            <div
              key={item.number}
              className="
                group relative
                grid
                grid-cols-[16px_35px_1fr]
                gap-3
                pb-[clamp(1.5rem,3vw,3rem)]
                last:pb-0
                md:grid-cols-[40px_70px_1fr]
                md:gap-6
              "
            >
              {/* Dot */}
              <div className="relative z-10 flex justify-center">
                <span
                  className="
                    mt-1
                    h-3
                    w-3
                    shrink-0
                    rounded-full
                    border
                    border-text-muted/50
                    bg-bg-secondary
                    transition-all
                    duration-500
                    group-hover:border-secondary
                    group-hover:bg-secondary
                    group-hover:shadow-[0_0_0_6px_rgba(235,89,57,0.08)]
                    md:h-4
                    md:w-4
                  "
                />
              </div>

              {/* Number */}
              <div className="pt-0.5">
                <span className="font-mono text-[10px] tracking-widest text-text-muted/50 transition-colors duration-300 group-hover:text-secondary md:text-xs">
                  {item.number}
                </span>
              </div>

              {/* Content */}
              <div className="relative">
                {/* Connector */}
                <span
                  className="
                    absolute
                    -left-6
                    top-3
                    hidden
                    h-px
                    w-4
                    bg-text-muted/20
                    transition-all
                    duration-500
                    group-hover:w-8
                    group-hover:bg-secondary
                    md:block
                  "
                />

                <h3
                  className="
                    text-[clamp(1.1rem,2.5vw,1.75rem)]
                    font-medium
                    leading-none
                    tracking-[-0.03em]
                    text-primary
                    transition-transform
                    duration-500
                    group-hover:translate-x-2
                  "
                >
                  {item.title}
                </h3>

                <p className="mt-2 max-w-xl text-xs leading-relaxed text-text-muted md:mt-3 md:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-[clamp(2rem,4vw,rem)] flex justify-end border-b border-text-muted/20 py-4">
          <p className="max-w-md text-right text-[10px] uppercase leading-relaxed tracking-[0.15em] text-text-muted md:text-xs">
            Turning ideas into purposeful digital experiences through thoughtful
            design and clean code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
