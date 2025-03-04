import { Download } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { SiLeetcode } from 'react-icons/si';
import { CiLinkedin } from 'react-icons/ci';
import './Portfolio.css';

interface HeroSectionProps {
  isDarkTheme: boolean;
}

const links = [
  {
    href: 'https://github.com/Psudopodiya',
    icon: <FiGithub size={28} />,
    label: 'Github',
    bgColor: 'bg-gray-300',
  },
  {
    href: 'https://www.linkedin.com/in/chinmay-raiker/',
    icon: <CiLinkedin size={28} />,
    label: 'LinkedIn',
    bgColor: 'bg-blue-500',
  },
  {
    href: 'https://leetcode.com',
    icon: <SiLeetcode size={28} />,
    label: 'LeetCode',
    bgColor: 'bg-yellow-500',
  },
  {
    href: 'mailto:XXXXXXXXXXXXXXXXXXXXXXXX',
    icon: <MdOutlineEmail size={28} />,
    label: 'Email',
    bgColor: 'bg-red-500',
  },
];

const HeroSection = ({ isDarkTheme }: HeroSectionProps) => (
  <section
    id="hero"
    className="container mx-auto px-4 flex flex-col items-center gap-8 text-center py-20 mb-10"
  >
    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
      Hi, I'm Chinmay Raiker
    </h1>
    <p
      className={`text-lg sm:text-xl ${
        isDarkTheme ? 'text-gray-400' : 'text-gray-600'
      } max-w-2xl mx-auto`}
    >
      A Software Engineer, trying to transform elegant and productive ideas into
      Digital Solutions
    </p>

    <div className="inline-flex flex-wrap items-center gap-5 justify-center relative">
      {links.map((link, index) => (
        <div
          className={`border hover:border-transparent px-3 py-1 rounded-2xl relative group transition-all hover:-translate-y-1 ease-in-out duration-300 ${
            isDarkTheme ? 'text-white border-white ' : 'text-black border-black'
          }`}
          onClick={() => window.open(link.href, '_blank')}
          key={index}
          style={{ cursor: 'pointer' }}
        >
          <span className="relative z-10 flex items-center gap-2">
            {link.icon} {link.label}
          </span>
          <span
            className={`absolute inset-0 ${link.bgColor} transition-all duration-300 ease-in-out scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 rounded-2xl`}
          ></span>
        </div>
      ))}
    </div>
    <button
      onClick={() => window.open('/resume.pdf', '_blank')}
      className={`rounded glow-box inline-flex items-center gap-2 bg-transparent hover:shadow-md transition duration-300 ease-in-out py-2 px-4 ${
        isDarkTheme
          ? 'text-white hover:shadow-gray-300'
          : 'text-black hover:shadow-gray-700'
      }`}
    >
      <Download className="w-4 h-4" />
      Download Resume
    </button>
  </section>
);

export default HeroSection;
