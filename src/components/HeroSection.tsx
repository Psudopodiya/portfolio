import { GithubIcon, Mail, Download } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import "./Portfolio.css";

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
    <button
      onClick={() => window.open("/resume.pdf", "_blank")}
      className={`rounded glow-box inline-flex items-center gap-2 bg-transparent hover:shadow-md hover:shadow-orange-400 transition duration-300 ease-in-out py-2 px-4 ${
        isDarkTheme ? "text-white" : "text-black"
      }`}
    >
      <Download className="w-4 h-4" />
      Download Resume
    </button>
  </section>
);

export default HeroSection;
