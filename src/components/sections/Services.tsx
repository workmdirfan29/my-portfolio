import WhatIDo from "../../assets/WhatIDo.png";

const services = [
  {
    number: "01",
    title: "Build Websites",
    description:
      "I build clean and responsive websites that work well on mobile, tablet and desktop.",
  },
  {
    number: "02",
    title: "Create UI",
    description:
      "I turn designs and ideas into simple, modern and user-friendly interfaces.",
  },
  {
    number: "03",
    title: "Add Animation",
    description:
      "I use smooth animations and interactions to make websites more engaging.",
  },
  {
    number: "04",
    title: "Connect APIs",
    description: "I connect websites with APIs to show and manage real data.",
  },
];

const Services = () => {
  return (
    <section
      id="what-i-do"
      className="
        relative
        overflow-hidden
        bg-bg-secondary
        px-[clamp(1.25rem,5vw,5rem)]
        py-[clamp(5rem,9vw,8rem)]
      "
    >
      <div className="relative mx-auto max-w-350">
        <div
          className="
            pointer-events-none
            absolute
            right: -12rem
            top: -3rem
            z-0
            w-[clamp(420px,50vw,800px)]
            opacity-[0.20]
            select-none
            md:-right-40
            md:-top-16
            lg:-right-32
            lg:-top-20
          "
        >
          <img
            src={WhatIDo}
            alt=""
            aria-hidden="true"
            className="
              block
              h-auto
              w-full
              object-contain
            "
          />
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-14 md:mb-16">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-secondary" />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.35em]
                  text-text-muted
                "
              >
                03 — What I Do
              </span>
            </div>

            <h2
              className="
                max-w-3xl
                text-[clamp(3rem,7vw,6rem)]
                font-semibold
                uppercase
                leading-[0.85]
                tracking-[-0.055em]
                text-primary
              "
            >
              What I<span className="text-secondary"> do.</span>
            </h2>
          </div>

          <div className="border-t border-text-muted/15">
            {services.map((service) => (
              <div
                key={service.number}
                className="
                  group
                  relative
                  grid
                  grid-cols-1
                  gap-5
                  border-b
                  border-text-muted/15
                  py-8
                  transition-colors
                  duration-300
                  hover:bg-white/[0.02]

                  sm:py-9

                  md:grid-cols-[70px_1fr_1.2fr_20px]
                  md:items-center
                  md:gap-8
                  md:py-10
                "
              >
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-secondary
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                {/* Number */}
                <span
                  className="
                    font-mono
                    text-xs
                    tracking-widest
                    text-secondary
                  "
                >
                  {service.number}
                </span>

                {/* Title */}
                <h3
                  className="
                    text-[clamp(1.5rem,3vw,2.25rem)]
                    font-medium
                    leading-none
                    tracking-[-0.03em]
                    text-primary
                    transition-all
                    duration-500
                    group-hover:translate-x-2
                    group-hover:text-secondary
                  "
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    max-w-lg
                    text-[13px]
                    leading-6
                    text-text-muted
                    sm:text-sm
                  "
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="mt-8">
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-text-muted/40
              "
            >
              Learn · Build · Improve
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
