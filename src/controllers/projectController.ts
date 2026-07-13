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

// GET /projects/:id
export const getProjectById = async (req: Request, res: Response) => {
  const id = req.params.id;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "Invalid project ID." });
  }

  try {
    const project: Project | null = await prisma.project.findUnique({
      where: { id },
    });

    if (!project) {
      return res.status(404).json({ error: "Project not found." });
    }

    res.json(project);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the project." });
  }
};

// DELETE /projects/:id
export const deleteProjectById = async (req: Request, res: Response) => {
  const id = req.params.id;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "Invalid project ID." });
  }

  try {
    const deletedProject = await prisma.project.delete({ where: { id } });
    res.json({
      message: "Project deleted successfully.",
      project: deletedProject,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the project." });
  }
};
