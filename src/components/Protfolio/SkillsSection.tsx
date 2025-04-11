import { Card, CardContent } from '@/components/ui';
import { Theme } from '@/types/types';
import { skills } from '@/utils/data';

interface SkillsSectionProps {
  theme: Theme;
}

function SkillsSection({ theme }: SkillsSectionProps) {
  // return (
  //   <section id="skills" className="mx-auto px-4">
  //     <div className="mb-16 flex justify-center">
  //       <h2
  //         className={`text-3xl md:text-5xl font-bold pb-2 border-b border-transparent hover:border-opacity-100 transition-all duration-200 ease-in-out w-fit ${theme.text_secondary}`}
  //       >
  //         What I Bring to the Table
  //       </h2>
  //     </div>

  //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
  //       {skills.map((skill, index) => (
  //         <Card
  //           key={index}
  //           className={`transition-all ease-in-out duration-300 border bg-transparent hover:scale-105 ${theme.text_base} ${theme.hover_shadow}`}
  //         >
  //           <CardContent className="grid grid-cols-1 grid-rows-3 gap-4 items-center">
  //             <div className="text-3xl md:text-4xl font-semibold text-center">
  //               {skill.title}
  //             </div>
  //             <div className="text-center">{skill.data}</div>
  //             <div className="flex flex-wrap justify-center gap-3">
  //               {skill.tech.map((tech, i) => (
  //                 <span key={i} className="rounded-xl border px-2 py-1">
  //                   {tech}
  //                 </span>
  //               ))}
  //             </div>
  //           </CardContent>
  //         </Card>
  //       ))}
  //     </div>
  //   </section>
  // );
  return (
    <section id="skills" className="mx-auto px-4 py-10 md:py-16">
      <div className="mb-8 md:mb-16 flex justify-center">
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-2 border-b border-transparent hover:border-opacity-100 transition-all duration-200 ease-in-out w-fit text-center ${theme.text_secondary}`}
        >
          What I Bring to the Table
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className={`transition-all ease-in-out duration-300 border bg-transparent hover:scale-[1.03] h-full ${theme.text_base} ${theme.hover_shadow}`}
          >
            <CardContent className="flex flex-col gap-4 p-4 md:p-6 h-full justify-between">
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
                {skill.title}
              </div>

              <div className="text-sm md:text-base text-center flex-grow">
                {skill.data}
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {skill.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-xl border px-2 py-1 text-xs md:text-sm mb-1 inline-block"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
export { SkillsSection };
