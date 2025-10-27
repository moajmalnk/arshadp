import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

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
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Client <span className="text-primary">Testimonials</span>
        </h2>
        <p className="text-muted-foreground mb-12 text-lg">
          What leaders say about working together
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:shadow-[var(--shadow-card-hover)] hover:border-primary/30 transition-all duration-300 relative"
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
