export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  order: number;
}

export interface Skill {
  name: string;
  category: string;
  proficiency: number;
}

export interface Project {
  title: string;
  description: string;
  result: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

import generatedExperiences from "./generated/experiences.json";
import generatedSkills from "./generated/skills.json";
import generatedProjects from "./generated/projects.json";
import generatedCertifications from "./generated/certifications.json";

export const experiences: Experience[] = generatedExperiences;
export const skills: Skill[] = generatedSkills;
export const projects: Project[] = generatedProjects;
export const certifications: Certification[] = generatedCertifications;
