import express from "express";
import db from './models/index.js'

const PORT = 4000;

/** initializations */
const app = express();
db.sequelize.sync({ force: true }).then(() => { //This is only for development, IMPORTANT !
    console.log("Drop and re-sync db.");
});

/** Settings */
app.set("port", process.env.PORT || PORT);

/** Routes */

/** Starting server */
app.listen(app.get("port"), () => {
    console.log("server on port", app.get("port"));
});

