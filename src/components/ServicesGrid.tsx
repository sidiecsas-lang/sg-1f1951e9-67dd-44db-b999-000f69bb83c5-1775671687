import { motion } from "framer-motion";
import serviceDesign from "@/assets/service-design.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";
import serviceInterior from "@/assets/service-interior.jpg";
import serviceLandscape from "@/assets/service-landscape.jpg";
import serviceRemodel from "@/assets/service-remodel.jpg";
import serviceConsulting from "@/assets/service-consulting.jpg";

const services = [
  { name: "Diseño Arquitectónico", image: serviceDesign },
  { name: "Construcción", image: serviceConstruction },
  { name: "Interiorismo", image: serviceInterior },
  { name: "Paisajismo", image: serviceLandscape },
  { name: "Remodelación", image: serviceRemodel },
  { name: "Consultoría", image: serviceConsulting },
];

const ServicesGrid = () => {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-secondary">
      <div className="px-6 md:px-12 mb-16 text-center">
        <p className="text-xs tracking-wide-luxury uppercase text-primary mb-4">Lo que hacemos</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
          NUESTROS SERVICIOS
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 px-1">
        {services.map((service, i) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-background/50 group-hover:bg-background/30 transition-all duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className="text-lg md:text-xl text-foreground font-light tracking-luxury text-center px-4">
                {service.name}
              </h3>
              <span className="mt-3 text-xs tracking-luxury uppercase text-foreground/60 group-hover:text-primary transition-colors duration-300">
                Conocer más
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
