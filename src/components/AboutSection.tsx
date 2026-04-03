import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-secondary">
      <div className="px-6 md:px-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden aspect-square"
        >
          <img
            src="/FotoCristina.png"
            alt="Cristina Granda Arquitectura"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xs tracking-wide-luxury uppercase text-primary mb-4">Sobre Nosotros</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 tracking-luxury leading-tight">
            CRISTINA GRANDA ARQUITECTURA
          </h2>
          <p className="text-lg text-secondary-foreground font-light leading-relaxed mb-6">
            La confianza que depositan nuestros clientes en CG es lo más valioso que tenemos. Esa confianza de compartirnos sus sueños y sus más íntimos deseos.
          </p>
          <p className="text-lg text-secondary-foreground font-light leading-relaxed">
            Solo así es posible desarrollar proyectos totalmente personalizados y únicos, pensados en cada uno de los futuros habitantes de nuestros proyectos. Con más de 12 años de experiencia en Diseño y Construcción, hemos desarrollado un enfoque integral en la planificación Residencial, cuidando hasta el más mínimo detalle.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
