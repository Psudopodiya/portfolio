import { Card, CardContent } from '@/components/ui';
import { BG_COLORS, SHADOW_COLORS, TEXT_COLORS } from '@/constants/styles';
import { skills } from '@/utils/data';

interface SkillsSectionProps {
  isDarkTheme: boolean;
}

function SkillsSection({ isDarkTheme }: SkillsSectionProps) {
  return (
    <section id="skills" className="mx-auto px-4">
      <div className="mb-16 flex justify-center">
        <h2 className="text-3xl md:text-5xl font-bold pb-2 border-b border-transparent hover:border-opacity-100 transition-all duration-200 ease-in-out w-fit">
          What I Bring to the Table
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className={`transition-all ease-in-out duration-300 border shadow-sm bg-transparent hover:scale-105 ${
              isDarkTheme
                ? `hover:${SHADOW_COLORS.light} text-${TEXT_COLORS.light} hover:${BG_COLORS.dark_secondary}`
                : `hover:${SHADOW_COLORS.dark} text-${TEXT_COLORS.dark} hover:${BG_COLORS.light_secondary}`
            }`}
          >
            <CardContent className="grid grid-cols-1 grid-rows-3 gap-4 items-center">
              <div className="text-3xl md:text-4xl font-semibold text-center">
                {skill.title}
              </div>
              <div className="text-center">{skill.data}</div>
              <div className="flex flex-wrap justify-center gap-3">
                {skill.tech.map((tech, i) => (
                  <span key={i} className="rounded-xl border px-2 py-1">
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
