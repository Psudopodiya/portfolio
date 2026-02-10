import { Theme } from '@/types/types';
import { FiGithub } from 'react-icons/fi';
import { CiLinkedin } from 'react-icons/ci';
import { MdOutlineEmail } from 'react-icons/md';
import { SiLeetcode } from 'react-icons/si';
import { Link } from 'react-scroll';
import { Heart } from 'lucide-react';

interface FooterProps {
  theme: Theme;
}

const socialLinks = [
  { href: 'https://github.com/Psudopodiya', icon: FiGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/chinmay-raiker/', icon: CiLinkedin, label: 'LinkedIn' },
  { href: 'https://leetcode.com', icon: SiLeetcode, label: 'LeetCode' },
  { href: 'mailto:raiker.chinmay@gmail.com', icon: MdOutlineEmail, label: 'Email' },
];

const quickLinks = [
  { id: 'hero', name: 'Home' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' },
];

function Footer({ theme }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 px-4 mt-20 border-t ${theme.border_base_color}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className={`text-2xl font-bold ${theme.text_secondary}`}>
              Chinmay Raiker
            </h3>
            <p className="text-sm opacity-80">
              Software Engineer passionate about building elegant digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-wrap gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.id}
                  smooth={true}
                  duration={500}
                  className={`text-sm cursor-pointer opacity-80 hover:opacity-100 transition-opacity ${theme.text_base}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-2 rounded-full border transition-all duration-300 hover:-translate-y-1 ${theme.border_base_color} ${theme.hover_shadow}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`pt-8 border-t ${theme.border_base_color} text-center`}>
          <p className="text-sm opacity-70 flex items-center justify-center gap-1">
            © {currentYear} Chinmay Raiker. Made with{' '}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
