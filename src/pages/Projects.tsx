import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Home, Hotel, X, Calendar, MapPin, Layers, Maximize, ExternalLink, Youtube } from "lucide-react";
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
  image?: string;
  description: string;
  youtubeUrl: string;
}

const projectsTimeline: ProjectDetail[] = [
  {
    year: "2022",
    name: 'Residencia Santa Clara',
    type: "Residencia",
    floors: "2 pisos",
    area: "206 m²",
    location: "Sangolquí, Ecuador",
    category: "residential",
    image: "/ResidenciaSantaClara.png",
    description: 'En un terreno de 12.5 x 20 metros se desarrolla esta residencia en Santa Clara, un proyecto marcado por formas Victorianas para el diseño exterior, al tiempo que emana líneas minimalitas en el interior que incluyen espacios a doble altura envolventes. Esta urbanización que nos marcó las directrices de diseño, también nos dió hermosas visuales. El programa arquitectónico incluye áreas exteriores como el BBQ y parqueadero cubierto. Resultando un diseño armonioso con el entorno urbano y funcional con los requerimientos espaciales del propietario.',
    youtubeUrl: 'https://www.youtube.com/watch?v=ogOUThVsoNM&t=14s'
  },
  {
    year: "2022",
    name: 'La Casa del Prioste',
    type: "Residencia",
    floors: "2 pisos",
    area: "456 m²",
    location: "Atahuallpa, Ecuador",
    category: "residential",
    image: "/LaCasaDelPrioste.jpg",
    description: 'En el maravilloso pueblo de Atahuallpa nos encontramos con un terreno de 1000 m2 en forma de "T" invertida, siendo la parte frontal más estrecha que la posterior, con un frente de 12 metros y un posterior de 38 metros. Siendo así, decidimos implantar la vivienda justo en la mitad del terreno, darle vocación a cada uno de los patios resultantes y unir los dos bloques de esta residencia con un puente elevado que lleva al dormitorio máster, para así también garantizar el acceso vehicular hacia el patio posterior y darle total privacidad al dormitorio principal.',
    youtubeUrl: 'https://www.youtube.com/watch?v=LNJspDfO4qA'
  },
  {
    year: "2022",
    name: 'Residencia Tragaluz',
    type: "Residencia",
    floors: "2 pisos",
    area: "276 m²",
    location: "Alangasí, Ecuador",
    category: "residential",
    image: "/ResidenciaTragaluz.png",
    description: 'Amamos los terreno a desnivel, estos permiten generar volúmenes y funciones nuevas en lugares inesperados, como es el caso de los parqueaderos en subsuelos para esta residencia minimalista de 276m2 implantada en un terreno de 600m2.',
    youtubeUrl: 'https://www.youtube.com/watch?v=PKK7rYcnSsU'
  },
  {
    year: "2023",
    name: 'Residencia Flia Sierra (Un solo Andar)',
    type: "Residencia",
    floors: "2 pisos",
    area: "160 m²",
    location: "Alangasí, Ecuador",
    category: "residential",
    image: "/ResidenciaUnSoloAndar.jpg",
    description: 'La pureza de materiales predomina en esta composición de concepto minimallista cálido. Es una residencia de una sola planta con subsuelo, son 160 m2 en un terreno de 830 m2.',
    youtubeUrl: 'https://www.youtube.com/watch?v=XZBCjgB_DQE'
  },
  {
    year: "2023",
    name: 'Residencia Dorada',
    type: "Residencia",
    floors: "2 pisos",
    area: "340 m²",
    location: "Guayllabamba, Ecuador",
    category: "residential",
    image: "/ResidenciaDorada.png",
    description: 'Una Residencia de 340m2 diseñada para una hermosa pareja que se encuentra en sus años dorados, el maravilloso dormitorio master en planta baja contiene todos los servicio y accesos necesarios para dar mayor flexibilidad de uso y facilidad de ingreso a sus ocupantes, mientras que en planta alta se destinan espacios para visitas con terraza abierta junto a un estudio con vista panorámica de ensueño. Es un terreno de 484m2 con curvatura en el frente, esta forma particular nos genera una implantación inigualable con perspectivas únicas y singulares desde cada uno de los ambientes.',
    youtubeUrl: 'https://www.youtube.com/watch?v=ehLMdjWXbaw&t=67s'
  },
  {
    year: "2024",
    name: 'Guayllabamba Gardens',
    type: "Conjunto Habitacional",
    units: "39 viviendas",
    floors: "2 pisos",
    area: "5.289 m²",
    location: "Guayllabamba, Ecuador",
    category: "residential",
    image: "/GuayllabambaGardens.png",
    description: '“Guayllabamba Gardens” se ubica en la parroquia de Guayllabamba del Distrito Metropolitano de Quito. El Conjunto cuenta con 39 viviendas en un terreno de 22572 m2. Se proyectan viviendas de 2 pisos aisladas de varias tipologías y metrajes. Siendo predominante el producto VIP, viviendas en 94 m2.',
    youtubeUrl: 'https://www.youtube.com/watch?v=cAF7_r8ur3M'
  },
  {
    year: "2024",
    name: 'Mirano Valley',
    type: "Conjunto Habitacional",
    floors: "3 pisos",
    area: "510 m²",
    location: "Conocoto, Ecuador",
    category: "residential",
    image: "/MarinoValley.jpg",
    description: 'En un terreno de 600 m2 hemos diseñado este proyecto inmobiliario en la ciudad de Quito, Valle de los chillos. Son viviendas de 100 m2 en 3 plantas. Hemos aprovechado el terreno y sus retiros al máximo posible, el resultado es increíble.',
    youtubeUrl: 'https://www.youtube.com/watch?v=8GWdgnPiOY8'
  },
  {
    year: "2025",
    name: 'Residencia del Encanto',
    type: "Residencia",
    floors: "2 pisos",
    area: "594 m²",
    location: "La Armenia, Ecuador",
    category: "residential",
    image: "/ReresidenciaDelEncanto.jpg",
    description: 'En un terreno de 24m x 40 se desarrolla una vivienda para una joven familia con necesidades propias del día a día, pero pensada también en el desarrollo y crecimiento de sus pequeños niños. Con un Home Office de ensueño en donde las áreas de trabajo se conjugan con las de entretenimiento, en este caso la Música. Un diseño que ha cuidado cada detalle y requerimiento, sin descuidar la forma, funcionalidad y estética propia de la arquitectura del valle de Quito - Ecuador.',
    youtubeUrl: 'https://www.youtube.com/watch?v=4i6sbW0LLt8&t=2s'
  },
  {
    year: "2026",
    name: 'Residencias las Retamas',
    type: "Residencia",
    floors: "2 pisos",
    area: "575 m²",
    location: "Capelo, Ecuador",
    category: "residential",
    image: "/LasRetamas.jpg",
    description: 'Dos modernas residencias de 215 m2 en dos plantas, desarrolladas en un terreno de 20 m de frente por 50 m de profundidad. El minimalismo de sus lineas rectas se conjungan con dobles alturas, con balcones y volados que trabajan en conjunto de acuerdo al soleamiento de este bello predio ubicado en Sangolqui - Ecuador.',
    youtubeUrl: 'https://www.youtube.com/watch?v=a4BeSTizz5U&t=2s'
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
        <div className="absolute inset-0 z-0 opacity-20">
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
          <p className="text-muted-foreground tracking-luxury uppercase">Planificación 2022 - 2026</p>
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

                    {/* El Lado del Año */}
                    <div className={`hidden md:flex w-1/2 ${index % 2 === 0 ? "justify-end text-right" : "justify-start text-left"}`}>
                      <div className="font-heading text-7xl md:text-8xl lg:text-[10rem] font-bold text-foreground/30 select-none drop-shadow-sm">
                        {project.year}
                      </div>
                    </div>

                    {/* Tarjeta del Proyecto */}
                    <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}>
                      {/* Punto para móvil */}
                      <div className="absolute left-8 -translate-x-[5.5px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary ring-8 ring-background z-10 md:hidden" />

                      <button
                        onClick={() => setSelectedProject(project)}
                        className={`w-full text-left group bg-card border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden cursor-pointer rounded-xl shadow-sm hover:shadow-xl`}
                      >
                        {/* Imagen de la tarjeta */}
                        <div className="relative h-64 w-full overflow-hidden bg-muted flex items-center justify-center">
                           {project.image ? (
                             <img 
                               src={project.image} 
                               alt={project.name} 
                               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                             />
                           ) : (
                             <div className="w-full h-full bg-muted/50 flex flex-col items-center justify-center text-muted-foreground/30 transition-transform duration-700 group-hover:scale-105">
                                <Building2 className="w-20 h-20 mb-4 opacity-50" />
                                <span className="text-xs tracking-luxury uppercase">Próximamente</span>
                             </div>
                           )}

                           {/* Overlay gradiente */}
                           <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                           
                           {/* Año en móvil (dentro de la imagen) */}
                           <div className="absolute top-4 right-4 md:hidden bg-background/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-border shadow-sm z-20">
                             <span className="font-heading font-bold text-primary">{project.year}</span>
                           </div>

                           <div className="absolute bottom-4 left-4 right-4 z-20">
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
                <div className="relative h-64 md:h-80 w-full bg-muted flex items-center justify-center">
                  {selectedProject.image ? (
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted/50 flex flex-col items-center justify-center text-muted-foreground/30">
                      <Building2 className="w-32 h-32 mb-4 opacity-30" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  
                  {/* Botón cerrar flotante */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-background/50 hover:bg-background backdrop-blur-md rounded-full text-foreground transition-all z-20"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="px-6 md:px-10 pb-10">
                  {/* Título */}
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
                        <Maximize className="w-3.5 h-3.5" /> Área Bruta
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
                        <p>{selectedProject.description}</p>
                      </div>
                      
                      <div className="mt-8">
                        <a 
                          href={selectedProject.youtubeUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block"
                        >
                          <Button variant="outline" className="group border-border hover:border-primary/50 hover:bg-primary/5 text-foreground flex items-center gap-2 tracking-luxury transition-all duration-300">
                            <Youtube className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            Ver Video en YouTube
                          </Button>
                        </a>
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