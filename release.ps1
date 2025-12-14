# RBrowser Auto Release Script (PowerShell)
# Reads version from package.json and creates tag to trigger GitHub Actions

$ErrorActionPreference = "Stop"

Write-Host "=== RBrowser Auto Release Script ===" -ForegroundColor Green

# Check if in git repository
try {
    git rev-parse --git-dir | Out-Null
} catch {
    Write-Host "ERROR: Not in a git repository" -ForegroundColor Red
    exit 1
}

# Check for uncommitted changes
$gitStatus = git status -s
if ($gitStatus) {
    Write-Host "WARNING: You have uncommitted changes" -ForegroundColor Yellow
    git status -s
    $continue = Read-Host "Continue anyway? (y/N)"
    if ($continue -ne "y" -and $continue -ne "Y") {
        Write-Host "Cancelled"
        exit 1
    }
}

# Read version from package.json
$packageJson = Get-Content -Path "package.json" -Raw | ConvertFrom-Json
$VERSION = $packageJson.version

if (-not $VERSION) {
    Write-Host "ERROR: Cannot read version from package.json" -ForegroundColor Red
    exit 1
}

$TAG = "v$VERSION"

Write-Host "Current version: " -NoNewline -ForegroundColor Green
Write-Host $VERSION -ForegroundColor Yellow
Write-Host "Will create tag: " -NoNewline -ForegroundColor Green
Write-Host $TAG -ForegroundColor Yellow

# Check if tag already exists
try {
    git rev-parse $TAG 2>$null | Out-Null
    Write-Host "ERROR: Tag $TAG already exists" -ForegroundColor Red
    Write-Host "To re-release, delete the old tag first:" -ForegroundColor Yellow
    Write-Host "  git tag -d $TAG"
    Write-Host "  git push origin :refs/tags/$TAG"
    exit 1
} catch {
    # Tag doesn't exist, continue
}

# Confirm before proceeding
$confirm = Read-Host "Confirm create tag and push? (y/N)"
if ($confirm -ne "y" -and $confirm -ne "Y") {
    Write-Host "Cancelled"
    exit 1
}

# Commit all changes if any
if ($gitStatus) {
    Write-Host "Committing changes..." -ForegroundColor Green
    git add .
    git commit -m "Release $VERSION"
}

# Push code
Write-Host "Pushing code to remote..." -ForegroundColor Green
git push origin main

# Create and push tag
Write-Host "Creating tag $TAG..." -ForegroundColor Green
git tag -a $TAG -m "Release $VERSION"

Write-Host "Pushing tag to remote..." -ForegroundColor Green
git push origin $TAG

Write-Host ""
Write-Host "=== Done! ===" -ForegroundColor Green
Write-Host "GitHub Actions build triggered" -ForegroundColor Green
Write-Host "View build progress: " -NoNewline -ForegroundColor Yellow
Write-Host "https://github.com/typekey/rbrowser-app/actions"
Write-Host "View releases: " -NoNewline -ForegroundColor Yellow
Write-Host "https://github.com/typekey/rbrowser-app/releases"
