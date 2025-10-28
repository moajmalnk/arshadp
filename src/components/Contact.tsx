import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useIntersection } from "@/hooks/use-intersection";

const Contact = () => {
  const { toast } = useToast();
  const { ref, isIntersecting } = useIntersection({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll respond within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email us",
      detail: "arshad@albedoedu.com",
      href: "mailto:arshad@albedoedu.com"
    },
    {
      icon: Phone,
      title: "Call us",
      detail: "+91 7025521132",
      href: "tel:+917025521170"
    },
    {
      icon: MapPin,
      title: "Our location",
      detail: "Manjeri, Kerala, India"
    }
  ];

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <span className="text-[200px] md:text-[300px] font-bold select-none">CONTACT</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Label */}
        <div 
          ref={ref}
          className={`mb-20 transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-sm font-medium tracking-wider uppercase">// Let's Work Together</span>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {/* Left Column - Contact Information */}
          <div 
            className="space-y-8"
            style={{
              opacity: isIntersecting ? 1 : 0,
              transform: isIntersecting ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.7s ease-out'
            }}
          >
            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Get in touch
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Have questions or ready to transform your business with strategic leadership?
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                const delay = index * 100;
                
                return (
                  <Card
                    key={index}
                    className="p-6 bg-card border border-border shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl group"
                    style={{
                      opacity: isIntersecting ? 1 : 0,
                      transform: isIntersecting ? 'translateX(0)' : 'translateX(-20px)',
                      transition: `all 0.7s ease-out ${delay}ms`
                    }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="p-3 bg-muted/50 rounded-lg group-hover:bg-muted transition-colors">
                          <Icon className="h-5 w-5 text-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-foreground mb-1">
                            {method.title}
                          </h3>
                          {method.href ? (
                            <a 
                              href={method.href}
                              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {method.detail}
                            </a>
                          ) : (
                            <p className="text-sm text-muted-foreground">
                              {method.detail}
                            </p>
                          )}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full w-10 h-10 hover:bg-muted shrink-0"
                        onClick={() => method.href && window.open(method.href, '_self')}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div 
            style={{
              opacity: isIntersecting ? 1 : 0,
              transform: isIntersecting ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.7s ease-out 200ms'
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="h-14 bg-card border-border rounded-lg text-base"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="h-14 bg-card border-border rounded-lg text-base"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={8}
                  required
                  className="bg-card border-border rounded-lg resize-none text-base"
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                size="lg" 
                className="w-full h-14 bg-foreground hover:bg-foreground/90 text-background font-semibold rounded-lg text-base"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
