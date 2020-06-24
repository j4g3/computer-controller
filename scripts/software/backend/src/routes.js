const { Router } = require("express");
const { spawnSync, exec } = require("child_process");
const routes = Router();
const running = { data: "Is running command." };

routes.get("/online", (req, res) => {
  return res.send({ status: "Is running." });
});

routes.get("/shutdown", async (req, res) => {
  return res.send(running);
  await exec("shutdown -p now");
});

routes.get("/logout", async (req, res) => {
  return res.send(running);
  await spawnSync("gnome-session-quit");
});

routes.get("/reboot", async (req, res) => {
  return res.send(running);
  await exec("reboot");
});

routes.get("/kill/process/all", async (req, res) => {
  return res.send(running);
  await exec("shutdown -H now");
});

module.exports = routes;
