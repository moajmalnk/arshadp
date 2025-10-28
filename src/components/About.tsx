import { Card } from "@/components/ui/card";
import { Target, Lightbulb, ArrowRight } from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";

const About = () => {
  const { ref, isIntersecting } = useIntersection({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-24">
        {/* Thumbnail Image Section */}
        <div 
          className={`transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden border border-border shadow-[var(--shadow-card)] bg-card rounded-2xl">
              <div className="relative aspect-[16/7] md:aspect-[16/6] w-full">
                <img 
                  src="/arshad thumbnail.jpg" 
                  alt="Arshad Palapra - Strategic Leader" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/50 to-transparent" />
              </div>
            </Card>
          </div>
        </div>

        {/* Header Section */}
        <div 
          ref={ref}
          className={`text-center max-w-4xl mx-auto transition-all duration-700 space-y-6 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Building systems that{" "}
            <span className="relative inline-block">
              <span className="relative z-10">empower growth</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-[hsl(var(--color-blue))] -rotate-1 -z-0 opacity-60" />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Strategic leadership in HR, finance, and operational excellence 
            that transforms challenges into sustainable competitive advantages
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <Card 
            className="p-10 md:p-12 bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 group hover:-translate-y-1 rounded-xl"
            style={{
              opacity: isIntersecting ? 1 : 0,
              transform: isIntersecting ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.7s ease-out'
            }}
          >
            <div className="space-y-8">
              <div className="flex items-start justify-between">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: 'hsl(var(--color-yellow))' }}
                >
                  <Target className="h-8 w-8 text-foreground" />
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
              <div className="space-y-5">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Professional Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  I specialize in transforming organizations through strategic HR and finance leadership. 
                  With a proven track record of restructuring operations, implementing compliance frameworks, 
                  and building high-performance teams, I help organizations navigate complex transitions 
                  and achieve sustainable growth.
                </p>
              </div>
            </div>
          </Card>

          <Card 
            className="p-10 md:p-12 bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 group hover:-translate-y-1 rounded-xl"
            style={{
              opacity: isIntersecting ? 1 : 0,
              transform: isIntersecting ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.7s ease-out 150ms'
            }}
          >
            <div className="space-y-8">
              <div className="flex items-start justify-between">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: 'hsl(var(--color-purple))' }}
                >
                  <Lightbulb className="h-8 w-8 text-foreground" />
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
              <div className="space-y-5">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Core Expertise</h3>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  My approach combines strategic thinking with hands-on execution. From corporate restructuring 
                  and financial optimization to talent development and operational excellence, I deliver results 
                  that create lasting value. Available for speaking engagements and organizational consulting.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
