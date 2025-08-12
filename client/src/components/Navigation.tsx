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
          className="fixed inset-0 bg-black bg-opacity-20 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Modern Right Sidebar */}
      <aside 
        className={`fixed top-0 right-0 h-full w-72 transform transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          background: 'rgba(0, 0, 0, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800/30">
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="w-6 h-6 text-blue-400" />
            <span className="text-lg font-bold text-white">Muhammad Zahid</span>
          </Link>
          <button
            className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800/30"
            onClick={toggleSidebar}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="p-6">
          <ul className="space-y-3">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.href;
              
              return (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className={`group flex items-center space-x-4 px-4 py-3 rounded-full transition-all duration-200 relative overflow-hidden ${
                      isActive 
                        ? 'text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                    onClick={toggleSidebar}
                  >
                    {/* Active Circle Background */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20"></div>
                    )}
                    
                    {/* Hover Circle Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    
                    {/* Active Ring */}
                    {isActive && (
                      <div className="absolute inset-0 border-2 border-blue-400/30 rounded-full"></div>
                    )}
                    
                    {/* Icon and Text */}
                    <div className="relative z-10 flex items-center space-x-4">
                      <div className={`p-2 rounded-full transition-all duration-200 ${
                        isActive ? 'bg-blue-500/20' : 'group-hover:bg-blue-500/10'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm">Muhammad Zahid</p>
            <p className="text-gray-500 text-xs">Full-Stack Developer</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navigation;
