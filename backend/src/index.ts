import "dotenv/config";
import cors from "cors";
import helmet from "helmet";
import express, { type Express } from "express";
import projectRoutes from "@/routes/projectRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

const app: Express = express();

const allowedOrigins = ["http://localhost:5173", process.env.CLIENT_URL].filter(
  Boolean,
);

app.use(helmet());

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      callback(new Error("Not allowed by CORS"));
    },
  }),
);

app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port " + process.env.PORT || "3000");
});
