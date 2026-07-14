import BASE_API_URL from "./api.js";
import type { Project } from "../types/Project";

export const getAllProjects = async (): Promise<Project[]> => {
  const response = await fetch(`${BASE_API_URL}/projects`);

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  const data = await response.json();
  return data;
};
