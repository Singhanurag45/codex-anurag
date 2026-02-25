// /app/page.tsx
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import LeetCode from "./components/sections/LeetCode";
import Achievements from "./components/sections/Achievements";
import Contact from "./components/sections/Contact";
import Collaboration from "./components/sections/Collaboration";

export default function HomePage() {
  return (
    <>
      {/* Hero and Navbar remain separate for their unique background, handled in layout */}
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <LeetCode />
      <Achievements />
      <Collaboration />
      <Contact />
    </>
  );
}
