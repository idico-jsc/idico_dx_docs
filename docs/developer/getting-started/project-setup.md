---
id: project-setup
title: Project Setup
sidebar_label: Project Setup
sidebar_position: 2
description: Detailed project configuration and setup guide
---

# Project Setup

This guide covers detailed project configuration for the IDICO IPMS project.

## Project Information

- **Name**: IDICO CRM (idico-crm)
- **Framework**: React 19 + TypeScript 5 + Vite 7
- **Mobile**: Capacitor 7 (Android/iOS)
- **Styling**: Tailwind CSS v4 + shadcn/ui

## Key Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies, scripts, version |
| `vite.config.ts` | Build config, PWA, optimization |
| `tsconfig.json` | TypeScript settings, path aliases |
| `capacitor.config.ts` | Native mobile app config |
| `tailwind.config.ts` | Tailwind CSS configuration |

## Path Aliases

The project uses TypeScript path aliases for cleaner imports:

```typescript
// tsconfig.json paths
"@/*": ["./src/*"],
"@atoms/*": ["./src/components/atoms/*"],
"@molecules/*": ["./src/components/molecules/*"],
"@organisms/*": ["./src/components/organisms/*"],
"@templates/*": ["./src/components/templates/*"],
"@pages/*": ["./src/components/pages/*"],
"@features/*": ["./src/features/*"]
```

Usage:
```typescript
import { Button } from '@/components/atoms/button';
import { useAuth } from '@/features/auth';
```

## Environment Variables

All environment variables must be prefixed with `VITE_` to be accessible in the frontend:

```env
# ✅ Accessible in frontend
VITE_API_URL=https://api.example.com

# ❌ Not accessible in frontend
API_SECRET=secret-key
```

## Build Commands

```bash
# Development
npm run dev              # Start dev server (port 5173)
npm run build            # Production build
npm run preview          # Preview production build

# Mobile
npm run build:mobile     # Build for mobile + sync
npm run cap:sync         # Sync web to native
npm run cap:run:android  # Run on Android device

# Testing
npm run test             # Run Cypress tests
npm run lint             # Run ESLint
```

## IDE Setup

### VS Code Extensions

Recommended extensions:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin (Volar)

### VS Code Settings

The project includes `.vscode/settings.json` with:
- File nesting patterns
- Tailwind class suggestions
- TypeScript path resolution
