# GitHub Actions 多平台编译配置说明

## 📋 配置已完成

您的 GitHub Actions 已配置为支持三个平台的自动编译：
- ✅ Windows (生成 .exe 安装包)
- ✅ macOS (生成 .dmg 安装包)
- ✅ Linux (生成 .AppImage 和 .deb 包)

## 🔧 必需的 GitHub Secrets 设置

### 1. 设置 GH_TOKEN（必需）

1. 进入 GitHub 个人设置：https://github.com/settings/tokens
2. 点击 "Generate new token" → "Generate new token (classic)"
3. Token 名称：`RBrowser Release Token`
4. 勾选权限：`repo`（完整仓库访问权限）
5. 点击 "Generate token"，**复制生成的 token**

6. 在您的仓库中设置 Secret：
   - 访问：https://github.com/typekey/rbrowser-app/settings/secrets/actions
   - 点击 "New repository secret"
   - Name: `GH_TOKEN`
   - Value: 粘贴刚才复制的 token
   - 点击 "Add secret"

### 2. macOS 代码签名（可选）

如果需要对 macOS 应用进行代码签名（否则用户需要手动允许运行）：

- `MAC_CERTS`: Base64 编码的 .p12 证书文件
- `MAC_CERTS_PASSWORD`: 证书密码

**不设置这些 Secret 也可以编译，但应用不会被签名。**

## 🚀 如何触发构建

### 方式 1：创建版本标签（推荐）

```bash
# 提交你的代码
git add .
git commit -m "准备发布 v0.1.2"

# 创建版本标签
git tag v0.1.2

# 推送代码和标签
git push origin main
git push origin v0.1.2
```

### 方式 2：手动触发

1. 访问：https://github.com/typekey/rbrowser-app/actions
2. 点击左侧 "Build and Release RBrowser"
3. 点击右侧 "Run workflow" 按钮
4. 选择分支，点击 "Run workflow"

## 📦 构建流程

Actions 会自动：

1. **在三个平台并行编译**
   - Windows: `RBrowser Setup 0.1.1.exe`
   - macOS: `RBrowser-0.1.1.dmg`
   - Linux: `RBrowser-0.1.1.AppImage` 和 `.deb`

2. **上传到 GitHub Artifacts**
   - 每个平台的编译产物都会作为 Artifacts 保存
   - 可在 Actions 运行页面下载

3. **发布到 GitHub Releases**（如果有标签）
   - 自动创建 Release
   - 上传所有平台的安装包

## 🔍 查看构建状态

1. 访问：https://github.com/typekey/rbrowser-app/actions
2. 可以看到所有运行记录
3. 点击具体的运行记录查看详细日志
4. 在 "Artifacts" 部分可以下载编译产物

## 📝 配置文件说明

### `.github/workflows/build.yml`
- 定义了 GitHub Actions 的工作流程
- 配置了多平台矩阵编译
- 设置了环境变量和构建步骤

### `package.json` 中的脚本
- `build-electron`: 本地打包并发布（需要 GH_TOKEN）
- `build:action`: 使用 .env 文件中的 GH_TOKEN 打包

## ⚠️ 常见问题

### Q: 构建失败，提示 GH_TOKEN 错误
A: 确保在仓库设置中正确添加了 `GH_TOKEN` Secret

### Q: macOS 构建成功但无法在 Mac 上运行
A: 需要配置代码签名证书，或者用户在 Mac 上右键点击应用选择"打开"

### Q: 如何只构建某个平台？
A: 修改 `.github/workflows/build.yml` 中的 `matrix.os` 数组，删除不需要的平台

### Q: 如何修改版本号？
A: 修改 `package.json` 中的 `version` 字段

## 📚 下一步

1. ✅ 确认已设置 `GH_TOKEN` Secret
2. ✅ 创建一个版本标签测试构建
3. ✅ 检查 Actions 页面查看构建进度
4. ✅ 下载编译产物测试
