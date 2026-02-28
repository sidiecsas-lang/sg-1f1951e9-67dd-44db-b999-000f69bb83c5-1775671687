import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const useCountUp = (target: number, duration = 2000, startOnView = true) => {
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
            <p className="text-sm text-secondary-foreground leading-relaxed">
              En Cristina Granda Arquitectura creemos que cada proyecto es único y merece una atención dedicada y personalizada. Nuestro método de trabajo se basa en seis semanas de inmersión profunda con cada cliente.
            </p>
            <p className="text-sm text-secondary-foreground leading-relaxed">
              Durante este período, nos sumergimos en su mundo, entendemos sus aspiraciones, estudiamos su rutina diaria y descubrimos la esencia de lo que hace que un espacio sea verdaderamente suyo.
            </p>
            <p className="text-sm text-secondary-foreground leading-relaxed">
              Este enfoque intensivo nos permite crear espacios que no solo son estéticamente impecables, sino que también funcionan perfectamente para la vida real de nuestros clientes.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
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
            <p className="text-xs tracking-luxury uppercase text-muted-foreground mt-3">m² construidos</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImmersionSection;
