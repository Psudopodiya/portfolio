import { Theme } from '@/types/types';
import { projects } from '@/utils/data';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
interface ProjectsSectionProps {
  theme: Theme;
}

function ProjectsSection({ theme }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="container mx-auto px-4 flex flex-col items-center gap-8 text-center py-20 my-20"
    >
      <div className="text-center">
        <h2
          className={`text-3xl md:text-5xl font-bold mb-4 ${theme.text_secondary}`}
        >
          Projects
        </h2>
      </div>

      <div className="flex flex-wrap gap-10 justify-between">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative w-[60vh] h-[70vh] border shadow-sm rounded-2xl overflow-hidden group transition-all duration-500 ease-in-out 
                ${theme.hover_shadow} ${theme.text_base}
                
            }`}
          >
            {/* Content Face */}
            <div className="absolute bottom-0 left-0 w-full h-full flex flex-col items-center justify-between gap-10 p-6 transition-all">
              <div className="text-sm md:text-4xl font-semibold text-center">
                {project.name}
              </div>

              <div className="text-center">{project.info}</div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1 justify-center items-center">
                {project.tech.map((tech, i) => (
                  <span key={i} className="rounded-xl border px-2 py-1">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links Github and External */}

              <div className="inline-flex flex-wrap items-center gap-5 justify-center relative">
                <div
                  className={`border px-3 py-1 rounded-2xl relative group transition-all hover:-translate-y-1 hover:shadow-sm ease-in-out duration-300 
                    ${theme.text_base} ${theme.border_base_color} ${theme.hover_shadow}
                      
                  `}
                  onClick={() => window.open(project.repository_link, '_blank')}
                  key={index}
                  style={{ cursor: 'pointer' }}
                >
                  <span className="relative flex items-center gap-2">
                    <FaGithub size={20} />
                    <p>GitHub</p>
                  </span>
                </div>

                <div
                  className={`border px-3 py-1 rounded-2xl relative group transition-all hover:-translate-y-1 hover:shadow-sm ease-in-out duration-300
                   ${theme.text_base} ${theme.border_base_color} ${theme.hover_shadow}`}
                  onClick={() => window.open(project.link, '_blank')}
                  key={index}
                  style={{ cursor: 'pointer' }}
                >
                  <span className="relative flex items-center gap-2">
                    <FaExternalLinkAlt size={20} />
                    <p>External Link</p>
                  </span>
                </div>
              </div>
            </div>

            {/* Hover Effect - Background */}

            <div
              className="absolute w-full h-full transition-all duration-500 ease-in-out group-hover:h-[1vh] rounded-b-xl flex items-center justify-center gap-6"
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
