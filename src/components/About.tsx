import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto animate-slide-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card border-border hover:shadow-[var(--shadow-card-hover)] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-primary">Professional Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in transforming organizations through strategic HR and finance leadership. 
              With a proven track record of restructuring operations, implementing compliance frameworks, 
              and building high-performance teams, I help organizations navigate complex transitions 
              and achieve sustainable growth.
            </p>
          </Card>

          <Card className="p-8 bg-card border-border hover:shadow-[var(--shadow-card-hover)] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-primary">Core Expertise</h3>
            <p className="text-muted-foreground leading-relaxed">
              My approach combines strategic thinking with hands-on execution. From corporate restructuring 
              and financial optimization to talent development and operational excellence, I deliver results 
              that create lasting value. I'm passionate about speaking at conferences and consulting with 
              organizations ready to transform.
            </p>
          </Card>
        </div>

        <Card className="mt-8 p-8 bg-secondary/50 border-primary/20">
          <p className="text-lg text-center font-medium">
            "Strategic leadership isn't just about making decisions—it's about{" "}
            <span className="text-primary">building systems that enable sustainable growth</span>{" "}
            and empowering teams to reach their full potential."
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
