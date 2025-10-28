import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { SectionSkeleton } from "@/components/SkeletonCard";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

// Lazy load components below the fold for performance
const About = lazy(() => import("@/components/About"));
const Experience = lazy(() => import("@/components/Experience"));
const Skills = lazy(() => import("@/components/Skills"));
const Education = lazy(() => import("@/components/Education"));
const Journey = lazy(() => import("@/components/Journey"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Contact = lazy(() => import("@/components/Contact"));

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<SectionSkeleton cards={2} />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Education />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Journey />
      </Suspense>
      <Suspense fallback={<SectionSkeleton cards={3} />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>
      
      <footer className="py-16 px-6 md:px-12 lg:px-24 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
            {/* Logo Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">AP</span>
                </div>
                <span className="text-xl font-bold">Arshad Palapra</span>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="space-y-4">
              <h3 className="font-bold text-foreground mb-4">Explore</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#journey" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Journey
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-foreground mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#education" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-foreground mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2025 Arshad Palapra. All rights reserved.
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors"
              >
                <Github className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="https://linkedin.com/in/arshadpalapra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors"
              >
                <Twitter className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="mailto:arshad@example.com"
                className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors"
              >
                <Mail className="h-5 w-5 text-foreground" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
