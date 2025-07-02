
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, { CardContent, { CardDescription, { CardHeader, { CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Download, Code } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "End-to-End AI Solution",
      description: "Comprehensive AI solution demonstrating full-stack development capabilities with modern AI integration.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=60",
      liveDemo: "https://intelliassist-ai-web-2025.fly.dev/",
      github: "https://github.com/PhiliswaNgada/end-to-end.git",
      technologies: ["AI/ML", "Full-Stack", "Cloud Deployment"]
    },
    {
      title: "AI Concept Chatbot",
      description: "Interactive AI educational chatbot that serves as a knowledge assistant for AI fundamentals, making complex concepts accessible to beginners.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=60",
      liveDemo: "https://cdn.botpress.cloud/webchat/v2.4/shareable.html?configUrl=https://files.bpcontent.cloud/2025/05/13/13/20250513135937-P7GRCF58.json",
      github: "https://github.com/PhiliswaNgada/AI-Concept-Chatbot.git",
      technologies: ["Chatbot", "AI Education", "Natural Language Processing"]
    },
    {
      title: "AI Resume Builder",
      description: "Intelligent resume generation system that creates customized, ATS-friendly resumes based on user inputs.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=60",
      liveDemo: "https://github.com/PhiliswaNgada/AI-Resume-Builder.git",
      github: "https://github.com/PhiliswaNgada/AI-Resume-Builder.git",
      technologies: ["AI", "Resume Generation", "ATS Optimization"]
    },
    {
      title: "Custom Content Generator",
      description: "Specialized content generation tool that produces high-quality outputs for specific use cases.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=60",
      github: "https://github.com/PhiliswaNgada/Custom-Content-Generator.git",
      technologies: ["Content Generation", "AI", "Natural Language Processing"]
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "JavaScript", "R", "SQL"],
    "AI/ML Technologies": ["Machine Learning", "Natural Language Processing", "Data Analysis", "Statistical Modeling"],
    "Web Development": ["React", "HTML/CSS", "Frontend Development", "Responsive Design"],
    "Tools & Platforms": ["Git", "GitHub", "Cloud Deployment", "Data Visualization"],
    "Professional Skills": ["IT Support", "Technical Documentation", "Problem Solving", "Project Management"]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background */}
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
                {['about', 'projects', 'skills', 'contact'].map((section) => (
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
              <a href="https://pdflink.to/1fa5f2db/" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-400">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 leading-relaxed">
                I am a Statistics graduate with a Bachelor of Science degree, currently working in IT Support 
                while pursuing my passion for AI and Machine Learning. I have completed a comprehensive data 
                science learnership and developed expertise in creating intelligent solutions.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                My unique combination of statistical background, data science training, and hands-on AI/ML 
                development experience allows me to approach problems with both analytical rigor and 
                creative innovation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <span>Port Elizabeth, South Africa</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-purple-400" />
                  <span>ngadaphiliswa@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-purple-400" />
                  <span>0788576983</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">Bachelor of Science in Statistics</p>
                  <p className="text-muted-foreground">Statistical Analysis & Data Modeling</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Professional Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold">Data Science Learnership</p>
                    <p className="font-semibold">Current Role: IT Support</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-400">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.liveDemo && project.title !== "Custom Content Generator" && (
                      <Button size="sm" asChild>
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Code className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/PhiliswaNgada" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-400">Technical Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-400">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-400">Get In Touch</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg mb-8">
              I'm always interested in discussing new opportunities in AI/ML development, 
              data science, or IT support roles. Let's connect!
            </p>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Mail className="h-5 w-5 text-purple-400" />
                  <a href="mailto:ngadaphiliswa@gmail.com" className="hover:text-purple-400 transition-colors">
                    ngadaphiliswa@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5 text-purple-400" />
                  <span>0788576983</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <span>Port Elizabeth, South Africa</span>
                </div>
              </div>

              <Separator className="my-8" />

              <h3 className="text-xl font-semibold">Professional Links</h3>
              <div className="flex justify-center gap-6">
                <Button variant="outline" size="lg" asChild>
                  <a href="https://za.linkedin.com/in/philiswa-ngada-76379a197" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://github.com/PhiliswaNgada" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </a>
                </Button>
              </div>

              <div className="mt-8">
                <Button size="lg" asChild className="bg-purple-600 hover:bg-purple-700">
                  <a href="https://pdflink.to/1fa5f2db/" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Philiswa Ngada. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
