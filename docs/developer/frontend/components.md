---
id: components
title: Components Guide
sidebar_label: Components
sidebar_position: 4
description: Working with Atomic Design components and shadcn/ui
keywords: [components, atomic design, shadcn, ui]
---

# Components Guide

This project uses Atomic Design pattern with shadcn/ui as the component foundation.

## Atomic Design Structure

```
src/components/
├── atoms/          # Basic UI elements (shadcn/ui)
├── molecules/      # Simple combinations
├── organisms/      # Complex components
├── templates/      # Page layouts
└── pages/          # Page-specific components
```

## Atoms (shadcn/ui)

Basic building blocks downloaded from shadcn/ui registry.

### Available Atoms

- `button` - Button component with variants
- `input` - Text input field
- `card` - Card container
- `label` - Form label
- `tooltip` - Tooltip popup
- `alert-dialog` - Alert dialog
- `popover` - Popover menu
- `sheet` - Slide-out panel
- `sonner` - Toast notifications

### Usage

```tsx
import { Button } from '@/components/atoms/button';
import { Input } from '@/components/atoms/input';
import { Card, CardHeader, CardContent } from '@/components/atoms/card';

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <h2>Form</h2>
      </CardHeader>
      <CardContent>
        <Input placeholder="Enter text" />
        <Button>Submit</Button>
      </CardContent>
    </Card>
  );
}
```

:::warning Important
**DO NOT modify shadcn components** in `src/components/atoms/` unless absolutely necessary. These are library code.
:::

### Customizing Atoms

Priority order for customization:

1. **Override className** (Preferred)
```tsx
<Button className="bg-blue-500 hover:bg-blue-600">
  Custom Button
</Button>
```

2. **Use data attributes for state styling**
```tsx
<SidebarMenuButton className="data-[active=true]:font-normal" />
```

3. **Create wrapper components**
```tsx
// src/components/molecules/primary-button.tsx
import { Button } from '@/components/atoms/button';

export function PrimaryButton({ children, ...props }) {
  return (
    <Button className="bg-primary text-white" {...props}>
      {children}
    </Button>
  );
}
```

## Molecules

Simple combinations of atoms.

### Examples

**User Avatar**
```tsx
// src/components/molecules/user-avatar.tsx
import { Avatar } from '@/components/atoms/avatar';

interface UserAvatarProps {
  user: { name: string; image?: string };
  size?: 'sm' | 'md' | 'lg';
}

export function UserAvatar({ user, size = 'md' }: UserAvatarProps) {
  return (
    <Avatar className={sizes[size]}>
      {user.image ? (
        <img src={user.image} alt={user.name} />
      ) : (
        <span>{user.name[0]}</span>
      )}
    </Avatar>
  );
}
```

**Loading Button**
```tsx
// src/components/molecules/loading-button.tsx
import { Button } from '@/components/atoms/button';
import { Loader2 } from 'lucide-react';

interface LoadingButtonProps extends React.ComponentProps<typeof Button> {
  loading?: boolean;
}

export function LoadingButton({ loading, children, ...props }: LoadingButtonProps) {
  return (
    <Button disabled={loading} {...props}>
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
}
```

## Organisms

Complex components with business logic.

### Examples

- Navigation sidebar
- Data tables
- Form sections
- Modal dialogs

```tsx
// src/components/organisms/navigation/sidebar.tsx
export function Sidebar() {
  const { items } = useNavigation();

  return (
    <aside className="w-64 border-r">
      <nav>
        {items.map((item) => (
          <NavLink key={item.path} to={item.path}>
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
```

## Templates

Page-level layouts that define structure.

```tsx
// src/components/templates/dashboard-layout.tsx
interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
```

## Adding New Components

### 1. Add shadcn/ui Component

```bash
npx shadcn@latest add dialog
```

Component is added to `src/components/atoms/`.

### 2. Create Custom Component

Follow naming conventions:
- Files: `kebab-case.tsx`
- Components: `PascalCase`
- Props: `ComponentNameProps`

```tsx
// src/components/molecules/my-component.tsx
interface MyComponentProps {
  title: string;
  onAction: () => void;
}

export function MyComponent({ title, onAction }: MyComponentProps) {
  return (
    <div>
      <h3>{title}</h3>
      <Button onClick={onAction}>Action</Button>
    </div>
  );
}
```

### 3. Export from Index

```typescript
// src/components/molecules/index.ts
export { MyComponent } from './my-component';
```

## Best Practices

1. **Composition over inheritance**
2. **Props for customization**
3. **TypeScript for all props**
4. **Forward refs when needed**
5. **Use cn() for class merging**

```tsx
import { cn } from '@/lib/utils';

interface BoxProps extends React.ComponentProps<'div'> {
  variant?: 'default' | 'bordered';
}

export function Box({ className, variant = 'default', ...props }: BoxProps) {
  return (
    <div
      className={cn(
        'rounded-lg p-4',
        variant === 'bordered' && 'border',
        className
      )}
      {...props}
    />
  );
}
```
