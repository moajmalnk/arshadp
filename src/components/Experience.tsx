import { Calendar } from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";

const experiences = [
  {
    title: "General Manager",
    company: "Albedo Private Limited",
    location: "Manjeri, Kerala, India",
    period: "Jan 2024 - Present",
    type: "Full-Time",
    highlights: [
      "Successfully orchestrated the transition from Albedo Educator partnership to a private limited company, establishing a strong foundation for future growth",
      "Spearheading strategic operations, team alignment, and compliance management",
      "Leading with a forward-thinking approach to ensure operational excellence and sustainable success"
    ],
    skills: ["Strategic Leadership", "Corporate Structuring", "Financial Planning", "Compliance", "Operations Management"]
  },
  {
    title: "Startup India Consultant",
    company: "Albedo Private Limited",
    location: "Manjeri, Kerala, India",
    period: "Jan 2024 - May 2024",
    type: "Full-Time",
    highlights: [
      "Guided Albedo's registration under the Startup India initiative, ensuring adherence to regulatory standards",
      "Managed legal structuring, compliance documentation, and startup strategy formulation",
      "Delivered actionable insights to support the company's growth trajectory"
    ],
    skills: ["Regulatory Compliance", "Business Development", "Startup Strategy", "Legal Structuring"]
  },
  {
    title: "HR & Finance Head",
    company: "Albedo Educator",
    location: "Manjeri, Kerala, India",
    period: "Nov 2022 - Jan 2024",
    type: "Full-Time",
    highlights: [
      "Enhanced employee engagement through innovative HR policies and leadership development programs",
      "Streamlined budgeting and financial operations, achieving cost savings and efficiency improvements",
      "Played a pivotal role in scaling operations, aligning HR and finance with business objectives"
    ],
    skills: ["HR Policy Design", "Financial Planning", "Talent Development", "Cost Management"]
  },
  {
    title: "HR Assistant",
    company: "Albedo Educator",
    location: "Manjeri, Kerala, India",
    period: "Nov 2021 - May 2022",
    type: "Full-Time",
    highlights: [
      "Facilitated seamless recruitment and onboarding processes, enhancing team synergy",
      "Supported payroll and HR compliance, contributing to operational continuity",
      "Collaborated on employee engagement strategies to boost morale and productivity"
    ],
    skills: ["Recruitment", "HR Compliance", "Payroll Management", "Employee Engagement"]
  }
];

const Experience = () => {
  const { ref, isIntersecting } = useIntersection({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div 
          ref={ref}
          className={`mb-20 transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-sm font-medium tracking-wider uppercase">// Experience</span>
        </div>

        {/* Experience Items */}
        <div className="space-y-32">
          {experiences.map((exp, index) => {
            const delay = index * 100;
            const number = String(index + 1).padStart(2, '0');
            return (
              <div
                key={index}
                className={`flex gap-12 md:gap-16 lg:gap-20 transition-all duration-700 ${
                  isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${delay}ms`
                }}
              >
                {/* Large Number */}
                <div className="flex-shrink-0">
                  <span className="text-[120px] md:text-[160px] lg:text-[200px] font-bold leading-none opacity-20 select-none">
                    {number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-8">
                  {/* Title and Company */}
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                      {exp.title}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-base">
                        <span className="font-medium">{exp.company}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-8 leading-relaxed max-w-3xl">
                    3+ years of strategic leadership driving business transformation and organizational growth
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-0 border-t border-border">
                    {exp.highlights.map((highlight, i) => (
                      <div key={i} className="py-4 border-b border-border">
                        <div className="flex items-start justify-between gap-4">
                          <span className="flex-1 text-muted-foreground leading-relaxed">
                            {highlight}
                          </span>
                          <span className="text-2xl font-bold text-muted-foreground/30 flex-shrink-0">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-3 mt-8">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="text-sm text-muted-foreground">
                        {skill}
                        {i < exp.skills.length - 1 && <span className="mx-2">•</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
