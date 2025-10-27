import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Testimonials />
      <Contact />
      
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">AP</span>
              </div>
              <span className="font-semibold">Arshad Palapra</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Arshad Palapra. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
