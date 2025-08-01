import { ThemeToggle } from "./ThemeToggle";
import { Navigation } from "./Navigation";
import { FloatingButtons } from "./FloatingButtons";
import { HeroSection } from "./HeroSection";
import { SkillsSection } from "./SkillsSection";
import { ProjectsSection } from "./ProjectsSection";
import { HackathonsSection } from "./HackathonsSection";
import { CreativeSection } from "./CreativeSection";
import { CertificatesSection } from "./CertificatesSection";
import { ContactSection } from "./ContactSection";

export function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <Navigation />
      <FloatingButtons />
      
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <HackathonsSection />
        <CreativeSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      
      <footer className="py-8 border-t border-primary/20 bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Deepak Raj R. Built with passion for technology and creativity.
          </p>
        </div>
      </footer>
    </div>
  );
}