import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import cristinaImg from "@/assets/cristina-granda.png";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-secondary">
      <div className="px-6 md:px-12 text-center mb-16">
        <p className="text-xs tracking-wide-luxury uppercase text-primary mb-4">Tradición & Sofisticación</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground max-w-4xl mx-auto leading-relaxed"
        >
          El concepto único de Cristina Granda se inspira en la integración perfecta entre arquitectura, naturaleza y el arte de vivir.
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="px-6 md:px-12 max-w-6xl mx-auto"
      >
        <div className="relative overflow-hidden aspect-[16/9] max-w-4xl mx-auto">
          <img src={cristinaImg} alt="Cristina Granda, Arquitecta" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-background/20" />
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/nosotros"
            className="border border-foreground/40 px-8 py-3 text-xs tracking-luxury uppercase text-foreground/80 hover:bg-foreground/10 transition-all duration-300 inline-block"
          >
            Conocer más sobre nosotros
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
