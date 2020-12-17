import { check, param } from "express-validator";

export const paramId = param("id").isInt().withMessage("Id must be a number");

export const body = [
  check("title").isEmpty().withMessage("Title cannot be empty"),
  check("content").isEmpty().withMessage("Content cannot be empty"),
  check("image").isEmpty().withMessage("Image cannot be empty"),
  check("categoryId").isEmpty().withMessage("Category cannot be empty"),
];
