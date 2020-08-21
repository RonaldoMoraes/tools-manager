import req from "supertest";
import app from '../server/app';

describe("This is a simple test", () => {
  test("[GET] /", async () => {
    const res = await req(app).get("/");
    expect(res.text).toBe("Don't be shy, take and sit and let's start testing! ☕");
  });
});