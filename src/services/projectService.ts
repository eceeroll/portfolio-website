import prisma from "@/config/prisma.js";
import type { CreateProjectDto, Project } from "@/models/Project.js";

export const getAllProjects = async (): Promise<Project[]> => {
  return prisma.project.findMany();
};

export const createProject = async (
  data: CreateProjectDto,
): Promise<Project> => {
  return prisma.project.create({ data });
};

export const getProjectById = async (id: string): Promise<Project | null> => {
  return prisma.project.findUnique({ where: { id } });
};

export const deleteProjectById = async (
  id: string,
): Promise<Project | null> => {
  return prisma.project.delete({ where: { id } });
};

export const updateProjectById = async (
  id: string,
  data: Partial<CreateProjectDto>,
): Promise<Project | null> => {
  return prisma.project.update({ where: { id }, data });
};
