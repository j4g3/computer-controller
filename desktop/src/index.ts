import { app, BrowserWindow } from "electron";
import server from "./utils/server";

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    title: "Computer Controller",
    height: 400,
    width: 244,
    autoHideMenuBar: true,

    webPreferences: {
      plugins: true,
      nodeIntegration: true,
      contextIsolation: false,
      experimentalFeatures: true,
      webviewTag: true,
      webSecurity: false,
    },
  });

  mainWindow.webContents.openDevTools();
  mainWindow.resizable = false;
  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
};

app.on("ready", () => {
  createWindow();
  server(3333);
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
