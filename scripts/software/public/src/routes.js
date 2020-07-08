const { Router } = require("express");
const { exec } = require("child_process");
const routes = Router();
const running = { data: "Is running command." };

routes.get("/online", (req, res) => {
  return res.send({ status: "Is running." });
});

routes.get("/shutdown", async (req, res) => {
  await exec("shutdown now");
  return res.send(running);
});

routes.get("/logout", async (req, res) => {
  await exec("gnome-session-quit");
  return res.send(running);
});

routes.get("/reboot", async (req, res) => {
  await exec("reboot");
  return res.send(running);
});

routes.get("/kill/process/all", async (req, res) => {
  await exec("shutdown -H now");
  return res.send(running);
});

module.exports = routes;
