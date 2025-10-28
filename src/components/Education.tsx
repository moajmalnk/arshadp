import { Calendar, MapPin } from "lucide-react";
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
    <section id="education" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div 
          ref={ref}
          className={`mb-20 transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-sm font-medium tracking-wider uppercase">// Education & Credentials</span>
        </div>

        {/* Education Items */}
        <div className="space-y-32 mb-32">
          {educationData.map((edu, index) => {
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
                  {/* Title and Institution */}
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                      {edu.degree}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-base">
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-8 leading-relaxed max-w-3xl">
                    {edu.honors}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
