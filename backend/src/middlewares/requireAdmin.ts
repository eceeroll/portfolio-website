import { createHash, timingSafeEqual } from "node:crypto";
import type { Request, Response, NextFunction } from "express";

// Hashing both sides gives equal-length buffers, so timingSafeEqual never
// throws and the comparison time does not leak the key length.
const digest = (value: string) => createHash("sha256").update(value).digest();

export default function requireAdmin(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const adminKey = process.env.ADMIN_API_KEY;

  if (!adminKey) {
    return res
      .status(503)
      .json({ error: "Admin access is not configured on this server." });
  }

  const providedKey = req.get("x-api-key");

  if (!providedKey || !timingSafeEqual(digest(providedKey), digest(adminKey))) {
    return res.status(401).json({ error: "Unauthorized." });
  }

  next();
}
