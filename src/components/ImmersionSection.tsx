import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const useCountUp = (target: number, duration = 2500, startOnView = true) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!startOnView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, startOnView]);

  return { count, ref };
};

const ImmersionSection = () => {
  const { count: m2Count, ref: m2Ref } = useCountUp(53297, 2500);

  const stats = [
    { value: "6", label: "Semanas" },
    { value: "100%", label: "Dedicación" },
    { value: "∞", label: "Detalle" },
  ];

  return (
    <>
      <section className="py-24 md:py-32 bg-background">
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            {/* Left — Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs tracking-wide-luxury uppercase text-primary mb-6">Nuestro Método</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight">
                Seis semanas de
                <br />
                <span className="italic text-primary">inmersión total</span>
              </h2>
            </motion.div>

            {/* Right — Copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-heading text-lg text-secondary-foreground font-light leading-relaxed">
                Para CG Arquitectura cada proyecto es una obra única, una pieza inigualable. Nuestro proceso de diseño implica una inmersión profunda para entender cada una de las necesidades de nuestros clientes, solucionándolas específicamente en el espacio.
              </p>
              <p className="text-heading text-lg text-secondary-foreground font-light leading-relaxed">
                Nos adentramos en su entorno para descifrar sus rutinas diarias y aspiraciones personales. Este enfoque nos permite tener proyectos exclusivos, únicos desde su concepción, así como únicos son cada uno de nuestros clientes.
              </p>
              <p className="text-heading text-lg text-secondary-foreground font-light leading-relaxed">
                Proyectamos obras estéticamente impecables, totalmente construibles. Nuestra experiencia en construcción nos garantiza que el render sea igual al proyecto finalmente construido.
              </p>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <span className="text-5xl md:text-6xl font-light text-foreground tracking-luxury">{stat.value}</span>
                <p className="text-xs tracking-luxury uppercase text-muted-foreground mt-3">{stat.label}</p>
              </motion.div>
            ))}

            {/* m² counter — visually prominent */}
            <motion.div
              ref={m2Ref}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center col-span-2 md:col-span-1"
            >
              <span className="text-6xl md:text-7xl font-light text-primary tracking-luxury">
                {m2Count.toLocaleString("es-ES")}
              </span>
              <p className="text-xs tracking-luxury uppercase text-muted-foreground mt-3">M² Diseñados - Construidos</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-wide-luxury uppercase text-primary mb-4">Nuestros Espacios</p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-luxury">
              RECORRIDOS VIRTUALES
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[9/16] overflow-hidden group rounded-sm"
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="https://cristinagranda.com/media/VIDEOentradaVERTICALdia2.webm" type="video/webm" />
              </video>
              <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-all duration-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative aspect-[9/16] overflow-hidden group rounded-sm"
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="https://cristinagranda.com/media/VIDEORetamasingresosala.webm" type="video/webm" />
              </video>
              <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-all duration-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[9/16] overflow-hidden group rounded-sm"
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="https://cristinagranda.com/media/VIDEOSalaElEncanto.webm" type="video/webm" />
              </video>
              <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-all duration-500" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImmersionSection;