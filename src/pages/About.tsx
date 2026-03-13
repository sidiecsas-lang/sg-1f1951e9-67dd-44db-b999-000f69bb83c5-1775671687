import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import cristinaImg from "@/assets/cristina-granda.png";

const projects = [
  { year: "2014", name: "Conjunto Hab Los Quindes", detail: "70 viviendas, Ambato" },
  { year: "2015", name: "\"Las Orquídeas\" Conjunto Habitacional", detail: "156 viviendas, San Rafael" },
  { year: "2017", name: "Edificio San Gregorio Plaza", detail: "47 departamentos, Quito" },
  { year: "2019", name: "Residenciales Montresor", detail: "8 viviendas, Calderón" },
  { year: "2023", name: "Conjunto Hab Guayllabamba Gardens", detail: "39 viviendas, Guayllabamba" },
  { year: "2024", name: "Conjunto Hab Mirano Valley", detail: "5 viviendas, Conocoto" },
  { year: "2024", name: "Residencias Las Retamas", detail: "2 viviendas, Sangolquí" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="flex items-center justify-between px-6 md:px-12 py-4">
          <Link to="/" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={18} />
            <span className="text-xs tracking-luxury uppercase">Volver</span>
          </Link>
          <Link to="/" className="text-heading text-2xl font-light tracking-luxury text-foreground">
            CRISTINA GRANDA
          </Link>
          <div className="w-20" />
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden aspect-[3/4] max-w-md">
              <img src={cristinaImg} alt="Cristina Granda" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-background/10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs tracking-wide-luxury uppercase text-primary mb-4">Arquitecta MDI</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-foreground tracking-luxury leading-tight mb-6">
              CRISTINA
              <br />
              GRANDA
            </h1>
            <p className="text-lg text-secondary-foreground font-light italic leading-relaxed mb-8">
              "Cada proyecto arquitectónico es una sinfonía única, el terreno, las visuales, la luz, las necesidades, el presupuesto y el cliente conforman singulares notas musicales; como Arquitecto siempre busco en lo más profundo la esencia, la mejor respuesta… la melodía perfecta."
            </p>
            <p className="text-xs text-muted-foreground tracking-luxury">— Granda C.</p>
          </motion.div>
        </div>
      </section>

      {/* Info */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="px-6 md:px-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">Educación</h2>
            <div className="space-y-6">
              <div>
                <p className="text-xs tracking-luxury text-primary mb-1">2013</p>
                <h3 className="text-lg text-foreground font-light">Arquitecta</h3>
                <p className="text-sm text-muted-foreground">Universidad Central del Ecuador UCE</p>
              </div>
              <div>
                <p className="text-xs tracking-luxury text-primary mb-1">2021</p>
                <h3 className="text-lg text-foreground font-light">Master en Dirección de Empresas Constructoras e Inmobiliarias (MDI)</h3>
                <p className="text-sm text-muted-foreground">Universidad San Francisco de Quito USFQ</p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-light text-foreground mt-16 mb-8">Idiomas</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg text-foreground font-light">Inglés</h3>
                <p className="text-sm text-muted-foreground">TOEFL iBT 82</p>
              </div>
              <div>
                <h3 className="text-lg text-foreground font-light">Italiano</h3>
                <p className="text-sm text-muted-foreground">Erasmus Italia 2012</p>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">Experiencia</h2>
            <div className="space-y-6">
              <div>
                <p className="text-xs tracking-luxury text-primary mb-1">2013 – 2018</p>
                <h3 className="text-lg text-foreground font-light">Gerente de Proyectos</h3>
                <p className="text-sm text-muted-foreground">Cooperativa de Vivienda San Gregorio de Miembros de la Policía Nacional</p>
              </div>
              <div>
                <p className="text-xs tracking-luxury text-primary mb-1">2019 – Presente</p>
                <h3 className="text-lg text-foreground font-light">Diseño y Planificación & Socia Fundadora</h3>
                <p className="text-sm text-muted-foreground">Squizio Arquitectura Cia. Ltda.</p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-light text-foreground mt-16 mb-8">Premios</h2>
            <div className="space-y-6">
              <div>
                <p className="text-xs tracking-luxury text-primary mb-1">2011</p>
                <h3 className="text-lg text-foreground font-light">Mención Arquitectónica Medalla de Oro</h3>
                <p className="text-sm text-muted-foreground">Universidad Central del Ecuador UCE</p>
              </div>
              <div>
                <p className="text-xs tracking-luxury text-primary mb-1">2012</p>
                <h3 className="text-lg text-foreground font-light">Beca Programa Erasmus Mundo</h3>
                <p className="text-sm text-muted-foreground">Intercambio bilateral entre el Politécnico di Milano y la UCE</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 md:py-28 bg-background">
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-light text-foreground mb-12"
          >
            Proyectos Realizados
          </motion.h2>

          <div className="space-y-0">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-6 border-b border-border/50"
              >
                <span className="text-xs tracking-luxury text-primary w-16 shrink-0">{project.year}</span>
                <h3 className="text-lg text-foreground font-light flex-1">{project.name}</h3>
                <span className="text-sm text-muted-foreground">{project.detail}</span>
              </motion.div>
            ))}
          </div>

          {/* Big m² stat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 text-center"
          >
            <span className="text-7xl md:text-9xl font-light text-primary tracking-luxury">53 297</span>
            <p className="text-sm tracking-luxury uppercase text-muted-foreground mt-4">m² diseñados y aprobados</p>
          </motion.div>
        </div>
      </section>

      {/* Contact bar */}
      <section className="py-12 bg-secondary border-t border-border/50">
        <div className="px-6 md:px-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-muted-foreground">
            <span>cristina_granda@outlook.com</span>
            <span>09 84 555 979</span>
            <span>@cristina.granda.t</span>
          </div>
          <Link
            to="/"
            className="border border-foreground/40 px-8 py-3 text-xs tracking-luxury uppercase text-foreground/80 hover:bg-foreground/10 transition-all duration-300"
          >
            Volver al inicio
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
