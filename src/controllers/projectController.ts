import type { Project } from "@/models/Project.js";
import type { Request, Response } from "express";
import prisma from "@/config/prisma.js";

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
