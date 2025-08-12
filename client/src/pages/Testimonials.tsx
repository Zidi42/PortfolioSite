import { MessageSquare, Star, BarChart3, Users, Clock, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AdSpace from "@/components/AdSpace";

const Testimonials = () => {
  const testimonials = [
    {
      content: "Muhammad delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient. Highly recommended!",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b17c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      rating: 5
    },
    {
      content: "Working with Muhammad was a game-changer for our business. He transformed our outdated website into a modern, responsive platform that has significantly improved our user engagement and conversions.",
      author: "Michael Chen",
      role: "CTO, DataFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      rating: 5
    },
    {
      content: "The mobile app Muhammad developed for us has been instrumental in reaching our target audience. His expertise in React Native and user experience design really shows in the final product.",
      author: "Emily Rodriguez",
      role: "Founder, FitLife App",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      rating: 5
    },
    {
      content: "Muhammad's consulting services helped our team adopt modern development practices. His knowledge of DevOps and deployment strategies has significantly improved our development workflow.",
      author: "David Thompson",
      role: "Lead Developer, InnovateTech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      rating: 5
    }
  ];

  const stats = [
    { icon: BarChart3, value: "50+", label: "Projects Completed" },
    { icon: Users, value: "30+", label: "Happy Clients" },
    { icon: Clock, value: "5+", label: "Years Experience" },
    { icon: Award, value: "4.9", label: "Average Rating" }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-slate-300 dark:text-slate-600'}`} 
      />
    ));
  };

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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <MessageSquare className="w-12 h-12 text-primary mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-secondary dark:text-white">Testimonials</h1>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              What my clients say about working with me and the results we've achieved together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover border border-slate-200 dark:border-slate-700">
                <CardContent className="pt-8">
                  <div className="flex items-center mb-6">
                    <MessageSquare className="w-8 h-8 text-primary mr-4" />
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-lg italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={`${testimonial.author} profile`}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-secondary dark:text-white">{testimonial.author}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <Card className="bg-gradient-to-r from-primary to-blue-600 border-none">
            <CardContent className="py-12">
              <div className="grid md:grid-cols-4 gap-8 text-center text-white">
                {stats.map(({ icon: Icon, value, label }, index) => (
                  <div key={index}>
                    <Icon className="w-12 h-12 mx-auto mb-3" />
                    <div className="text-3xl font-bold mb-2">{value}</div>
                    <div className="text-blue-100">{label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default Testimonials;
