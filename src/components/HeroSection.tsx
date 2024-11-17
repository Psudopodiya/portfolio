import { GithubIcon, Mail } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";

interface HeroSectionProps {
  isDarkTheme: boolean;
}

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
        isDarkTheme ? "text-gray-400" : "text-gray-600"
      } max-w-2xl mx-auto`}
    >
      A Software Engineer, trying to transform elegant and productive ideas into
      Digital Solutions
    </p>

    <div className="inline-flex flex-wrap items-center gap-5 justify-center">
      <a
        href="https://github.com/Psudopodiya"
        target="_blank"
        className={`hover:text-orange-500 ${
          isDarkTheme ? "text-white" : "text-black"
        }`}
      >
        <GithubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/chinmay-raiker/"
        target="_blank"
        className="hover:text-orange-500 transition-colors"
      >
        <CiLinkedin size={30} />
      </a>
      <a
        href="https://leetcode.com/u/Psudopodiya/"
        target="_blank"
        className="hover:text-orange-500 transition-colors"
      >
        <SiLeetcode size={30} />
      </a>
      <a
        href="mailto:raiker.chinmay@gmail.com"
        target="_blank"
        className="hover:text-orange-500 transition-colors"
      >
        <Mail />
      </a>
    </div>
  </section>
);

export default HeroSection;
