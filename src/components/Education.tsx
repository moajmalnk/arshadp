import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const educationData = [
  {
    degree: "MBA in Finance & Strategy",
    institution: "Indian Institute of Management",
    location: "Bangalore, India",
    year: "2010",
    honors: "Distinction"
  },
  {
    degree: "Bachelor of Commerce",
    institution: "University of Mumbai",
    location: "Mumbai, India",
    year: "2008",
    honors: "First Class"
  }
];

const certifications = [
  {
    name: "Certified Public Accountant (CPA)",
    issuer: "AICPA",
    year: "2015"
  },
  {
    name: "SHRM Senior Certified Professional (SHRM-SCP)",
    issuer: "SHRM",
    year: "2018"
  },
  {
    name: "Project Management Professional (PMP)",
    issuer: "PMI",
    year: "2019"
  },
  {
    name: "Certified Change Management Professional",
    issuer: "ACMP",
    year: "2021"
  }
];

const Education = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education & Credentials
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Academic foundation and professional certifications
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {educationData.map((edu, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300"
                >
                  <h4 className="text-xl font-bold text-primary mb-2">{edu.degree}</h4>
                  <p className="text-foreground font-medium mb-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">{edu.location}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{edu.year}</Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {edu.honors}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="p-4 bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300"
                >
                  <p className="font-bold text-foreground mb-1">{cert.name}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{cert.issuer}</span>
                    <Badge variant="secondary">{cert.year}</Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
