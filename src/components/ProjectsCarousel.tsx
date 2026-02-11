import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import projectVilla from "@/assets/project-villa.jpg";
import projectPenthouse from "@/assets/project-penthouse.jpg";
import projectMountain from "@/assets/project-mountain.jpg";

const projects = [
  { name: "VILLA MEDITERRÁNEA", location: "Costa del Sol", image: projectVilla },
  { name: "PENTHOUSE URBANO", location: "Madrid", image: projectPenthouse },
  { name: "CASA DE MONTAÑA", location: "Sierra Nevada", image: projectMountain },
];

const ProjectsCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % projects.length);
  const prev = () => setCurrent((c) => (c - 1 + projects.length) % projects.length);

  return (
    <section id="proyectos" className="py-24 md:py-32 bg-background">
      <div className="px-6 md:px-12 mb-12">
        <p className="text-xs tracking-wide-luxury uppercase text-primary mb-4">Nuevos Proyectos</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
          PROYECTOS DESTACADOS
        </h2>
      </div>

      <div className="relative px-6 md:px-12">
        <div className="relative overflow-hidden aspect-[3/4] md:aspect-[16/9] max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <img
                src={projects[current].image}
                alt={projects[current].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                <h3 className="text-3xl md:text-4xl text-foreground font-light tracking-luxury">
                  {projects[current].name}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 tracking-luxury">{projects[current].location}</p>
                <button className="mt-4 border border-foreground/40 px-6 py-2 text-xs tracking-luxury uppercase text-foreground/80 hover:bg-foreground/10 transition-all duration-300">
                  Conocer más
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button onClick={prev} className="text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft size={28} />
          </button>
          <span className="text-sm text-muted-foreground tracking-luxury">
            {current + 1} / {projects.length}
          </span>
          <button onClick={next} className="text-muted-foreground hover:text-foreground transition-colors">
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
