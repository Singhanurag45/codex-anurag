// /app/layout.tsx
import "./globals.css";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/sections/Footer";
import { ReactNode } from "react";

// 3D Star background as a client component (because of three.js/react-three-fiber)
import StarsBackground from "./components/ui/StarsBackground";


export const metadata = {
  title: "Anurag singh | Full-Stack Developer Portfolio",
  description:
    "Portfolio of Your Name, including projects, achievements, skills, and more.",
  keywords:
    "portfolio, web developer, projects, achievements, contact, about, skills",
};

// /app/layout.tsx
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative z-0 bg-[#050816] text-white min-h-screen antialiased">
        <Navbar />
        {/* Main content z-index must be higher than StarsBackground */}
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
        <StarsBackground />
      </body>
    </html>
  );
}