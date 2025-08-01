import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Youtube, Camera, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const downloadResume = () => {
    // Create a sample resume download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Deepak_Raj_R_Resume.pdf';
    link.click();
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
              Deepak Raj R
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Tech Enthusiast • Full Stack Developer • Creative Visionary
            </p>
            <p className="text-lg text-muted-foreground italic">
              "Creating impact with tech, music, and vision."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="bg-card border border-border p-8 rounded-lg max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">About Me</h2>
              <p className="text-muted-foreground mb-8 text-left">
                I'm a passionate tech enthusiast currently pursuing B.Tech in Electronics and Communication Engineering (Core) at SRM Institute of Science and Technology, Kattankulathur. Self-taught in Full Stack Development, UI/UX Design, and AI through YouTube, I combine technical expertise with creative vision to build innovative solutions.
              </p>
              
              {/* Education Section */}
              <div className="text-left">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Education</h3>
                </div>
                
                <div className="ml-4 border-l-2 border-border pl-6 space-y-6">
                  {/* Current Education */}
                  <div className="relative">
                    <div className="absolute -left-[1.75rem] w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">B.Tech Electronics and Communication Engineering (Core)</h4>
                      <p className="text-primary font-medium">SRM Institute of Science and Technology, Kattankulathur</p>
                      <p className="text-muted-foreground text-sm">Currently Pursuing</p>
                    </div>
                  </div>
                  
                  {/* Class 12 */}
                  <div className="relative">
                    <div className="absolute -left-[1.75rem] w-4 h-4 bg-muted rounded-full border-4 border-background"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">Class 12 (CBSE)</h4>
                      <p className="text-primary font-medium">DAV Boys Senior Secondary School, Chennai</p>
                      <p className="text-muted-foreground text-sm">Completed</p>
                    </div>
                  </div>
                  
                  {/* Self-Taught Programming */}
                  <div className="relative">
                    <div className="absolute -left-[1.75rem] w-4 h-4 bg-muted rounded-full border-4 border-background"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">Self-Taught Programming</h4>
                      <p className="text-primary font-medium">Started at age 13</p>
                      <p className="text-muted-foreground text-sm">
                        Learned multiple programming languages, frameworks, and development methodologies through self-study and practical projects via YouTube and online resources.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-8"
          >
            <Button 
              onClick={downloadResume}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            
            <Button variant="outline" asChild className="border-border hover:bg-muted">
              <a href="https://github.com/deepaklog2" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            
            <Button variant="outline" asChild className="border-border hover:bg-muted">
              <a href="https://linkedin.com/in/deepak-raj-r" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            
            <Button variant="outline" asChild className="border-border hover:bg-muted">
              <a href="https://youtube.com/@dpstudio4474" target="_blank" rel="noopener noreferrer">
                <Youtube className="mr-2 h-4 w-4" />
                YouTube
              </a>
            </Button>
            
            <Button variant="outline" asChild className="border-border hover:bg-muted">
              <a href="https://instagram.com/actf.ramez" target="_blank" rel="noopener noreferrer">
                <Camera className="mr-2 h-4 w-4" />
                Video Edits
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}