import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-400">MUHAMMAD ZAHID</h3>
            <p className="text-gray-300">
              Full-stack design and development solutions that transform your vision into exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">SaaS Development</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">API Development</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Startup MVP</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Mentorship</a></li>
            </ul>
          </div>

          {/* Portfolio */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Portfolio</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">All Projects</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Web Applications</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">E-commerce Sites</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">SaaS Platforms</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Mobile Apps</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-4 h-4 text-blue-400" />
                <a href="mailto:zahidrajpoot790@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                  zahidrajpoot790@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="w-4 h-4 text-blue-400" />
                <a href="tel:+923418463754" className="text-gray-300 hover:text-blue-400 transition-colors">
                  +92 341 8463754
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">
                  Gujranwala, Pakistan
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Muhammad Zahid. All rights reserved. ● Available for new projects
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Accessibility</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Cookies</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;