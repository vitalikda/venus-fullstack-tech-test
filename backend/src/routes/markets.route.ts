import { Router } from "express";
import { RowDataPacket } from "mysql2/promise";
import { z } from "zod";
import { validateRequest } from "zod-express-middleware";
import { getDbClient } from "../db";

const router = Router();

router.get(
  "/",
  validateRequest({
    query: z.object({
      chain_id: z.coerce.number().min(1).max(56).optional(),
    }),
  }),
  async (req, res) => {
    const { chain_id } = req.query;

    const db = await getDbClient();

    const [rows, _buff] = await db.query<RowDataPacket[]>(
      `SELECT * FROM market ${chain_id ? `WHERE chain_id = ${chain_id}` : ""}`
    );

    db.release();
    return res.json({ markets: rows });
  }
);

router.get("/tvl", async (_req, res) => {
  const db = await getDbClient();

  const [rows, _buff] = await db.query<RowDataPacket[]>(
    `SELECT SUM(total_supply_cents) AS marketTvl FROM market`
  );
  const marketTvl = Number(rows[0].marketTvl || 0);

  db.release();
  return res.json({ marketTvl });
});

export default router;
