import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate progressive loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 300);
          return 100;
        }
        // Increment progress (faster at start, slower near end for realism)
        const increment = prev < 60 ? 8 : prev < 90 ? 4 : 2;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (isComplete) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <img 
            src="/logo_CG_2026_transparente_Mesa_de_trabajo_1_copia.png" 
            alt="Cristina Granda" 
            className="h-16 md:h-20 w-auto"
          />
        </motion.div>

        {/* Progress bar container */}
        <div className="w-64 md:w-80 mb-6">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="h-full bg-primary"
            />
          </div>
        </div>

        {/* Progress percentage */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-muted-foreground tracking-luxury"
        >
          {progress}%
        </motion.p>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xs tracking-wide-luxury uppercase text-muted-foreground/60 mt-4"
        >
          Cargando experiencia...
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;