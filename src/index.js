import express from "express";
import db from './models/index.js'
import postsRoute from '../src/routes/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const PORT = 4000;

/** initializations */
const app = express();
db.sequelize.sync({ force: true }); //force is only for development, IMPORTANT !

/** Settings */
app.set("port", process.env.PORT || PORT);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** Routes */
app.use('/posts', postsRoute);

/** Starting server */
app.listen(app.get("port"), () => {
    console.log("server on port", app.get("port"));
});

