import express from "express";
import postsRoute from "../src/routes/routes.js";
import cors from "cors";
import bodyParser from "body-parser";
import logErrors from "../src/middlewares/logErrors.js";
import errorHandler from "../src/middlewares/errorHandler.js";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/posts", postsRoute);
app.use(logErrors);
app.use(errorHandler);

export default app;
