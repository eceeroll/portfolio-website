import { Router } from "express";
import {
  getProjects,
  createProject,
  getProjectById,
  deleteProjectById,
} from "@/controllers/projectController.js";
import validateRequest from "@/middlewares/validateRequest.js";
import { projectSchema } from "@/validators/projectValidator.js";

const router = Router({ caseSensitive: true });

router.get("/", getProjects);
router.post("/", validateRequest(projectSchema), createProject);
router.get("/:id", getProjectById);
router.delete("/:id", deleteProjectById);

export default router;
