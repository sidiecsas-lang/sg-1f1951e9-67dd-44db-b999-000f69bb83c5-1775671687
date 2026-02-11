import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Proyectos", "Servicios", "Espacios", "Nosotros", "Contacto"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-heading text-2xl md:text-3xl font-light tracking-luxury text-foreground">
          CRISTINA GRANDA
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-xs tracking-luxury uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border/50 overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-sm tracking-luxury uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
