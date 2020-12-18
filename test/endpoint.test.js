import request from "supertest";
import app from "../src/index.js";
import db from "../src/models/index.js";
import {
  intParam,
  charParam,
  postComplete,
  postTitleEmpty,
  postContentEmpty,
  postInvalidUrlImage,
  postInvalidExtImage,
  postCategoryEmpty,
  postImageEmpty,
} from "./data.js";

beforeAll(async () => {
  await db.sequelize.sync({ force: true });
});

describe("Response the GET method", () => {
  it("It should send status 200", async () => {
    const response = await request(app).get("/posts");
    expect(response.body).toEqual([]);
    expect(response.statusCode).toBe(200);
  });
});

describe("Response the GET/:id method", () => {
  it("It should send status 200", async () => {
    const response = await request(app).get("/posts/" + intParam);
    expect(response.body).toEqual({ message: "The id cannot be found" });
    expect(response.statusCode).toBe(200);
  });
  it("It should send status 400 - Invalid param", async () => {
    const response = await request(app).get("/posts/" + charParam);
    expect(response.body).toEqual({
      error: "Bad Request",
      message: "Id must be a number",
      statusCode: 400,
    });
    expect(response.statusCode).toBe(400);
  });
});

describe("Response the POST method", () => {
  it("It should send status 200", async () => {
    const response = await request(app)
      .post("/posts")
      .send(postComplete)
      .set("Accept", "application/json");
    expect(response.body).toEqual({
      message: "Post created successfully",
      id: 1,
    });
    expect(response.statusCode).toBe(200);
  });
  it("It should send status 400 - Title empty", async () => {
    const response = await request(app)
      .post("/posts")
      .send(postTitleEmpty)
      .set("Accept", "application/json");
    expect(response.body).toEqual({
      error: "Bad Request",
      message: "Title cannot be empty",
      statusCode: 400,
    });
    expect(response.statusCode).toBe(400);
  });
  it("It should send status 400 - Content empty", async () => {
    const response = await request(app)
      .post("/posts")
      .send(postContentEmpty)
      .set("Accept", "application/json");
    expect(response.body).toEqual({
      error: "Bad Request",
      message: "Content cannot be empty",
      statusCode: 400,
    });
    expect(response.statusCode).toBe(400);
  });
  it("It should send status 400 - Image empty", async () => {
    const response = await request(app)
      .post("/posts")
      .send(postImageEmpty)
      .set("Accept", "application/json");
    expect(response.body).toEqual({
      error: "Bad Request",
      message: "Image cannot be empty",
      statusCode: 400,
    });
    expect(response.statusCode).toBe(400);
  });
  it("It should send status 400 - Image invalid url", async () => {
    const response = await request(app)
      .post("/posts")
      .send(postInvalidUrlImage)
      .set("Accept", "application/json");
    expect(response.body).toEqual({
      error: "Bad Request",
      message: "Image must be a valid url",
      statusCode: 400,
    });
    expect(response.statusCode).toBe(400);
  });
  it("It should send status 400 - Image invalid extension", async () => {
    const response = await request(app)
      .post("/posts")
      .send(postInvalidExtImage)
      .set("Accept", "application/json");
    expect(response.body).toEqual({
      error: "Bad Request",
      message: "Image must be a valid extension",
      statusCode: 400,
    });
    expect(response.statusCode).toBe(400);
  });
  it("It should send status 400 - Category empty", async () => {
    const response = await request(app)
      .post("/posts")
      .send(postCategoryEmpty)
      .set("Accept", "application/json");
    expect(response.body).toEqual({
      error: "Bad Request",
      message: "Category cannot be empty",
      statusCode: 400,
    });
    expect(response.statusCode).toBe(400);
  });
});

describe("Response the PATCH/:id method", () => {
  it("It should send status 200", async () => {
    const response = await request(app)
      .patch("/posts/" + intParam)
      .send(postComplete)
      .set("Accept", "application/json");
    expect(response.body).toEqual({ message: "Post updated succesfully" });
    expect(response.statusCode).toBe(200);
  });
  it("It should send status 400 - Invalid param", async () => {
    const response = await request(app)
      .patch("/posts/" + charParam)
      .send(postComplete)
      .set("Accept", "application/json");
    expect(response.body).toEqual({
      error: "Bad Request",
      message: "Id must be a number",
      statusCode: 400,
    });
    expect(response.statusCode).toBe(400);
  });
  it("It should send status 400 - Title empty", async () => {
    const response = await request(app)
      .patch("/posts/" + intParam)
      .send(postTitleEmpty)
      .set("Accept", "application/json");
    expect(response.body).toEqual({
      error: "Bad Request",
      message: "Title cannot be empty",
      statusCode: 400,
    });
    expect(response.statusCode).toBe(400);
  });
  it("It should send status 400 - Content empty", async () => {
    const response = await request(app)
      .patch("/posts/" + intParam)
      .send(postContentEmpty)
      .set("Accept", "application/json");
    expect(response.body).toEqual({
      error: "Bad Request",
      message: "Content cannot be empty",
      statusCode: 400,
    });
    expect(response.statusCode).toBe(400);
  });
  it("It should send status 400 - Image empty", async () => {
    const response = await request(app)
      .patch("/posts/" + intParam)
      .send(postImageEmpty)
      .set("Accept", "application/json");
    expect(response.body).toEqual({
      error: "Bad Request",
      message: "Image cannot be empty",
      statusCode: 400,
    });
    expect(response.statusCode).toBe(400);
  });
  it("It should send status 400 - Image invalid url", async () => {
    const response = await request(app)
      .patch("/posts/" + intParam)
      .send(postInvalidUrlImage)
      .set("Accept", "application/json");
    expect(response.body).toEqual({
      error: "Bad Request",
      message: "Image must be a valid url",
      statusCode: 400,
    });
    expect(response.statusCode).toBe(400);
  });
  it("It should send status 400 - Image invalid extension", async () => {
    const response = await request(app)
      .patch("/posts/" + intParam)
      .send(postInvalidExtImage)
      .set("Accept", "application/json");
    expect(response.body).toEqual({
      error: "Bad Request",
      message: "Image must be a valid extension",
      statusCode: 400,
    });
    expect(response.statusCode).toBe(400);
  });
  it("It should send status 400 - Category empty", async () => {
    const response = await request(app)
      .patch("/posts/" + intParam)
      .send(postCategoryEmpty)
      .set("Accept", "application/json");
    expect(response.body).toEqual({
      error: "Bad Request",
      message: "Category cannot be empty",
      statusCode: 400,
    });
    expect(response.statusCode).toBe(400);
  });
});

describe("Response the DELETE/:id method", () => {
  it("It should send status 200", async () => {
    const response = await request(app).delete("/posts/" + intParam);
    expect(response.body).toEqual({ message: "Post deleted succesfully" });
    expect(response.statusCode).toBe(200);
  });
  it("It should send status 400 - Invalid param", async () => {
    const response = await request(app).delete("/posts/" + charParam);
    expect(response.body).toEqual({
      error: "Bad Request",
      message: "Id must be a number",
      statusCode: 400,
    });
    expect(response.statusCode).toBe(400);
  });
});
