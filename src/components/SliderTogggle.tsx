import { THEME_CLASSES } from '@/constants/styles';
import { Theme } from '@/types/types';
import { motion } from 'framer-motion';
import { FaRegStar } from 'react-icons/fa';
import { FiMoon, FiSun } from 'react-icons/fi';

interface SliderToggleProps {
  theme: Theme;
  setSelected: (theme: 'light' | 'dark') => void;
}

const SliderToggle = ({ theme, setSelected }: SliderToggleProps) => {
  // Determine if the current theme is dark
  const isDarkMode = theme === THEME_CLASSES.dark;

  // Toggle the theme based on the current state

  return (
    <div className="flex items-center gap-3">
      <motion.button
        onClick={() => setSelected(isDarkMode ? 'light' : 'dark')}
        className={`relative w-16 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          isDarkMode
            ? 'bg-slate-800 focus:ring-slate-600'
            : 'bg-orange-400 focus:ring-orange-500'
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
