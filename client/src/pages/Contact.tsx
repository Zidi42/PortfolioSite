import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const contactInfo = [
    { icon: Mail, title: "Email", value: "zahidrajpoot790@gmail.com" },
    { icon: Phone, title: "Phone", value: "+92 341 8463754" },
    { icon: MapPin, title: "Location", value: "Gujranwala, Pakistan" }
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: "#", color: "bg-blue-600 hover:bg-blue-700" },
    { icon: FaGithub, href: "#", color: "bg-gray-800 hover:bg-gray-900" },
    { icon: FaTwitter, href: "#", color: "bg-blue-400 hover:bg-blue-500" },
    { icon: FaYoutube, href: "#", color: "bg-red-600 hover:bg-red-700" },
    { icon: FaInstagram, href: "#", color: "bg-pink-600 hover:bg-pink-700" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, and message are required.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Validate environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration missing:', { serviceId: !!serviceId, templateId: !!templateId, publicKey: !!publicKey });
      toast({
        title: "Configuration Error",
        description: "Please contact me directly at zahidrajpoot790@gmail.com",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      console.log('Sending email with EmailJS...');
      
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'Contact Form Submission',
          message: formData.message,
          to_email: 'zahidrajpoot790@gmail.com',
          reply_to: formData.email
        },
        publicKey
      );

      console.log('EmailJS response:', result);

      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error Details:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly at zahidrajpoot790@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Mail className="w-12 h-12 text-blue-400 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Get In Touch</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Let's Connect</h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map(({ icon: Icon, title, value }, index) => (
                  <Card key={index} className="bg-gray-800 border-gray-700">
                    <CardContent className="flex items-center p-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                        index === 0 ? 'bg-blue-600/20' : 
                        index === 1 ? 'bg-green-600/20' : 
                        'bg-red-600/20'
                      }`}>
                        <Icon className={`w-6 h-6 ${
                          index === 0 ? 'text-blue-400' : 
                          index === 1 ? 'text-green-400' : 
                          'text-red-400'
                        }`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{title}</h3>
                        <p className="text-gray-300">{value}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media Links */}
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white mb-4">Follow Me</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map(({ icon: Icon, href, color }, index) => (
                      <a 
                        key={index}
                        href={href} 
                        className={`w-12 h-12 rounded-lg flex items-center justify-center text-white transition-colors ${color}`}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-gray-300">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-gray-300">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;