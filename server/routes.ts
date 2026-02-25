import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

async function seedDatabase() {
  const existingExperiences = await storage.getExperiences();
  if (existingExperiences.length === 0) {
    await storage.createExperience({
      role: "Digital Leader & IT Executive",
      company: "Strategische IT-Führung",
      period: "2015 - Heute",
      description: "Gestaltung der digitalen Transformation und Führung leistungsstarker IT-Organisationen mit Fokus auf nachhaltiges Wachstum und Innovation.",
      order: 1
    });
    await storage.createExperience({
      role: "Senior IT Manager",
      company: "Enterprise Technology Group",
      period: "2010 - 2015",
      description: "Leitung globaler Infrastrukturprojekte und Führung funktionsübergreifender Teams zur Bereitstellung kritischer Business-Systeme.",
      order: 2
    });
    
    await storage.createSkill({ name: "IT-Strategie & Governance", category: "Leadership", proficiency: 95 });
    await storage.createSkill({ name: "Digitale Transformation", category: "Leadership", proficiency: 92 });
    await storage.createSkill({ name: "Teamführung & Entwicklung", category: "Leadership", proficiency: 90 });
    await storage.createSkill({ name: "Cloud-Strategie (AWS/Azure)", category: "Technical", proficiency: 85 });
    await storage.createSkill({ name: "Agile & Lean Methoden", category: "Methodology", proficiency: 88 });

    await storage.createProject({
      title: "Globale Infrastruktur-Modernisierung",
      description: "Leitung der Transition von Legacy-On-Premise-Systemen zu einer modernen Cloud-Native-Architektur.",
      result: "30% Reduktion der Betriebskosten und 99,99% Verfügbarkeit erreicht."
    });
    await storage.createProject({
      title: "Restrukturierung der IT-Organisation",
      description: "Neugestaltung des IT-Service-Delivery-Modells zur Ausrichtung an den Unternehmenszielen.",
      result: "Verbesserung der Zufriedenheit interner Stakeholder um 45%."
    });
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Seed the database
  seedDatabase().catch(console.error);

  app.get(api.experiences.list.path, async (req, res) => {
    const data = await storage.getExperiences();
    res.json(data);
  });

  app.get(api.skills.list.path, async (req, res) => {
    const data = await storage.getSkills();
    res.json(data);
  });

  app.get(api.projects.list.path, async (req, res) => {
    const data = await storage.getProjects();
    res.json(data);
  });

  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const data = await storage.createMessage(input);
      res.status(201).json(data);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
