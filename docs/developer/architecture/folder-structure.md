---
id: folder-structure
title: Folder Structure
sidebar_label: Folder Structure
sidebar_position: 2
description: Detailed explanation of the project folder structure
---

# Folder Structure

Detailed breakdown of the project folder structure and file organization.

## Root Directory

```
idico_ipms_web/
├── src/                    # Source code
├── build/                  # Build outputs
├── public/                 # Static assets
├── scripts/                # Build and utility scripts
├── cypress/                # E2E testing
├── .github/                # GitHub workflows
├── .vscode/                # VS Code settings
└── config/                 # Build configurations
```

## Source Directory (`src/`)

### Application Routes (`src/app/`)

Next.js-style file-based routing:

```
app/
├── layout.tsx              # Root layout
├── page.tsx                # Home page (/)
├── routes.tsx              # Router system
├── error.tsx               # Error boundary
├── not-found.tsx           # 404 page
├── (main)/                 # Main route group
│   ├── layout.tsx          # Main layout with sidebar
│   ├── dashboard/
│   │   └── page.tsx        # /dashboard
│   └── settings/
│       └── page.tsx        # /settings
└── (auth)/                 # Auth route group
    ├── layout.tsx          # Auth layout
    └── login/
        └── page.tsx        # /login
```

### Components (`src/components/`)

Atomic Design pattern:

```
components/
├── atoms/                  # Basic UI (shadcn/ui)
│   ├── button.tsx
│   ├── input.tsx
│   ├── card.tsx
│   └── index.ts
├── molecules/              # Simple combinations
│   ├── user-avatar.tsx
│   ├── loading-button.tsx
│   └── index.ts
├── organisms/              # Complex components
│   ├── navigation/
│   ├── header/
│   └── index.ts
├── templates/              # Page layouts
│   ├── dashboard-layout.tsx
│   └── index.ts
└── pages/                  # Page-specific
    ├── home.tsx
    └── index.ts
```

### Features (`src/features/`)

Self-contained feature modules:

```
features/
├── auth/
│   ├── components/
│   │   ├── login-form.tsx
│   │   └── protected-route.tsx
│   ├── hooks/
│   │   ├── use-auth.ts
│   │   └── use-auth-initializer.ts
│   ├── services/
│   │   ├── token-storage.ts
│   │   └── auth-helpers.ts
│   ├── store/
│   │   └── auth-store.ts
│   ├── types/
│   │   └── auth.types.ts
│   └── index.ts            # Public exports
├── dashboard/
├── navigation/
├── profile/
└── push-notifications/
```

### Shared Resources

```
hooks/                      # Shared hooks
├── use-capacitor.ts
├── use-theme.ts
├── use-language.ts
└── use-mobile.tsx

utils/                      # Utility functions
├── api.ts
├── cn.ts
├── capacitor.ts
└── google-auth.ts

providers/                  # React contexts
├── providers.tsx           # Combined wrapper
├── auth-provider.tsx
├── theme-provider.tsx
├── i18n-provider.tsx
└── frappe-provider.tsx

locales/                    # Translations
├── en/
│   ├── common.json
│   ├── buttons.json
│   └── pages.json
└── vi/
    ├── common.json
    ├── buttons.json
    └── pages.json

constants/                  # Constants
├── languages.ts
└── index.ts

types/                      # TypeScript types
├── i18n.d.ts
└── index.ts

store/                      # Global state
└── index.ts
```

## Build Directory (`build/`)

Generated outputs (gitignored):

```
build/
├── web/                    # Web production build
├── android/                # Android project
│   └── app/
│       └── build/outputs/
│           ├── apk/        # APK files
│           └── bundle/     # AAB files
└── ios/                    # iOS project (macOS)
```

## Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase.tsx | `UserAvatar.tsx` |
| Hooks | use-kebab-case.ts | `use-auth.ts` |
| Utils | kebab-case.ts | `token-storage.ts` |
| Pages | page.tsx | `app/about/page.tsx` |
| Types | kebab-case.types.ts | `auth.types.ts` |
