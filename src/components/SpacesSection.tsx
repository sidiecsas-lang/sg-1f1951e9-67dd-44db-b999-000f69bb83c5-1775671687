import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import spacesCoastal from "@/assets/spaces-coastal.jpg";
import spacesUrban from "@/assets/spaces-urban.jpg";

const spaces = [
  { title: "DISEÑO QUE TRASCIENDE", subtitle: "Proyectos que integran arquitectura, naturaleza y el arte de vivir", image: spacesCoastal },
  { title: "ELEGANCIA URBANA", subtitle: "Residencias que redefinen el lujo en la ciudad", image: spacesUrban },
];

const SpacesSection = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section id="espacios" className="py-24 md:py-32 bg-background">
      <div className="px-6 md:px-12 mb-12 text-center">
        <p className="text-xs tracking-wide-luxury uppercase text-primary mb-4">Espacios & Lugares</p>
        <h3 className="text-lg md:text-xl text-secondary-foreground font-light max-w-2xl mx-auto leading-relaxed">
          La distribución de los espacios siempre es estratégica, aquí entra en juego la expertise del arquitecto y las necesidades de los ocupantes. Buscamos optimizar los m² construidos para que sean verdaderamente útiles, con orden en circulaciones y la creación de diferentes perspectivas y visuales. Buscamos generar sorpresa en lugares inesperados, pensamos en ese "wow" de los espacios tan característico en nuestros proyectos.
        </h3>
      </div>

      <div className="relative px-6 md:px-12">
        <div className="relative overflow-hidden aspect-[16/9] max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <img
                src={spaces[current].image}
                alt={spaces[current].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                <h3 className="text-3xl md:text-5xl text-foreground font-light tracking-luxury">
                  {spaces[current].title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-md">{spaces[current].subtitle}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <button onClick={() => setCurrent((c) => (c - 1 + spaces.length) % spaces.length)} className="text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft size={28} />
          </button>
          <span className="text-sm text-muted-foreground tracking-luxury">{current + 1} / {spaces.length}</span>
          <button onClick={() => setCurrent((c) => (c + 1) % spaces.length)} className="text-muted-foreground hover:text-foreground transition-colors">
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpacesSection;
