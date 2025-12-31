---
id: quick-start
title: Bắt đầu Nhanh
sidebar_label: Bắt đầu Nhanh
sidebar_position: 3
description: Bắt đầu nhanh với các tác vụ phát triển phổ biến
---

# Bắt đầu Nhanh

Hướng dẫn này giúp bạn bắt đầu với các tác vụ phát triển phổ biến.

## Tạo Trang Mới

### 1. Tạo Component Trang

Tạo `src/components/pages/your-page.tsx`:

```tsx
import { useTranslation } from 'react-i18next';

interface YourPageProps extends React.ComponentProps<'div'> {}

export function YourPage({ className, ...props }: YourPageProps) {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-4" {...props}>
      <h1>{t('pages.yourPage.title')}</h1>
      {/* Nội dung trang */}
    </div>
  );
}
```

### 2. Export từ Index

Thêm vào `src/components/pages/index.ts`:

```typescript
export { YourPage } from './your-page';
```

### 3. Tạo Route

Tạo thư mục `src/app/your-page-name/` với:

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

Route tự động được đăng ký tại `/your-page-name`.

## Sử dụng Components

### Import shadcn/ui Atoms

```tsx
import { Button } from '@/components/atoms/button';
import { Input } from '@/components/atoms/input';
import { Card } from '@/components/atoms/card';

function MyComponent() {
  return (
    <Card>
      <Input placeholder="Nhập văn bản" />
      <Button>Gửi</Button>
    </Card>
  );
}
```

## Sử dụng Hooks

### Xác thực

```tsx
import { useAuth } from '@/features/auth';

function Dashboard() {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Xin chào, {user?.full_name}</h1>
      <button onClick={logout}>Đăng xuất</button>
    </div>
  );
}
```

### Phát hiện Nền tảng

```tsx
import { usePlatform } from '@/hooks/use-capacitor';

function MyComponent() {
  const { isNative, isAndroid, isIOS } = usePlatform();

  return (
    <div>
      {isNative && <p>Đang chạy trong ứng dụng di động</p>}
      {isAndroid && <p>Thiết bị Android</p>}
      {isIOS && <p>Thiết bị iOS</p>}
    </div>
  );
}
```

### Đa ngôn ngữ

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

### Chế độ Tối

```tsx
import { useTheme } from '@/hooks/use-theme';

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {isDark ? 'Chế độ Sáng' : 'Chế độ Tối'}
    </button>
  );
}
```

## Bước Tiếp theo

- [Tổng quan Kiến trúc](/docs/developer/architecture/overview) - Hiểu cấu trúc dự án
- [Hướng dẫn Routing](/docs/developer/frontend/routing) - Chi tiết file-based routing
- [Xác thực](/docs/developer/authentication/auth-guide) - Triển khai xác thực
