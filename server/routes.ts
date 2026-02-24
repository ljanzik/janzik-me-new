import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

async function seedDatabase() {
  const existingExperiences = await storage.getExperiences();
  if (existingExperiences.length === 0) {
    await storage.createExperience({
      role: "Interim COO / CRO",
      company: "Various IT & Tech Companies",
      period: "2018 - Present",
      description: "Leading turnarounds and restructuring IT operations for scalable growth.",
      order: 1
    });
    await storage.createExperience({
      role: "Chief Technology Officer",
      company: "Global Tech Solutions GmbH",
      period: "2010 - 2018",
      description: "Scaled engineering team from 20 to 150+. Modernized tech stack and implemented agile practices.",
      order: 2
    });
    
    await storage.createSkill({ name: "IT Strategy", category: "Leadership", proficiency: 95 });
    await storage.createSkill({ name: "Turnaround Management", category: "Leadership", proficiency: 90 });
    await storage.createSkill({ name: "Agile Organization", category: "Methodology", proficiency: 85 });
    await storage.createSkill({ name: "Cloud Architecture", category: "Technical", proficiency: 80 });

    await storage.createProject({
      title: "FinTech Restructuring",
      description: "Redesigned core processes and governance structure under high pressure.",
      result: "Stabilized operations and reduced lead times by 40%."
    });
    await storage.createProject({
      title: "AI Integration in Operations",
      description: "Implemented custom AI copilots for decision preparation in middle management.",
      result: "Increased operational efficiency by 25%."
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
