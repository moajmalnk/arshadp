import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">AP</span>
            </div>
            <span className="font-semibold text-lg">Arshad Palapra</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection('contact')}
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
