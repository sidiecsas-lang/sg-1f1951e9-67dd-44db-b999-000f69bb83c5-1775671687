import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceGallery {
  name: string;
  images: string[];
  coverImage: string;
}

const servicesData: ServiceGallery[] = [
  { 
    name: "Diseño Arquitectónico", 
    coverImage: "/Disenio-Arquitectonico.jpg",
    images: ["/disenoarquin1.jpg", "/disenoarquin2.jpg", "/disenoarquin3.jpg", "/disenoarquin4.jpg"]
  },
  { 
    name: "Construcción", 
    coverImage: "/Construccio_n.jpg",
    images: ["/construccionn1.jpg", "/construccionn2.jpg"]
  },
  { 
    name: "Interiorismo", 
    coverImage: "/Interiorismo.png",
    images: ["/interiorismon1.jpg", "/interiorismon2.jpg", "/interiorismon3.jpg", "/interiorismon4.jpg", "/interiorismon5.jpg", "/interiorismon6.jpg"]
  },
  { 
    name: "Paisajismo", 
    coverImage: "/Paisajismo.jpg",
    images: ["/paisajismon1.jpg", "/paisajismon2.jpg", "/paisajismon3.jpg"]
  },
  { 
    name: "Remodelación", 
    coverImage: "/Remodelacion.jpg",
    images: ["/remodelacionn.png", "/remodelacionn1.jpg", "/remodelacionn2.jpg", "/remodelacionn3.jpg"]
  },
  { 
    name: "Consultoría", 
    coverImage: "/consultoria.jpg",
    images: ["/consultorian1.jpg", "/consultorian2.png", "/consultorian3.png"]
  },
];

const ServicesGrid = () => {
  const [selectedService, setSelectedService] = useState<ServiceGallery | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleServiceClick = (service: ServiceGallery) => {
    setSelectedService(service);
    setCurrentImageIndex(0);
  };

  const handleClose = () => {
    setSelectedService(null);
    setCurrentImageIndex(0);
  };

  const handleNext = () => {
    if (selectedService) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedService.images.length);
    }
  };

  const handlePrev = () => {
    if (selectedService) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedService.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      <section id="servicios" className="py-24 md:py-32 bg-secondary">
        <div className="px-6 md:px-12 mb-16 text-center">
          <p className="text-xs tracking-wide-luxury uppercase text-primary mb-4">Lo que hacemos</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            NUESTROS SERVICIOS
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 px-1">
          {servicesData.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
              onClick={() => handleServiceClick(service)}
            >
              <img
                src={service.coverImage}
                alt={service.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/50 group-hover:bg-background/30 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="text-lg md:text-xl text-foreground font-light tracking-luxury text-center px-4">
                  {service.name}
                </h3>
                <span className="mt-3 text-xs tracking-luxury uppercase text-foreground/60 group-hover:text-primary transition-colors duration-300">
                  Ver galería
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute -top-12 right-0 md:right-4 p-2 text-foreground hover:text-primary transition-colors z-10"
              >
                <X size={32} />
              </button>

              {/* Image container */}
              <div className="relative aspect-[4/3] bg-black rounded-lg overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={selectedService.images[currentImageIndex]}
                    alt={`${selectedService.name} ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    loading="lazy"
                  />
                </AnimatePresence>

                {/* Navigation arrows (only show if more than 1 image) */}
                {selectedService.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-background/80 hover:bg-background rounded-full text-foreground transition-all"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-background/80 hover:bg-background rounded-full text-foreground transition-all"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Service title and counter */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl md:text-3xl font-light text-foreground tracking-luxury mb-2">
                  {selectedService.name}
                </h3>
                {selectedService.images.length > 1 && (
                  <p className="text-sm text-muted-foreground tracking-luxury">
                    {currentImageIndex + 1} / {selectedService.images.length}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServicesGrid;