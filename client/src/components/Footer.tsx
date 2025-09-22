import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "wouter";

export const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="space-y-4 col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-blue-400">MUHAMMAD ZAHID</h3>
            <p className="text-gray-300">
              Full-stack design and development solutions that transform your vision into exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/muhammad-zahid-6429a526b/" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/Zidi42" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://x.com/zahidrajpoot790" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  SaaS Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  API Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Startup MVP
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Mentorship
                </Link>
              </li>
            </ul>
          </div>

          {/* Portfolio → Now Skills */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Skills</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/skills" className="hover:text-blue-400 transition-colors">
                  All Skills
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-blue-400 transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-blue-400 transition-colors">
                  E-commerce Sites
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-blue-400 transition-colors">
                  SaaS Platforms
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-blue-400 transition-colors">
                  Mobile Apps
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company Section (New) */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-400 text-sm font-semibold italic">
              © 2025 Muhammad Zahid. All rights reserved.
            </p>
            {/* Added contact info back for clarity */}
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="mailto:muhammad.zahid2114@gmail.com" className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
                <FaEnvelope className="w-4 h-4" />
                <span>muhammad.zahid2114@gmail.com</span>
              </a>
              <a href="tel:+923418463754" className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
                <FaPhone className="w-4 h-4" />
                <span>+92 341 8463754</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400">
                <FaMapMarkerAlt className="w-4 h-4" />
                <span>Gujranwala, Pakistan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;