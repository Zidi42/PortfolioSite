import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Code2, Home, FolderOpen, User, Briefcase, Settings, FileText, MessageSquare, Mail } from "lucide-react";

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Top Header with Ad Banner */}
      <header className="sticky top-0 z-50">
        
        {/* Top Navigation Bar */}
        <nav className="bg-white dark:bg-slate-900 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center space-x-2">
                <Code2 className="w-8 h-8 text-primary" />
                <span className="text-xl font-bold text-secondary dark:text-white">Muhammad Zahid</span>
              </Link>

              {/* Hamburger Menu Button */}
              <button
                className="text-slate-600 dark:text-slate-300 hover:text-primary"
                onClick={toggleSidebar}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-80 bg-white dark:bg-slate-900 shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-secondary dark:text-white">Muhammad Zahid</span>
            </div>
            <button
              onClick={toggleSidebar}
              className="text-slate-600 dark:text-slate-300 hover:text-primary"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-2">
            {navigationItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={toggleSidebar}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  location === href 
                    ? 'bg-primary text-white' 
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Navigation;
