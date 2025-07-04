
export interface Project {
  title: string;
  description: string;
  image: string;
  liveDemo?: string;
  github: string;
  technologies: string[];
}

export interface Skills {
  [category: string]: string[];
}

export type NavigationSection = 'about' | 'projects' | 'skills' | 'contact';
