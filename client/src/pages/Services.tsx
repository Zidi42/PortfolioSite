import { Briefcase, Code, Smartphone, Server, Palette, Rocket, GraduationCap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AdSpace from "@/components/AdSpace";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices for optimal performance and user experience.",
      features: ["Responsive Design", "React/Vue.js Development", "API Integration", "Performance Optimization"],
      price: "Starting at $2,500",
      color: "text-blue-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications that deliver native performance and seamless user experiences.",
      features: ["React Native", "Cross-platform Solutions", "App Store Deployment", "Push Notifications"],
      price: "Starting at $3,500",
      color: "text-green-600"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Robust server-side solutions with scalable architecture and secure API development.",
      features: ["Node.js/Express", "Database Design", "REST/GraphQL APIs", "Cloud Deployment"],
      price: "Starting at $1,800",
      color: "text-purple-600"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functionality for exceptional user experiences.",
      features: ["Wireframing & Prototyping", "User Research", "Design Systems", "Usability Testing"],
      price: "Starting at $2,200",
      color: "text-purple-500"
    },
    {
      icon: Rocket,
      title: "DevOps & Deployment",
      description: "Streamlined deployment processes and infrastructure management for reliable, scalable applications.",
      features: ["CI/CD Pipelines", "Cloud Infrastructure", "Monitoring & Analytics", "Security Implementation"],
      price: "Starting at $1,500",
      color: "text-red-500"
    },
    {
      icon: GraduationCap,
      title: "Consulting & Training",
      description: "Technical consulting and team training to help your organization adopt modern development practices.",
      features: ["Technical Audits", "Team Training", "Code Reviews", "Best Practices"],
      price: "$150/hour",
      color: "text-indigo-500"
    }
  ];

  return (
    <main className="max-w-7xl mx-auto">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Briefcase className="w-12 h-12 text-primary mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-secondary dark:text-white">My Services</h1>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Professional development services tailored to bring your digital vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="card-hover border border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${service.color.replace('text-', 'bg-').replace('-600', '-100').replace('-500', '-100')}`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl text-secondary dark:text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-primary font-semibold mb-6">{service.price}</div>
                  <Button className="w-full">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-primary to-blue-600 border-none">
            <CardContent className="text-center py-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="mb-6 max-w-2xl mx-auto opacity-90">
                Let's discuss your requirements and create a custom solution that fits your needs and budget.
              </p>
              <Button variant="secondary" size="lg">
                Get Free Consultation
              </Button>
            </CardContent>
          </Card>
        </section>
    </main>
  );
};

export default Services;
