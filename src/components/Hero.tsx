import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, DollarSign, Award } from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";

const Hero = () => {
  const { ref, isIntersecting } = useIntersection({ threshold: 0.2, triggerOnce: true });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const stats = [
    { value: "3+", label: "Years Experience", icon: TrendingUp, color: "yellow" },
    { value: "4", label: "Key Roles", icon: Users, color: "blue" },
    { value: "CMA", label: "Certification", icon: Award, color: "purple" },
    { value: "100%", label: "Company Growth", icon: DollarSign, color: "green" }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
      <div className="max-w-7xl w-full">
        <div 
          ref={ref}
          className={`space-y-12 transition-all duration-1000 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Main Hero Card */}
          <Card className="relative p-8 md:p-12 lg:p-16 bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <img 
                src="/arshad thumbnail.jpg" 
                alt="" 
                className="w-full h-full object-cover"
                aria-hidden="true"
              />
            </div>
            
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background pointer-events-none" />
            
            {/* Content */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text Content */}
              <div className="space-y-8 order-2 lg:order-1">
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                    Transforming organizations
                    <br />
                    through strategic{" "}
                    <span className="relative inline-block">
                      <span className="relative z-10">leadership</span>
                      <span className="absolute bottom-2 left-0 w-full h-3 bg-[hsl(var(--color-yellow)))] -rotate-1 -z-0 opacity-60" />
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl font-light leading-relaxed">
                    Strategic Leader specializing in HR, Finance & Administration. Driving business transformation, 
                    operational excellence, and organizational growth at the intersection of leadership, strategy, and innovation.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Button 
                    onClick={scrollToContact}
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium shadow-sm transition-all hover:scale-105"
                  >
                    Book Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Image Section - Professional Layout */}
              <div className="relative flex items-center justify-center lg:justify-end order-1 lg:order-2">
                <div className="relative w-full max-w-md">
                  {/* Main Profile Image - Professional Portrait */}
                  <div className="relative">
                    <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border border-border bg-muted">
                      <img 
                        src="/arshad dp.jpg" 
                        alt="Arshad Palapra - Strategic Leader" 
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                    </div>
                    {/* Subtle professional accent */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-[hsl(var(--color-purple))]/20 via-[hsl(var(--color-blue))]/10 to-transparent rounded-xl -z-10 blur-sm" />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Stats Grid - Bento Style */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const delay = index * 100;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1 group"
                  style={{
                    animationDelay: `${delay}ms`,
                    opacity: isIntersecting ? 1 : 0,
                    transform: isIntersecting ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.6s ease-out ${delay}ms`
                  }}
                >
                  <div className="space-y-4">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{
                        backgroundColor: stat.color === 'blue' ? 'hsl(var(--color-blue))' :
                                        stat.color === 'purple' ? 'hsl(var(--color-purple))' :
                                        stat.color === 'green' ? 'hsl(var(--color-green))' :
                                        'hsl(var(--color-yellow))'
                      }}
                    >
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <p className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</p>
                      <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
