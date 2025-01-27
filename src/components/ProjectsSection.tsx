"use client";

import { useState } from "react";
import { projects } from "@/utils/data";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, GithubIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectsSectionProps {
  isDarkTheme: boolean;
}

function ProjectsSection({ isDarkTheme }: ProjectsSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="container mx-auto px-4 flex flex-col items-center gap-8 text-center py-20 my-20"
    >
      <div className="text-center">
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
            } border shadow-lg transition-all hover:shadow-orange-500/20 hover:scale-105 duration-300 ${
              isDarkTheme ? "text-white" : "text-black"
            } cursor-pointer w-full max-w-sm`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <CardContent className="p-6 flex flex-col items-center gap-5 justify-around h-full">
              <h3 className="text-2xl md:text-4xl font-semibold mb-2">
                {project.name}
              </h3>
              <AnimatePresence>
                <motion.div
                  key={`project-info-${index}`}
                  initial={{ height: 100, opacity: 0.6 }}
                  animate={{
                    height: hoveredIndex === index ? "auto" : 100,
                    opacity: hoveredIndex === index ? 1 : 0.6,
                  }}
                  exit={{ height: 100, opacity: 0.6 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden relative"
                >
                  <p>{project.info}</p>
                </motion.div>
              </AnimatePresence>
              <div className="flex flex-wrap justify-center gap-3">
                {project.tech.map((t, techIndex) => (
                  <div
                    key={techIndex}
                    className={`rounded-xl border ${
                      isDarkTheme ? "border-gray-600" : "border-gray-400"
                    } px-2 py-1`}
                  >
                    {t}
                  </div>
                ))}
              </div>

              <div
                className={`${
                  isDarkTheme ? "text-gray-400" : "text-gray-600"
                } inline-flex flex-wrap items-center gap-5 justify-center mt-4`}
              >
                <a
                  href={project.repository_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-orange-500 ${
                    isDarkTheme ? "text-white" : "text-black"
                  } transition-colors`}
                >
                  <GithubIcon size={24} />
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-orange-500 ${
                    isDarkTheme ? "text-white" : "text-black"
                  } transition-colors`}
                >
                  <ExternalLink size={24} />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
