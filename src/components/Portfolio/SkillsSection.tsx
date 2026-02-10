import { Card, CardContent } from '@/components/ui/card';
import { Theme } from '@/types/types';
import { skills } from '@/utils/data';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/animations';

interface SkillsSectionProps {
  theme: Theme;
}

// Skill proficiency levels (percentage)
const skillLevels: Record<string, number> = {
  'JavaScript': 90,
  'TypeScript': 85,
  'React.js': 90,
  'Tailwind': 95,
  'CSS': 88,
  'Python': 85,
  'Django': 80,
  'Flask': 75,
  'Fast Api': 70,
  'SQL': 80,
  'NoSQL': 75,
  'AWS': 70,
  'Docker': 80,
  'Terraform': 65,
  'Jenkins': 70,
  'Git': 90,
};

function SkillsSection({ theme }: SkillsSectionProps) {
  return (
    <section id="skills" className="mx-auto px-4 py-10 md:py-16">
      <ScrollReveal>
        <div className="mb-8 md:mb-16 flex justify-center">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-2 border-b border-transparent hover:border-opacity-100 transition-all duration-200 ease-in-out w-fit text-center ${theme.text_secondary}`}
          >
            What I Bring to the Table
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <Card
              className={`transition-all ease-in-out duration-300 border backdrop-blur-md bg-background/30 hover:scale-[1.03] h-full ${theme.text_base} ${theme.hover_shadow}`}
            >
              <CardContent className="flex flex-col gap-4 p-4 md:p-6 h-full justify-between">
                <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
                  {skill.title}
                </div>

                <div className="text-sm md:text-base text-center flex-grow">
                  {skill.data}
                </div>

                {/* Skills with Progress Bars */}
                <div className="flex flex-col gap-3">
                  {skill.tech.map((tech, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-xs md:text-sm">
                        <span>{tech}</span>
                        <span className="opacity-70">{skillLevels[tech] || 75}%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skillLevels[tech] || 75}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

export { SkillsSection };
