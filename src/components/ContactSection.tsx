import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Github, 
  Linkedin, 
  Youtube, 
  Instagram, 
  Camera,
  MessageCircle,
  MapPin,
  GraduationCap
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "16gomathimsc@gmail.com",
    href: "mailto:16gomathimsc@gmail.com",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 6381687588",
    href: "https://wa.me/916381687588",
    color: "text-green-500",
    bgColor: "bg-green-500/10"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/deepaklog2",
    href: "https://github.com/deepaklog2",
    color: "text-gray-700 dark:text-gray-300",
    bgColor: "bg-gray-500/10"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Deepak Raj R",
    href: "https://linkedin.com/in/deepak-raj-r",
    color: "text-blue-600",
    bgColor: "bg-blue-600/10"
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@_teaksmile_",
    href: "https://instagram.com/_teaksmile_",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10"
  },
  {
    icon: Camera,
    label: "Video Edits",
    value: "@actf.ramez",
    href: "https://instagram.com/actf.ramez",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  },
  {
    icon: Youtube,
    label: "YouTube",
    value: "@dpstudio4474",
    href: "https://youtube.com/@dpstudio4474",
    color: "text-red-500",
    bgColor: "bg-red-500/10"
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Personal Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">DR</span>
                  </div>
                  <CardTitle className="text-xl">Deepak Raj R</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <GraduationCap className="h-4 w-4" />
                    <span className="text-sm">B.Tech ECE Student</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">Chennai, India</span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "Creating impact with tech, music, and vision."
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <CardTitle className="text-center">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {contactMethods.map((contact, index) => (
                      <motion.div
                        key={contact.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Button
                          asChild
                          variant="outline"
                          className="w-full h-auto p-4 border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
                        >
                          <a href={contact.href} target="_blank" rel="noopener noreferrer">
                            <div className="flex items-center gap-4">
                              <div className={`p-3 rounded-full ${contact.bgColor}`}>
                                <contact.icon className={`h-6 w-6 ${contact.color}`} />
                              </div>
                              <div className="text-left">
                                <p className="font-medium">{contact.label}</p>
                                <p className="text-sm text-muted-foreground">{contact.value}</p>
                              </div>
                            </div>
                          </a>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-center">Find Me Online</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Button
                        asChild
                        variant="outline"
                        className="w-full h-auto p-4 border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group"
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          <div className="flex flex-col items-center gap-3">
                            <div className={`p-3 rounded-full ${social.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                              <social.icon className={`h-6 w-6 ${social.color}`} />
                            </div>
                            <div className="text-center">
                              <p className="font-medium text-sm">{social.label}</p>
                              <p className="text-xs text-muted-foreground">{social.value}</p>
                            </div>
                          </div>
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-primary p-8 rounded-3xl text-primary-foreground">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Build Something Amazing Together?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Whether it's a groundbreaking project, creative collaboration, or just a chat about technology and innovation
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  <a href="mailto:16gomathimsc@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <a href="https://wa.me/916381687588" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Me
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}