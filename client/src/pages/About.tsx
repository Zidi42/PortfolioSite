import { User, Code, Camera, BookOpen, Plane, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AdSpace from "@/components/AdSpace";

const About = () => {
  const interests = [
    { icon: Code, title: "Programming", description: "Exploring new languages and frameworks" },
    { icon: Camera, title: "Photography", description: "Capturing moments and landscapes" },
    { icon: BookOpen, title: "Reading", description: "Tech blogs and science fiction novels" },
    { icon: Plane, title: "Travel", description: "Exploring new cultures and places" }
  ];

  const funFacts = [
    "Coffee enthusiast ☕ - Average 4 cups per day",
    "Published 15+ open source libraries",
    "Mentor to 50+ junior developers",
    "Speaks 3 programming languages fluently"
  ];

  return (
    <main className="max-w-7xl mx-auto">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <User className="w-12 h-12 text-primary mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-secondary dark:text-white">About Me</h1>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Get to know the person behind the code and the passion that drives my work.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
                alt="Muhammad Zahid profile" 
                className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-secondary dark:text-white mb-6">Hello, I'm Muhammad Zahid</h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that make a difference. My journey in technology started with a curiosity about how things work and has evolved into a deep love for crafting elegant, user-centric applications.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in the power of technology to solve real-world problems and create meaningful connections.
                </p>
                <p>
                  My approach combines technical expertise with creative problem-solving, always keeping the end-user experience at the forefront of every project I undertake.
                </p>
              </div>
            </div>
          </div>

          <Card className="mb-8 border border-slate-200 dark:border-slate-700">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold text-secondary dark:text-white mb-8 text-center">Interests & Hobbies</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {interests.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="text-center p-4 border border-slate-200 dark:border-slate-600 rounded-lg hover:shadow-md transition-shadow">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">{title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-slate-200 dark:border-slate-700">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold text-secondary dark:text-white mb-6 text-center">Fun Facts</h3>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                <ul className="space-y-3">
                  {funFacts.map((fact, index) => (
                    <li key={index} className="flex items-center text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
    </main>
  );
};

export default About;
