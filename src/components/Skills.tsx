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
  const colors = [
    'hsl(var(--color-yellow))',
    'hsl(var(--color-blue))',
    'hsl(var(--color-purple))',
    'hsl(var(--color-green))'
  ];

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Core Competencies
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Strategic expertise across leadership, operations, and transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-8 bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300"
              style={{
                borderTopWidth: '4px',
                borderTopColor: colors[index % colors.length]
              }}
            >
              <h3 className="text-xl font-bold mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-muted text-foreground rounded-full text-sm font-medium"
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
