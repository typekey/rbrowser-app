#!/bin/bash

# RBrowser 自动发布脚本
# 从 package.json 读取版本号并创建 tag 触发 GitHub Actions 构建

set -e

# 颜色输出
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== RBrowser 自动发布脚本 ===${NC}"

# 检查是否在 git 仓库中
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo -e "${RED}错误: 不在 git 仓库中${NC}"
    exit 1
fi

# 检查是否有未提交的更改
if [[ -n $(git status -s) ]]; then
    echo -e "${YELLOW}警告: 有未提交的更改${NC}"
    git status -s
    read -p "是否继续? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "已取消"
        exit 1
    fi
fi

# 从 package.json 读取版本号
VERSION=$(node -p "require('./package.json').version")

if [[ -z "$VERSION" ]]; then
    echo -e "${RED}错误: 无法从 package.json 读取版本号${NC}"
    exit 1
fi

TAG="v$VERSION"

echo -e "${GREEN}当前版本: ${YELLOW}$VERSION${NC}"
echo -e "${GREEN}将创建标签: ${YELLOW}$TAG${NC}"

# 检查标签是否已存在
if git rev-parse "$TAG" >/dev/null 2>&1; then
    echo -e "${RED}错误: 标签 $TAG 已存在${NC}"
    echo -e "${YELLOW}如需重新发布，请先删除旧标签:${NC}"
    echo "  git tag -d $TAG"
    echo "  git push origin :refs/tags/$TAG"
    exit 1
fi

# 确认是否继续
read -p "确认创建标签并推送? (y/N) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "已取消"
    exit 1
fi

# 提交所有更改（如果有）
if [[ -n $(git status -s) ]]; then
    echo -e "${GREEN}提交更改...${NC}"
    git add .
    git commit -m "chore: release $VERSION"
fi

# 推送代码
echo -e "${GREEN}推送代码到远程仓库...${NC}"
git push origin main

# 创建并推送标签
echo -e "${GREEN}创建标签 $TAG...${NC}"
git tag -a "$TAG" -m "Release $VERSION"

echo -e "${GREEN}推送标签到远程仓库...${NC}"
git push origin "$TAG"

echo -e "${GREEN}=== 完成! ===${NC}"
echo -e "${GREEN}GitHub Actions 已触发构建${NC}"
echo -e "${YELLOW}查看构建进度: ${NC}https://github.com/typekey/rbrowser-app/actions"
echo -e "${YELLOW}查看发布页面: ${NC}https://github.com/typekey/rbrowser-app/releases"
