import { Star, Quote, CheckCircle, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Gabriel Sher",
      role: "CEO, Untapped Africa",
      company: "LinkedIn Connect",
      rating: 5,
      content: "Working with Muhammad on the Untapped Africa website was a fantastic experience. He understood our vision and delivered a stunning, user-friendly site that exceeded our expectations. His professionalism, creativity, and attention to detail made the process smooth and enjoyable.",
      avatar: "GS"
    },
    {
      name: "Darren Youngleson", 
      role: "Serial Entrepreneur",
      company: "LinkedIn Connect",
      rating: 5,
      content: "Muhammad is an absolute winner. No limits to his depth of expertise, unwavering customer service and quality of his product and creativity. Highly recommend working with Muhammad.",
      avatar: "DY"
    },
    {
      name: "Anoushka Rademeyer",
      role: "Head of Digital Communications & Reputation at ASK AFRICA",
      company: "LinkedIn Connect",
      rating: 5,
      content: "Muhammad delivered highly professional work with excellent attention to detail. His expertise in digital communications and web development made our project a success.",
      avatar: "AR"
    },
    {
      name: "Royi Mazor",
      role: "Owner, A Secure Annapolis Locksmith",
      company: "",
      rating: 5,
      content: "Very professional wonderful customer service, thank you Muhammad for all that you did, will definitely be using for future projects!",
      avatar: "RM"
    },
    {
      name: "Omar Turner",
      role: "Chief Executive Officer, Binns Media Group, New York",
      company: "LinkedIn Connect",
      rating: 5,
      content: "Muhammad was able to execute the vision perfectly! He's big on communication and easy to speak with. Muhammad dedicates his time to the client ensuring the client is completely satisfied at each step of the process. I highly recommend Muhammad's services to anyone who needs a web developer who can execute on a vision and provide a professional finished product!",
      avatar: "OT"
    },
    {
      name: "Bradley Thompson",
      role: "Marketing Director",
      company: "LinkedIn Connect", 
      rating: 5,
      content: "Muhammad's expertise in web development is truly exceptional. He delivered a website that not only looks stunning but also performs flawlessly. His attention to detail and commitment to quality made the entire process smooth and enjoyable.",
      avatar: "BT"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-12 h-12 text-blue-400 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Client Success Stories</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience working with us and 
              the results we've delivered.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-sm text-gray-300">Projects Delivered</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-white mb-2">40+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-white mb-2">4.9★</div>
                <div className="text-sm text-gray-300">Rated by 30+ Clients</div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{testimonial.name}</h3>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    {testimonial.company && (
                      <div className="text-blue-400 text-sm">
                        📊 Connect
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <div className="relative">
                    <Quote className="w-6 h-6 text-blue-400 mb-2" />
                    <p className="text-gray-300 leading-relaxed">
                      {testimonial.content}
                    </p>
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

export default Testimonials;