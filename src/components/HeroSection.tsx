import { motion } from "framer-motion";
import heroImg from "@/assets/hero-architecture.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Arquitectura moderna de lujo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs tracking-wide-luxury uppercase text-foreground/70 mb-6"
        >
          High – End Architecture
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light text-foreground tracking-luxury leading-tight"
        >
          CRISTINA
          <br />
          GRANDA
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10"
        >
          <button
            onClick={() => document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-foreground/40 px-8 py-3 text-xs tracking-luxury uppercase text-foreground/80 hover:bg-foreground/10 transition-all duration-300"
          >
            Descubrir
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
