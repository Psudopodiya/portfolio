import { BG_COLORS, TEXT_COLORS } from '@/constants/styles';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-scroll';

const sections = [
  { id: 'hero', name: 'Home' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' },
];

interface NavigationPopoverProps {
  isDarkTheme: boolean;
}

function NavigationPopover({ isDarkTheme }: NavigationPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <motion.div
        className="relative"
        onHoverStart={() => setIsOpen(true)}
        onHoverEnd={() => setIsOpen(false)}
      >
        <motion.button
          className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg ${
            isDarkTheme
              ? `${TEXT_COLORS.dark} ${BG_COLORS.light}`
              : `${TEXT_COLORS.light} ${BG_COLORS.dark}`
          } `}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu size={24} />
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className={`absolute bottom-full left-0 mb-2 rounded-2xl shadow-lg p-2 ${
                isDarkTheme
                  ? `${TEXT_COLORS.dark} ${BG_COLORS.light}`
                  : `${TEXT_COLORS.light} ${BG_COLORS.dark}`
              }`}
            >
              <nav className="flex flex-col space-y-1">
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    to={section.id}
                    smooth={true}
                    duration={500}
                    className={`px-4 py-2 text-sm rounded transition-colors  ${isDarkTheme ? `hover:${BG_COLORS.light_secondary}` : `hover:${BG_COLORS.dark_secondary}`}`}
                  >
                    {section.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export { NavigationPopover };
