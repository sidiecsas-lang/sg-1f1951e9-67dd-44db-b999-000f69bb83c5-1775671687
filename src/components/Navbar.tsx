import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Proyectos", id: "proyectos", path: "/proyectos" },
  { label: "Servicios", id: "servicios" },
  { label: "Espacios", id: "espacios" },
  { label: "Nosotros", id: "nosotros", path: "/nosotros" },
  { label: "Contacto", id: "contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (item: typeof navItems[0]) => {
    setIsOpen(false);
    
    if (item.path) {
      navigate(item.path);
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(item.id);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        <Link to="/" className="flex items-center">
          <img 
            src="/logo_CG_2026_transparente_Mesa_de_trabajo_1_copia.png" 
            alt="Cristina Granda" 
            className="h-8 md:h-10 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item)}
              className="text-xs tracking-luxury uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

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
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className="text-sm tracking-luxury uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
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
