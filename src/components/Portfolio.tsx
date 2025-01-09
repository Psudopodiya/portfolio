import { useState, useEffect } from "react";
import { NavigationPopover } from "@/components/NavPopover";
import HeroSection from "./HeroSection";
import Header from "@/components/Header";
import SkillsSection from "./SkillsSection";
import ProjectsSecton from "./ProjectsSection";
import ContactSection from "./ContactSection";
import Background3d from "./Background3d";

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
      <Background3d isDarkTheme={isDarkTheme} />

      {/* Content */}
      <div
        className={`relative z-10 ${
          isDarkTheme
            ? "bg-gradient-to-b from-black via-orange-900/40 to-black"
            : "bg-gradient-to-b from-white via-orange-200/90 to-white"
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
