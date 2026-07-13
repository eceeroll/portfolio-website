import Router from "express";
import { contactSchema } from "@/validators/contactValidator.js";
import validateRequest from "@/middlewares/validateRequest.js";
import { submitContactForm } from "@/controllers/contactController.js";

const router = Router();

router.post("/", validateRequest(contactSchema), submitContactForm);

export default router;
