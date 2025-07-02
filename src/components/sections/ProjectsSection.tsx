
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code } from "lucide-react";
import { Project } from "@/types";

const ProjectsSection = () => {
  const projects: Project[] = [
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

  return (
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
  );
};

export default ProjectsSection;
