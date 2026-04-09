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
          className="relative overflow-hidden aspect-square mx-auto w-full max-w-md md:max-w-none"
        >
          <img
            src="/FotoCristina.png"
            alt="Cristina Granda Arquitectura"
            className="w-full h-full object-cover object-center"
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
          <p className="text-heading text-lg text-secondary-foreground font-light leading-relaxed mb-6">
            La confianza de nuestros clientes en CG es lo más preciado que tenemos. Entendemos que nos invitan a ser parte de sus sueños y es un placer desarrollar cada uno de sus proyectos.
          </p>
          <p className="text-heading text-lg text-secondary-foreground font-light leading-relaxed">
            Con más de 12 años de experiencia y más de 53 mil m² Diseñados y/o Construidos, CG Arquitectura ha desarrollado un enfoque integral en la planificación Residencial de proyectos, cuidando desde la implantación en el terreno de la vivienda y llegando hasta la construcción del más mínimo detalle.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
