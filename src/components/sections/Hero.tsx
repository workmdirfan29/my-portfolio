import HeroBackground from "./HeroBackground";
const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-svh
        items-center
        overflow-hidden
        bg-bg-secondary
      "
    >
      <div className="absolute inset-0 bg-black/55" />
      {/* <img
        src={secondImg}
        className="absolute left-1/2 top-1/2 opacity-15 translate-x-[-50%] translate-y-[-50%] w-full"
        alt=""
      /> */}

      <HeroBackground />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/70
          via-black/35
          to-black/20
        "
      />

      <div
        className="
          relative
          z-10
          w-full
          px-[clamp(1.25rem,5vw,5rem)]
          py-32
        "
      >
        <div className="mx-auto max-w-350">
          {/* Name */}
          <p
            className="
              mb-4
              text-[clamp(2rem,5vw,4rem)]
              font-medium
              leading-none
              tracking-[-0.04em]
              text-primary
            "
          >
            MD IRFAN
          </p>

          {/* Role */}
          <div
            className="
              mb-6
              flex
              items-center
              gap-3
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-text-muted
              sm:text-xs
              sm:tracking-[0.3em]
            "
          >
            <span className="h-px w-8 bg-text-muted sm:w-12 md:w-16" />

            <span>Frontend Developer</span>
          </div>

          {/* Main Heading */}
          <h1
            className="
              max-w-5xl
              text-[clamp(3.2rem,10vw,8rem)]
              font-bold
              uppercase
              leading-[0.85]
              tracking-[-0.055em]
              text-primary
            "
          >
            <span className="block">Building</span>

            <span className="block text-secondary">digital</span>

            <span className="block">experiences</span>

            <span className="block">with code</span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-7
              max-w-xl
              text-[clamp(0.8rem,1.5vw,1rem)]
              leading-6
              tracking-[0.08em]
              text-text-muted
              sm:leading-7
            "
          >
            Turning ideas into fast, interactive & beautiful web experiences.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-md
                bg-primary
                px-6
                py-3.5
                text-sm
                font-semibold
                text-black
                transition-all
                duration-300
                hover:bg-secondary
                sm:px-8
                sm:py-4
              "
            >
              View Work
              <span className="transition-transform duration-300 hover:translate-x-1">
                ↗
              </span>
            </a>

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                justify-center
                rounded-md
                border
                border-white/20
                px-6
                py-3.5
                text-sm
                font-medium
                text-primary
                transition-all
                duration-300
                hover:border-secondary
                hover:text-secondary
                sm:px-8
                sm:py-4
              "
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
