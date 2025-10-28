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
  },
  {
    category: "Administration",
    skills: [
      "Office Management",
      "Policy Development",
      "Administrative Operations",
      "Vendor Management",
      "Documentation & Reporting"
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
          className={`mb-12 transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-sm font-medium tracking-wider uppercase">// Core Competencies</span>
          <p className="text-base md:text-lg text-muted-foreground mt-4 leading-relaxed max-w-4xl">
            Strategic Leader | HR, Finance & Administration Expert | Driving Business Transformation, Operational Excellence, and Organizational Growth
          </p>
        </div>

        {/* Skills Cards - Horizontal Layout */}
        <div className="space-y-4">
          {skillCategories.map((category, index) => {
            const delay = index * 80;
            
            return (
              <Card
                key={index}
                className="bg-card border border-border rounded-lg transition-all duration-700 hover:border-border/80"
                style={{
                  opacity: isIntersecting ? 1 : 0,
                  transform: isIntersecting ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.7s ease-out ${delay}ms`
                }}
              >
                <div className="p-5 md:p-7 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
                  {/* Section Label */}
                  <div className="flex-shrink-0 min-w-[180px] md:min-w-[220px]">
                    <span className="text-base font-medium tracking-tight">
                      {category.category}
                    </span>
                  </div>

                  {/* Vertical Separator - Hidden on mobile */}
                  <div className="hidden md:block w-px h-10 bg-border/60 flex-shrink-0" />

                  {/* Horizontal Separator - Visible on mobile */}
                  <div className="md:hidden w-full h-px bg-border/60" />

                  {/* Skills Badges */}
                  <div className="flex flex-wrap items-center gap-2.5 flex-1">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-2 bg-muted/40 text-foreground rounded-[6px] text-sm font-medium border border-border/40 hover:bg-muted/60 hover:border-border/60 transition-colors duration-200"
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
