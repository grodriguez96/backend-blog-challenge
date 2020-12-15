import express from "express";

const PORT = 4000;

/** initializations */
const app = express();

/** Settings */
app.set("port", process.env.PORT || PORT);

/** Routes */

/** Starting server */
app.listen(app.get("port"), () => {
    console.log("server on port", app.get("port"));
});

