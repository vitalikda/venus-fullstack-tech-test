import cors from "cors";
import type { Request, Response } from "express";
import express from "express";
import { testDbConnection } from "./db";
import routes from "./routes/index.route";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", async (_req: Request, res: Response) => {
  const message = await testDbConnection();
  return res.json({ message });
});

app.use(routes);

export default app;
