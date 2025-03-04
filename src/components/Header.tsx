import SliderToggle from './SliderTogggle';

interface HeaderProps {
  isDarkTheme: boolean;
  toggleTheme: (theme: 'light' | 'dark') => void;
}

const Header = ({ isDarkTheme, toggleTheme }: HeaderProps) => (
  <header
    className={`border-b ${
      isDarkTheme
        ? 'border-white/10 bg-black/80 backdrop-blur-sm' // Dark theme: semi-transparent black with blur
        : 'border-black/50 bg-white/80 backdrop-blur-sm' // Light theme: semi-transparent white with blur
    } px-4 py-2 mb-10 flex justify-between items-center `}
  >
    <span className="text-xl font-bold">chinmayraiker</span>
    <SliderToggle
      selected={!isDarkTheme}
      setSelected={(theme) => toggleTheme(theme)}
    />
  </header>
);

export default Header;
