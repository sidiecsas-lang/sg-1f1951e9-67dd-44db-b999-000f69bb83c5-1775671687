import { motion } from "framer-motion";
import aboutImg from "@/assets/about-team.jpg";

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
            src={aboutImg}
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
            En Cristina Granda Arquitectura creemos que cada proyecto es único y merece una atención dedicada y personalizada. Nuestra filosofía de diseño se centra en entender profundamente las necesidades y aspiraciones de nuestros clientes, para crear espacios que no solo sean estéticamente impresionantes, sino también funcionales y sostenibles.
          </p>
          <p className="text-lg text-secondary-foreground font-light leading-relaxed">
            Con años de experiencia en el diseño arquitectónico y la construcción, hemos desarrollado un enfoque integral que abarca desde la conceptualización inicial hasta la entrega final, asegurando que cada detalle sea perfectamente ejecutado.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
