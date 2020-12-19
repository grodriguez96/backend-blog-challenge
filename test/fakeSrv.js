import app from "./fakeApp.js";

const DEFAULTPORT = 4000;
const PORT = process.env.PORTSERVER || DEFAULTPORT;

app.listen(PORT);
