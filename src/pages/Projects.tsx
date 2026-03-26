<![CDATA[
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Home, Hotel, TreePine, X, Calendar, MapPin, Layers, Maximize, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectDetail {
  year: string;
  name: string;
  type: string;
  units?: string;
  floors: string;
  area: string;
  location: string;
  category: "residential" | "commercial" | "mixed";
  image: string;
}

const projectsTimeline: ProjectDetail[] = [
  {
    year: "2014",
    name: 'Conjunto Habitacional "Los Quindes"',
    type: "Conjunto Habitacional",
    units: "70 viviendas",
    floors: "2 pisos",
    area: "8.968 m²",
    location: "Ambato, Ecuador",
    category: "residential",
    image: "/LasRetamas.jpg"
  },
  {
    year: "2015",
    name: 'Residencia "Myriam Cando Peña"',
    type: "Residencia Unifamiliar",
    floors: "2 pisos",
    area: "115 m²",
    location: "Quito, Ecuador",
    category: "residential",
    image: "/ReresidenciaDelEncanto.jpg"
  },
  {
    year: "2016",
    name: 'Residencia "Chablay Trujillo"',
    type: "Residencia Multifamiliar",
    units: "3 unidades",
    floors: "3 pisos",
    area: "177 m²",
    location: "Quito, Ecuador",
    category: "residential",
    image: "/ResidenciaSantaClara.png"
  },
  {
    year: "2017",
    name: 'Edificio "San Gregorio Plaza"',
    type: "Edificio Residencial",
    units: "47 unidades",
    floors: "8 pisos y 3 subsuelos",
    area: "8.570 m²",
    location: "Quito, Ecuador",
    category: "residential",
    image: "/ResidenciaMantoVerde.jpg"
  },
  {
    year: "2018",
    name: 'Modificatorio "Orquídeas de San Rafael"',
    type: "Conjunto Habitacional",
    units: "156 viviendas",
    floors: "2 pisos",
    area: "27.115 m²",
    location: "Quito, Ecuador",
    category: "residential",
    image: "/VillaLago.jpg"
  },
  {
    year: "2019",
    name: '"Residenciales Montresor"',
    type: "Conjunto Habitacional",
    units: "8 residencias",
    floors: "2 pisos",
    area: "877 m²",
    location: "Quito, Ecuador",
    category: "residential",
    image: "/ResidenciaUnSoloAndar.jpg"
  },
  {
    year: "2019",
    name: '"Terrazas de Sión"',
    type: "Conjunto Habitacional",
    units: "21 unidades",
    floors: "4 pisos y 1 subsuelo",
    area: "3.511 m²",
    location: "Quito, Ecuador",
    category: "residential",
    image: "/ResidenciaDorada.png"
  },
  {
    year: "2019",
    name: '"Terrazas de Conocoto"',
    type: "Conjunto Habitacional",
    units: "6 unidades",
    floors: "4 pisos",
    area: "792 m²",
    location: "Quito, Ecuador",
    category: "residential",
    image: "/ResidenciaDeUnMusico.png"
  },
  {
    year: "2020",
    name: '"La Isla" Lodge',
    type: "Complejo Hotel Lodge",
    floors: "1 y 2 pisos",
    area: "862 m²",
    location: "Cotacachi, Ecuador",
    category: "commercial",
    image: "/LaCasaDelPrioste.jpg"
  },
  {
    year: "2020",
    name: '"Aquaponic INGSA"',
    type: "Complejo y Residencial",
    floors: "1 y 2 pisos",
    area: "274 m²",
    location: "Guayllabamba, Ecuador",
    category: "mixed",
    image: "/ResidenciaTragaluz.png"
  },
  {
    year: "2021",
    name: 'Residencia "Tatiana León"',
    type: "Residencia Multifamiliar",
    units: "2 unidades",
    floors: "3 pisos",
    area: "177 m²",
    location: "Quito, Ecuador",
    category: "residential",
    image: "/GuayllabambaGardens.png"
  },
  {
    year: "2021",
    name: '"Nativa Crops" Oficinas',
    type: "Oficinas y Residencial",
    units: "5 unidades",
    floors: "4 pisos",
    area: "635 m²",
    location: "Quito, Ecuador",
    category: "mixed",
    image: "/MarinoValley.jpg"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [filterYear, setFilterYear] = useState<string>("all");
  const [filterCategory, setFilterCategory] = useState<string>("all");

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

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "residential": return "Residencial";
      case "commercial": return "Comercial";
      case "mixed": return "Mixto";
      default: return category;
    }
  };

  const uniqueYears = Array.from(new Set(projectsTimeline.map(p => p.year))).sort();
  
  const filteredProjects = projectsTimeline.filter(project => {
    const yearMatch = filterYear === "all" || project.year === filterYear;
    const categoryMatch = filterCategory === "all" || project.category === filterCategory;
    return yearMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[40vh] bg-gradient-to-b from-muted/30 to-background flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
           <img src="/LasRetamas.jpg" alt="Background" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="absolute top-8 left-6 md:left-12 z-10">
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={16} />
            <span className="tracking-luxury uppercase">Volver</span>
          </Link>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-6 relative z-10"
        >
          <h1 className="font-heading text-5xl md:text-7xl mb-4 text-foreground drop-shadow-md">Proyectos Arquitectónicos</h1>
          <p className="text-muted-foreground tracking-luxury uppercase">Planificación 2014 - 2021</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 space-y-6"
        >
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filtro por año */}
            <div className="flex-1">
              <label className="text-sm tracking-luxury uppercase text-muted-foreground mb-4 block">
                Filtrar por Año
              </label>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={filterYear === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterYear("all")}
                  className="tracking-luxury"
                >
                  Todos
                </Button>
                {uniqueYears.map(year => (
                  <Button
                    key={year}
                    variant={filterYear === year ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterYear(year)}
                    className="tracking-luxury"
                  >
                    {year}
                  </Button>
                ))}
              </div>
            </div>

            {/* Filtro por categoría */}
            <div className="flex-1">
              <label className="text-sm tracking-luxury uppercase text-muted-foreground mb-4 block">
                Filtrar por Tipo
              </label>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={filterCategory === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterCategory("all")}
                  className="tracking-luxury"
                >
                  Todos
                </Button>
                <Button
                  variant={filterCategory === "residential" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterCategory("residential")}
                  className="tracking-luxury"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Residencial
                </Button>
                <Button
                  variant={filterCategory === "commercial" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterCategory("commercial")}
                  className="tracking-luxury"
                >
                  <Hotel className="w-4 h-4 mr-2" />
                  Comercial
                </Button>
                <Button
                  variant={filterCategory === "mixed" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterCategory("mixed")}
                  className="tracking-luxury"
                >
                  <Building2 className="w-4 h-4 mr-2" />
                  Mixto
                </Button>
              </div>
            </div>
          </div>

          <div className="text-sm text-muted-foreground tracking-luxury pt-4 border-t border-border/50">
            Mostrando {filteredProjects.length} de {projectsTimeline.length} proyectos
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            <div className="space-y-24">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={`${project.name}-${index}`}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                    className={`relative flex items-center gap-8 md:gap-16 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col md:items-center`}
                  >
                    {/* Timeline dot central */}
                    <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-8 ring-background z-10 hidden md:block" />

                    {/* El Lado del Año (Opuesto a la tarjeta en desktop) */}
                    <div className={`hidden md:flex w-1/2 ${index % 2 === 0 ? "justify-end text-right" : "justify-start text-left"}`}>
                      <div className="font-heading text-7xl md:text-8xl lg:text-[10rem] font-bold text-muted/20 select-none">
                        {project.year}
                      </div>
                    </div>

                    {/* Tarjeta del Proyecto */}
                    <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}>
                      {/* Punto para móvil */}
                      <div className="absolute left-8 -translate-x-[5.5px] top-6 w-3 h-3 rounded-full bg-primary ring-8 ring-background z-10 md:hidden" />

                      <button
                        onClick={() => setSelectedProject(project)}
                        className={`w-full text-left group bg-card border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden cursor-pointer rounded-xl shadow-sm hover:shadow-xl`}
                      >
                        {/* Imagen de la tarjeta */}
                        <div className="relative h-64 w-full overflow-hidden bg-muted">
                           <img 
                             src={project.image} 
                             alt={project.name} 
                             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                           />
                           {/* Overlay gradiente */}
                           <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                           
                           {/* Año en móvil (dentro de la imagen) */}
                           <div className="absolute top-4 right-4 md:hidden bg-background/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-border shadow-sm">
                             <span className="font-heading font-bold text-primary">{project.year}</span>
                           </div>

                           <div className="absolute bottom-4 left-4 right-4">
                             <Badge variant="outline" className={`mb-3 backdrop-blur-md bg-background/80 ${getCategoryColor(project.category)}`}>
                               {getCategoryIcon(project.category)}
                               <span className="ml-2">{getCategoryLabel(project.category)}</span>
                             </Badge>
                             <h3 className="font-heading text-2xl text-foreground group-hover:text-primary transition-colors line-clamp-2">
                               {project.name}
                             </h3>
                           </div>
                        </div>

                        <div className="p-6">
                          <p className="text-sm text-muted-foreground font-medium mb-5 tracking-luxury uppercase">
                            {project.type}
                          </p>

                          {/* Project details grid */}
                          <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="w-4 h-4 text-primary/70" />
                              <span className="truncate">{project.location.split(',')[0]}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Maximize className="w-4 h-4 text-primary/70" />
                              <span>{project.area}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Layers className="w-4 h-4 text-primary/70" />
                              <span className="truncate">{project.floors}</span>
                            </div>
                            {project.units && (
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Home className="w-4 h-4 text-primary/70" />
                                <span>{project.units}</span>
                              </div>
                            )}
                          </div>

                          {/* Ver más indicador */}
                          <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                            <span className="text-xs text-muted-foreground tracking-luxury uppercase group-hover:text-primary transition-colors">
                              Ver detalles completos
                            </span>
                            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                        </div>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal de detalles del proyecto */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card border border-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Contenido scrolleable */}
              <div className="overflow-y-auto flex-1">
                {/* Header Image */}
                <div className="relative h-64 md:h-80 w-full bg-muted">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  
                  {/* Botón cerrar flotante */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-background/50 hover:bg-background backdrop-blur-md rounded-full text-foreground transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="px-6 md:px-10 pb-10">
                  {/* Título (superpuesto a la imagen) */}
                  <div className="-mt-16 relative z-10 mb-8">
                    <Badge className={`mb-4 shadow-md ${getCategoryColor(selectedProject.category)}`}>
                      {getCategoryIcon(selectedProject.category)}
                      <span className="ml-2 tracking-luxury uppercase text-xs">
                        {getCategoryLabel(selectedProject.category)}
                      </span>
                    </Badge>
                    <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-3 leading-tight">
                      {selectedProject.name}
                    </h2>
                    <p className="text-muted-foreground tracking-luxury uppercase text-sm md:text-base font-medium">
                      {selectedProject.type}
                    </p>
                  </div>

                  {/* Detalles principales */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 bg-muted/30 p-6 rounded-xl border border-border">
                    <div className="space-y-1">
                      <div className="text-xs tracking-luxury uppercase text-muted-foreground flex items-center gap-1.5 mb-2">
                        <Calendar className="w-3.5 h-3.5" /> Año
                      </div>
                      <div className="text-foreground font-semibold text-lg">{selectedProject.year}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs tracking-luxury uppercase text-muted-foreground flex items-center gap-1.5 mb-2">
                        <MapPin className="w-3.5 h-3.5" /> Ubicación
                      </div>
                      <div className="text-foreground font-semibold">{selectedProject.location}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs tracking-luxury uppercase text-muted-foreground flex items-center gap-1.5 mb-2">
                        <Maximize className="w-3.5 h-3.5" /> Área
                      </div>
                      <div className="text-foreground font-semibold text-lg">{selectedProject.area}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs tracking-luxury uppercase text-muted-foreground flex items-center gap-1.5 mb-2">
                        <Layers className="w-3.5 h-3.5" /> Pisos
                      </div>
                      <div className="text-foreground font-semibold">{selectedProject.floors}</div>
                    </div>
                  </div>

                  {/* Descripción del proyecto */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <h3 className="text-sm tracking-luxury uppercase text-muted-foreground mb-4">
                        Descripción del Proyecto
                      </h3>
                      <div className="text-foreground leading-relaxed space-y-4">
                        <p>
                          Espectacular proyecto de planificación arquitectónica de tipo <strong>{selectedProject.type.toLowerCase()}</strong> ubicado estratégicamente en <strong>{selectedProject.location}</strong>.
                        </p>
                        <p>
                          El desarrollo {selectedProject.units ? `contempla la creación de ${selectedProject.units.toLowerCase()}` : `está diseñado`} en una estructura de <strong>{selectedProject.floors.toLowerCase()}</strong>, alcanzando un área bruta total de <strong>{selectedProject.area}</strong>.
                        </p>
                        <p className="text-muted-foreground">
                          Cada detalle ha sido cuidadosamente planificado para maximizar la funcionalidad del espacio y la integración con el entorno, marcando un hito en el portafolio arquitectónico del año {selectedProject.year}.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm tracking-luxury uppercase text-muted-foreground mb-4">
                        Especificaciones
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-background border border-border p-4 rounded-lg shadow-sm">
                          <div className="text-xs text-muted-foreground mb-1">Categoría</div>
                          <div className="text-foreground font-medium capitalize">{getCategoryLabel(selectedProject.category)}</div>
                        </div>
                        {selectedProject.units && (
                          <div className="bg-background border border-border p-4 rounded-lg shadow-sm">
                            <div className="text-xs text-muted-foreground mb-1">Capacidad</div>
                            <div className="text-foreground font-medium">{selectedProject.units}</div>
                          </div>
                        )}
                        <Button 
                          onClick={() => setSelectedProject(null)}
                          className="w-full mt-4 tracking-luxury"
                          variant="outline"
                        >
                          Cerrar Detalles
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
]]>

[Tool result trimmed: kept first 100 chars and last 100 chars of 15206 chars.]