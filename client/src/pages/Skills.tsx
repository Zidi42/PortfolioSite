import { Brain, Code, Smartphone, Server, Database, Palette, Target, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const Skills = () => {
  const skillCategories = [
    {
      icon: Target,
      title: "Strategy & Planning",
      description: "Increase ROI by 35% with strategic planning and roadmap development that aligns with your business goals.",
      skills: ["Market Research", "User Analysis", "Competitive Analysis", "ROI Planning"]
    },
    {
      icon: Palette,
      title: "UI/UX Design", 
      description: "Boost conversions by 40% with user-centered design that transforms visitors into customers.",
      skills: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: Code,
      title: "Development",
      description: "Achieve 98/100 PageSpeed scores with modern technologies and performance optimization.",
      skills: ["React/Next.js", "Node.js", "TypeScript", "API Development"]
    },
    {
      icon: Database,
      title: "Database Architecture",
      description: "Reduce query times by 60% with robust database design and implementation for scalable applications.",
      skills: ["Schema Design", "Data Modeling", "Query Optimization", "Migration Strategy"]
    },
    {
      icon: Server,
      title: "Security & Performance",
      description: "Protect user data with enterprise-grade security measures and 99.9% uptime guarantee.",
      skills: ["Security Audits", "Performance Testing", "Load Balancing", "Caching Strategy"]
    },
    {
      icon: Users,
      title: "AI Integration",
      description: "Automate 60% of manual tasks with AI solutions that enhance user experiences and business operations.",
      skills: ["AI/ML Integration", "Natural Language", "Computer Vision", "Predictive Analytics"]
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Brain className="w-12 h-12 text-blue-400 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Full-Stack Design Expertise</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              <span className="text-white font-semibold">Delivering measurable results</span> through strategic thinking and technical excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                    <category.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        className="bg-blue-600/20 text-blue-400 border-blue-600/30"
                        variant="secondary"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

                       <div className="text-center">
            
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to join our satisfied clients?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700">Start Your Project</Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  View Our Work
                </Button>
              </Link>
               <Link href="/websiteanalysis">
          <Button
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
          >
            Free Website Analysis
          </Button>
        </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Skills;