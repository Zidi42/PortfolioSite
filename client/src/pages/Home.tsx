import { FaRocket, FaUsers, FaStar } from 'react-icons/fa';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import profilePicture from '@assets/zahid_1755007194356.jpg';

export const Home = () => {
  const achievements = [
    { number: "50+", text: "Projects Delivered" },
    { number: "40+", text: "Happy Clients" },
    { number: "5+", text: "Years Experience" },
    { number: "4.9★", text: "Rated by 30+ Clients" }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Muhammad Zahid - 
                  <span className="block">Full Stack</span>
                  <span className="block">Designer &</span>
                  <span className="block">Developer</span>
                </h1>
                
                <div className="space-y-4 text-gray-300">
                  <p className="text-lg">
                    <span className="text-white font-semibold">Driving 40% more leads</span> with SEO-ready websites that load in 
                    under 2 seconds. Transforming visions into exceptional digital 
                    experiences that <span className="text-white font-semibold">convert visitors into customers</span>.
                  </p>
                  
                  <p className="text-base">
                    As a full-stack designer and developer with over 5 years of experience, I 
                    specialize in creating digital solutions that deliver measurable business 
                    results. From custom websites and SaaS platforms to comprehensive 
                    UI/UX design, I help businesses across three continents achieve their 
                    digital goals.
                  </p>
                  
                  <p className="text-base">
                    My expertise includes React development, Next.js applications, 
                    TypeScript programming, Node.js backend development, PostgreSQL 
                    databases, and modern design systems. I focus on performance 
                    optimization, conversion rate optimization, and creating scalable 
                    solutions that grow with your business.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border border-blue-600">
                  GET FREE QUOTE →
                </Button>
                <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  BOOK STRATEGY CALL 📅
                </Button>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="relative">
              <div className="relative max-w-md mx-auto">
                <img 
                  src={profilePicture} 
                  alt="Muhammad Zahid - Full Stack Developer" 
                  className="w-full rounded-2xl shadow-2xl"
                />
                
                {/* Testimonial Badge */}
                <div className="absolute bottom-4 right-4 bg-gray-800 rounded-lg p-4 shadow-xl border border-gray-700 max-w-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-white">Trusted by 40+ clients</span>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-gray-800"></div>
                    <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-gray-800"></div>
                    <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-gray-800"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-white mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-300">
                    {achievement.text}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and see how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;