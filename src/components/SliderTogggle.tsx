import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

interface SliderToggleProps {
  selected: boolean;
  setSelected: (theme: "light" | "dark") => void;
}

const SliderToggle = ({ selected, setSelected }: SliderToggleProps) => {
  const toggleOptions = [
    {
      id: "light",
      icon: FiSun,
      label: "Light",
      selectedColor: "text-yellow-400",
      unselectedColor: "text-gray-500",
      gradient: "from-white to-orange-300",
      glowColor: "rgba(255, 255, 255, 0.8)",
    },
    {
      id: "dark",
      icon: FiMoon,
      label: "Dark",
      selectedColor: "text-blue-400",
      unselectedColor: "text-gray-500",
      gradient: "from-gray-600 to-orange-800",
      glowColor: "rgba(0, 0, 0, 0.8)",
    },
  ];

  return (
    <div className="relative flex w-fit items-center rounded-full">
      {toggleOptions.map((option) => {
        const isSelected = selected === (option.id === "light");
        return (
          <button
            key={option.id}
            className={`${TOGGLE_CLASSES} $`}
            onClick={() => setSelected(option.id as "light" | "dark")}
          >
            <motion.div
              animate={{
                scale: isSelected ? 1.2 : 1,
                filter: isSelected
                  ? `drop-shadow(0 0 8px ${option.glowColor})`
                  : "none",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <option.icon
                className={`relative z-10 text-lg md:text-sm ${
                  isSelected ? option.selectedColor : option.unselectedColor
                }`}
              />
            </motion.div>
            <motion.div
              animate={{
                scale: isSelected ? 0.8 : 1,
                filter: isSelected
                  ? `drop-shadow(0 0 8px ${option.glowColor})`
                  : "none",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="relative z-10">{option.label}</span>
            </motion.div>
          </button>
        );
      })}

      <div
        className={`absolute inset-0 z-0 flex ${
          selected ? "justify-start" : "justify-end"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className={`h-full w-1/2 rounded-full bg-gradient-to-r ${
            selected ? toggleOptions[0].gradient : toggleOptions[1].gradient
          }`}
        />
      </div>
    </div>
  );
};

export default SliderToggle;
