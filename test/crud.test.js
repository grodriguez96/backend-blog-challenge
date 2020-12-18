import request from "supertest";
import express from "express";
import postsRoute from "../src/routes/routes.js";

const app = express();
app.use("/posts", postsRoute);

describe("Test the post path", () => {
  it("It should response the GET method", async () => {
    const response = await request(app).get("/posts");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([]);
  });
});
