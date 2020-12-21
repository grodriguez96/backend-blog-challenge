import express from "express";
import db from "./models/index.js";
import postsRoute from "../src/routes/routes.js";
import cors from "cors";
import bodyParser from "body-parser";
import logErrors from "./middlewares/logErrors.js";
import errorHandler from "./middlewares/errorHandler.js";

const DEFAULTPORT = 4000;
const PORT = process.env.PORTSERVER || DEFAULTPORT;

const app = express();
db.sequelize.sync({ force: true });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/posts", postsRoute);
app.use(logErrors);
app.use(errorHandler);

app.listen(PORT);

export default app;
