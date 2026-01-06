/*
 * @Author: Zheng Lei
 * @Email: baimoc@163.com
 * @Date: 2025-05-20 12:37:24
 * @LastEditTime: 2025-12-16 14:50:59
 * @FilePath: \rbrowser-app\electron\main.glass.js
 * @Description: 毛玻璃半透明标题栏版本（备份）
 */
const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: "hidden", // 隐藏默认标题栏
    titleBarOverlay: true, // 启用标题栏叠加层
    backgroundMaterial: "acrylic", // Windows 11 亚克力毛玻璃效果
    vibrancy: "under-window", // macOS 毛玻璃效果
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  // 设置标题栏叠加层样式
  win.setTitleBarOverlay({
    color: "rgba(30, 30, 30, 0.3)", // 半透明深色背景
    symbolColor: "#ffffff", // 白色图标
    height: 30, // 标题栏高度
  });

  // 最大化窗口
  win.maximize();

  // 监听新窗口创建（React 中打开新 tab 时）
  win.webContents.setWindowOpenHandler(({ url }) => {
    return {
      action: "allow",
      overrideBrowserWindowOptions: {
        autoHideMenuBar: true,
        webPreferences: {
          contextIsolation: true,
          nodeIntegration: false,
        },
      },
    };
  });

  // 当新窗口创建后，移除其菜单栏
  win.webContents.on("did-create-window", (newWindow) => {
    newWindow.removeMenu();

    // 只在开发环境支持 F12 打开开发者工具
    if (!app.isPackaged) {
      newWindow.webContents.on("before-input-event", (event, input) => {
        if (input.key === "F12") {
          newWindow.webContents.toggleDevTools();
        }
      });
    }
  });

  // 只在开发环境支持 F12 打开开发者工具
  if (!app.isPackaged) {
    win.webContents.on("before-input-event", (event, input) => {
      if (input.key === "F12") {
        win.webContents.toggleDevTools();
      }
    });
  }

  // 加载 React 构建好的 index.html
  // 打包后：从 build 目录加载
  // 开发时：从 ../../rna-browser/dist-app 加载
  const indexPath = app.isPackaged
    ? path.join(__dirname, "../build", "index.html")
    : path.join(__dirname, "../../rna-browser/dist-app", "index.html");

  win.loadFile(indexPath);
}

app.whenReady().then(createWindow);
