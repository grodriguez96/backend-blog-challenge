import express from "express";
import db from './models/index.js'
import postsRoute from '../src/routes/routes.js';


const PORT = 4000;

/** initializations */
const app = express();
db.sequelize.sync({ force: true }) //force is only for development, IMPORTANT !

/** Settings */
app.set("port", process.env.PORT || PORT);

/** Routes */
app.use('/posts', postsRoute);

/** Starting server */
app.listen(app.get("port"), () => {
    console.log("server on port", app.get("port"));
});

