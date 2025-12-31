---
id: quick-start
title: Quick Start
sidebar_label: Quick Start
sidebar_position: 3
description: Get started quickly with common development tasks
---

# Quick Start

This guide helps you get started with common development tasks.

## Creating a New Page

### 1. Create Page Component

Create `src/components/pages/your-page.tsx`:

```tsx
import { useTranslation } from 'react-i18next';

interface YourPageProps extends React.ComponentProps<'div'> {}

export function YourPage({ className, ...props }: YourPageProps) {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-4" {...props}>
      <h1>{t('pages.yourPage.title')}</h1>
      {/* Page content */}
    </div>
  );
}
```

### 2. Export from Index

Add to `src/components/pages/index.ts`:

```typescript
export { YourPage } from './your-page';
```

### 3. Create Route

Create folder `src/app/your-page-name/` with:

**route.ts:**
```typescript
export const route = {
  path: '/your-page-name',
};
```

**page.tsx:**
```tsx
import { YourPage } from '@/components/pages';

export default function YourPageRoute() {
  return <YourPage />;
}
```

Route is automatically registered at `/your-page-name`.

## Using Components

### Import shadcn/ui Atoms

```tsx
import { Button } from '@/components/atoms/button';
import { Input } from '@/components/atoms/input';
import { Card } from '@/components/atoms/card';

function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button>Submit</Button>
    </Card>
  );
}
```

## Using Hooks

### Authentication

```tsx
import { useAuth } from '@/features/auth';

function Dashboard() {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Welcome, {user?.full_name}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

### Platform Detection

```tsx
import { usePlatform } from '@/hooks/use-capacitor';

function MyComponent() {
  const { isNative, isAndroid, isIOS } = usePlatform();

  return (
    <div>
      {isNative && <p>Running in mobile app</p>}
      {isAndroid && <p>Android device</p>}
      {isIOS && <p>iOS device</p>}
    </div>
  );
}
```

### Internationalization

```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('pages.home.title')}</h1>
      <button>{t('save', { ns: 'buttons' })}</button>
    </div>
  );
}
```

### Dark Mode

```tsx
import { useTheme } from '@/hooks/use-theme';

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
```

## Next Steps

- [Architecture Overview](/docs/developer/architecture/overview) - Understand project structure
- [Routing Guide](/docs/developer/frontend/routing) - File-based routing details
- [Authentication](/docs/developer/authentication/auth-guide) - Auth implementation
