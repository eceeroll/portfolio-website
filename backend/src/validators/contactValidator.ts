import * as z from "zod";

// Keep in sync with frontend/src/lib/contactValidation.ts
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be at most 100 characters long"),
  email: z.string().trim().email("Invalid email address"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters long")
    .max(5000, "Message must be at most 5000 characters long"),
});
