import { useState, useEffect } from "react";
import { NavigationPopover } from "@/components/NavPopover";
import HeroSection from "./HeroSection";
import Header from "@/components/Header";
import SkillsSection from "./SkillsSection";
import ProjectsSecton from "./ProjectsSection";
import ContactSection from "./ContactSection";

import "./Portfolio.css";

export default function Portfolio() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    // Set the initial theme on page load
    if (isDarkTheme) {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);

  const toggleTheme = (theme: "light" | "dark") => {
    setIsDarkTheme(theme === "dark");
  };

  return (
    <div
      className={`relative min-h-screen ${
        isDarkTheme ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0 grid-background"
        style={{
          backgroundImage: `linear-gradient(${
            isDarkTheme ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"
          } 1px, transparent 1px),
                           linear-gradient(90deg, ${
                             isDarkTheme
                               ? "rgba(255, 255, 255, 0.05)"
                               : "rgba(0, 0, 0, 0.05)"
                           } 1px, transparent 1px),
                           radial-gradient(circle at 50% 50%, ${
                             isDarkTheme
                               ? "rgba(255, 85, 0, 0.3)"
                               : "rgba(255, 85, 0, 0.1)"
                           }, transparent 70%)`,
          backgroundSize: "50px 50px, 50px 50px, cover",
          backgroundBlendMode: "overlay",
        }}
      />

      {/* Content */}
      <div
        className={`relative z-10 ${
          isDarkTheme
            ? "bg-gradient-to-b from-black via-orange-900/40 to-black"
            : "bg-gradient-to-b from-white via-orange-100/40 to-white"
        }`}
      >
        <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />

        <HeroSection isDarkTheme={isDarkTheme} />

        <SkillsSection isDarkTheme={isDarkTheme} />

        <ProjectsSecton isDarkTheme={isDarkTheme} />

        <ContactSection isDarkTheme={isDarkTheme} />
      </div>
      <NavigationPopover isDarkTheme={isDarkTheme} />
    </div>
  );
}
