import { Briefcase, Code, Smartphone, Server, Palette, Rocket, GraduationCap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "SEO-ready websites that load in under 2 seconds and drive up to 40% more leads",
      features: ["98/100 PageSpeed score", "Mobile-first responsive design", "Conversion-optimized layouts"],
      price: "Starting at $2,500",
      color: "text-blue-400"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered designs that increase engagement by 35% and reduce bounce rates by 40%",
      features: ["Data-driven design decisions", "Intuitive user journeys", "A/B tested interfaces"],
      price: "Starting at $2,200",
      color: "text-green-400"
    },
    {
      icon: Smartphone,
      title: "SaaS Development",
      description: "End-to-end SaaS solutions that reduce operational costs by 25% and scale with your business",
      features: ["Scalable architecture", "99.9% uptime guarantee", "Secure data handling"],
      price: "Starting at $3,500",
      color: "text-purple-400"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discovery & Strategy",
      description: "35% more effective project outcomes through comprehensive research and planning"
    },
    {
      step: "2", 
      title: "Design & Prototyping",
      description: "40% higher engagement with user-tested interfaces and interactive prototypes"
    },
    {
      step: "3",
      title: "Development & Testing", 
      description: "98/100 PageSpeed scores through optimized code and rigorous testing"
    },
    {
      step: "4",
      title: "Launch & Support",
      description: "99.9% uptime with continuous monitoring and proactive maintenance"
    }
  ];

  const technologies = {
    frontend: ["React & Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "PostgreSQL", "GraphQL", "Redis"]
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Briefcase className="w-12 h-12 text-blue-400 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Full-Stack Design Expertise</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              <span className="text-white font-semibold">Delivering measurable results</span> through strategic thinking and technical excellence
            </p>
          </div>

          {/* Interactive Progress Demo */}
          <div className="mb-16 bg-gray-800 rounded-lg p-8 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Code className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-white font-medium">Coding in Progress...</span>
              </div>
              <span className="text-blue-400 text-sm">100%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
              <div className="bg-blue-400 h-2 rounded-full w-full"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <Palette className="w-4 h-4 mr-2" />
                  Design Phase
                </h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    User Research
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Wireframing
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    UI Design
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <Server className="w-4 h-4 mr-2" />
                  Development Phase
                </h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Frontend
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Backend
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Testing
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <span className="text-green-400 font-semibold flex items-center justify-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Project Successfully Completed! 🎉
              </span>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-blue-400 font-semibold text-lg mb-4">{service.price}</div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Development Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-4">Our Development Process</h2>
            <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              Results-focused solutions tailored to your specific business goals
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-300">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-16 bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Technologies We Use</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Frontend</h3>
                <div className="space-y-2">
                  {technologies.frontend.map((tech, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Backend</h3>
                <div className="space-y-2">
                  {technologies.backend.map((tech, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">What I Deliver</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              <span className="text-white font-semibold">Results-focused solutions</span> tailored to your specific business goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                View Our Work
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                Free Website Analysis
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;