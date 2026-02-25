export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  order: number;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: number;
}

export interface Project {
  id: number;
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
export const experiences: Experience[] = generatedExperiences;

export const skills: Skill[] = [
  { id: 1, name: "IT-Strategie & Governance", category: "Leadership", proficiency: 95 },
  { id: 2, name: "Digitale Transformation", category: "Leadership", proficiency: 92 },
  { id: 3, name: "Teamführung & Entwicklung", category: "Leadership", proficiency: 90 },
  { id: 4, name: "Cloud-Strategie (AWS/Azure)", category: "Technical", proficiency: 85 },
  { id: 5, name: "Agile & Lean Methoden", category: "Methodology", proficiency: 88 },
  { id: 6, name: "KI-gestützte Führung", category: "Leadership", proficiency: 88 },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Globale Infrastruktur-Modernisierung",
    description: "Leitung der Transition von Legacy-On-Premise-Systemen zu einer modernen Cloud-Native-Architektur.",
    result: "30% Reduktion der Betriebskosten und 99,99% Verfügbarkeit erreicht."
  },
  {
    id: 2,
    title: "Restrukturierung der IT-Organisation",
    description: "Neugestaltung des IT-Service-Delivery-Modells zur Ausrichtung an den Unternehmenszielen.",
    result: "Verbesserung der Zufriedenheit interner Stakeholder um 45%."
  }
];

export const certifications: Certification[] = [
  { name: "Certified Information Systems Auditor (CISA)", issuer: "ISACA", date: "2018" },
  { name: "ITIL 4 Managing Professional", issuer: "AXELOS", date: "2020" },
  { name: "Professional Scrum Master II", issuer: "Scrum.org", date: "2019" },
  { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", date: "2021" }
];
