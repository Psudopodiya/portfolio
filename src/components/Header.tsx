import SliderToggle from './SliderTogggle';

interface HeaderProps {
  isDarkTheme: boolean;
  toggleTheme: (theme: 'light' | 'dark') => void;
}

function Header({ isDarkTheme, toggleTheme }: HeaderProps) {
  return (
    <header className="border-b px-4 py-2 mb-10 flex justify-between items-center">
      <span className="text-xl font-bold">chinmayraiker</span>
      <SliderToggle
        selected={!isDarkTheme}
        setSelected={(theme) => toggleTheme(theme)}
      />
    </header>
  );
}

export { Header };
