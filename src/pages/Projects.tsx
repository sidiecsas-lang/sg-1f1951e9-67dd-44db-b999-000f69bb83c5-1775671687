import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Home, Hotel, TreePine } from "lucide-react";
import { useEffect } from "react";

interface ProjectDetail {
  year: string;
  name: string;
  type: string;
  units?: string;
  floors: string;
  area: string;
  location: string;
  category: "residential" | "commercial" | "mixed";
}

const projectsTimeline: ProjectDetail[] = [
  {
    year: "2014",
    name: "Conjunto Habitacional \"Los Quindes\"",
    type: "Conjunto Habitacional",
    units: "70 viviendas",
    floors: "2 pisos",
    area: "8.968 m²",
    location: "Ambato, Ecuador",
    category: "residential"
  },
  {
    year: "2015",
    name: "Residencia \"Myriam Cando Peña\"",
    type: "Residencia Unifamiliar",
    floors: "2 pisos",
    area: "115 m²",
    location: "Quito, Ecuador",
    category: "residential"
  },
  {
    year: "2016",
    name: "Residencia \"Chablay Trujillo\"",
    type: "Residencia Multifamiliar",
    units: "3 unidades",
    floors: "3 pisos",
    area: "177 m²",
    location: "Quito, Ecuador",
    category: "residential"
  },
  {
    year: "2017",
    name: "Edificio \"San Gregorio Plaza\"",
    type: "Edificio Residencial",
    units: "47 unidades",
    floors: "8 pisos y 3 subsuelos de parqueaderos",
    area: "8.570 m²",
    location: "Quito, Ecuador",
    category: "residential"
  },
  {
    year: "2018",
    name: "Modificatorio \"Orquídeas de San Rafael\"",
    type: "Conjunto Habitacional",
    units: "156 viviendas",
    floors: "2 pisos",
    area: "27.115 m²",
    location: "Quito, Ecuador",
    category: "residential"
  },
  {
    year: "2019",
    name: "\"Residenciales Montresor\"",
    type: "Conjunto Habitacional",
    units: "8 residencias",
    floors: "2 pisos",
    area: "877 m²",
    location: "Quito, Ecuador",
    category: "residential"
  },
  {
    year: "2019",
    name: "\"Terrazas de Sión\"",
    type: "Conjunto Habitacional",
    units: "21 unidades",
    floors: "4 pisos y 1 subsuelo de parqueaderos",
    area: "3.511 m²",
    location: "Quito, Ecuador",
    category: "residential"
  },
  {
    year: "2019",
    name: "\"Terrazas de Conocoto\"",
    type: "Conjunto Habitacional",
    units: "6 unidades",
    floors: "4 pisos",
    area: "792 m²",
    location: "Quito, Ecuador",
    category: "residential"
  },
  {
    year: "2020",
    name: "\"La Isla\" Lodge",
    type: "Complejo Hotel Lodge",
    floors: "1 y 2 pisos",
    area: "862 m²",
    location: "Cotacachi, Ecuador",
    category: "commercial"
  },
  {
    year: "2020",
    name: "\"Aquaponic INGSA\"",
    type: "Complejo y Residencial",
    floors: "1 y 2 pisos",
    area: "274 m²",
    location: "Guayllabamba, Ecuador",
    category: "mixed"
  },
  {
    year: "2021",
    name: "Residencia \"Tatiana León\"",
    type: "Residencia Multifamiliar",
    units: "2 unidades",
    floors: "3 pisos",
    area: "177 m²",
    location: "Quito, Ecuador",
    category: "residential"
  },
  {
    year: "2021",
    name: "\"Nativa Crops\" Oficinas y Residencial",
    type: "Oficinas y Residencial",
    units: "5 unidades",
    floors: "4 pisos",
    area: "635 m²",
    location: "Quito, Ecuador",
    category: "mixed"
  }
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "residential": return <Home className="w-5 h-5" />;
      case "commercial": return <Hotel className="w-5 h-5" />;
      case "mixed": return <Building2 className="w-5 h-5" />;
      default: return <Building2 className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "residential": return "bg-accent/10 text-accent-foreground border-accent/20";
      case "commercial": return "bg-primary/10 text-primary-foreground border-primary/20";
      case "mixed": return "bg-muted text-muted-foreground border-border";
      default: return "bg-muted";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[40vh] bg-gradient-to-b from-muted/30 to-background flex items-center justify-center">
        <div className="absolute top-8 left-6 md:left-12">
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={16} />
            <span className="tracking-luxury uppercase">Volver</span>
          </Link>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-6"
        >
          <h1 className="font-heading text-5xl md:text-7xl mb-4 text-foreground">Proyectos de Planificación</h1>
          <p className="text-muted-foreground tracking-luxury">Arquitectónica 2014 - 2021</p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[29px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-muted" />

            <div className="space-y-12">
              {projectsTimeline.map((project, index) => (
                <motion.div
                  key={`${project.name}-${index}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[22px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10" />

                  {/* Year badge */}
                  <div className={`hidden md:block absolute left-1/2 -translate-x-1/2 -top-2 ${
                    index % 2 === 0 ? "" : ""
                  }`}>
                    <div className="bg-foreground text-background px-4 py-1 rounded-full text-xs font-medium tracking-luxury">
                      {project.year}
                    </div>
                  </div>

                  {/* Spacer for desktop alignment */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content card */}
                  <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}>
                    <div className={`group bg-card border ${getCategoryColor(project.category)} hover:border-foreground/30 transition-all duration-300 overflow-hidden`}>
                      <div className="p-6">
                        {/* Mobile year */}
                        <div className="md:hidden mb-3 flex items-center gap-2">
                          <div className="bg-foreground text-background px-3 py-1 rounded-full text-xs font-medium tracking-luxury">
                            {project.year}
                          </div>
                        </div>

                        {/* Category icon */}
                        <div className="flex items-start justify-between mb-4">
                          <div className={`p-2 rounded-lg ${getCategoryColor(project.category)}`}>
                            {getCategoryIcon(project.category)}
                          </div>
                        </div>

                        {/* Project name */}
                        <h3 className="font-heading text-xl md:text-2xl mb-2 text-foreground group-hover:text-primary transition-colors">
                          {project.name}
                        </h3>

                        {/* Project type */}
                        <p className="text-sm text-muted-foreground font-medium mb-4 tracking-luxury uppercase">
                          {project.type}
                        </p>

                        {/* Project details */}
                        <div className="space-y-2 text-sm">
                          {project.units && (
                            <div className="flex items-center gap-2">
                              <span className="text-muted-foreground">•</span>
                              <span className="text-foreground">{project.units}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <span className="text-muted-foreground">•</span>
                            <span className="text-foreground">{project.floors}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-muted-foreground">•</span>
                            <span className="text-foreground font-medium">{project.area} área Bruta</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <TreePine className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{project.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Accent line */}
                      <div className="h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-accent/10 border border-accent/20 p-6 text-center">
              <div className="text-4xl font-heading text-foreground mb-2">{projectsTimeline.filter(p => p.category === "residential").length}</div>
              <div className="text-sm tracking-luxury uppercase text-muted-foreground">Proyectos Residenciales</div>
            </div>
            <div className="bg-primary/10 border border-primary/20 p-6 text-center">
              <div className="text-4xl font-heading text-foreground mb-2">{projectsTimeline.filter(p => p.category === "commercial").length}</div>
              <div className="text-sm tracking-luxury uppercase text-muted-foreground">Proyectos Comerciales</div>
            </div>
            <div className="bg-muted border border-border p-6 text-center">
              <div className="text-4xl font-heading text-foreground mb-2">{projectsTimeline.filter(p => p.category === "mixed").length}</div>
              <div className="text-sm tracking-luxury uppercase text-muted-foreground">Proyectos Mixtos</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;