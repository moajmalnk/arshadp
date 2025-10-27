import { Card } from "@/components/ui/card";

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
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Core <span className="text-primary">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:shadow-[var(--shadow-card-hover)] hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-primary mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-secondary/50 text-foreground rounded-md text-sm border border-border hover:border-primary/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
