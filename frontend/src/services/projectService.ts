import { api } from "./api.js";
import type { Project } from "../types/Project";

export const getAllProjects = async (): Promise<Project[]> => {
  const { data } = await api.get<Project[]>("/projects");
  return data;
};
