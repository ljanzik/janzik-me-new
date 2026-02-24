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
      company: "janzik.me",
      period: "2015 - Present",
      description: "Driving digital transformation and leading high-performing IT organizations with a focus on sustainable growth and innovation.",
      order: 1
    });
    await storage.createExperience({
      role: "Senior IT Manager",
      company: "Enterprise Technology Group",
      period: "2010 - 2015",
      description: "Managed global infrastructure projects and led cross-functional teams to deliver critical business systems.",
      order: 2
    });
    
    await storage.createSkill({ name: "IT Strategy & Governance", category: "Leadership", proficiency: 95 });
    await storage.createSkill({ name: "Digital Transformation", category: "Leadership", proficiency: 92 });
    await storage.createSkill({ name: "Team Leadership & Development", category: "Leadership", proficiency: 90 });
    await storage.createSkill({ name: "Cloud Strategy (AWS/Azure)", category: "Technical", proficiency: 85 });
    await storage.createSkill({ name: "Agile & Lean Methodologies", category: "Methodology", proficiency: 88 });

    await storage.createProject({
      title: "Global Infrastructure Modernization",
      description: "Led the transition of legacy on-premise systems to a modern cloud-native architecture.",
      result: "Achieved 30% reduction in operational costs and 99.99% uptime."
    });
    await storage.createProject({
      title: "IT Organization Restructuring",
      description: "Redesigned the IT service delivery model to align with business objectives.",
      result: "Improved internal stakeholder satisfaction by 45%."
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
