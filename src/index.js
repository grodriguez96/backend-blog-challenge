import express from "express";
import db from './models/index.js'

const PORT = 4000;

/** initializations */
const app = express();

/** Settings */
app.set("port", process.env.PORT || PORT);

/** Routes */

/** */
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

/** Starting server */
app.listen(app.get("port"), () => {
    console.log("server on port", app.get("port"));
});

