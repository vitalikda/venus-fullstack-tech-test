import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { createPool, Pool, RowDataPacket } from "mysql2/promise";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8181;

// Middleware
app.use(cors());
app.use(express.json());

const pool: Pool = createPool({
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "app_user",
  password: process.env.DB_PASSWORD || "app_password",
  database: process.env.DB_NAME || "app_db",
  port: parseInt(process.env.DB_PORT || "3306"),
});

const testDbConnection = async () => {
  try {
    const connection = await pool.getConnection();
    connection.release();
    return "Database connection established successfully";
  } catch (error) {
    return `Error connecting to database: ${error}`;
  }
};

app.get("/", async (req: Request, res: Response) => {
  const response = await testDbConnection();
  return res.json({ response });
});

/**
 * TODO: extra
 * - Automated testing of your endpoint
 * - Allowing the market records to be filtered by the `chain_id`
 * - Validating the endpoint input
 * - Error handling
 */

app.get("/markets/tvl", async (req: Request, res: Response) => {
  const db = await pool.getConnection();

  const [rows, _buff] = await db.query<RowDataPacket[]>(
    `SELECT SUM(total_supply_cents) AS marketTvl FROM market`
  );

  db.release();
  return res.json({ marketTvl: rows[0].marketTvl });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
