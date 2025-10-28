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

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={ref}
          className={`mb-16 text-center max-w-3xl mx-auto transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            What leaders say about working together
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => {
            const delay = index * 150;
            return (
            <Card
              key={index}
              className="p-6 md:p-8 bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 group hover:-translate-y-1 relative"
              style={{
                opacity: isIntersecting ? 1 : 0,
                transform: isIntersecting ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.7s ease-out ${delay}ms`
              }}
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6 group-hover:text-primary/30 transition-colors" />
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed italic text-base">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-bold text-foreground text-base">{testimonial.author}</p>
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
    </section>
  );
};

export default Testimonials;
