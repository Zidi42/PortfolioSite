import { User, Code, Camera, BookOpen, Plane, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    <main className="min-h-screen bg-black text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <User className="w-12 h-12 text-blue-400 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">About Me</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get to know the person behind the code and the passion that drives my work.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-full max-w-md mx-auto h-80 bg-gray-800 border border-gray-700 rounded-2xl flex items-center justify-center">
                <User className="w-24 h-24 text-gray-600" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Hello, I'm Muhammad Zahid</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
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

          <Card className="mb-8 bg-gray-800 border-gray-700">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Interests & Hobbies</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {interests.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="text-center p-4 border border-gray-600 rounded-lg hover:border-gray-500 transition-colors">
                    <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2 text-white">{title}</h4>
                    <p className="text-sm text-gray-300">{description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Fun Facts</h3>
              <div className="bg-gray-700 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {funFacts.map((fact, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{fact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default About;