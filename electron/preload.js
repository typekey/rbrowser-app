/*
 * @Author: Zheng Lei
 * @Email: baimoc@163.com
 * @Date: 2025-12-14
 * @FilePath: \rbrowser-app\electron\preload.js
 */
const { contextBridge, ipcRenderer } = require("electron");

// 暴露窗口控制 API 给 React 应用
contextBridge.exposeInMainWorld("electronAPI", {
  // 最小化窗口
  minimizeWindow: () => ipcRenderer.send("window-minimize"),

  // 最大化/还原窗口
  maximizeWindow: () => ipcRenderer.send("window-maximize"),

  // 关闭窗口
  closeWindow: () => ipcRenderer.send("window-close"),

  // 切换全屏
  toggleFullscreen: () => ipcRenderer.send("window-toggle-fullscreen"),
});
