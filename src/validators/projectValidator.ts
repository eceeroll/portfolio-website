import * as z from "zod";

export const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  techStack: z.array(z.string()).min(1, "At least one technology is required"),
  githubUrl: z.string().url("Invalid GitHub URL").optional(),
  liveUrl: z.string().url("Invalid Live URL").optional(),
});
