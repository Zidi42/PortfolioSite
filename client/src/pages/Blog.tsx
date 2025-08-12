import { FileText, Calendar, Clock, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import AdSpace from "@/components/AdSpace";

const Blog = () => {
  const blogPosts = [
    {
      title: "React Best Practices for 2024",
      excerpt: "Discover the latest React patterns and best practices that will help you write cleaner, more maintainable code. From hooks optimization to component composition strategies...",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["React", "JavaScript"]
    },
    {
      title: "Optimizing Node.js Performance",
      excerpt: "Learn advanced techniques for improving your Node.js application performance. From memory management to clustering strategies, boost your server efficiency...",
      date: "March 8, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Node.js", "Performance"]
    },
    {
      title: "Mastering CSS Grid Layouts",
      excerpt: "A comprehensive guide to CSS Grid that covers everything from basic concepts to advanced layout techniques. Create complex, responsive designs with ease...",
      date: "February 28, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["CSS", "Layout"]
    },
    {
      title: "Modern Deployment Strategies",
      excerpt: "Explore modern deployment strategies including containerization, CI/CD pipelines, and cloud services. Learn how to deploy applications efficiently and securely...",
      date: "February 20, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["DevOps", "Docker"]
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <FileText className="w-12 h-12 text-primary mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-secondary dark:text-white">My Blog</h1>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights from my journey in web development and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden card-hover border border-slate-200 dark:border-slate-700">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center mb-3 text-sm text-slate-500 dark:text-slate-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary dark:text-white hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-blue-600">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <Card className="bg-gradient-to-r from-primary to-blue-600 border-none">
            <CardContent className="text-center py-12 text-white">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="mb-6 max-w-2xl mx-auto opacity-90">
                Subscribe to my newsletter to get the latest articles and tutorials delivered straight to your inbox.
              </p>
              <div className="flex max-w-md mx-auto gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white text-slate-800 border-none"
                />
                <Button variant="secondary">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default Blog;
