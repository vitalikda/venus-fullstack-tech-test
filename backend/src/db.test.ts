import { describe, expect, it } from "vitest";
import { testDbConnection } from "./db";

describe("DB connection", () => {
  it("should return a successful message", async () => {
    const message = await testDbConnection();
    expect(message).toBe("Database connection established successfully");
  });
});
