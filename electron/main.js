/*
 * @Author: Zheng Lei
 * @Email: baimoc@163.com
 * @Date: 2025-05-20 12:37:24
 * @LastEditTime: 2025-05-20 16:10:59
 * @FilePath: \rbrowser-app\main.js
 */
const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false, // 如果你想要 React 安全运行
    },
  });

  // 加载 React 构建好的 index.html
  win.loadFile(path.join(__dirname, "../build", "index.html"));
}

app.whenReady().then(createWindow);
