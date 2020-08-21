import req from "supertest";
import app from '../../server/app';

describe("Listing Tools", () => {
  test("[GET] /api/tools", async () => {
    const res = await req(app).get("/api/tools");
    expect(JSON.parse(res.text)).toHaveProperty('status');
  });
});