import type { Project } from "@/models/Project.js";
import type { Request, Response } from "express";
import prisma from "@/config/prisma.js";
import { projectSchema } from "@/validators/projectValidator.js";

// GET /projects
export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects: Project[] = await prisma.project.findMany();
    res.json(projects);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching projects." });
  }
};

// POST /projects
export const createProject = async (req: Request, res: Response) => {
  const result = projectSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ error: result.error.flatten() });
  }

  try {
    const { title, description, techStack, githubUrl, liveUrl } = result.data;

    const newProject: Project = await prisma.project.create({
      data: {
        title,
        description,
        techStack,
        githubUrl,
        liveUrl,
      },
    });

    res.status(201).json(newProject);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the project." });
  }
};
