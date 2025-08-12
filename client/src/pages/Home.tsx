import { Link } from "wouter";
import { CheckCircle, Users, Clock, Star, ArrowRight, Download, FolderOpen, FileText, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AdSpace from "@/components/AdSpace";
import profileImage from "@assets/zahid_1755007194356.jpg";

const Home = () => {
  const stats = [
    { icon: FolderOpen, value: "50+", label: "Projects" },
    { icon: Users, value: "30+", label: "Happy Clients" },
    { icon: Clock, value: "5+", label: "Years Experience" },
    { icon: Star, value: "4.9★", label: "Rating" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
                  Muhammad
                  <span className="block text-primary">Zahid</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium">
                  Full Stack Developer & Digital Innovator
                </p>
              </div>

              <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-300">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-lg">Available for new projects</span>
              </div>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
                Creating innovative web solutions that drive business growth and deliver exceptional user experiences. Let's turn your ideas into reality.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/projects">
                  <Button size="lg" className="bg-primary hover:bg-blue-600 text-white group">
                    <FolderOpen className="w-5 h-5 mr-2" />
                    View Projects
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-slate-300 dark:border-slate-600">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Get In Touch
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <Button variant="ghost" size="sm" className="text-primary hover:text-blue-600">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
                <Link href="/blog" className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                  <FileText className="w-4 h-4 inline mr-2" />
                  Read Blog
                </Link>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 rounded-2xl transform rotate-6 scale-105 opacity-20"></div>
                <div className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl">
                  <img 
                    src={profileImage} 
                    alt="Muhammad Zahid - Full Stack Developer"
                    className="w-80 h-96 object-cover rounded-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg">
                    <span className="text-sm font-medium">Available Now!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      </section>

      {/* Ad Space */}
      <AdSpace type="banner" className="bg-slate-200 dark:bg-slate-700" />

      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <Card key={label} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-slate-800">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-4">
                    <Icon className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white">{value}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to bring your ideas to life?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something amazing together. From concept to deployment, I'll guide you through every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button size="lg" className="bg-primary hover:bg-blue-600">
                Explore Services
              </Button>
            </Link>
            <Link href="/testimonials">
              <Button size="lg" variant="outline">
                Client Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
