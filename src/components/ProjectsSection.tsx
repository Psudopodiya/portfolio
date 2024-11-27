import { projects } from "@/utils/data";
import { Card, CardContent } from "@/components/ui";
import { ExternalLink, GithubIcon } from "lucide-react";

interface ProjectsSectionProps {
  isDarkTheme: boolean;
}

function ProjectsSection({ isDarkTheme }: ProjectsSectionProps) {
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
          >
            <CardContent className="p-6 flex flex-col items-center gap-5">
              <h3 className="text-xl md:text-3xl font-semibold mb-2">
                {project.name}
              </h3>
              <div className={isDarkTheme ? "text-gray-400" : "text-gray-600"}>
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

              <div
                className={`${
                  isDarkTheme ? "text-gray-400" : "text-gray-600"
                } inline-flex flex-wrap items-center gap-5 justify-center`}
              >
                <a
                  href={project.repository_link}
                  target="_blank"
                  className={`hover:text-orange-500 ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  <GithubIcon />
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  className="hover:text-orange-500 transition-colors"
                >
                  <ExternalLink size={30} />
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
