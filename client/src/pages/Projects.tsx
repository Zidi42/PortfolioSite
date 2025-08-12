import { ExternalLink, Github, Code, Cloud, Database, Smartphone, Globe, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product catalog, and order management.",
      icon: Globe,
      technologies: ["React", "Node.js", "MongoDB"],
      colors: ["bg-blue-600/20 text-blue-400", "bg-green-600/20 text-green-400", "bg-purple-600/20 text-purple-400"],
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/muhammadzahid/ecommerce"
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasting, interactive maps, and detailed weather analytics.",
      icon: Cloud,
      technologies: ["React Native", "API Integration", "Geolocation"],
      colors: ["bg-blue-600/20 text-blue-400", "bg-orange-600/20 text-orange-400", "bg-indigo-600/20 text-indigo-400"],
      liveUrl: "https://weather-app-demo.com",
      githubUrl: "https://github.com/muhammadzahid/weather-app"
    },
    {
      title: "Task Management System",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      icon: Users,
      technologies: ["Vue.js", "Firebase", "Socket.io"],
      colors: ["bg-blue-600/20 text-blue-400", "bg-yellow-600/20 text-yellow-400", "bg-red-600/20 text-red-400"],
      liveUrl: "https://taskmanager-demo.com",
      githubUrl: "https://github.com/muhammadzahid/task-manager"
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive analytics platform with real-time data visualization, custom reports, and interactive charts.",
      icon: Database,
      technologies: ["D3.js", "Express.js", "PostgreSQL"],
      colors: ["bg-blue-600/20 text-blue-400", "bg-green-600/20 text-green-400", "bg-red-600/20 text-red-400"],
      liveUrl: "https://analytics-dashboard.com",
      githubUrl: "https://github.com/muhammadzahid/analytics"
    },
    {
      title: "Blog Publishing Platform",
      description: "Modern blogging platform with rich text editor, user management, comments system, and SEO optimization.",
      icon: Code,
      technologies: ["Next.js", "Prisma", "Vercel"],
      colors: ["bg-blue-600/20 text-blue-400", "bg-gray-600/20 text-gray-400", "bg-green-600/20 text-green-400"],
      liveUrl: "https://blog-platform-demo.com",
      githubUrl: "https://github.com/muhammadzahid/blog-platform"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, transaction history, and real-time notifications.",
      icon: Smartphone,
      technologies: ["React Native", "TypeScript", "Firebase"],
      colors: ["bg-blue-600/20 text-blue-400", "bg-purple-600/20 text-purple-400", "bg-yellow-600/20 text-yellow-400"],
      liveUrl: "https://banking-app-demo.com",
      githubUrl: "https://github.com/muhammadzahid/banking-app"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Code className="w-12 h-12 text-blue-400 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Featured Projects</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore real results from our recent projects. Each solution delivered 
              <span className="text-white font-semibold"> measurable business impact</span> for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-white">
                    <project.icon className="w-6 h-6 text-blue-400 mr-2" />
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        className={project.colors[techIndex] || "bg-gray-600/20 text-gray-400"}
                        variant="secondary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Read Case Study →
                      </Button>
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                        <Github className="w-4 h-4 mr-1" />
                        View Live Website
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                View All Projects →
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;