import { Card } from "@/components/ui/card";
import { useIntersection } from "@/hooks/use-intersection";

const skillCategories = [
  {
    category: "Strategic Leadership",
    skills: [
      "Corporate Restructuring",
      "Change Management",
      "Organizational Development",
      "Strategic Planning",
      "Executive Coaching"
    ]
  },
  {
    category: "HR & Talent",
    skills: [
      "Talent Acquisition",
      "Performance Management",
      "Compensation & Benefits",
      "Employee Relations",
      "Learning & Development"
    ]
  },
  {
    category: "Finance & Operations",
    skills: [
      "Financial Planning & Analysis",
      "Budget Management",
      "Cost Optimization",
      "Compliance & Governance",
      "Process Improvement"
    ]
  },
  {
    category: "Technical & Tools",
    skills: [
      "ERP Systems (SAP, Oracle)",
      "HRIS Platforms",
      "Financial Modeling",
      "Data Analytics",
      "Project Management"
    ]
  }
];

const Skills = () => {
  const { ref, isIntersecting } = useIntersection({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div 
          ref={ref}
          className={`mb-20 transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-sm font-medium tracking-wider uppercase">// Core Competencies</span>
        </div>

        {/* Skills Cards - Horizontal Layout */}
        <div className="space-y-6">
          {skillCategories.map((category, index) => {
            const delay = index * 100;
            
            return (
              <Card
                key={index}
                className="bg-card border border-border rounded-lg transition-all duration-700"
                style={{
                  opacity: isIntersecting ? 1 : 0,
                  transform: isIntersecting ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.7s ease-out ${delay}ms`
                }}
              >
                <div className="p-6 md:p-8 flex items-center gap-6 md:gap-8">
                  {/* Section Label */}
                  <div className="flex-shrink-0">
                    <span className="text-base md:text-lg font-medium whitespace-nowrap">
                      {category.category}
                    </span>
                  </div>

                  {/* Vertical Separator */}
                  <div className="w-px h-12 bg-border flex-shrink-0" />

                  {/* Skills Badges */}
                  <div className="flex flex-wrap items-center gap-3 md:gap-4">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-muted/50 text-foreground rounded-md text-sm font-medium border border-border/50"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Skills;
