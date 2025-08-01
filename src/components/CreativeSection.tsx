import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Film, Instagram } from "lucide-react";

const instagramReels = [
  {
    id: 1,
    url: "https://www.instagram.com/reel/DMAvZQeBaP1",
    embedId: "DMAvZQeBaP1"
  },
  {
    id: 2,
    url: "https://www.instagram.com/reel/DMNiKdHh9gS",
    embedId: "DMNiKdHh9gS"
  },
  {
    id: 3,
    url: "https://www.instagram.com/reel/DMxxh-JByVj",
    embedId: "DMxxh-JByVj"
  },
  {
    id: 4,
    url: "https://www.instagram.com/reel/DMx1JA3hvfV",
    embedId: "DMx1JA3hvfV"
  }
];

export function CreativeSection() {
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

        {/* Instagram Reels Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Latest Creative Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {instagramReels.map((reel, index) => (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="aspect-[9/16] rounded-lg overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow"
              >
                <iframe
                  src={`https://www.instagram.com/p/${reel.embedId}/embed`}
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  title={`Instagram Reel ${reel.id}`}
                />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://instagram.com/_teaksmile_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors duration-300"
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