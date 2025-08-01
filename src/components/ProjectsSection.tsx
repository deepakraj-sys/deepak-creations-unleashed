import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AeroGenius",
    description: "AI WebApp for cross-domain automation",
    videoUrl: "https://www.youtube.com/embed/vjOxwr8FeBI",
    tags: ["AI", "Web", "Automation"],
    category: "AI"
  },
  {
    id: 2,
    title: "Doctor Availability System",
    description: "Smart medical appointments",
    videoUrl: "https://drive.google.com/file/d/1bjRYVAV3NJ-05RkqsafRwwCagVZDxaI2/preview",
    tags: ["Healthcare", "Web", "System"],
    category: "Web"
  },
  {
    id: 3,
    title: "AI Finance Tracker",
    description: "Personalized finance AI",
    videoUrl: "https://www.youtube.com/embed/WTv71_Aq6Aw",
    tags: ["AI", "Finance", "Personal"],
    category: "AI"
  },
  {
    id: 4,
    title: "Diabetes Prediction App",
    description: "ML-based health app",
    demoUrl: "https://makeitsimple.streamlit.app/",
    tags: ["ML", "Health", "Prediction"],
    category: "Health"
  },
  {
    id: 5,
    title: "HireGenius",
    description: "AI-powered recruitment platform",
    videoUrl: "https://drive.google.com/file/d/1Vj8qyhssyPJ-o_Lkwg57AGYJrzTnV_Wg/preview",
    tags: ["AI", "Recruitment", "Platform"],
    category: "AI"
  },
  {
    id: 6,
    title: "Flick It",
    description: "All-in-one AI ecosystem platform",
    videoUrl: "https://drive.google.com/file/d/1QQotWRh9euMXK3nLj11SYvigLFES9AOq/preview",
    tags: ["AI", "Ecosystem", "Platform"],
    category: "AI"
  }
];

const categories = ["All", "AI", "Web", "Health"];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Innovative solutions across AI, web development, and healthcare
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "border-primary/20 hover:bg-primary/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {project.videoUrl && (
                    <Button
                      onClick={() => setSelectedProject(project)}
                      className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Watch Demo
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button asChild className="w-full" variant="outline">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md">
            <div className="relative w-full max-w-4xl mx-4">
              <Button
                onClick={() => setSelectedProject(null)}
                variant="outline"
                size="icon"
                className="absolute -top-12 right-0 z-10"
              >
                ×
              </Button>
              <div className="aspect-video rounded-lg overflow-hidden border border-primary/20">
                <iframe
                  src={selectedProject.videoUrl}
                  className="w-full h-full"
                  allowFullScreen
                  title={selectedProject.title}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}