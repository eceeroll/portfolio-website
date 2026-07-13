import "dotenv/config";
import express, { type Request, type Response, type Express } from "express";
import projectRoutes from "@/routes/projectRoutes.js";

const app: Express = express();
app.use(express.json());

app.use("/api/projects", projectRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port " + process.env.PORT || PORT);
});
