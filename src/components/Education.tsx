import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";

const educationData = [
  {
    degree: "Master of Commerce (Finance)",
    institution: "Indira Gandhi National Open University",
    location: "India",
    year: "2023",
    honors: "Specialization in financial systems, taxation, and corporate management"
  },
  {
    degree: "Bachelor of Commerce",
    institution: "University of Calicut",
    location: "Kerala, India",
    year: "2018",
    honors: "Business Administration and Management"
  }
];

const certifications = [
  {
    name: "CMA (Inter)",
    issuer: "ICMAI",
    year: "In Progress"
  }
];

const Education = () => {
  const { ref, isIntersecting } = useIntersection({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={ref}
          className={`mb-16 text-center max-w-3xl mx-auto transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
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
            <div className="grid md:grid-cols-2 gap-4">
              {educationData.map((edu, index) => {
                const delay = index * 100;
                return (
                <Card
                  key={index}
                  className="p-6 bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1"
                  style={{
                    opacity: isIntersecting ? 1 : 0,
                    transform: isIntersecting ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.6s ease-out ${delay}ms`
                  }}
                >
                  <h4 className="text-xl font-bold text-primary mb-2">{edu.degree}</h4>
                  <p className="text-foreground font-medium mb-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">{edu.location}</p>
                  <div className="flex flex-col gap-2">
                    <Badge variant="secondary">{edu.year}</Badge>
                    <p className="text-sm text-muted-foreground">{edu.honors}</p>
                  </div>
                </Card>
                );
              })}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Education;
