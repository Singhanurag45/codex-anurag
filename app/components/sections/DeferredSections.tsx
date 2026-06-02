"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import { useEffect, useRef, useState } from "react";

const About = dynamic(() => import("./About"), { ssr: false });
const Skills = dynamic(() => import("./Skills"), { ssr: false });
const Experience = dynamic(() => import("./Experience"), { ssr: false });
const Projects = dynamic(() => import("./Projects"), { ssr: false });
const LeetCode = dynamic(() => import("./LeetCode"), { ssr: false });
const Achievements = dynamic(() => import("./Achievements"), { ssr: false });
const Contact = dynamic(() => import("./Contact"), { ssr: false });

type LazySectionConfig = {
  id: string;
  minHeight: string;
  Component: ComponentType;
};

const sections: LazySectionConfig[] = [
  { id: "about", minHeight: "760px", Component: About },
  { id: "skills", minHeight: "980px", Component: Skills },
  { id: "experience", minHeight: "760px", Component: Experience },
  { id: "projects", minHeight: "1180px", Component: Projects },
  { id: "leetcode", minHeight: "920px", Component: LeetCode },
  { id: "achievements", minHeight: "780px", Component: Achievements },
  { id: "contact", minHeight: "760px", Component: Contact },
];

function LazySection({ id, minHeight, Component }: LazySectionConfig) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) return;

    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "120px 0px",
        threshold: 0.01,
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isLoaded]);

  if (isLoaded) {
    return <Component />;
  }

  return (
    <div
      ref={ref}
      id={id}
      aria-hidden="true"
      className="scroll-mt-24"
      style={{ minHeight }}
    />
  );
}

export default function DeferredSections() {
  return (
    <>
      {sections.map((section) => (
        <LazySection key={section.id} {...section} />
      ))}
    </>
  );
}
