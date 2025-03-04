import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

const TOGGLE_CLASSES =
  'text-xs border rounded-2xl font-medium flex items-center gap-2 px-4 py-2 transition-colors relative z-10';

interface SliderToggleProps {
  selected: boolean;
  setSelected: (theme: 'light' | 'dark') => void;
}

const SliderToggle = ({ selected, setSelected }: SliderToggleProps) => {
  const toggleOptions = [
    {
      id: 'light',
      icon: FiSun,
      label: 'Light',
      selectedColor: 'text-yellow-800',
      unselectedColor: 'text-yellow-100',
    },
    {
      id: 'dark',
      icon: FiMoon,
      label: 'Dark',
      selectedColor: 'text-blue-600',
      unselectedColor: 'text-blue-500',
    },
  ];

  return (
    <div className="relative flex gap-5 w-fit items-center rounded-full">
      {toggleOptions.map((option) => {
        const isSelected = selected === (option.id === 'light');
        return (
          <button
            key={option.id}
            className={`${TOGGLE_CLASSES} hover:bg-slate-400 transition-all ease-in-out duration-300`}
            onClick={() => setSelected(option.id as 'light' | 'dark')}
          >
            <motion.div
              animate={{
                scale: isSelected ? 1.2 : 1,
              }}
              whileHover="Hovering ??"
            >
              <div className="flex items-center gap-2">
                <option.icon
                  className={`relative z-10 text-lg md:text-sm ${
                    isSelected ? option.selectedColor : option.unselectedColor
                  }`}
                />
                <span
                  className={`relative z-10 ${
                    isSelected ? option.selectedColor : option.unselectedColor
                  }`}
                >
                  {option.label}
                </span>
              </div>
            </motion.div>
          </button>
        );
      })}
    </div>
  );
};

export default SliderToggle;
