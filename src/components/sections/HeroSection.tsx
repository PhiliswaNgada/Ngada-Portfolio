
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { NavigationSection } from "@/types";

interface HeroSectionProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ activeSection, scrollToSection }: HeroSectionProps) => {
  const navigationSections: NavigationSection[] = ['about', 'projects', 'skills', 'contact'];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/lovable-uploads/ef30696c-fe3c-497e-95d8-ce981a4c46bf.png')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/60" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-purple-400">Philiswa Ngada</div>
            <div className="hidden md:flex space-x-8">
              {navigationSections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section 
                      ? 'text-purple-400 font-semibold' 
                      : 'text-muted-foreground hover:text-purple-400'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-purple-400">
          Philiswa Ngada
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
          Statistics Graduate | AI/ML Developer | Data Scientist | IT Support
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Passionate about leveraging artificial intelligence and data science to solve real-world problems. 
          Combining statistical expertise with cutting-edge AI technologies to create innovative solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => scrollToSection('projects')}
            size="lg" 
            className="bg-purple-600 hover:bg-purple-700"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            asChild
          >
            <a href="https://pdflink.to/caf91b39/" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
