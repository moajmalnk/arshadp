import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building systems that{" "}
            <span className="relative inline-block">
              <span className="relative z-10">empower growth</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[hsl(var(--color-blue))] -rotate-1 -z-0" />
            </span>
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Strategic leadership in HR, finance, and operational excellence 
            that transforms challenges into sustainable competitive advantages
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--color-yellow))] flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold">Professional Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in transforming organizations through strategic HR and finance leadership. 
                With a proven track record of restructuring operations, implementing compliance frameworks, 
                and building high-performance teams, I help organizations navigate complex transitions 
                and achieve sustainable growth.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--color-purple))] flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold">Core Expertise</h3>
              <p className="text-muted-foreground leading-relaxed">
                My approach combines strategic thinking with hands-on execution. From corporate restructuring 
                and financial optimization to talent development and operational excellence, I deliver results 
                that create lasting value. Available for speaking engagements and organizational consulting.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
