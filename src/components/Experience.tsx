import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    title: "General Manager",
    company: "Albedo International",
    location: "Dubai, UAE",
    period: "2020 - Present",
    type: "Full-Time",
    highlights: [
      "Led legal transition to Private Limited Company, streamlining governance",
      "Reduced operational overhead by 30% through strategic restructuring",
      "Implemented compliance frameworks across 3 international offices"
    ],
    skills: ["Corporate Structuring", "Compliance", "Operations Management"]
  },
  {
    title: "HR & Finance Director",
    company: "TechVentures Inc",
    location: "Dubai, UAE",
    period: "2016 - 2020",
    type: "Full-Time",
    highlights: [
      "Built HR department from ground up for 200+ employee organization",
      "Achieved 95% employee retention through strategic talent programs",
      "Optimized financial operations resulting in 25% cost savings"
    ],
    skills: ["HR Strategy", "Financial Planning", "Team Development"]
  },
  {
    title: "Senior Finance Manager",
    company: "Global Solutions Ltd",
    location: "Mumbai, India",
    period: "2012 - 2016",
    type: "Full-Time",
    highlights: [
      "Managed $10M+ budget across multiple business units",
      "Implemented ERP system improving reporting efficiency by 40%",
      "Led cross-functional team of 15 finance professionals"
    ],
    skills: ["Budget Management", "ERP Systems", "Financial Analysis"]
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Professional <span className="text-primary">Experience</span>
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 bg-card border-border hover:shadow-[var(--shadow-card-hover)] hover:border-primary/30 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Building2 className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                      <Badge variant="secondary" className="ml-2">{exp.type}</Badge>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="border-primary/30 text-primary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
