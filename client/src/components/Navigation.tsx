import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Code2, Home, FolderOpen, User, Briefcase, Settings, FileText, MessageSquare, Mail } from "lucide-react";
import AdSpace from "./AdSpace";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigationItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/projects", label: "Projects", icon: FolderOpen },
    { href: "/about", label: "About", icon: User },
    { href: "/services", label: "Services", icon: Briefcase },
    { href: "/skills", label: "Skills", icon: Settings },
    { href: "/blog", label: "Blog", icon: FileText },
    { href: "/testimonials", label: "Testimonials", icon: MessageSquare },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50">
      <AdSpace
        type="banner"
        className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700"
      />
      
      <nav className="bg-white dark:bg-slate-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-secondary dark:text-white">Muhammad Zahid</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className={`nav-link ${location === href ? 'active' : ''}`}
                >
                  <Icon className="w-4 h-4 mr-1" />
                  {label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-600 dark:text-slate-300 hover:text-primary"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4">
              {navigationItems.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className={`nav-link block w-full text-left py-2 ${location === href ? 'active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon className="w-4 h-4 mr-2 inline" />
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
