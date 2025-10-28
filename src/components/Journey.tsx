import { Card } from "@/components/ui/card";
import { useIntersection } from "@/hooks/use-intersection";

const milestones = [
  {
    year: "2024",
    title: "General Manager",
    organization: "Albedo Private Limited",
    description: "Leading strategic operations and organizational transformation, successfully transitioning from partnership to private limited structure."
  },
  {
    year: "2022",
    title: "HR & Finance Head",
    organization: "Albedo Educator",
    description: "Spearheaded HR and finance operations, enhancing employee engagement and streamlining financial processes for scalable growth."
  },
  {
    year: "2021",
    title: "Career Foundation",
    organization: "Albedo Educator",
    description: "Began professional journey in HR, building foundational expertise in recruitment, compliance, and talent management."
  },
  {
    year: "2020",
    title: "Professional Certification",
    organization: "CMA",
    description: "Earned Certified Management Accountant (CMA) certification, establishing expertise in financial management and strategic planning."
  }
];

const Journey = () => {
  const { ref, isIntersecting } = useIntersection({ threshold: 0.1, triggerOnce: true });

  // Staggered positions for zig-zag layout
  const getCardPosition = (index: number) => {
    const positions = [
      { left: "0%", rotate: "-2deg" },
      { left: "45%", rotate: "1.5deg" },
      { left: "0%", rotate: "-1.5deg" },
      { left: "45%", rotate: "2deg" }
    ];
    return positions[index % 4];
  };

  // Calculate line positions
  const getLinePosition = (index: number) => {
    if (index === milestones.length - 1) return null;
    const isLeft = index % 2 === 0;
    return {
      left: isLeft ? "60%" : "0%",
      width: "35%",
      rotate: isLeft ? "25deg" : "-25deg"
    };
  };

  return (
    <section id="journey" className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Subtle lined background */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, currentColor 39px, currentColor 40px)"
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Label */}
        <div 
          ref={ref}
          className={`mb-20 transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-sm font-medium tracking-wider uppercase">// Professional Journey</span>
        </div>

        {/* Journey Cards - Staggered Layout */}
        <div className="relative min-h-[900px] md:min-h-[1100px]">
          {milestones.map((milestone, index) => {
            const delay = index * 100;
            const number = String(index + 1).padStart(2, '0');
            const position = getCardPosition(index);
            const linePosition = getLinePosition(index);
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative mb-8 md:mb-0">
                {/* Connecting Line */}
                {linePosition && (
                  <svg
                    className="absolute hidden md:block pointer-events-none"
                    style={{
                      left: linePosition.left,
                      bottom: "-80px",
                      width: linePosition.width,
                      height: "160px",
                      transform: `rotate(${linePosition.rotate})`,
                      transformOrigin: "top center",
                      opacity: isIntersecting ? 1 : 0,
                      transition: `opacity 0.7s ease-out ${delay + 100}ms`
                    }}
                  >
                    <line
                      x1={isEven ? "0%" : "100%"}
                      y1="0"
                      x2={isEven ? "100%" : "0%"}
                      y2="100%"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      className="text-border/60"
                    />
                  </svg>
                )}

                {/* Card */}
                <div
                  className={`relative mb-24 md:mb-32 ${isEven ? 'md:mr-auto md:w-[48%]' : 'md:ml-auto md:w-[48%]'}`}
                  style={{
                    opacity: isIntersecting ? 1 : 0,
                    transform: `translateY(${isIntersecting ? 0 : 30}px)`,
                    transition: `all 0.7s ease-out ${delay}ms`
                  }}
                >
                  <Card
                    className="bg-card/95 backdrop-blur-sm border border-border shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl"
                    style={{
                      transform: `rotate(${position.rotate})`
                    }}
                  >
                    {/* Inner Content Area */}
                    <div className="p-6 md:p-8 bg-muted/20 rounded-lg m-2 md:m-3">
                      {/* Number */}
                      <div className="mb-5">
                        <span className="text-[72px] md:text-[96px] font-bold leading-none opacity-20 select-none">
                          {number}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold mb-5">
                        {milestone.title}
                      </h3>

                      {/* Organization & Year */}
                      <div className="mb-5 space-y-1">
                        <div className="text-base font-medium text-muted-foreground">
                          {milestone.organization}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {milestone.year}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Journey;

