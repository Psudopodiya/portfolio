import { Scene } from '@/components/Background/Scene';
import {
  ContactSection,
  Header,
  HeroSection,
  NavigationPopover,
  ProjectsSection,
  SkillsSection,
  Footer,
} from '@/components/Portfolio';
import { CustomCursor } from '@/components/animations';
import { LoadingFallback } from '@/components/Loading';
import { useEffect, useState, Suspense } from 'react';

import { THEME_CLASSES } from '@/constants/styles';
import { Theme } from '@/types/types';

export default function Index() {
  const [theme, setTheme] = useState<Theme>(THEME_CLASSES.dark);

  useEffect(() => {
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
    <Suspense fallback={<LoadingFallback />}>
      <CustomCursor />
      
      <div
        id="portfolio_base"
        className={`font-nanum relative min-h-screen bg-transparent py-4 ${theme.text_base} cursor-none md:cursor-none`}
      >
        <div className="fixed inset-0 -z-10">
          <Scene theme={theme} />
        </div>

        <div className="relative z-10 px-5 bg-transparent">
          <Header theme={theme} toggleTheme={toggleTheme} />

          <HeroSection theme={theme} />

          <SkillsSection theme={theme} />

          <ProjectsSection theme={theme} />

          <ContactSection theme={theme} />

          <Footer theme={theme} />
        </div>
        <NavigationPopover theme={theme} />
      </div>
    </Suspense>
  );
}
