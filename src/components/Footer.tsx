const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border/50 py-16">
      <div className="px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="text-heading text-2xl tracking-luxury text-foreground mb-4">CRISTINA GRANDA</h4>
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
              <span>09 84 555 979</span>
              <span>Quito, Ecuador</span>
              <span>@cristina.granda.t</span>
            </div>
          </div>
        </div>
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-muted-foreground">© 2026 Cristina Granda. Todos los derechos reservados.</span>
          <div className="flex gap-6">
            <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Instagram</span>
            <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">LinkedIn</span>
            <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Pinterest</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
