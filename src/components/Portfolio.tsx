import {
  ContactSection,
  Header,
  HeroSection,
  ProjectsSection,
  SkillsSection,
  NavigationPopover,
} from '@/components/Protfolio';
import { useEffect, useState } from 'react';
import { Scene } from '@/components/Background/Scene';

import { THEME_CLASSES } from '@/constants/styles';
import { Theme } from '@/types/types';

import './Portfolio.css';

export default function Portfolio() {
  const [theme, setTheme] = useState<Theme>(THEME_CLASSES.dark);

  useEffect(() => {
    // Set initial theme based on system preference
    const isSystemDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const initialTheme = isSystemDark
      ? THEME_CLASSES.dark
      : THEME_CLASSES.light;
    setTheme(initialTheme);
    document.body.classList.toggle('dark-theme', isSystemDark);
  }, []);

  const toggleTheme = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme === 'dark' ? THEME_CLASSES.dark : THEME_CLASSES.light);
    document.body.classList.toggle('dark-theme', newTheme === 'dark');
  };

  return (
    <div
      id="portfolio_base"
      className={`font-nanum relative min-h-screen bg-transparent py-4 ${theme.text_base}  ${theme.text_base} `}
    >
      <div className="absolute inset-0 -z-10">
        <Scene theme={theme} />
      </div>

      {/* Contents */}
      <div className="relative z-10 px-5 bg-transparent ">
        <Header theme={theme} toggleTheme={toggleTheme} />

        <HeroSection theme={theme} />

        <SkillsSection theme={theme} />

        <ProjectsSection theme={theme} />

        <ContactSection theme={theme} />
      </div>
      <NavigationPopover theme={theme} />
    </div>
  );
}
