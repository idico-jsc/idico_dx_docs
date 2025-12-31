---
id: routing
title: Routing Guide
sidebar_label: Routing
sidebar_position: 1
description: Next.js-style file-based routing and page creation guide
keywords: [routing, pages, navigation, react-router]
---

# Routing & Page Creation Guide

Complete guide for Next.js-style file-based routing and page creation with Atomic Design pattern.

## Overview

This project uses a Next.js-inspired file-based routing system where:
- **Routes automatically discovered** from `src/app/` folder structure
- **File conventions** define route behavior (page, layout, error)
- **Atomic Design separation**: Route entry points in `src/app/`, actual page components in `src/components/pages/`

## File Conventions

### Core Files

| File | Purpose | Example |
|------|---------|---------|
| `page.tsx` | Route entry point | `app/about/page.tsx` → `/about` |
| `layout.tsx` | Shared UI wrapper | `app/layout.tsx` wraps all routes |
| `error.tsx` | Error boundary | Catches errors in route segment |
| `not-found.tsx` | 404 page | Catch-all route fallback |

### Special Folders

| Folder | Purpose | Example |
|--------|---------|---------|
| `(folder)` | Route group (not in URL) | `app/(auth)/login` → `/login` |
| `_folder` | Private folder (excluded) | `app/_components/` |
| `[param]` | Dynamic route parameter | `app/blog/[id]` → `/blog/:id` |

## Creating a New Page

### Quick Start (4 Steps)

**1. Create page component** in `src/components/pages/your-page.tsx`

```tsx
interface YourPageProps extends React.ComponentProps<'div'> {}

export function YourPage({ className, ...props }: YourPageProps) {
  return (
    <div className="container mx-auto p-4" {...props}>
      <h1>Your Page</h1>
    </div>
  );
}
```

**2. Export from pages index**

Add to `src/components/pages/index.ts`:
```typescript
export { YourPage } from './your-page';
```

**3. Create route folder**

Create `src/app/your-page-name/route.ts`:
```typescript
export const route = {
  path: '/your-page-name',
};
```

**4. Create route entry point**

Create `src/app/your-page-name/page.tsx`:
```tsx
import { YourPage } from '@/components/pages';

export default function YourPageRoute() {
  return <YourPage />;
}
```

**Result**: Route automatically registered at `/your-page-name`

## Layouts

Layouts wrap child routes and maintain state across navigation.

### Root Layout

Located at `src/app/layout.tsx`:
- Wraps all routes in the application
- Contains common UI: Header, Footer, Theme providers
- Renders `{children}` prop for route content

### Nested Layouts

Located at `src/app/[section]/layout.tsx`:
- Wraps all routes under that section
- Can contain section-specific UI: Sidebar, Navigation
- Cascades from root: Root Layout → Section Layout → Page

### Layout Cascading Example

For route `/dashboard/profile`:
1. Root Layout (`app/layout.tsx`)
2. Dashboard Layout (`app/dashboard/layout.tsx`)
3. Profile Page (`app/dashboard/profile/page.tsx`)

## Route Groups

Route groups organize files without affecting URLs using `(folder)` syntax.

### Example: Auth Routes

```
app/
└── (auth)/
    ├── layout.tsx        # Auth layout
    ├── login/
    │   └── page.tsx      # /login (NOT /auth/login)
    └── register/
        └── page.tsx      # /register
```

The parentheses are removed from the URL.

## Dynamic Routes

Use `[param]` folder naming for dynamic URL segments.

### Example: Blog Post by ID

**Folder**: `src/app/blog/[id]/page.tsx`
**Route**: `/blog/:id`
**URL**: `/blog/123` → `id = "123"`

```tsx
import { useParams } from 'react-router-dom';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Navigate to="/blog" />;
  }

  return <div>Blog Post: {id}</div>;
}
```

## Protected Routes

Protect routes at the layout level:

```tsx
// src/app/dashboard/layout.tsx
import { ProtectedRoute } from '@/features/auth';

export default function DashboardLayout({ children }) {
  return (
    <ProtectedRoute>
      {children}
    </ProtectedRoute>
  );
}
```

All dashboard pages are automatically protected.

## Navigation

### Programmatic Navigation

```tsx
import { useNavigate, NavLink } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  return (
    <>
      <NavLink to="/about">About</NavLink>
      <button onClick={() => navigate('/dashboard')}>
        Go to Dashboard
      </button>
    </>
  );
}
```

## Troubleshooting

### Route Not Found

- Ensure file named `page.tsx` (not `index.tsx`)
- Verify both `page.tsx` and `route.ts` exist
- Check `path` in `route.ts` matches URL
- Restart dev server

### Layout Not Applying

- Ensure file named `layout.tsx`
- Verify layout in parent folder
- Check layout exports default function
