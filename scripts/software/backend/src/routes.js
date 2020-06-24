const { Router } = require("express");
const { spawnSync } = require("child_process");
const running = "Is running command.";
const routes = Router();

routes.get("/online", (req, res) => {
  res.send({ status: "Is running." });
});

routes.get("/shutdown", (req, res) => {
  res.send({ data: running });
  spawnSync("shutdown 0");
});

routes.get("/logout", (req, res) => {
  res.send({ data: running });
  spawnSync("gnome-session-quit");
});

module.exports = routes;
