import { Instagram, Youtube, Facebook } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border/50 py-16">
      <div className="px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img 
              src="/logo_CG_2026_transparente_Mesa_de_trabajo_1_copia.png" 
              alt="Cristina Granda" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Diseño arquitectónico y construcción de viviendas de arquitecto signature. Creamos espacios que inspiran.
            </p>
          </div>
          <div>
            <h5 className="text-xs tracking-luxury uppercase text-foreground mb-4">Navegación</h5>
            <div className="flex flex-col gap-3">
              {["Proyectos", "Servicios", "Espacios", "Nosotros", "Contacto"].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h5 className="text-xs tracking-luxury uppercase text-foreground mb-4">Contacto</h5>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <span>cristina_granda@outlook.com</span>
              <span>+593 98 455 5979</span>
              <span>Quito, Ecuador</span>
              <span>@cristina.granda.t</span>
            </div>
          </div>
        </div>
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-muted-foreground">© 2026 Cristina Granda. Todos los derechos reservados.</span>
          <div className="flex gap-6">
            <a 
              href="https://www.instagram.com/cristina.granda.t/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.facebook.com/Cristina.Granda.T" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://www.tiktok.com/@cristina.granda.t" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="TikTok"
            >
              <FaTiktok className="w-5 h-5" />
            </a>
            <a 
              href="https://www.youtube.com/@cristina.granda.t" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;