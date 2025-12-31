---
id: version-management
title: Version Management
sidebar_label: Version Management
sidebar_position: 1
description: Automatic semantic versioning with smart detection
keywords: [version, semver, versioning, release]
---

# Version Management Guide

This project uses **automatic semantic versioning** with smart detection.

## How It Works

Version is automatically bumped **ONLY when you commit actual code changes**.

### Flow

```
1. Make changes to code files
2. git add <files>
3. git commit -m "message"
   ↓
4. Pre-commit hook checks: "Are there staged changes?"
   ↓
   YES → Bump version (0.0.93 → 0.0.94)
   NO  → Skip version bump
   ↓
5. Commit proceeds with/without version bump
```

### Smart Detection

**Will Bump Version**:
- Code changes (`.ts`, `.tsx`, `.js`, etc.)
- Configuration changes (`.json`, `.config.ts`)
- Style changes (`.css`)
- Any file changes except `package.json`

**Will NOT Bump Version**:
- Empty commits
- Only `package.json` changes
- No staged files

## Version Format

Semantic Versioning: `MAJOR.MINOR.PATCH`

- **MAJOR** (0): Breaking changes (manual bump)
- **MINOR** (0): New features (manual bump)
- **PATCH** (93): Bug fixes, minor changes (**auto-bumped**)

## Examples

### Normal Code Commit

```bash
# Edit files
vim src/components/Button.tsx

# Stage and commit
git add src/components/Button.tsx
git commit -m "feat: add new button variant"

# Output:
# ✓ Version bumped: 0.0.93 → 0.0.94
```

### Empty Commit (No Bump)

```bash
git commit -m "chore: update docs"
# ℹ No staged changes detected. Skipping version bump.
```

## Manual Version Bump

For major or minor releases:

```bash
# Bump minor (0.0.93 → 0.1.0)
npm version minor

# Bump major (0.0.93 → 1.0.0)
npm version major

# Bump patch manually
npm version patch
```

## APK Naming Integration

Version is used in APK naming:

```bash
npm run build:apk:debug
# Output: pp-0.0.94-debug.apk

npm run build:apk:release
# Output: pp-0.0.94-release.apk
```

## Configuration

### Pre-commit Hook

Located at `.husky/pre-commit`:
```bash
node scripts/bump-version.js
```

### Version Bump Script

`scripts/bump-version.js`:
- Checks for staged changes (excluding `package.json`)
- Increments patch version if changes exist
- Stages updated `package.json` automatically

## Troubleshooting

### Version doesn't bump

```bash
# Check what's staged
git diff --cached --name-only

# If nothing, add files first
git add <files>
```

### Skip version bump (not recommended)

```bash
git commit --no-verify -m "docs: update README"
```

## Best Practices

1. **Let it auto-bump** - Don't manually edit version for regular commits
2. **Commit often** - Each commit gets unique version
3. **Use conventional commits** - `feat:`, `fix:`, `chore:`
4. **Manual bump for releases** - Use `npm version` for major/minor

## Version History

```bash
# View version history
git log --oneline --all --grep="Version bumped"

# View in package.json
git log -p package.json | grep '"version"'
```
