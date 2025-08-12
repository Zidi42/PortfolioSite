import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import AdSpace from "@/components/AdSpace";

const Contact = () => {
  const contactInfo = [
    { icon: Mail, title: "Email", value: "contact@muhammadzahid.dev" },
    { icon: Phone, title: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, title: "Location", value: "New York, NY" }
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: "#", color: "bg-blue-600 hover:bg-blue-700" },
    { icon: FaGithub, href: "#", color: "bg-gray-800 hover:bg-gray-900" },
    { icon: FaTwitter, href: "#", color: "bg-blue-400 hover:bg-blue-500" },
    { icon: FaYoutube, href: "#", color: "bg-red-600 hover:bg-red-700" },
    { icon: FaInstagram, href: "#", color: "bg-pink-600 hover:bg-pink-700" }
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
              <Mail className="w-12 h-12 text-primary mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-secondary dark:text-white">Get In Touch</h1>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-secondary dark:text-white mb-8">Let's Connect</h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map(({ icon: Icon, title, value }, index) => (
                  <Card key={index} className="border border-slate-200 dark:border-slate-700">
                    <CardContent className="flex items-center p-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                        index === 0 ? 'bg-primary/10' : 
                        index === 1 ? 'bg-green-100 dark:bg-green-900' : 
                        'bg-red-100 dark:bg-red-900'
                      }`}>
                        <Icon className={`w-6 h-6 ${
                          index === 0 ? 'text-primary' : 
                          index === 1 ? 'text-green-500' : 
                          'text-red-500'
                        }`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary dark:text-white">{title}</h3>
                        <p className="text-slate-600 dark:text-slate-300">{value}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media Links */}
              <Card className="border border-slate-200 dark:border-slate-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-secondary dark:text-white mb-4">Follow Me</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map(({ icon: Icon, href, color }, index) => (
                      <a 
                        key={index}
                        href={href} 
                        className={`w-12 h-12 text-white rounded-full flex items-center justify-center transition-colors ${color}`}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary dark:text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Project Inquiry" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      rows={5} 
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
