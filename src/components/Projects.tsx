import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, DollarSign } from "lucide-react";

const projects = [
  {
    title: "Corporate Restructuring Initiative",
    organization: "Albedo International",
    period: "2021-2022",
    icon: TrendingUp,
    problem: "Organization needed to transition from partnership to Pvt Ltd while maintaining operational continuity",
    solution: "Led comprehensive legal and structural transformation across 3 offices, implementing new governance frameworks",
    outcome: "Successfully completed transition with zero downtime, 30% reduction in compliance overhead",
    metrics: ["3 offices", "50+ employees transitioned", "6-month timeline"],
    tags: ["Corporate Law", "Change Management", "Governance"]
  },
  {
    title: "Talent Transformation Program",
    organization: "TechVentures Inc",
    period: "2017-2019",
    icon: Users,
    problem: "High turnover rate (40%) and lack of structured HR processes in rapidly growing startup",
    solution: "Built comprehensive HR infrastructure including recruitment, onboarding, performance management, and L&D programs",
    outcome: "Reduced turnover to 5%, increased employee satisfaction score by 85%, built team of 200+",
    metrics: ["95% retention", "200+ employees", "85% satisfaction"],
    tags: ["HR Strategy", "Culture Building", "Talent Management"]
  },
  {
    title: "Financial Optimization Project",
    organization: "Global Solutions Ltd",
    period: "2014-2015",
    icon: DollarSign,
    problem: "Fragmented financial systems leading to inefficiency and poor visibility into costs",
    solution: "Implemented integrated ERP system, standardized processes, and introduced zero-based budgeting",
    outcome: "Achieved 25% cost reduction, improved reporting speed by 40%, enhanced forecast accuracy by 60%",
    metrics: ["$2.5M savings", "40% faster reporting", "60% forecast accuracy"],
    tags: ["ERP Implementation", "Cost Optimization", "Process Improvement"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Strategic initiatives that delivered measurable impact
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300"
              >
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">{project.organization}</span>
                        <span>•</span>
                        <span>{project.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-sm font-bold text-primary mb-2">Problem</h4>
                      <p className="text-sm text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary mb-2">Solution</h4>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary mb-2">Outcome</h4>
                      <p className="text-sm text-muted-foreground">{project.outcome}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.metrics.map((metric, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {metric}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-secondary/50 text-muted-foreground rounded border border-border"
                      >
                        {tag}
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

export default Projects;
