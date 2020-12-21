import { check, param } from "express-validator";
import validationImageExtension from "../utils/validations/validation.imgExtension.js";
import message from "../utils/enums/enum.message.js";

export const paramId = param("id").isInt().withMessage("Id must be a number");

export const body = [
  check("title").not().isEmpty().withMessage(message.TITLE_EMPTY),
  check("body").not().isEmpty().withMessage(message.BODY_EMPTY),
  check("image")
    .not()
    .isEmpty()
    .withMessage(message.IMAGE_EMPTY)
    .isURL()
    .withMessage(message.IMAGE_INVALID_URL)
    .custom((url) => validationImageExtension(url))
    .withMessage(message.IMAGE_INVALID_EXTENSION),
  check("categoryId")
    .not()
    .isEmpty()
    .withMessage(message.CATEGORY_EMPTY)
    .isInt()
    .withMessage(message.CATEGORY_INVALID),
  check("userId")
    .not()
    .isEmpty()
    .withMessage(message.IMAGE_EMPTY)
    .isInt()
    .withMessage(message.CATEGORY_INVALID),
];
