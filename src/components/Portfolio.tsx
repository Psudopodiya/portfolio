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
        isDarkTheme
          ? "bg-[#1a1a1a] text-[#e0e0e0]"
          : "bg-[#f8f9fa] text-[#333333]"
      }`}
    >
      {/* Content */}
      <div
        className={`relative z-10 ${
          isDarkTheme
            ? "bg-gradient-to-b from-[#000000] via-[#784626] to-[#000000]"
            : "bg-gradient-to-b from-[#f8f9fa] via-[#ffcc80] to-[#fff3e6]"
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
