import { Zap, CheckCircle, Users, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AdSpace from "@/components/AdSpace";

const Home = () => {
  const stats = [
    { icon: FolderOpen, value: "50+", label: "Projects" },
    { icon: Users, value: "30+", label: "Happy Clients" },
    { icon: Clock, value: "5+", label: "Years Experience" },
    { icon: Star, value: "4.9★", label: "Rating" },
  ];

  const features = [
    {
      icon: Code,
      title: "Development",
      description: "Building robust web applications with modern technologies"
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating beautiful and intuitive user experiences"
    },
    {
      icon: Smartphone,
      title: "Mobile",
      description: "Responsive solutions that work seamlessly across all devices"
    }
  ];

  return (
    <main className="flex">
      {/* Sidebar Ad */}
      <div className="hidden lg:block w-64 p-4">
        <div className="sticky top-24">
          <AdSpace type="sidebar" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="hero-gradient text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-16 h-16 text-accent mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold">Muhammad Zahid</h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Full Stack Developer & Digital Innovator
            </p>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <CheckCircle className="w-8 h-8 text-accent" />
              <span className="text-lg">Welcome to my digital portfolio</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-blue-600">
                <FolderOpen className="w-5 h-5 mr-2" />
                View Projects
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                <FileText className="w-5 h-5 mr-2" />
                Read Blog
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <Card key={label} className="text-center border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-4">
                    <Icon className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white">{value}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="text-center border border-slate-200 dark:border-slate-700 card-hover">
                <CardContent className="pt-6">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

import { Code, FileText, FolderOpen, Palette, Smartphone } from "lucide-react";

export default Home;
