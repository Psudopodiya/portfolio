// import Scene from '@/components/Background';
import { Header } from '@/components/Header';
import { NavigationPopover } from '@/components/NavPopover';
import { useEffect, useState } from 'react';
import { ContactSection } from './ContactSection';
import { HeroSection } from './HeroSection';
import { ProjectsSection } from './ProjectsSection';
import { SkillsSection } from './SkillsSection';

import { TEXT_COLORS } from '@/constants/styles';

import './Portfolio.css';

export default function Portfolio() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    // Set the initial theme on page load
    if (isDarkTheme) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  const toggleTheme = (theme: 'light' | 'dark') => {
    setIsDarkTheme(theme === 'dark');
  };

  return (
    <div
      className={`relative min-h-screen bg-transparent ${
        isDarkTheme ? TEXT_COLORS.light : TEXT_COLORS.dark
      }`}
    >
      {/* <div className="absolute inset-0 -z-10">
        <Scene isDarkTheme={isDarkTheme} />
      </div> */}

      {/* Contents */}
      <div className="elative z-10 px-5 bg-transparent ">
        <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />

        <HeroSection isDarkTheme={isDarkTheme} />

        <SkillsSection isDarkTheme={isDarkTheme} />

        <ProjectsSection isDarkTheme={isDarkTheme} />

        <ContactSection isDarkTheme={isDarkTheme} />
      </div>
      <NavigationPopover isDarkTheme={isDarkTheme} />
    </div>
  );
}
