
import React from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react";

const ContactSection = () => {
  return (
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
                <a href="https://pdflink.to/caf91b39/" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
