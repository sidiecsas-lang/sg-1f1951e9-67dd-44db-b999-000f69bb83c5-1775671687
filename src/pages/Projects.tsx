import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, CheckCircle2, Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

interface Project {
  year: string;
  location: string;
  name: string;
  area: string;
  status: "aprobado" | "diseñado" | "construido";
}

const projectsData: Project[] = [
  { year: "2014", location: "Ambato", name: "Conjunto Habitacional Los Quindes", area: "8.968", status: "aprobado" },
  { year: "2015", location: "Quito", name: "Residencia Myriam Cando Peña", area: "115", status: "aprobado" },
  { year: "2016", location: "Quito", name: "Residencia Chablay Trujillo", area: "177", status: "aprobado" },
  { year: "2017", location: "Quito", name: "Edificio San Gregorio Plaza", area: "8.570", status: "aprobado" },
  { year: "2018", location: "Valle de los Chillos", name: "Modificatorio Orquídeas de San Rafael", area: "27.115", status: "aprobado" },
  { year: "2019", location: "Calderón", name: "Residenciales Montresor", area: "877", status: "aprobado" },
  { year: "2019", location: "Quito", name: "Terrazas de Sión", area: "3.511", status: "diseñado" },
  { year: "2019", location: "Quito", name: "Terrazas de Conocoto", area: "792", status: "diseñado" },
  { year: "2020", location: "Cotacachi", name: "La Isla Lodge", area: "862", status: "diseñado" },
  { year: "2020", location: "Guayllabamba", name: "Aquaponic INGSA", area: "274", status: "construido" },
  { year: "2021", location: "Pintag", name: "Residencia Tatiana León", area: "177", status: "aprobado" },
  { year: "2021", location: "Quito", name: "\"Nativa Crops\" Oficinas y Residencial", area: "635", status: "diseñado" },
  { year: "2022", location: "Sangolquí", name: "Residencia Santa Clara", area: "206", status: "aprobado" },
  { year: "2022", location: "Alangasí", name: "Residencia en la Colina", area: "366", status: "diseñado" },
  { year: "2022", location: "Alangasí", name: "Residencia Tragaluz", area: "276", status: "diseñado" },
  { year: "2023", location: "La Merced", name: "Quintas La Merced", area: "509", status: "diseñado" },
  { year: "2024", location: "Guayllabamba", name: "Guayllabamba Gardens", area: "5.289", status: "aprobado" },
  { year: "2023", location: "Alangasí", name: "Residencia Flia Sierra", area: "160", status: "diseñado" },
  { year: "2024", location: "Conocoto", name: "Mirano Valley", area: "510", status: "aprobado" },
  { year: "2023", location: "Conocoto", name: "Residencia Carlos Morales", area: "125", status: "aprobado" },
  { year: "2025", location: "La Armenia", name: "Residencia del Encanto", area: "594", status: "aprobado" },
  { year: "2023", location: "Guayllabamba", name: "Residencia Dorada", area: "", status: "diseñado" },
  { year: "2026", location: "Capelo", name: "Residencias las Retamas", area: "575", status: "aprobado" },
];

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "aprobado" | "diseñado" | "construido">("all");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(p => p.status === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "aprobado": return "bg-accent text-accent-foreground";
      case "diseñado": return "bg-muted text-muted-foreground";
      case "construido": return "bg-primary text-primary-foreground";
      default: return "bg-muted";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "aprobado": return <CheckCircle2 className="w-3 h-3" />;
      case "diseñado": return <Pencil className="w-3 h-3" />;
      case "construido": return <CheckCircle2 className="w-3 h-3" />;
      default: return null;
    }
  };

  const stats = {
    aprobado: projectsData.filter(p => p.status === "aprobado").length,
    diseñado: projectsData.filter(p => p.status === "diseñado").length,
    construido: projectsData.filter(p => p.status === "construido").length,
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
          <h1 className="font-heading text-5xl md:text-7xl mb-4 text-foreground">Proyectos</h1>
          <p className="text-muted-foreground tracking-luxury">Portafolio completo de arquitectura</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-full text-xs tracking-luxury uppercase transition-all ${
                filter === "all" 
                  ? "bg-foreground text-background" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Todos ({projectsData.length})
            </button>
            <button
              onClick={() => setFilter("aprobado")}
              className={`px-6 py-2 rounded-full text-xs tracking-luxury uppercase transition-all ${
                filter === "aprobado" 
                  ? "bg-accent text-accent-foreground" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Aprobados ({stats.aprobado})
            </button>
            <button
              onClick={() => setFilter("diseñado")}
              className={`px-6 py-2 rounded-full text-xs tracking-luxury uppercase transition-all ${
                filter === "diseñado" 
                  ? "bg-muted text-foreground" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Diseñados ({stats.diseñado})
            </button>
            <button
              onClick={() => setFilter("construido")}
              className={`px-6 py-2 rounded-full text-xs tracking-luxury uppercase transition-all ${
                filter === "construido" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Construidos ({stats.construido})
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-card border border-border hover:border-foreground/20 transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground">{project.year}</span>
                    </div>
                    <Badge className={`${getStatusColor(project.status)} flex items-center gap-1 text-xs`}>
                      {getStatusIcon(project.status)}
                      {project.status}
                    </Badge>
                  </div>

                  <h3 className="font-heading text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    {project.area && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <span className="font-medium">Área:</span>
                        <span>{project.area} m²</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;