---
id: design-principles
title: Design Principles
sidebar_label: Design Principles
sidebar_position: 3
description: Core design principles and best practices
---

# Design Principles

Core principles that guide the architecture and development of IDICO IPMS.

## 1. Atomic Design

Components are organized by complexity level:

### Atoms
Basic building blocks that can't be broken down further:
- Button, Input, Label, Icon
- Provided by shadcn/ui in `src/components/atoms/`

:::warning
Do NOT modify shadcn/ui components in `atoms/` unless absolutely necessary. Override via className props instead.
:::

### Molecules
Simple combinations of atoms:
- User avatar with name
- Input with label
- Loading button

### Organisms
Complex components with business logic:
- Navigation sidebar
- Data tables
- Form sections

### Templates
Page-level layouts:
- Dashboard layout with sidebar
- Auth layout for login/register

### Pages
Page-specific components that live in features or components/pages.

## 2. Feature-Based Architecture

Each feature is a self-contained module:

```
feature/
├── components/     # UI specific to this feature
├── hooks/          # Custom hooks
├── services/       # API calls
├── store/          # State management
├── types/          # TypeScript types
├── utils/          # Helper functions
└── index.ts        # Public API
```

**Benefits**:
- Easy to understand feature boundaries
- Simple to add/remove features
- Reduces coupling between features
- Enables team parallelization

## 3. Import Hierarchy

Strict import rules prevent circular dependencies:

```
✅ Allowed:
Pages → Features → Components → Utils/Hooks

❌ Not Allowed:
- Components importing from Features
- Cross-feature imports
- Circular dependencies
```

## 4. Single Responsibility

Each file has one clear purpose:
- One component per file
- One hook per file
- Clear file naming

## 5. Mobile-First

Design for mobile, enhance for desktop:

```tsx
// Platform detection
const { isNative, isAndroid, isIOS } = usePlatform();

// Conditional features
if (isNative) {
  // Use native camera
} else {
  // Use web file picker
}
```

## 6. Type Safety

Full TypeScript coverage:
- All props typed
- API responses typed
- No `any` types
- Strict mode enabled

```typescript
interface UserProps {
  user: User;
  onUpdate: (user: User) => void;
}

function UserCard({ user, onUpdate }: UserProps) {
  // ...
}
```

## 7. Internationalization First

No hardcoded strings:

```tsx
// ❌ Bad
<button>Save</button>

// ✅ Good
<button>{t('save', { ns: 'buttons' })}</button>
```

## 8. DRY Principle

Don't Repeat Yourself:
- Reusable hooks for common logic
- Shared utilities
- Component composition

## 9. Performance

- Lazy loading for routes
- Image optimization
- PWA caching
- Efficient re-renders

## 10. Security

- Never store secrets in frontend
- HTTPS only in production
- Input validation
- XSS prevention

## Best Practices Summary

| Practice | Do | Don't |
|----------|----|----|
| Components | Use Atomic Design | Create monolithic components |
| Features | Self-contained modules | Cross-feature imports |
| State | Zustand for global, useState for local | Prop drilling |
| Styling | Tailwind utilities | Inline styles |
| Imports | Use path aliases (@/) | Relative paths (../../) |
| Types | Full TypeScript | any types |
| i18n | Translation keys | Hardcoded strings |
