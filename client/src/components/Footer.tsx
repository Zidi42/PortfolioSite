import { Link } from "wouter";
import { Code2, Linkedin, Github, Twitter, Mail, Phone, MapPin } from "lucide-react";
import AdSpace from "./AdSpace";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary dark:bg-slate-900 text-white">
      <AdSpace 
        type="bottom" 
        className="bg-slate-700 dark:bg-slate-800 mb-8"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">Muhammad Zahid</span>
            </div>
            <p className="text-slate-300 mb-4">
              Creating innovative web solutions that drive business growth and deliver exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-300 hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-slate-300">
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                contact@muhammadzahid.dev
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +1 (555) 123-4567
              </p>
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                New York, NY
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-600 pt-8 text-center text-slate-300">
          <p>&copy; {currentYear} Muhammad Zahid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;