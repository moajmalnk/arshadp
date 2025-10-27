import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
      <div className="max-w-6xl w-full animate-fade-in">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
              Transforming organizations
              <br />
              through strategic{" "}
              <span className="relative inline-block">
                <span className="relative z-10">leadership</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-[hsl(var(--color-yellow))] -rotate-1 -z-0" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              Strategic HR & Finance Leader with 15+ years driving growth, restructuring, 
              and building high-performance teams
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium shadow-sm"
            >
              Book Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full font-medium"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold">15+</p>
              <p className="text-sm text-muted-foreground font-medium">Years Experience</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold">50+</p>
              <p className="text-sm text-muted-foreground font-medium">Projects Led</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold">10+</p>
              <p className="text-sm text-muted-foreground font-medium">Industries</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold">95%</p>
              <p className="text-sm text-muted-foreground font-medium">Client Retention</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
