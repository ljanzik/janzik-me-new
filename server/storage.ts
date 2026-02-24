import { db } from "./db";
import {
  experiences, skills, projects, messages,
  type Experience, type InsertExperience,
  type Skill, type InsertSkill,
  type Project, type InsertProject,
  type Message, type InsertMessage
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getExperiences(): Promise<Experience[]>;
  createExperience(experience: InsertExperience): Promise<Experience>;
  
  getSkills(): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  
  getProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  
  getMessages(): Promise<Message[]>;
  createMessage(message: InsertMessage): Promise<Message>;
}

export class DatabaseStorage implements IStorage {
  async getExperiences(): Promise<Experience[]> {
    return await db.select().from(experiences).orderBy(experiences.order);
  }
  async createExperience(experience: InsertExperience): Promise<Experience> {
    const [created] = await db.insert(experiences).values(experience).returning();
    return created;
  }
  
  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }
  async createSkill(skill: InsertSkill): Promise<Skill> {
    const [created] = await db.insert(skills).values(skill).returning();
    return created;
  }
  
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }
  async createProject(project: InsertProject): Promise<Project> {
    const [created] = await db.insert(projects).values(project).returning();
    return created;
  }

  async getMessages(): Promise<Message[]> {
    return await db.select().from(messages).orderBy(messages.createdAt);
  }
  async createMessage(message: InsertMessage): Promise<Message> {
    const [created] = await db.insert(messages).values(message).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
