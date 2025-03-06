import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';
import { FaRegStar } from 'react-icons/fa';

// const TOGGLE_OPTIONS = [
//   {
//     id: 'light',
//     icon: FiSun,
//     label: 'Light',
//     selectedColor: 'text-yellow-800',
//     unselectedColor: 'text-yellow-100',
//   },
//   {
//     id: 'dark',
//     icon: FiMoon,
//     label: 'Dark',
//     selectedColor: 'text-blue-600',
//     unselectedColor: 'text-blue-500',
//   },
// ];

// const TOGGLE_CLASSES =
//   'text-xs border rounded-2xl font-medium flex items-center gap-2 px-4 py-2 transition-colors relative z-10';

interface SliderToggleProps {
  selected: boolean;
  setSelected: (theme: 'light' | 'dark') => void;
}

const SliderToggle = ({ selected, setSelected }: SliderToggleProps) => {
  const isDarkMode = !selected;
  return (
    <div className="flex items-center gap-3">
      <motion.button
        onClick={() => setSelected(isDarkMode ? 'light' : 'dark')}
        className={`relative w-16 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          isDarkMode
            ? 'bg-slate-800 focus:ring-slate-600'
            : 'bg-blue-400 focus:ring-blue-500'
        }`}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="relative flex items-center justify-center w-6 h-6 rounded-full"
          initial={false}
          animate={{
            x: isDarkMode ? '100%' : '0%',
            backgroundColor: isDarkMode ? '#1e293b' : '#ffffff',
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
            bounce: 0.2,
          }}
        >
          {isDarkMode ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              {/* Moon shape */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-white"
              >
                <FiMoon size={26} />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-yellow-500"
            >
              <FiSun size={16} />
            </motion.div>
          )}
        </motion.div>

        {/* Additional stars in the background for dark mode */}
        {isDarkMode && (
          <>
            <motion.div
              className="absolute bottom-3.5 left-1 text-white"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.7 }}
              transition={{ delay: 0.2 }}
            >
              <FaRegStar size={8} />
            </motion.div>
            <motion.div
              className="absolute top-1.5 left-3.5 text-white"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{ delay: 0.3 }}
            >
              <FaRegStar size={8} />
            </motion.div>
            <motion.div
              className="absolute bottom-1.5 left-2.5 text-white"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{ delay: 0.3 }}
            >
              <FaRegStar size={10} />
            </motion.div>
          </>
        )}
      </motion.button>
    </div>
  );
};

export default SliderToggle;
