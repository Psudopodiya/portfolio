import { Download, Github, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import "./Portfolio.css";

export default function Portfolio() {
  const skills = [
    {
      title: "Frontend",
      tech: ["JavaScript", "TypeScript", "React.js", "Tailwind", "CSS"],
      data: "I love working with creative designs to bring out the best dynamic interfaces from scratch",
    },
    {
      title: "Backend",
      tech: ["Python", "Django", "Flask", "SQL", "NoSQL"],
      data: "I love working with creative designs to bring out the best dynamic interfaces from scratch",
    },
    {
      title: "DevOps",
      tech: ["AWS", "Docker", "Terraform", "Jenkins", "Git"],
      data: "I love working with creative designs to bring out the best dynamic interfaces from scratch",
    },
  ];

  const projects = [
    {
      name: "Retro Chat",
      tech: [
        "React",
        "Django",
        "Postgres",
        "Docker",
        "Tailwind",
        "JavaScript",
        "Django Channels",
      ],
      info: "This project is a real-time chat application that combines a robust Django Channels and PostgreSQL backend with a modern React, Tailwind CSS, ShadCN, TypeScript, and Vite frontend. It supports one-on-one and group chats with seamless real-time communication, user notifications, and an admin interface for managing users and chat rooms. The frontend offers a clean, responsive design with fast performance and real-time updates, making the platform ideal for efficient and engaging communication.",
      link: "https://github.com/Psudopodiya/Retro-Chat",
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    };

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to send email");

      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending email. Please try again.");
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0 grid-background"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                           radial-gradient(circle at 50% 50%, rgba(255, 85, 0, 0.3), transparent 70%)`,
          backgroundSize: "50px 50px, 50px 50px, cover",
          backgroundBlendMode: "overlay",
        }}
      />

      {/* Content */}
      <div className="relative z-10 bg-gradient-to-b from-black to-orange-900/40">
        {/* Header */}
        <header className="border-b border-white/10 bg-black/80 p-4 mb-10">
          <a href="#" className="text-xl font-bold">
            chinmayraiker
          </a>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 flex flex-col items-center gap-8 text-center py-20 mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm Chinmay Raiker
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            A Software Engineer, trying to transform elegant and productive
            ideas into Digital Solutions
          </p>

          <div className="inline-flex flex-wrap items-center gap-5 justify-center">
            <Button className="gap-2 bg-transparent hover:bg-transparent hover:text-orange-500 px-0">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Projects
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Contact
            </a>
          </div>

          <button
            onClick={() => window.open("/resume.pdf", "_blank")}
            className="rounded glow-box inline-flex items-center gap-2 bg-transparent hover:bg-orange-500 ease-in-out transition py-2 px-4"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </button>
        </section>

        {/* Skills Section */}
        <section className="mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What I Bring to the Table
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-black/50 border border-white/10 shadow-lg transition-all hover:shadow-orange-500/20 text-white"
              >
                <CardContent className="p-6 flex flex-col items-center gap-5">
                  <h3 className="text-2xl md:text-4xl font-semibold mb-2 ">
                    {skill.title}
                  </h3>
                  <div className="text-gray-400 text-center">{skill.data}</div>
                  <div className="flex flex-wrap justify-center gap-3">
                    {skill.tech.map((t, index) => (
                      <div
                        key={index}
                        className="rounded-xl border border-gray-600 px-2 py-1"
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
        <section className="container mx-auto px-4 flex flex-col items-center gap-8 text-center py-20 mb-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Projects</h2>
          </div>

          <div className="flex flex-wrap gap-10 justify-center">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-black/50 border border-white/10 shadow-lg transition-all hover:shadow-orange-500/20 text-white cursor-pointer w-full max-w-sm"
              >
                <CardContent
                  className="p-6 flex flex-col items-center gap-5"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <h3 className="text-xl md:text-3xl font-semibold mb-2">
                    {project.name}
                  </h3>
                  <div className="text-gray-400">{project.info}</div>
                  <div className="flex flex-wrap justify-center gap-3">
                    {project.tech.map((t, index) => (
                      <div
                        key={index}
                        className="rounded-xl border border-gray-600 px-2 py-1"
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
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Contact Me
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
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
                  placeholder="Your Name"
                  className="bg-black/50 border border-white/10 rounded-xl placeholder-gray-400 px-4 py-3"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-black/50 border border-white/10 rounded-xl placeholder-gray-400 px-4 py-3"
                />
                <Textarea
                  placeholder="Your Message"
                  className="bg-black/50 border border-white/10 rounded-xl placeholder-gray-400 px-4 py-3 min-h-[150px]"
                />
                <Button
                  type="submit"
                  className="w-fit rounded-xl gap-2 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 transition-all py-3"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>

              {/* Divider */}
              <div className="w-px bg-white/10"></div>

              {/* Contact Details Section */}
              <div className="flex flex-col gap-4 text-white my-auto">
                <h1 className="text-xl font-semibold">Contact Details</h1>
                <div className="flex items-center gap-3">
                  <Phone className="text-orange-500" />
                  <p className="text-gray-400">+91-8817420747</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-orange-500" />
                  <p className="text-gray-400">raiker.chinmay@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
