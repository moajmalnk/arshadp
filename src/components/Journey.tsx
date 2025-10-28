import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Milestone, TrendingUp, Award, Target, ArrowRight, MapPin, Calendar } from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";

const milestones = [
  {
    year: "2024",
    title: "General Manager",
    organization: "Albedo Private Limited",
    location: "Manjeri, Kerala",
    type: "Leadership",
    description: "Leading strategic operations and organizational transformation, successfully transitioning from partnership to private limited structure.",
    achievements: [
      "Orchestrated corporate restructuring",
      "Established new governance frameworks",
      "Driving operational excellence"
    ],
    color: "purple",
    icon: Milestone
  },
  {
    year: "2022",
    title: "HR & Finance Head",
    organization: "Albedo Educator",
    location: "Manjeri, Kerala",
    type: "Management",
    description: "Spearheaded HR and finance operations, enhancing employee engagement and streamlining financial processes for scalable growth.",
    achievements: [
      "Enhanced employee engagement programs",
      "Streamlined financial operations",
      "Achieved significant cost savings"
    ],
    color: "blue",
    icon: Target
  },
  {
    year: "2021",
    title: "Career Foundation",
    organization: "Albedo Educator",
    location: "Manjeri, Kerala",
    type: "Growth",
    description: "Began professional journey in HR, building foundational expertise in recruitment, compliance, and talent management.",
    achievements: [
      "Facilitated seamless recruitment processes",
      "Supported organizational growth",
      "Developed core HR capabilities"
    ],
    color: "green",
    icon: TrendingUp
  },
  {
    year: "2020",
    title: "Professional Certification",
    organization: "CMA",
    location: "Certified",
    type: "Achievement",
    description: "Earned Certified Management Accountant (CMA) certification, establishing expertise in financial management and strategic planning.",
    achievements: [
      "Professional certification achieved",
      "Strategic finance expertise",
      "Enhanced analytical capabilities"
    ],
    color: "yellow",
    icon: Award
  }
];

const Journey = () => {
  const { ref, isIntersecting } = useIntersection({ threshold: 0.1, triggerOnce: true });

  const colorMap: Record<string, string> = {
    purple: 'hsl(var(--color-purple))',
    blue: 'hsl(var(--color-blue))',
    green: 'hsl(var(--color-green))',
    yellow: 'hsl(var(--color-yellow))'
  };

  return (
    <section id="journey" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div 
          ref={ref}
          className={`mb-16 text-center max-w-3xl mx-auto transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Professional Journey
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            A transformative path from foundational expertise to strategic leadership
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2 hidden md:block" />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const delay = index * 150;
              const Icon = milestone.icon;
              const color = colorMap[milestone.color];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative"
                  style={{
                    opacity: isIntersecting ? 1 : 0,
                    transform: isIntersecting ? 'translateY(0)' : 'translateY(30px)',
                    transition: `all 0.7s ease-out ${delay}ms`
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-4 border-background shadow-md transform md:-translate-x-1/2 -translate-x-2 z-10"
                    style={{ backgroundColor: color }}
                  />

                  {/* Card */}
                  <Card className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 group ${
                    isEven ? 'md:mr-auto' : 'md:ml-auto'
                  }`}>
                    <div className="p-6 md:p-8 space-y-6">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center gap-3">
                            <div 
                              className="p-2.5 rounded-lg"
                              style={{ backgroundColor: `${color}15` }}
                            >
                              <Icon className="h-5 w-5" style={{ color: color }} />
                            </div>
                            <div>
                              <Badge 
                                variant="secondary" 
                                className="mb-2"
                                style={{ 
                                  backgroundColor: `${color}20`,
                                  color: color,
                                  borderColor: `${color}40`
                                }}
                              >
                                {milestone.year}
                              </Badge>
                              <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">
                                {milestone.title}
                              </h3>
                            </div>
                          </div>

                          {/* Organization & Location */}
                          <div className="space-y-1.5 pl-12">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <span className="font-semibold text-foreground">{milestone.organization}</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                              <div className="flex items-center gap-1.5">
                                <MapPin className="h-4 w-4" />
                                <span>{milestone.location}</span>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {milestone.type}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" />
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed pl-12">
                        {milestone.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2 pl-12">
                        {milestone.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-3 text-sm">
                            <div 
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: color }}
                            />
                            <span className="text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>

                      {/* Decorative Accent */}
                      <div 
                        className="absolute top-0 left-0 w-1 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ backgroundColor: color }}
                      />
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Journey Summary */}
        <Card 
          className="mt-16 p-8 bg-gradient-to-br from-card to-card/50 border border-border shadow-lg"
          style={{
            opacity: isIntersecting ? 1 : 0,
            transform: isIntersecting ? 'translateY(0)' : 'translateY(20px)',
            transition: `all 0.7s ease-out ${milestones.length * 150}ms`
          }}
        >
          <div className="text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold">Continuous Growth & Impact</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From establishing foundational HR expertise to leading organizational transformation, 
              each milestone represents strategic advancement and measurable impact on business outcomes.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Journey;

