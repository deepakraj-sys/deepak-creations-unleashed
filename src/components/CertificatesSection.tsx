import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Award, Maximize2 } from "lucide-react";
import certificateImage from "@/assets/certificate.png";

// Sample certificates data - you can expand this with more certificates
const certificates = [
  {
    id: 1,
    title: "Professional Achievement Certificate",
    issuer: "Tech Excellence Institute",
    image: certificateImage,
    description: "Recognition for outstanding technical achievements and innovation"
  },
  {
    id: 2,
    title: "Leadership Excellence Award",
    issuer: "Leadership Academy",
    image: certificateImage,
    description: "Awarded for exceptional leadership skills and project management"
  },
  {
    id: 3,
    title: "Innovation Award",
    issuer: "Innovation Hub",
    image: certificateImage,
    description: "Recognition for innovative solutions and creative problem solving"
  },
  {
    id: 4,
    title: "Full Stack Development",
    issuer: "Code Institute",
    image: certificateImage,
    description: "Completion of comprehensive full stack development program"
  }
];

export function CertificatesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<null | typeof certificates[0]>(null);

  const nextCertificate = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const openModal = (certificate: typeof certificates[0]) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <section id="certificates" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Certificates & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and recognition for excellence
          </p>
        </motion.div>

        {/* Certificate Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Main Certificate Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center mb-8"
            >
              <Card className="w-full max-w-2xl bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
                <CardContent className="p-6">
                  <div className="relative group">
                    <img
                      src={certificates[currentIndex].image}
                      alt={certificates[currentIndex].title}
                      className="w-full h-auto rounded-lg shadow-elegant cursor-pointer transition-transform duration-300 group-hover:scale-105"
                      onClick={() => openModal(certificates[currentIndex])}
                    />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="icon"
                        variant="secondary"
                        onClick={() => openModal(certificates[currentIndex])}
                        className="bg-background/80 backdrop-blur-sm"
                      >
                        <Maximize2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold mb-2">{certificates[currentIndex].title}</h3>
                    <p className="text-primary font-medium mb-2">{certificates[currentIndex].issuer}</p>
                    <p className="text-muted-foreground text-sm">{certificates[currentIndex].description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              <Button
                onClick={prevCertificate}
                variant="outline"
                size="icon"
                className="border-primary/20 hover:bg-primary/10"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                onClick={nextCertificate}
                variant="outline"
                size="icon"
                className="border-primary/20 hover:bg-primary/10"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Certificate Thumbnails */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {certificates.map((certificate, index) => (
                <motion.div
                  key={certificate.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setCurrentIndex(index)}
                  className={`cursor-pointer transition-all duration-300 rounded-lg overflow-hidden border-2 ${
                    index === currentIndex
                      ? "border-primary shadow-glow"
                      : "border-primary/20 hover:border-primary/40"
                  }`}
                >
                  <div className="aspect-[4/3] relative">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                      <div className="text-center p-2">
                        <Award className="h-6 w-6 text-primary mx-auto mb-1" />
                        <p className="text-xs font-medium text-foreground">{certificate.title}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Full-size Modal */}
        {isModalOpen && selectedCertificate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md">
            <div className="relative w-full max-w-4xl mx-4">
              <Button
                onClick={closeModal}
                variant="outline"
                size="icon"
                className="absolute -top-12 right-0 z-10"
              >
                ×
              </Button>
              <div className="bg-card rounded-lg p-6 border border-primary/20">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-auto rounded-lg shadow-elegant"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-semibold mb-2">{selectedCertificate.title}</h3>
                  <p className="text-primary font-medium mb-2">{selectedCertificate.issuer}</p>
                  <p className="text-muted-foreground">{selectedCertificate.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}