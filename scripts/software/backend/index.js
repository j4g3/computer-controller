const express = require("express");
const cors = require("cors");
const routes = require("./src/routes.js");
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(8564);
