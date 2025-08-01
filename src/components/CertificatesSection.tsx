import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Award, Maximize2 } from "lucide-react";
import certificateImage from "@/assets/certificate.png";

// Certificate data
const certificates = [
  {
    id: 1,
    title: "CodeOholics Community Hack-4-Mini 2.0",
    issuer: "CodeOholics Community",
    image: "/lovable-uploads/d546d009-72e1-4475-a202-297f47742790.png",
    description: "National hackathon participation under the theme 'One Nation, One Code, Infinite Innovation'"
  },
  {
    id: 2,
    title: "NIT Hamirpur - Roboweek 3.0 – Finalist",
    issuer: "National Institute of Technology, Hamirpur",
    image: "/lovable-uploads/9061fb39-c96d-484c-84c5-5fd029a6d9ef.png",
    description: "Finalist in Hackathon of Roboweek 3.0 organized by NIT Hamirpur"
  },
  {
    id: 3,
    title: "ByteVerse 7.0 – NIT Patna",
    issuer: "National Institute of Technology, Patna",
    image: "/lovable-uploads/6b4985f2-59c0-4ae7-b64d-20ef060f25d8.png",
    description: "Participation in ByteVerse 7.0 Hackathon organized by NIT Patna"
  },
  {
    id: 4,
    title: "IIT Mandi - FrostHack 2025",
    issuer: "Madhav Institute of Technology and Science (MITS), Gwalior",
    image: "/lovable-uploads/5fd239bd-b91c-4d61-9ffc-5c9df5ca6459.png",
    description: "HackOrbit 2025 - National Hackathon participation"
  },
  {
    id: 5,
    title: "ITM Gwalior - Singlethon – Finalist",
    issuer: "ABV-IIITM, Gwalior",
    image: "/lovable-uploads/a1cc73fa-2ec7-4a11-955d-ef8350b68bfe.png",
    description: "Finalist in Hacksagon 2025 hackathon"
  },
  {
    id: 6,
    title: "SV Scientifica'24 – 🥉 3rd Prize",
    issuer: "College Crave Pvt. Ltd.",
    image: "/lovable-uploads/a9fd89d1-15ef-49ca-a7af-b521e5c20f85.png",
    description: "Crave the Code hackathon participation organized by College Crave"
  },
  {
    id: 7,
    title: "Vidya Mandir Reflections'24 – 🥈 2nd Prize",
    issuer: "Educational Institution",
    image: "/lovable-uploads/113d46eb-e051-433e-9c84-ad429a1dc822.png",
    description: "AI Working Model competition - 3rd Prize in XI & XII Category"
  },
  {
    id: 8,
    title: "ATL Tinker Fest – 🥇 1st Place",
    issuer: "SNEH International School, Delhi",
    image: "/lovable-uploads/0e8c9fe1-2b98-4ae4-91e5-dfe776e97cba.png",
    description: "First Position in ATAL TinkerFest 2024 competition"
  },
  {
    id: 9,
    title: "CSS Battle – Army Institute of Technology – Finalist",
    issuer: "Army Institute of Technology, Pune",
    image: "/lovable-uploads/f2527ef9-fdef-4730-bff9-3e98d85175fb.png",
    description: "Finalist in Online Round of CSS Battle organized by Army Institute of Technology"
  },
  {
    id: 10,
    title: "AXIS'25 - Insomnia – Finalist",
    issuer: "Visvesvaraiya National Institute of Technology",
    image: "/lovable-uploads/a4271ed1-8110-4d05-9ecb-0d65ead3ade3.png",
    description: "Finalist in Insomnia hackathon organized by VNIT as part of AXIS'25"
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