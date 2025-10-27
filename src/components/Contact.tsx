import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
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
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground mb-12 text-lg">
          Let's discuss how I can help transform your organization
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="p-6 md:p-8 bg-card border-border">
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

          <div className="space-y-6">
            <Card className="p-6 bg-card border-border hover:shadow-[var(--shadow-card-hover)] transition-all duration-300">
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

            <Card className="p-6 bg-card border-border hover:shadow-[var(--shadow-card-hover)] transition-all duration-300">
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

            <Card className="p-6 bg-card border-border hover:shadow-[var(--shadow-card-hover)] transition-all duration-300">
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

            <Card className="p-6 bg-card border-border hover:shadow-[var(--shadow-card-hover)] transition-all duration-300">
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
