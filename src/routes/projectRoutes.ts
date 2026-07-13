import { Router } from "express";
import {
  getProjects,
  createProject,
  getProjectById,
  deleteProjectById,
} from "@/controllers/projectController.js";

const router = Router({ caseSensitive: true });

router.get("/", getProjects);
router.post("/", createProject);
router.get("/:id", getProjectById);
router.delete("/:id", deleteProjectById);

export default router;
