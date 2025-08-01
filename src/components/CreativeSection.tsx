import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Film, Instagram, ChevronLeft, ChevronRight } from "lucide-react";

const instagramReels = [
  {
    id: 1,
    url: "https://www.instagram.com/reel/DMAvZQeBaP1",
    embedId: "DMAvZQeBaP1",
    title: "Creative Reel 1"
  },
  {
    id: 2,
    url: "https://www.instagram.com/reel/DMNiKdHh9gS",
    embedId: "DMNiKdHh9gS",
    title: "Creative Reel 2"
  },
  {
    id: 3,
    url: "https://www.instagram.com/reel/DMxxh-JByVj",
    embedId: "DMxxh-JByVj",
    title: "Creative Reel 3"
  },
  {
    id: 4,
    url: "https://www.instagram.com/reel/DMx1JA3hvfV",
    embedId: "DMx1JA3hvfV",
    title: "Creative Reel 4"
  }
];

export function CreativeSection() {
  const [currentReelIndex, setCurrentReelIndex] = useState(0);

  const nextReel = () => {
    setCurrentReelIndex((prev) => (prev + 1) % instagramReels.length);
  };

  const prevReel = () => {
    setCurrentReelIndex((prev) => (prev - 1 + instagramReels.length) % instagramReels.length);
  };

  const goToReel = (index: number) => {
    setCurrentReelIndex(index);
  };
  return (
    <section id="creative" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Music & Film Direction
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expressing creativity through music composition and visual storytelling
          </p>
        </motion.div>

        {/* Creative Skills Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="text-center bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 rounded-full bg-blue-500/10 w-fit">
                  <Music className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle>Music Composing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Creating original compositions and soundscapes</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="text-center bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 rounded-full bg-purple-500/10 w-fit">
                  <Film className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle>Film Direction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Directing and producing visual content</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="text-center bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 rounded-full bg-pink-500/10 w-fit">
                  <Instagram className="h-8 w-8 text-pink-500" />
                </div>
                <CardTitle>Video Editing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Professional video editing and post-production</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Instagram Reels Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Latest Creative Works</h3>
          
          {/* Main Reel Display */}
          <div className="relative mb-8">
            <div className="flex justify-center">
              <div className="w-full max-w-lg aspect-[9/16] rounded-lg overflow-hidden border border-border bg-card shadow-lg">
                <iframe
                  key={instagramReels[currentReelIndex].embedId}
                  src={`https://www.instagram.com/p/${instagramReels[currentReelIndex].embedId}/embed/captioned/?cr=1&v=14&wp=540&rd=https%3A%2F%2Fexample.com&rp=%2F#%7B%22ci%22%3A0%2C%22os%22%3A0%7D`}
                  className="w-full h-full bg-card"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  title={instagramReels[currentReelIndex].title}
                  style={{ 
                    colorScheme: 'dark',
                    backgroundColor: 'hsl(var(--card))'
                  }}
                />
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              onClick={prevReel}
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/90 backdrop-blur-sm border-border hover:bg-muted z-10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              onClick={nextReel}
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/90 backdrop-blur-sm border-border hover:bg-muted z-10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Reel Indicators */}
          <div className="flex justify-center gap-2 mb-8">
            {instagramReels.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReel(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReelIndex
                    ? "bg-primary scale-125"
                    : "bg-muted hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          {/* Current Reel Info */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Viewing {currentReelIndex + 1} of {instagramReels.length} reels
            </p>
            <a 
              href="https://instagram.com/_teaksmile_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
            >
              <Instagram className="h-5 w-5" />
              View More on Instagram @_teaksmile_
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}