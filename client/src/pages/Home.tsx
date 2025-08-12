import { FaRocket, FaUsers, FaStar, FaCode, FaDatabase, FaShieldAlt, FaStar as FaStarSolid, FaUser, FaGlobe, FaAward, FaBrain, FaCheckCircle, FaChevronDown } from 'react-icons/fa';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Link } from 'wouter';
import { useState } from 'react';
import profilePicture from '@assets/zahid_1755007194356.jpg';

export const Home = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const achievements = [
    { number: "50+", text: "Projects Delivered" },
    { number: "40+", text: "Happy Clients" },
    { number: "5+", text: "Years Experience" },
    { number: "4.9★", text: "Rated by 30+ Clients" }
  ];

  const testimonials = [
    {
      name: "Gabriel Sher",
      role: "CEO, Untapped Africa",
      avatar: "GS",
      rating: 5,
      text: "Working with Muhammad Zahid on the Untapped Africa website was a fantastic experience. He understood our vision and delivered a stunning, user-friendly site that exceeded our expectations. His professionalism, creativity, and attention to detail made the process smooth and enjoyable."
    },
    {
      name: "Darren Youngleson",
      role: "Serial Entrepreneur",
      avatar: "DY",
      rating: 5,
      text: "Muhammad Zahid is an absolute winner. No limits to his depth of expertise, unwavering customer service and quality of his product and creativity. Highly recommend working with Zahid."
    },
    {
      name: "Anoushka Rademeyer",
      role: "Head of Digital Communications & Reputation at ASK AFRICA",
      avatar: "AR",
      rating: 5,
      text: "Muhammad Zahid delivered professional work with excellent attention to detail. His expertise in digital communications and web development made our project a success."
    },
    {
      name: "Royi Mazor",
      role: "Owner, A Secure Annapolis Locksmith",
      avatar: "RM",
      rating: 5,
      text: "Very professional, wonderful customer service, thank you Zahid for all the help you gave us and will definitely be using for future projects!"
    },
    {
      name: "Omar Turner",
      role: "Chief Executive Officer, Binns Media Group, New York",
      avatar: "OT",
      rating: 5,
      text: "Muhammad Zahid was able to execute the vision perfectly! He's big on communication and easy to speak with. Zahid dedicates his time to the client ensuring the client is completely satisfied at each step of the process. I highly recommend his services to anyone who needs a web developer who can execute on a vision and provide a professional finished product!"
    },
    {
      name: "Bradley Thompson",
      role: "Marketing Director",
      avatar: "BT",
      rating: 5,
      text: "Muhammad Zahid's expertise in web development is truly exceptional. He delivered a website that not only looks stunning but also performs flawlessly. His attention to detail and commitment to quality made the entire process smooth and enjoyable."
    }
  ];

  const services = [
    {
      icon: FaGlobe,
      title: "Web Development",
      description: "SEO-ready websites that load in under 2 seconds and drive up to 40% more leads",
      features: [
        "98/100 PageSpeed score",
        "Mobile-first responsive design", 
        "Conversion-optimized layouts"
      ],
      learnMore: "/services"
    },
    {
      icon: FaUser,
      title: "UI/UX Design",
      description: "User-centered designs that increase engagement by 35% and reduce bounce rates by 40%",
      features: [
        "Data-driven design decisions",
        "Intuitive user journeys",
        "A/B tested interfaces"
      ],
      learnMore: "/services"
    },
    {
      icon: FaAward,
      title: "SaaS Development",
      description: "End-to-end SaaS solutions that reduce operational costs by 25% and scale with your business",
      features: [
        "Scalable architecture",
        "99.9% uptime guarantee",
        "Secure data handling"
      ],
      learnMore: "/services"
    }
  ];

  const expertiseAreas = [
    {
      icon: "🎯",
      title: "Strategy & Planning",
      description: "Increase ROI by 35% with strategic planning and roadmap development that aligns with your business goals.",
      tags: ["Market Research", "User Analysis", "Competitive Analysis", "ROI Planning"]
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Boost conversions by 40% with user-centered design that transforms visitors into customers.",
      tags: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: "⚡",
      title: "Development",
      description: "Achieve 98/100 PageSpeed scores with modern technologies and performance optimization.",
      tags: ["React/Next.js", "Node.js", "TypeScript", "API Development"]
    },
    {
      icon: "💾",
      title: "Database Architecture",
      description: "Reduce query times by 60% with robust database design and implementation for scalable applications.",
      tags: ["Schema Design", "Data Modeling", "Query Optimization", "Migration Strategy"]
    },
    {
      icon: "🛡️",
      title: "Security & Performance",
      description: "Protect user data with enterprise-grade security measures and 99.9% uptime guarantee.",
      tags: ["Security Audits", "Performance Testing", "Load Balancing", "Caching Strategy"]
    },
    {
      icon: "🤖",
      title: "AI Integration",
      description: "Automate 60% of manual tasks with AI solutions that enhance user experiences and business operations.",
      tags: ["AI/ML Integration", "Natural Language", "Computer Vision", "Predictive Analytics"]
    }
  ];

  const developmentProcess = [
    {
      step: 1,
      title: "Discovery & Strategy",
      description: "35% more effective project outcomes through comprehensive research and planning",
      percentage: 35
    },
    {
      step: 2,
      title: "Design & Prototyping",
      description: "40% higher engagement with user-tested interfaces and interactive prototypes",
      percentage: 40
    },
    {
      step: 3,
      title: "Development & Testing",
      description: "98/100 PageSpeed scores through optimized code and rigorous testing",
      percentage: 98
    },
    {
      step: 4,
      title: "Launch & Support",
      description: "99.9% uptime with continuous monitoring and proactive maintenance",
      percentage: 99.9
    }
  ];

  const technologies = {
    frontend: [
      "React & Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion"
    ],
    backend: [
      "Node.js",
      "PostgreSQL",
      "GraphQL",
      "Redis"
    ]
  };

  const faqs = [
    {
      id: "1",
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. A simple landing page typically takes 2-3 weeks, while a full website redesign takes 6-8 weeks, and custom SaaS applications can take 12-16 weeks. We provide detailed timelines during our initial consultation."
    },
    {
      id: "2",
      question: "What's included in your web development service?",
      answer: "Our web development service includes custom design, responsive development, SEO optimization, performance optimization, security implementation, content management system setup, analytics integration, and 30 days of post-launch support. We also provide training and documentation."
    },
    {
      id: "3",
      question: "Do you provide ongoing support after launch?",
      answer: "Yes, we offer comprehensive post-launch support including bug fixes, security updates, performance monitoring, content updates, and technical assistance. We have flexible support packages to match your ongoing needs."
    },
    {
      id: "4",
      question: "What technologies do you specialize in?",
      answer: "I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, PostgreSQL, and various cloud platforms. I focus on technologies that provide the best performance, security, and scalability for your specific needs."
    }
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
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border border-blue-600">
                    GET FREE QUOTE →
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                    BOOK STRATEGY CALL 📅
                  </Button>
                </Link>
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

      {/* Client Success Stories */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-300">
              Hear from our satisfied clients about their experience working with us and the results we've delivered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                    <Button size="sm" variant="outline" className="ml-auto border-blue-600 text-blue-600">
                      Connect
                    </Button>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStarSolid key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
              Show More Reviews
            </Button>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">Ready to join our satisfied clients?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700">Start Your Project</Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  View Our Work
                </Button>
              </Link>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                Free Website Analysis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Stack Design Expertise */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Full-Stack Design Expertise</h2>
            <p className="text-xl text-gray-300">
              Delivering <span className="text-white font-semibold">measurable results</span> through strategic thinking and technical excellence
            </p>
          </div>

          {/* Coding Progress Visualization */}
          <div className="bg-gray-800 rounded-2xl p-8 mb-16 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FaCode className="text-blue-400" />
                <span className="text-white font-medium">Coding in Progress...</span>
              </div>
              <span className="text-blue-400 font-bold">100%</span>
            </div>
            <Progress value={100} className="mb-6" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <span>🎨</span> Design Phase
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-300">
                    <FaCheckCircle className="text-green-400 w-4 h-4" />
                    User Research
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <FaCheckCircle className="text-green-400 w-4 h-4" />
                    Wireframing
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <FaCheckCircle className="text-green-400 w-4 h-4" />
                    UI Design
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <FaCode className="text-blue-400" /> Development Phase
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-300">
                    <FaCheckCircle className="text-green-400 w-4 h-4" />
                    Frontend
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <FaCheckCircle className="text-green-400 w-4 h-4" />
                    Backend
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <FaCheckCircle className="text-green-400 w-4 h-4" />
                    Testing
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <Badge className="bg-green-600 text-white">Project Successfully Completed! 🎉</Badge>
            </div>
          </div>

          {/* Expertise Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 h-full">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-gray-700 text-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process & Technologies */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Development Process */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Our Development Process</h2>
              <div className="space-y-8">
                {developmentProcess.map((process, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {process.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{process.title}</h3>
                      <p className="text-gray-300 mb-2">{process.description}</p>
                      <div className="text-sm text-blue-400 font-semibold">
                        {process.percentage}% {process.step === 3 ? 'PageSpeed scores' : process.step === 4 ? 'uptime' : 'more effective'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Technologies We Use</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Frontend</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {technologies.frontend.map((tech, index) => (
                      <div key={index} className="bg-gray-800 rounded-lg p-3 text-center">
                        <span className="text-gray-300">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Backend</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {technologies.backend.map((tech, index) => (
                      <div key={index} className="bg-gray-800 rounded-lg p-3 text-center">
                        <span className="text-gray-300">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Deliver - Services */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What I Deliver</h2>
            <p className="text-xl text-gray-300">
              Results-focused solutions tailored to your specific business goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="bg-gray-800 border-gray-700 h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={service.learnMore}>
                      <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                        Learn More →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">
              Get answers to common questions about our design and development process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <Collapsible key={faq.id} open={openFaq === faq.id} onOpenChange={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full justify-between p-6 bg-gray-800 hover:bg-gray-700 text-left">
                    <span className="text-white font-medium">{faq.question}</span>
                    <FaChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${openFaq === faq.id ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-6 bg-gray-800">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and see how we can help you achieve your goals.
          </p>
          
          {/* Email Form */}
          <div className="bg-gray-800 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <form className="space-y-4">
              <div>
                <label className="block text-left text-white font-medium mb-2">
                  Email <span className="text-red-400">*</span>
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email address"
                />
              </div>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                Submit
              </Button>
            </form>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Start Your Project
              </Button>
            </Link>
            <Link href="/projects">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                View Our Work
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
              Free Website Analysis
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;