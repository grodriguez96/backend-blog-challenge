import request from "supertest";
import { app } from "../src/index.js";

const intParam = 1;
const charParam = "p";

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
      .send({
        title: "My first post",
        content: "This is my first post",
        image: "www.imagen.jpg",
        categoryId: 1,
      })
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
      .send({
        title: "",
        content: "This is my first post",
        image: "www.imagen.jpg",
        categoryId: 1,
      })
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
      .send({
        title: "My first post",
        content: "",
        image: "www.imagen.jpg",
        categoryId: 1,
      })
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
      .send({
        title: "My first post",
        content: "This is my first post",
        image: "",
        categoryId: 1,
      })
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
      .send({
        title: "My first post",
        content: "This is my first post",
        image: "img",
        categoryId: 1,
      })
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
      .send({
        title: "My first post",
        content: "This is my first post",
        image: "img.com",
        categoryId: 1,
      })
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
      .send({
        title: "My first post",
        content: "This is my first post",
        image: "www.imagen.jpg",
        categoryId: "",
      })
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
      .send({
        title: "My first post",
        content: "This is my first post",
        image: "www.imagen.jpg",
        categoryId: 1,
      })
      .set("Accept", "application/json");
    expect(response.body).toEqual({ message: "Post updated succesfully" });
    expect(response.statusCode).toBe(200);
  });
  it("It should send status 400 - Invalid param", async () => {
    const response = await request(app)
      .patch("/posts/" + charParam)
      .send({
        title: "My first post",
        content: "This is my first post",
        image: "www.imagen.jpg",
        categoryId: 1,
      })
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
      .send({
        title: "",
        content: "This is my first post",
        image: "www.imagen.jpg",
        categoryId: 1,
      })
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
      .send({
        title: "My first post",
        content: "",
        image: "www.imagen.jpg",
        categoryId: 1,
      })
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
      .send({
        title: "My first post",
        content: "This is my first post",
        image: "",
        categoryId: 1,
      })
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
      .send({
        title: "My first post",
        content: "This is my first post",
        image: "img",
        categoryId: 1,
      })
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
      .send({
        title: "My first post",
        content: "This is my first post",
        image: "img.com",
        categoryId: 1,
      })
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
      .send({
        title: "My first post",
        content: "This is my first post",
        image: "www.imagen.jpg",
        categoryId: "",
      })
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
