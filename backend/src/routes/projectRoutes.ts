import { Router } from "express";
import {
  getProjects,
  createProject,
  getProjectById,
  deleteProjectById,
  updateProjectById,
} from "@/controllers/projectController.js";
import validateRequest from "@/middlewares/validateRequest.js";
import {
  createProjectSchema,
  updateProjectSchema,
} from "@/validators/projectValidator.js";

const router = Router({ caseSensitive: true });

router.get("/", getProjects);
router.post("/", validateRequest(createProjectSchema), createProject);
router.get("/:id", getProjectById);
router.delete("/:id", deleteProjectById);
router.put("/:id", validateRequest(updateProjectSchema), updateProjectById);

export default router;
