import { ExternalLink, Github, Code, Cloud, Palette, Users, Database, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AdSpace from "@/components/AdSpace";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product catalog, and order management.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      icon: Code,
      technologies: ["React", "Node.js", "MongoDB"],
      colors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800"]
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasting, interactive maps, and detailed weather analytics.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      icon: Cloud,
      technologies: ["React Native", "API Integration", "Geolocation"],
      colors: ["bg-blue-100 text-blue-800", "bg-orange-100 text-orange-800", "bg-indigo-100 text-indigo-800"]
    },
    {
      title: "Task Management System",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      icon: Users,
      technologies: ["Vue.js", "Firebase", "Socket.io"],
      colors: ["bg-blue-100 text-blue-800", "bg-yellow-100 text-yellow-800", "bg-red-100 text-red-800"]
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive analytics platform with real-time data visualization, custom reports, and interactive charts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      icon: Database,
      technologies: ["D3.js", "Express.js", "PostgreSQL"],
      colors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-red-100 text-red-800"]
    },
    {
      title: "Blog Publishing Platform",
      description: "Modern blogging platform with rich text editor, user management, comments system, and SEO optimization.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      icon: Palette,
      technologies: ["Next.js", "Prisma", "Vercel"],
      colors: ["bg-blue-100 text-blue-800", "bg-gray-100 text-gray-800", "bg-green-100 text-green-800"]
    }
  ];

  return (
    <main className="max-w-7xl mx-auto">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Code className="w-12 h-12 text-primary mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-secondary dark:text-white">My Projects</h1>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Explore my portfolio of web applications, mobile apps, and digital solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden card-hover border border-slate-200 dark:border-slate-700">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <project.icon className="w-6 h-6 text-primary mr-2" />
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        className={project.colors[techIndex] || "bg-gray-100 text-gray-800"}
                        variant="secondary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button size="sm" className="flex items-center">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
    </main>
  );
};

export default Projects;
