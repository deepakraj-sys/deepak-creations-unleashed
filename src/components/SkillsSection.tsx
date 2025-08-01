import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Brain, Users, Music, Film } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "JavaScript", "HTML", "CSS", "React", "Node.js"]
  },
  {
    title: "Tech Skills",
    icon: Brain,
    skills: ["Full Stack Development", "UI/UX Design", "AI Prompt Engineering"]
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Project Management", "Leadership"]
  },
  {
    title: "Creative",
    icon: Music,
    skills: ["Music Composing", "Dance", "Film Direction", "Video Editing"]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse skill set spanning technology, creativity, and leadership
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Skills Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-card border border-border">
                    <category.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3 pl-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="group flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-card border border-border rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-foreground mb-4">Continuous Learning Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                My skill development journey began at age 13 with self-taught programming through YouTube and online resources. 
                I continuously expand my expertise across multiple domains, combining technical proficiency with creative expression 
                to deliver comprehensive solutions that bridge technology and innovation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}