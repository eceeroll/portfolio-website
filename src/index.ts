import express, { type Request, type Response, type Express } from "express";
import "dotenv/config";

const app: Express = express();
const PORT: number = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log("Server is running on port " + process.env.PORT || PORT);
});
