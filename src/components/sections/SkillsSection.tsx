
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skills } from "@/types";

const SkillsSection = () => {
  const skills: Skills = {
    "Programming Languages": ["Python", "JavaScript", "R", "SQL"],
    "AI/ML Technologies": ["Machine Learning", "Natural Language Processing", "Data Analysis", "Statistical Modeling"],
    "Web Development": ["React", "HTML/CSS", "Frontend Development", "Responsive Design"],
    "Tools & Platforms": ["Git", "GitHub", "Cloud Deployment", "Data Visualization"],
    "Professional Skills": ["IT Support", "Technical Documentation", "Problem Solving", "Project Management"]
  };

  return (
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
  );
};

export default SkillsSection;
