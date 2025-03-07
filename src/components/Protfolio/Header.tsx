import { Theme } from '@/types/types';
import { SliderToggle } from './SliderTogggle';

interface HeaderProps {
  theme: Theme;
  toggleTheme: (theme: 'light' | 'dark') => void;
}

function Header({ theme, toggleTheme }: HeaderProps) {
  return (
    <header className="border-b px-4 py-2 mb-10 flex justify-between items-center">
      <span className="text-xl font-bold">chinmayraiker</span>
      <SliderToggle theme={theme} setSelected={(theme) => toggleTheme(theme)} />
    </header>
  );
}

export { Header };
