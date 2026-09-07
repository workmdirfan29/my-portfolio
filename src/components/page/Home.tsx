import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Services from "../sections/Services";
import TechStack from "../sections/TechStack";
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Services />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
