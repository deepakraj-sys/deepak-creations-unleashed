import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Medal, Target } from "lucide-react";

const hackathons = [
  {
    name: "ATL Tinker Fest",
    position: "1st Place",
    icon: Trophy,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10"
  },
  {
    name: "Vidya Mandir Reflections'24",
    position: "2nd Prize",
    icon: Award,
    color: "text-silver-500",
    bgColor: "bg-gray-500/10"
  },
  {
    name: "SV Scientifica'24",
    position: "3rd Prize",
    icon: Medal,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10"
  },
  {
    name: "Chettinad Vidyashram Culturals Hackathon",
    position: "3rd Place",
    icon: Medal,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10"
  },
  {
    name: "CSS Battle – Army Institute of Technology",
    position: "Finalist",
    icon: Target,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    name: "NIT Hamirpur - Roboweek 3.0",
    position: "Finalist",
    icon: Target,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    name: "ITM Gwalior - Singlethon",
    position: "Finalist",
    icon: Target,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    name: "KIIT University - Ideathon 2025",
    position: "Finalist",
    icon: Target,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    name: "AXIS'25 - Insomnia",
    position: "Finalist",
    icon: Target,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  }
];

const participations = [
  "CodeOholics Community Hack-4-Mini 2.0",
  "ByteVerse 7.0 – NIT Patna",
  "IIT Mandi - FrostHack 2025"
];

export function HackathonsSection() {
  return (
    <section id="hackathons" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Hackathons & Competitions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Competing and winning in prestigious hackathons and coding competitions
          </p>
        </motion.div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">🏆 Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={hackathon.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group">
                  <CardHeader className="text-center">
                    <div className={`mx-auto mb-4 p-3 rounded-full ${hackathon.bgColor} w-fit`}>
                      <hackathon.icon className={`h-8 w-8 ${hackathon.color}`} />
                    </div>
                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                      {hackathon.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge 
                      className={`${hackathon.bgColor} ${hackathon.color} border-none text-sm font-semibold px-4 py-2`}
                    >
                      {hackathon.position}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Participations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8">🚀 Notable Participations</h3>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {participations.map((participation, index) => (
                    <motion.div
                      key={participation}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/20 transition-colors duration-200"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm font-medium">{participation}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}