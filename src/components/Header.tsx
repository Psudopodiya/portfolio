import SliderToggle from "./SliderTogggle";

interface HeaderProps {
  isDarkTheme: boolean;
  toggleTheme: (theme: "light" | "dark") => void;
}

const Header = ({ isDarkTheme, toggleTheme }: HeaderProps) => (
  <header
    className={`border-b ${
      isDarkTheme
        ? "border-white/10 bg-black/80"
        : "border-black/10 bg-white/80"
    } p-4 mb-10 flex justify-between items-center`}
  >
    <span className="text-xl font-bold">chinmayraiker</span>
    <SliderToggle
      selected={!isDarkTheme}
      setSelected={(theme) => toggleTheme(theme)}
    />
  </header>
);

export default Header;
