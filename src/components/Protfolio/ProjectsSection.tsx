import type { Theme } from '@/types/types';
import { projects } from '@/utils/data';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface ProjectsSectionProps {
  theme: Theme;
}

function ProjectsSection({ theme }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="container mx-auto px-4 flex flex-col items-center gap-8 text-center py-12 my-12 md:py-20 md:my-20"
    >
      <div className="text-center">
        <h2
          className={`text-3xl md:text-5xl font-bold mb-4 ${theme.text_secondary}`}
        >
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative w-full aspect-[3/4] border shadow-sm rounded-2xl overflow-hidden group transition-all duration-500 ease-in-out 
                ${theme.hover_shadow} ${theme.text_base}
            }`}
          >
            {/* Content Face */}
            <div className="absolute bottom-0 left-0 w-full h-full flex flex-col items-center justify-between gap-4 md:gap-6 p-4 md:p-6 transition-all">
              <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-center">
                {project.name}
              </div>

              <div className="text-sm md:text-base text-center">
                {project.info}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1 justify-center items-center">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-xl border px-2 py-1 text-xs md:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links Github and External */}
              <div className="inline-flex flex-wrap items-center gap-3 md:gap-5 justify-center relative">
                <div
                  className={`border px-2 py-1 md:px-3 md:py-1 rounded-2xl relative group transition-all hover:-translate-y-1 hover:shadow-sm ease-in-out duration-300 
                    ${theme.text_base} ${theme.border_base_color} ${theme.hover_shadow}
                  `}
                  onClick={() => window.open(project.repository_link, '_blank')}
                  style={{ cursor: 'pointer' }}
                >
                  <span className="relative flex items-center gap-1 md:gap-2 text-sm md:text-base">
                    <FaGithub size={16} className="md:text-[20px]" />
                    <p>GitHub</p>
                  </span>
                </div>

                <div
                  className={`border px-2 py-1 md:px-3 md:py-1 rounded-2xl relative group transition-all hover:-translate-y-1 hover:shadow-sm ease-in-out duration-300
                   ${theme.text_base} ${theme.border_base_color} ${theme.hover_shadow}`}
                  onClick={() => window.open(project.link, '_blank')}
                  style={{ cursor: 'pointer' }}
                >
                  <span className="relative flex items-center gap-1 md:gap-2 text-sm md:text-base">
                    <FaExternalLinkAlt size={16} className="md:text-[20px]" />
                    <p>External Link</p>
                  </span>
                </div>
              </div>
            </div>

            {/* Hover Effect - Background */}
            <div
              className="absolute w-full h-full transition-all duration-500 ease-in-out group-hover:h-[10%] md:group-hover:h-[1vh] rounded-b-xl flex items-center justify-center gap-6"
              style={{
                backgroundImage: `url('/project_${index + 1}.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay',
              }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export { ProjectsSection };
