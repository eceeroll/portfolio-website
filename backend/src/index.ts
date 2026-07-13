import "dotenv/config";
import cors from "cors";
import express, { type Request, type Response, type Express } from "express";
import projectRoutes from "@/routes/projectRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

const app: Express = express();

app.use(
  cors({
    origin: "http://localhost:5173", // default vite dev server port
  }),
);
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port " + process.env.PORT || "3000");
});
