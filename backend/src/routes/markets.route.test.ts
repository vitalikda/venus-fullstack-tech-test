import app from "../../src/app";
import { expect, describe, it } from "vitest";
import supertest from "supertest";

const request = supertest(app);

describe("GET /markets", () => {
  it("should return a list of markets", async () => {
    const response = await request.get("/markets");

    expect(response.status).toBe(200);
    expect(response.body.markets).toBeDefined();
  });

  it("should return a list of markets filtered by chain_id", async () => {
    const chainId = "1";
    const response = await request.get("/markets").query({ chain_id: chainId });

    expect(response.status).toBe(200);
    expect(response.body.markets).toBeDefined();

    const hasOnlySelectedChainId = (
      response.body.markets as { chain_id: string }[]
    ).every(({ chain_id }) => chain_id === chainId);
    expect(hasOnlySelectedChainId).toBe(true);
  });
});

describe("GET /markets/tvl", () => {
  it("should return the total value locked of all markets", async () => {
    const response = await request.get("/markets/tvl");

    expect(response.status).toBe(200);
    expect(response.body.marketTvl).toBeDefined();
  });
});
