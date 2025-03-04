import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu } from 'lucide-react';

const sections = [
  { id: 'hero', name: 'Home' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' },
];

interface NavigationPopoverProps {
  isDarkTheme: boolean;
}

export function NavigationPopover({ isDarkTheme }: NavigationPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <motion.div
        className="relative"
        onHoverStart={() => setIsOpen(true)}
        onHoverEnd={() => setIsOpen(false)}
      >
        <motion.button
          className={`flex items-center justify-center w-12 h-12 ${
            isDarkTheme ? ' bg-white text-black' : 'bg-black text-white'
          } rounded-full shadow-lg`}
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
              className={`absolute bottom-full left-0 mb-2 ${
                isDarkTheme ? 'bg-white text-black' : 'bg-black text-white'
              } rounded-2xl shadow-lg p-2`}
            >
              <nav className="flex flex-col space-y-1">
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    to={section.id}
                    smooth={true}
                    duration={500}
                    className={`px-4 py-2 text-sm ${
                      isDarkTheme
                        ? 'text-black hover:bg-gray-300'
                        : 'text-white hover:bg-gray-300'
                    } rounded transition-colors`}
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
