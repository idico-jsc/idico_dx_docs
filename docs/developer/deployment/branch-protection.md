---
id: branch-protection
title: Branch Protection
sidebar_label: Branch Protection
sidebar_position: 2
description: GitHub branch protection setup and team workflow
keywords: [git, github, branch protection, pull request]
---

# Branch Protection Guide

How to set up branch protection and follow the team workflow.

## Overview

Branch protection helps maintain code quality by:
- Preventing direct pushes to main branch
- Requiring peer review through pull requests
- Ensuring all team members follow the same workflow
- Reducing the risk of breaking changes

## Setting Up Branch Protection

### Step 1: Navigate to Settings

1. Go to repository on GitHub
2. Click **Settings** → **Branches**
3. Click **Add branch protection rule**

### Step 2: Configure Branch Pattern

Enter branch name pattern: `main`

### Step 3: Enable Protection Rules

**Required settings**:

- ✅ **Require a pull request before merging**
- ✅ **Dismiss stale pull request approvals**
- ✅ **Require conversation resolution**
- ✅ **Do not allow bypassing the above settings**

**Keep disabled**:
- ❌ Allow force pushes
- ❌ Allow deletions

### Step 4: Save

Click **Create** to activate protection.

## Team Workflow

### 1. Create Feature Branch

```bash
git checkout main
git pull origin main
git checkout -b feature/your-feature-name
```

**Branch naming**:
- `feature/` - New features
- `fix/` - Bug fixes
- `refactor/` - Code refactoring
- `docs/` - Documentation
- `chore/` - Maintenance

### 2. Make Changes

```bash
# Make code changes
git add .
git commit -m "Your descriptive message"
```

### 3. Push Branch

```bash
git push origin feature/your-feature-name
```

### 4. Create Pull Request

1. Go to GitHub repository
2. Click "Compare & pull request"
3. Fill in title and description
4. Click **Create pull request**

### 5. Code Review

- Request review from team members
- Address feedback
- Resolve all conversations

### 6. Merge

Once approved:
1. Click **Merge pull request**
2. Choose merge strategy
3. Delete feature branch

### 7. Update Local

```bash
git checkout main
git pull origin main
git branch -d feature/your-feature-name
```

## Common Scenarios

### Emergency Hotfixes

Even for urgent fixes, follow PR process:

```bash
git checkout main
git checkout -b fix/critical-bug
# Make fix
git commit -m "fix: critical bug"
git push origin fix/critical-bug
# Create PR and merge immediately
```

### Syncing with Main

```bash
git fetch origin
git rebase origin/main
# Or
git merge origin/main
```

### Resolving Conflicts

```bash
git fetch origin
git merge origin/main
# Resolve conflicts
git add .
git commit -m "Resolve merge conflicts"
git push origin feature/your-feature-name
```

## Verification

To verify protection is working:

```bash
git checkout main
git commit --allow-empty -m "test"
git push origin main
```

Expected error:
```
remote: error: GH006: Protected branch update failed
remote: error: Changes must be made through a pull request.
```

## Troubleshooting

### "Permission denied" when pushing to main

This is expected! Create a feature branch and submit a PR.

### Accidentally committed to main locally

```bash
# Create branch from current main
git branch feature/my-changes

# Reset main to match remote
git checkout main
git reset --hard origin/main

# Switch to feature branch
git checkout feature/my-changes
git push origin feature/my-changes
```

## Benefits

- ✅ Prevents accidental direct pushes
- ✅ Ensures code review process
- ✅ Maintains clean, reviewed history
- ✅ Reduces bugs reaching production
- ✅ Encourages team collaboration

**Remember**: Even admins follow the PR workflow for consistency.
