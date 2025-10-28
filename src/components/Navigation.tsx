import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'journey', label: 'Journey' },
    { id: 'contact', label: 'Contact' }
  ];

  // Mobile navigation items (excluding Contact)
  const mobileNavItems = navItems.filter(item => item.id !== 'contact');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Left Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">AP</span>
            </div>
            <span className="hidden md:block font-bold text-lg">Arshad Palapra</span>
          </div>

          {/* Central Navigation */}
          <div className="hidden lg:flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-foreground text-background'
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Side - CTA Button and Theme Toggle */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection('contact')}
              size="sm"
              className="bg-foreground hover:bg-foreground/90 text-background font-medium rounded-lg px-5 h-9"
            >
              <span className="hidden sm:inline">Get in Touch</span>
              <span className="sm:hidden">Contact</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden pb-4 -mx-6 md:-mx-12 lg:-mx-24 px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-center gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {mobileNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                  activeSection === item.id
                    ? 'bg-foreground text-background'
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
