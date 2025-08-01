import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Brain, Users, Music, Film } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "HTML", "CSS", "JavaScript"],
    color: "text-blue-500"
  },
  {
    title: "Tech Skills",
    icon: Brain,
    skills: ["Full Stack Development", "UI/UX Design", "AI Prompt Engineering"],
    color: "text-purple-500"
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Project Management", "Leadership"],
    color: "text-green-500"
  },
  {
    title: "Creative",
    icon: Music,
    skills: ["Music Composing", "Dance", "Film Direction", "Video Editing"],
    color: "text-pink-500"
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse skill set spanning technology, creativity, and leadership
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
                <CardHeader className="text-center">
                  <div className={`mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit ${category.color}`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-3 py-2 bg-primary/5 rounded-lg text-center border border-primary/10 hover:border-primary/20 transition-colors duration-200"
                      >
                        <span className="text-sm font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}