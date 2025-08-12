import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const posts = [
    {
      title: "How to Implement SEO Best Practices in React Applications",
      excerpt: "Learn how to optimize your React applications for search engines with practical tips and techniques that can improve your site's visibility.",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "React",
      featured: true
    },
    {
      title: "Building Scalable APIs with Node.js and Express",
      excerpt: "A comprehensive guide to creating robust, scalable backend services that can handle high-traffic applications with ease.",
      date: "December 10, 2024", 
      readTime: "12 min read",
      category: "Backend",
      featured: false
    },
    {
      title: "Modern CSS Techniques for Better User Interfaces",
      excerpt: "Explore advanced CSS features and techniques that can help you create stunning, responsive user interfaces without relying on heavy frameworks.",
      date: "December 5, 2024",
      readTime: "6 min read", 
      category: "CSS",
      featured: false
    },
    {
      title: "Database Optimization Strategies for Web Applications",
      excerpt: "Learn how to optimize your database queries and structure for better performance in your web applications.",
      date: "November 28, 2024",
      readTime: "10 min read",
      category: "Database",
      featured: false
    },
    {
      title: "Getting Started with TypeScript in 2024",
      excerpt: "A beginner-friendly guide to TypeScript that covers everything you need to know to start using it in your projects.",
      date: "November 20, 2024",
      readTime: "15 min read",
      category: "TypeScript", 
      featured: false
    },
    {
      title: "Deployment Best Practices with Docker and CI/CD",
      excerpt: "Learn how to streamline your deployment process using Docker containers and continuous integration/deployment pipelines.",
      date: "November 15, 2024",
      readTime: "14 min read",
      category: "DevOps",
      featured: false
    }
  ];

  const categories = ["All", "React", "Backend", "CSS", "Database", "TypeScript", "DevOps"];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="w-12 h-12 text-blue-400 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Client Success Stories</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience working with us and 
              the results we've delivered.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" 
                  ? "bg-blue-600 hover:bg-blue-700 text-white" 
                  : "border-gray-600 text-gray-300 hover:bg-gray-700"
                }
              >
                {category}
              </Button>
            ))}
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

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30">
                      {post.category}
                    </Badge>
                    {post.featured && (
                      <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-white leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full text-blue-400 hover:bg-blue-600/10">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to join our satisfied clients?
            </h2>
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

export default Blog;