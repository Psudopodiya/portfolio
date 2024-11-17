import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

interface SliderToggleProps {
  selected: boolean; // Restrict `selected` to two valid theme options
  setSelected: (theme: "light" | "dark") => void; // Function to update the theme
}

const SliderToggle = ({ selected, setSelected }: SliderToggleProps) => {
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES}
          selected ? "text-white" : "text-black"
        }`}
        onClick={() => {
          setSelected("light");
        }}
      >
        <FiSun className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Light</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} text-black`}
        onClick={() => {
          setSelected("dark");
        }}
      >
        <FiMoon className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Dark</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          !selected ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className={`h-full w-1/2 rounded-full bg-gradient-to-r ${
            selected
              ? "from-gray-200 to-orange-300"
              : "from-white to-orange-300"
          }`}
        />
      </div>
    </div>
  );
};

export default SliderToggle;
