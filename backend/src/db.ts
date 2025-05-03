import { createPool } from "mysql2/promise";

const pool = createPool({
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "app_user",
  password: process.env.DB_PASSWORD || "app_password",
  database: process.env.DB_NAME || "app_db",
  port: parseInt(process.env.DB_PORT || "3306"),
});

export const getDbClient = () => pool.getConnection();

export const testDbConnection = async () => {
  try {
    const db = await getDbClient();
    db.release();
    return "Database connection established successfully";
  } catch (error) {
    return `Error connecting to database: ${error}`;
  }
};
