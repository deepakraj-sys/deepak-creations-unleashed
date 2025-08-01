import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Youtube, Camera } from "lucide-react";
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
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10 animate-pulse"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 animate-fade-in">
              Deepak Raj R
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in-up">
              Tech Enthusiast • Full Stack Developer • Creative Visionary
            </p>
            <p className="text-lg text-muted-foreground italic animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              "Creating impact with tech, music, and vision."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-3xl border border-primary/20 shadow-elegant max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">About Me</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Academic:</strong> Completed 12th at DAV Boys Senior Secondary School, Chennai. 
                  Currently pursuing B.Tech in Electronics and Communication Engineering (Core) at SRM Institute of Science and Technology, Kattankulathur.
                </p>
                <p>
                  <strong className="text-foreground">Self-taught in:</strong> Full Stack Development, UI/UX Design, and AI through YouTube.
                </p>
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
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-xl transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            
            <Button variant="outline" asChild className="border-primary/20 hover:bg-primary/10">
              <a href="https://github.com/deepaklog2" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            
            <Button variant="outline" asChild className="border-primary/20 hover:bg-primary/10">
              <a href="https://linkedin.com/in/deepak-raj-r" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            
            <Button variant="outline" asChild className="border-primary/20 hover:bg-primary/10">
              <a href="https://youtube.com/@dpstudio4474" target="_blank" rel="noopener noreferrer">
                <Youtube className="mr-2 h-4 w-4" />
                YouTube
              </a>
            </Button>
            
            <Button variant="outline" asChild className="border-primary/20 hover:bg-primary/10">
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