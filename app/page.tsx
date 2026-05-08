// /app/page.tsx
import Hero from "./components/sections/Hero";
import DeferredSections from "./components/sections/DeferredSections";

export default function HomePage() {
  return (
    <>
      {/* Hero and Navbar remain separate for their unique background, handled in layout */}
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <DeferredSections />
    </>
  );
}
