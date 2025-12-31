---
id: overview
title: Architecture Overview
sidebar_label: Overview
sidebar_position: 1
description: Feature-based architecture with Atomic Design, i18n, PWA, and Capacitor mobile support.
keywords: [architecture, atomic design, react, typescript, capacitor]
---

# Project Architecture

Feature-based architecture with Atomic Design, i18n, PWA, and Capacitor mobile support.

## Folder Structure

```
src/
├── app/                 # Next.js-style App Router
│   ├── layout.tsx      # Root layout (wraps all routes)
│   ├── page.tsx        # Home page (/)
│   ├── routes.tsx      # Router system (auto-generated)
│   ├── not-found.tsx   # 404 page (catch-all)
│   ├── error.tsx       # Root error boundary
│   ├── about/
│   │   └── page.tsx    # /about
│   ├── contact/
│   │   └── page.tsx    # /contact
│   └── (auth)/         # Route group (not in URL)
│       ├── layout.tsx  # Auth layout
│       └── login/
│           └── page.tsx # /login
│
├── components/          # Atomic Design Components
│   ├── atoms/          # Basic UI elements (Button, Input, etc.)
│   ├── molecules/      # Simple component combinations
│   ├── organisms/      # Complex UI components
│   ├── templates/      # Page-level layouts
│   ├── pages/          # Page-specific components
│   └── index.ts       # Public exports
│
├── features/           # Feature Modules (Business Logic)
│   ├── auth/          # Authentication feature
│   ├── dashboard/     # Dashboard feature
│   └── profile/       # Profile feature
│
├── hooks/             # Shared custom hooks
├── utils/             # Utility functions
├── providers/         # React Context Providers
├── locales/           # Internationalization (en, vi)
├── lib/               # Third-party library configurations
├── constants/         # Global constants
├── types/             # Global TypeScript types
├── store/             # Global state management
├── data/              # Static data and mock data
└── main.tsx           # Application entry point
```

## Architecture Principles

### 1. Atomic Design (Components)

Components are organized by complexity:

- **Atoms**: Basic building blocks (Button, Input, Label)
- **Molecules**: Simple combinations (SearchBox, FormField)
- **Organisms**: Complex components (Navbar, Card, Modal)
- **Templates**: Page layouts (DashboardLayout, AuthLayout)
- **Pages**: Page-specific components that don't fit routing

### 2. Feature-Based Structure

Each feature is self-contained with:

```
feature-name/
├── components/     # Feature-specific UI components
├── hooks/         # Feature-specific hooks
├── services/      # API calls and business logic
├── types/         # TypeScript types
├── utils/         # Helper functions
└── index.ts      # Public API
```

### 3. Next.js-Style App Router

**File Conventions**:
- `page.tsx` - Route endpoint (app/about/page.tsx → `/about`)
- `layout.tsx` - Shared wrapper (cascades automatically)
- `error.tsx` - Error boundary
- `not-found.tsx` - 404 fallback
- `(folder)` - Route group (not in URL: (auth)/login → `/login`)
- `_folder` - Private folder (excluded from routing)

**Benefits**: File-system = URL, no manual registration, auto-discovery

### 4. Import Rules

✅ Pages → Features → Components → Utils/Hooks

❌ No cross-feature imports, no circular dependencies

## State Management

- **Local**: useState, useContext (theme, i18n)
- **Global**: Zustand (auth state, NOT persisted)
- **Server**: SWR (data fetching, caching, revalidation)

## Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React 19 + TypeScript 5 |
| Build | Vite 7 |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Routing | React Router 7 (file-based) |
| State | Zustand + SWR |
| Mobile | Capacitor 7 |
| i18n | react-i18next |
| Testing | Cypress |

## Build Outputs

- **Web**: `build/web/` (~500 KB, deploy to Netlify/Vercel)
- **Android APK**: `build/android/app/build/outputs/apk/debug/` (~4-5 MB)
- **Android AAB**: `build/android/app/build/outputs/bundle/release/` (Play Store)
- **iOS**: `build/ios/` (macOS only)
