import { Button } from "@/components/ui/button";
import { Mail, Phone, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      <div className="max-w-6xl w-full animate-fade-in">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              <span className="text-foreground">Arshad</span>
              <br />
              <span className="text-muted-foreground">Palapra</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium">
              Strategic HR & Finance Leader
            </p>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Transforming organizations through strategic leadership in HR, finance, 
              and operational excellence. 15+ years driving growth, restructuring, 
              and building high-performance teams across diverse industries.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <Mail className="mr-2 h-5 w-5" />
              Book Consultation
            </Button>
            <Button size="lg" variant="secondary" className="font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Call
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            <div className="space-y-1">
              <p className="text-3xl md:text-4xl font-bold text-primary">15+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl md:text-4xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground">Projects Led</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl md:text-4xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">Industries</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl md:text-4xl font-bold text-primary">3</p>
              <p className="text-sm text-muted-foreground">Countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
