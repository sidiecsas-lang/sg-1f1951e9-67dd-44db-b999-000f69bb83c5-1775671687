import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Instagram, Youtube, Facebook } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const instagramPosts = [
    { 
      id: 1, 
      image: "/ResidenciasLasRetamas1.jpg",
      caption: "Residencias Las Retamas - Diseño contemporáneo que redefine el lujo residencial"
    },
    { 
      id: 2, 
      image: "/ReresidenciaDelEncanto.jpg",
      caption: "Residencia del Encanto - Arquitectura que inspira y transforma espacios"
    },
    { 
      id: 3, 
      image: "/GuayllabambaGardens.png",
      caption: "Guayllabamba Gardens - Integración perfecta con la naturaleza"
    },
    { 
      id: 4, 
      image: "/ResidenciaSantaClara.png",
      caption: "Residencia Santa Clara - Elegancia y funcionalidad en cada detalle"
    },
    { 
      id: 5, 
      image: "/ResidenciaDorada.png",
      caption: "Residencia Dorada - Donde el diseño encuentra su máxima expresión"
    },
    { 
      id: 6, 
      image: "/ResidenciaTragaluz.png",
      caption: "Residencia Tragaluz - Luz natural como protagonista del diseño"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % instagramPosts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [instagramPosts.length]);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/593984555979", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="flex items-center justify-between px-6 md:px-12 py-4">
          <Link to="/" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={18} />
            <span className="text-xs tracking-luxury uppercase">Volver</span>
          </Link>
          <Link to="/" className="flex items-center">
            <img 
              src="/logo_CG_2026_transparente_Mesa_de_trabajo_1_copia.png" 
              alt="Cristina Granda" 
              className="h-8 w-auto"
            />
          </Link>
          <div className="w-20" />
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-wide-luxury uppercase text-primary mb-4">Conéctate con nosotros</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-foreground tracking-luxury leading-tight mb-6">
              CONTACTO
            </h1>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-6">
              Síguenos en nuestras Redes Sociales para ver nuestros últimos proyectos y novedades
            </p>
            
            {/* Social Media Icons */}
            <div className="flex justify-center gap-6 mt-8">
              <a 
                href="https://www.instagram.com/cristina.granda.t/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.facebook.com/Cristina.Granda.T" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.tiktok.com/@cristina.granda.t" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok className="w-6 h-6" />
              </a>
              <a 
                href="https://www.youtube.com/@cristina.granda.t" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instagram Feed Carousel */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="px-6 md:px-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">Encuéntranos en las redes sociales como:</h2>
            <a 
              href="https://www.instagram.com/cristina.granda.t/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors text-sm tracking-luxury uppercase"
            >
              @cristina.granda.t
            </a>
          </motion.div>

          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden aspect-square max-w-2xl mx-auto rounded-xl shadow-2xl">
              {instagramPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: currentSlide === index ? 1 : 0,
                    scale: currentSlide === index ? 1 : 0.95
                  }}
                  transition={{ duration: 0.6 }}
                  className={`absolute inset-0 ${currentSlide === index ? 'z-10' : 'z-0'}`}
                >
                  <img 
                    src={post.image} 
                    alt={post.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-foreground text-sm md:text-base leading-relaxed">
                      {post.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Carousel indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {instagramPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'w-8 bg-primary' 
                      : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Ir a slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Contact */}
      <section className="py-20 md:py-28 bg-background">
        <div className="px-6 md:px-12 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
              ¿Listo para iniciar tu proyecto?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Contáctanos por WhatsApp y hablemos sobre cómo podemos hacer realidad tu visión arquitectónica
            </p>
            <div className="w-full max-w-md px-4 md:px-0">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="w-full md:w-auto bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-6 text-base tracking-luxury uppercase shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Contactar
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">+593 98 455 5979</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-secondary border-t border-border/50">
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
            <div>
              <h5 className="text-xs tracking-luxury uppercase text-primary mb-3">Email</h5>
              <a href="mailto:cristina_granda@outlook.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                cristina_granda@outlook.com
              </a>
            </div>
            <div>
              <h5 className="text-xs tracking-luxury uppercase text-primary mb-3">Teléfono</h5>
              <a href="tel:+593984555979" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                +593 98 455 5979
              </a>
            </div>
            <div>
              <h5 className="text-xs tracking-luxury uppercase text-primary mb-3">Ubicación</h5>
              <p className="text-sm text-muted-foreground">Quito, Ecuador</p>
            </div>
          </div>
          
          {/* Social Media Icons in Footer */}
          <div className="flex justify-center gap-6 pt-6 border-t border-border/50">
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
      </section>
    </div>
  );
};

export default Contact;