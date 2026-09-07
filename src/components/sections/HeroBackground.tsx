import coding from "../../assets/Coding.mp4";
const HeroBackground = () => {
  return (
    <>
      {" "}
      <>
        {/* Background Video */}
        <video
          className="
          absolute
          inset-0
          z-0
          h-full
          w-full
          object-cover
          pointer-events-none
        "
          src={coding}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />

        <div
          className="
          absolute
          inset-0
          z-2
          bg-gradient-to-r
          from-black/80
          via-black/45
          to-black/20
        "
        />
      </>
    </>
  );
};

export default HeroBackground;
