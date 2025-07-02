
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Mail, Phone } from "lucide-react";

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
