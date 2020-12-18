import express from "express";
import db from "./models/index.js";
import postsRoute from "../src/routes/routes.js";
import cors from "cors";
import bodyParser from "body-parser";

const PORT = 4000;

const app = express();
db.sequelize.sync({ force: false });

app.set("port", process.env.PORT || PORT);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/posts", postsRoute);

app.listen(app.get("port"));

export default app;
