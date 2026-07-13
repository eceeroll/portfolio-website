import type { Request, Response } from "express";
import { sendEmail } from "@/services/contactService.js";

export const submitContactForm = async (req: Request, res: Response) => {
  try {
    await sendEmail(req.body);
    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while sending the email." });
  }
};
