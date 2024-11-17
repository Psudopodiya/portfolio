import { useState, useEffect } from "react";
import { SiLeetcode } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import {
  Download,
  GithubIcon,
  Mail,
  Phone,
  Send,
  Sun,
  Moon,
} from "lucide-react";
import { Button, Card, CardContent, Textarea, Input } from "@/components/ui";
import { skills, projects } from "@/utils/data.ts";
import { NavigationPopover } from "@/components/NavPopover";
import "./Portfolio.css";

export default function Portfolio() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    // Set the initial theme on page load
    if (isDarkTheme) {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Validate form data
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    // Basic validation
    if (!payload.name || !payload.email || !payload.message) {
      alert("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email as string)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      alert("Message sent successfully!");
      form.reset(); // Reset the form after successful submission
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div
      className={`relative min-h-screen ${
        isDarkTheme ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0 grid-background"
        style={{
          backgroundImage: `linear-gradient(${
            isDarkTheme ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"
          } 1px, transparent 1px),
                           linear-gradient(90deg, ${
                             isDarkTheme
                               ? "rgba(255, 255, 255, 0.05)"
                               : "rgba(0, 0, 0, 0.05)"
                           } 1px, transparent 1px),
                           radial-gradient(circle at 50% 50%, ${
                             isDarkTheme
                               ? "rgba(255, 85, 0, 0.3)"
                               : "rgba(255, 85, 0, 0.1)"
                           }, transparent 70%)`,
          backgroundSize: "50px 50px, 50px 50px, cover",
          backgroundBlendMode: "overlay",
        }}
      />

      {/* Content */}
      <div
        className={`relative z-10 ${
          isDarkTheme
            ? "bg-gradient-to-b from-black via-orange-900/40 to-black"
            : "bg-gradient-to-b from-white via-orange-100/40 to-white"
        }`}
      >
        {/* Header */}
        <header
          className={`border-b ${
            isDarkTheme
              ? "border-white/10 bg-black/80"
              : "border-black/10 bg-white/80"
          } p-4 mb-10 flex justify-between items-center`}
        >
          <a href="#" className="text-xl font-bold">
            chinmayraiker
          </a>
          <Button
            onClick={toggleTheme}
            variant="outline"
            size="icon"
            className={`rounded-full ${
              isDarkTheme ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            {isDarkTheme ? (
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
          </Button>
        </header>

        {/* Hero Section */}
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
            A Software Engineer, trying to transform elegant and productive
            ideas into Digital Solutions
          </p>

          <div className="inline-flex flex-wrap items-center gap-5 justify-center">
            <a
              href="https://github.com/Psudopodiya"
              target="_blank"
              className={`flex items-center gap-2 bg-transparent hover:bg-transparent hover:text-orange-500 px-0 ${
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
            className={`rounded glow-box inline-flex items-center gap-2 bg-transparent hover:bg-orange-500 ease-in-out transition py-2 px-4 ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            <Download className="w-4 h-4" />
            Download Resume
          </button>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What I Bring to the Table
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className={`${
                  isDarkTheme
                    ? "bg-black/50 border-white/10"
                    : "bg-white/50 border-black/10"
                } border shadow-lg transition-all hover:shadow-orange-500/20 ${
                  isDarkTheme ? "text-white" : "text-black"
                }`}
              >
                <CardContent className="p-6 flex flex-col items-center gap-5">
                  <h3 className="text-2xl md:text-4xl font-semibold mb-2 ">
                    {skill.title}
                  </h3>
                  <div
                    className={`${
                      isDarkTheme ? "text-gray-400" : "text-gray-600"
                    } text-center`}
                  >
                    {skill.data}
                  </div>
                  <div className="flex flex-wrap justify-center gap-3">
                    {skill.tech.map((t, index) => (
                      <div
                        key={index}
                        className={`rounded-xl border ${
                          isDarkTheme ? "border-gray-600" : "border-gray-400"
                        } px-2 py-1`}
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="container mx-auto px-4 flex flex-col items-center gap-8 text-center py-20 mb-10"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Projects</h2>
          </div>

          <div className="flex flex-wrap gap-10 justify-center">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`${
                  isDarkTheme
                    ? "bg-black/50 border-white/10"
                    : "bg-white/50 border-black/10"
                } border shadow-lg transition-all hover:shadow-orange-500/20 ${
                  isDarkTheme ? "text-white" : "text-black"
                } cursor-pointer w-full max-w-sm`}
              >
                <CardContent
                  className="p-6 flex flex-col items-center gap-5"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <h3 className="text-xl md:text-3xl font-semibold mb-2">
                    {project.name}
                  </h3>
                  <div
                    className={isDarkTheme ? "text-gray-400" : "text-gray-600"}
                  >
                    {project.info}
                  </div>
                  <div className="flex flex-wrap justify-center gap-3">
                    {project.tech.map((t, index) => (
                      <div
                        key={index}
                        className={`rounded-xl border ${
                          isDarkTheme ? "border-gray-600" : "border-gray-400"
                        } px-2 py-1`}
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Contact Me
              </h2>
              <p
                className={`${
                  isDarkTheme ? "text-gray-400" : "text-gray-600"
                } max-w-2xl mx-auto`}
              >
                Have a project in mind or want to discuss opportunities? I'd
                love to hear from you!
              </p>
            </div>

            <div className="flex flex-wrap gap-10 justify-center">
              {/* Form Section */}
              <form
                className="max-w-lg w-full space-y-6 flex items-center flex-col"
                onSubmit={handleSubmit}
              >
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className={`${
                    isDarkTheme
                      ? "bg-black/50 border-white/10"
                      : "bg-white/50 border-black/10"
                  } border rounded-xl ${
                    isDarkTheme
                      ? "placeholder-gray-400"
                      : "placeholder-gray-600"
                  } px-4 py-3`}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className={`${
                    isDarkTheme
                      ? "bg-black/50 border-white/10"
                      : "bg-white/50 border-black/10"
                  } border rounded-xl ${
                    isDarkTheme
                      ? "placeholder-gray-400"
                      : "placeholder-gray-600"
                  } px-4 py-3`}
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  className={`${
                    isDarkTheme
                      ? "bg-black/50 border-white/10"
                      : "bg-white/50 border-black/10"
                  } border rounded-xl ${
                    isDarkTheme
                      ? "placeholder-gray-400"
                      : "placeholder-gray-600"
                  } px-4 py-3 min-h-[150px]`}
                />
                <Button
                  type="submit"
                  className="w-fit rounded-xl gap-2 bg-gradient-to-r from-orange-700 via-orange-600 to-orange-700 hover:from-orange-500 hover:via-orange-400 hover:to-orange-500 transition-all py-3 text-white"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>

              {/* Divider */}
              <div
                className={`w-px ${
                  isDarkTheme ? "bg-white/10" : "bg-black/10"
                }`}
              ></div>

              {/* Contact Details Section */}
              <div className="flex flex-col gap-4 my-auto">
                <h1 className="text-xl font-semibold">Contact Details</h1>
                <div className="flex items-center gap-3">
                  <Phone className="text-orange-500" />
                  <p
                    className={isDarkTheme ? "text-gray-400" : "text-gray-600"}
                  >
                    +91-8817420747
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-orange-500" />
                  <p
                    className={isDarkTheme ? "text-gray-400" : "text-gray-600"}
                  >
                    raiker.chinmay@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <NavigationPopover isDarkTheme={isDarkTheme} />
    </div>
  );
}
