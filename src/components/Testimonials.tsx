import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";

const testimonials = [
  {
    quote: "Arshad's strategic vision and hands-on approach transformed our organization. His ability to navigate complex restructuring while maintaining team morale was exceptional.",
    author: "Sarah Mitchell",
    role: "CEO",
    company: "TechVentures Inc"
  },
  {
    quote: "Working with Arshad was a masterclass in operational excellence. He identified inefficiencies we didn't know existed and delivered solutions that exceeded expectations.",
    author: "Rajesh Kumar",
    role: "CFO",
    company: "Global Solutions Ltd"
  },
  {
    quote: "Arshad's expertise in HR transformation helped us build a world-class team. His frameworks and processes are still driving value years later.",
    author: "Emily Chen",
    role: "COO",
    company: "Innovation Partners"
  }
];

const Testimonials = () => {
  const { ref, isIntersecting } = useIntersection({ threshold: 0.1, triggerOnce: true });

  // Card positions for overlapping layout
  const getCardStyle = (index: number) => {
    const positions = [
      { 
        left: "0%", 
        top: "60%", 
        rotate: "-3deg",
        zIndex: 1
      },
      { 
        left: "25%", 
        top: "0%", 
        rotate: "2deg",
        zIndex: 3
      },
      { 
        left: "60%", 
        top: "40%", 
        rotate: "-1.5deg",
        zIndex: 2
      }
    ];
    return positions[index % 3];
  };

  return (
    <section id="testimonials" className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div 
          ref={ref}
          className={`mb-20 transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-sm font-medium tracking-wider uppercase">// Testimonials</span>
        </div>

        {/* Overlapping Cards Container */}
        <div className="relative min-h-[600px] md:min-h-[700px]">
          {/* Mobile: Stacked Layout */}
          <div className="flex flex-col md:hidden gap-6">
            {testimonials.map((testimonial, index) => {
              const delay = index * 100;
              
              return (
                <Card
                  key={index}
                  className="bg-card border border-border rounded-lg shadow-lg transition-all duration-700"
                  style={{
                    opacity: isIntersecting ? 1 : 0,
                    transform: `translateY(${isIntersecting ? 0 : 30}px)`,
                    transition: `all 0.7s ease-out ${delay}ms`
                  }}
                >
                  <div className="p-6 space-y-6">
                    <div className="mb-2">
                      <Quote className="h-6 w-6 text-primary/30" />
                    </div>
                    <p className="text-base text-foreground leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="pt-4 space-y-1 border-t border-border">
                      <p className="font-bold text-foreground text-base">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Desktop: Overlapping Layout */}
          <div className="hidden md:block">
            {testimonials.map((testimonial, index) => {
              const delay = index * 100;
              const position = getCardStyle(index);
              
              return (
                <Card
                  key={index}
                  className="absolute w-[400px] bg-card border border-border rounded-lg shadow-lg transition-all duration-700 hover:shadow-xl hover:z-[4]"
                  style={{
                    left: position.left,
                    top: position.top,
                    transform: `translateY(${isIntersecting ? 0 : 30}px) rotate(${position.rotate})`,
                    opacity: isIntersecting ? 1 : 0,
                    transition: `all 0.7s ease-out ${delay}ms`,
                    zIndex: position.zIndex
                  }}
                >
                  <div className="p-8 space-y-6">
                    {/* Quote Icon */}
                    <div className="mb-2">
                      <Quote className="h-6 w-6 text-primary/30" />
                    </div>

                    {/* Quote Text */}
                    <p className="text-lg text-foreground leading-relaxed">
                      "{testimonial.quote}"
                    </p>

                    {/* Author Info */}
                    <div className="pt-4 space-y-1 border-t border-border">
                      <p className="font-bold text-foreground text-base">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
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

export default Testimonials;
