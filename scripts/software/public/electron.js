const { app, BrowserWindow } = require("electron");
const path = require("path");
const express = require("express");
const cors = require("cors");
const routes = require("./src/routes.js");
const appAPI = express();

let win;
function AppElectron() {
  win = new BrowserWindow({
    frame: true,
    minWidth: 244,
    minHeight: 400,
    width: 244,
    height: 400,
    maxWidth: 244,
    maxHeight: 400,
    title: "Computer Controller",
    webPreferences: {
      plugins: true,
      nodeIntegration: true,
      contextIsolation: false,
      experimentalFeatures: true,
      webviewTag: true,
      webSecurity: false,
      enableRemoteModule: true,
    },
  });
  win.setMenuBarVisibility(false);
  win.loadURL(`file://${path.join(__dirname, "../build/index.html")}`);
  win.on("closed", () => (win = null));
}
app.on("ready", AppElectron);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    AppElectron();
  }
});
appAPI.use(cors());
appAPI.use(express.json());
appAPI.use(routes);
appAPI.listen(8564);
