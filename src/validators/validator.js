import { check, param } from "express-validator";
import validationImageExtension from "../utils/validations/validation.imgExtension.js";

export const paramId = param("id").isInt().withMessage("Id must be a number");

export const body = [
  check("title").not().isEmpty().withMessage("Title cannot be empty"),
  check("content").not().isEmpty().withMessage("Content cannot be empty"),
  check("image")
    .not()
    .isEmpty()
    .withMessage("Image cannot be empty")
    .isURL()
    .withMessage("Image must be a valid url")
    .custom((value) => validationImageExtension(value))
    .withMessage("Image must be a valid extension"),
  check("categoryId").not().isEmpty().withMessage("Category cannot be empty"),
];
