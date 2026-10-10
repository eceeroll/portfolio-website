import "dotenv/config";
import cors from "cors";
import helmet from "helmet";
import express, { type Express } from "express";
import projectRoutes from "@/routes/projectRoutes.js";
import contactRoutes from "@/routes/contactRoutes.js";

const app: Express = express();

// Render (and most PaaS hosts) sit behind a single reverse proxy; without this
// every request shares the proxy IP and the rate limiter throttles everyone.
app.set("trust proxy", 1);

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

app.get("/health", (req, res) => {
  res.status(200).json({ status: "I ate my veggies!" });
});

app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
