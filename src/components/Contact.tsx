import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useIntersection } from "@/hooks/use-intersection";

const Contact = () => {
  const { toast } = useToast();
  const { ref, isIntersecting } = useIntersection({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll respond within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={ref}
          className={`mb-16 text-center max-w-3xl mx-auto transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Ready to transform your organization? Get in touch to discuss how I can help
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div 
            className="md:col-span-2"
            style={{
              opacity: isIntersecting ? 1 : 0,
              transform: isIntersecting ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.7s ease-out'
            }}
          >
            <Card className="p-6 md:p-8 bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Speaking engagement / Consulting inquiry"
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your needs and how I can help..."
                    rows={6}
                    required
                    className="bg-background border-border resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          <div 
            className="space-y-4"
            style={{
              opacity: isIntersecting ? 1 : 0,
              transform: isIntersecting ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.7s ease-out 200ms'
            }}
          >
            <Card className="p-6 bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium text-foreground mb-1">Email</p>
                  <a href="mailto:arshad@example.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    arshad@example.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium text-foreground mb-1">Phone</p>
                  <a href="tel:+971501234567" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    +971 50 123 4567
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium text-foreground mb-1">Location</p>
                  <p className="text-sm text-muted-foreground">
                    Dubai, UAE
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
              <div className="flex items-start gap-3">
                <Linkedin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium text-foreground mb-1">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/arshadpalapra" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    /in/arshadpalapra
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
