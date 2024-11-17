import { Card, CardContent } from "@/components/ui";
import { skills } from "@/utils/data";

interface SkillsSectionProps {
  isDarkTheme: boolean;
}

const SkillsSection = ({ isDarkTheme }: SkillsSectionProps) => (
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
              {skill.tech.map((tech, i) => (
                <span
                  key={i}
                  className={`rounded-xl border ${
                    isDarkTheme ? "border-gray-600" : "border-gray-400"
                  } px-2 py-1`}
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

export default SkillsSection;
