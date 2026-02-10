import { Theme } from '@/types/types';
import { Download } from 'lucide-react';
import { CiLinkedin } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { SiLeetcode } from 'react-icons/si';
import { motion } from 'framer-motion';
import { TypewriterText } from '@/components/animations';

interface HeroSectionProps {
  theme: Theme;
}

const links = [
  {
    href: 'https://github.com/Psudopodiya',
    icon: <FiGithub className="sm:text-lg md:text-2xl" />,
    label: 'Github',
    bgColor: 'bg-gray-300',
  },
  {
    href: 'https://www.linkedin.com/in/chinmay-raiker/',
    icon: <CiLinkedin className="sm:text-lg md:text-2xl" />,
    label: 'LinkedIn',
    bgColor: 'bg-blue-500',
  },
  {
    href: 'https://leetcode.com',
    icon: <SiLeetcode className="sm:text-lg md:text-2xl" />,
    label: 'LeetCode',
    bgColor: 'bg-yellow-500',
  },
  {
    href: 'mailto:raiker.chinmay@gmail.com',
    icon: <MdOutlineEmail className="sm:text-lg md:text-2xl" />,
    label: 'Email',
    bgColor: 'bg-red-500',
  },
];

const roles = [
  'Software Engineer',
  'Full-Stack Developer',
  'Problem Solver',
  'Tech Enthusiast',
];

function HeroSection({ theme }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="container mx-auto px-4 flex flex-col items-center gap-8 text-center py-20"
    >
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl sm:text-5xl md:text-7xl font-bold mb-2"
      >
        Hi, I'm{' '}
        <span className={`${theme.text_secondary}`}>Chinmay Raiker</span>
      </motion.h1>

      {/* Typewriter Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-xl sm:text-2xl md:text-3xl font-medium h-10"
      >
        <TypewriterText 
          texts={roles} 
          className={theme.text_secondary}
          typingSpeed={80}
          deletingSpeed={40}
        />
      </motion.div>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg sm:text-xl max-w-2xl mx-auto"
      >
        A Software Engineer, trying to transform elegant and productive ideas
        into Digital Solutions
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="inline-flex flex-wrap items-center gap-5 justify-center relative"
      >
        {links.map((link, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -4 }}
            className="border hover:border-transparent px-3 py-1 rounded-2xl relative group transition-all ease-in-out duration-300"
            onClick={() => window.open(link.href, '_blank')}
            style={{ cursor: 'pointer' }}
          >
            <span className="relative z-10 flex items-center gap-2">
              {link.icon} {link.label}
            </span>
            <span
              className={`absolute inset-0 ${link.bgColor} transition-all duration-300 ease-in-out scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 rounded-2xl`}
            ></span>
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.open('/resume.pdf', '_blank')}
        className={`rounded glow-box inline-flex items-center gap-2 transition duration-300 ease-in-out py-2 px-4 shadow ${theme.hover_background_base}`}
      >
        <Download className="w-4 h-4" />
        Download Resume
      </motion.button>
    </section>
  );
}

export { HeroSection };
