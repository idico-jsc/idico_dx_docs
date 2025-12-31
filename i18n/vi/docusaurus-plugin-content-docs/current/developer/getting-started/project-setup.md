---
id: project-setup
title: Thiết lập Dự án
sidebar_label: Thiết lập Dự án
sidebar_position: 2
description: Hướng dẫn cấu hình và thiết lập dự án chi tiết
---

# Thiết lập Dự án

Hướng dẫn này đề cập đến cấu hình dự án chi tiết cho dự án IDICO IPMS.

## Thông tin Dự án

- **Tên**: IDICO CRM (idico-crm)
- **Framework**: React 19 + TypeScript 5 + Vite 7
- **Di động**: Capacitor 7 (Android/iOS)
- **Styling**: Tailwind CSS v4 + shadcn/ui

## Các File Cấu hình Chính

| File | Mục đích |
|------|----------|
| `package.json` | Dependencies, scripts, phiên bản |
| `vite.config.ts` | Cấu hình build, PWA, tối ưu hóa |
| `tsconfig.json` | Cài đặt TypeScript, path aliases |
| `capacitor.config.ts` | Cấu hình ứng dụng di động native |
| `tailwind.config.ts` | Cấu hình Tailwind CSS |

## Path Aliases

Dự án sử dụng TypeScript path aliases cho imports gọn gàng hơn:

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

Cách sử dụng:
```typescript
import { Button } from '@/components/atoms/button';
import { useAuth } from '@/features/auth';
```

## Biến Môi trường

Tất cả biến môi trường phải có tiền tố `VITE_` để có thể truy cập trong frontend:

```env
# ✅ Có thể truy cập trong frontend
VITE_API_URL=https://api.example.com

# ❌ Không thể truy cập trong frontend
API_SECRET=secret-key
```

## Lệnh Build

```bash
# Phát triển
npm run dev              # Khởi động server phát triển (port 5173)
npm run build            # Build production
npm run preview          # Xem trước build production

# Di động
npm run build:mobile     # Build cho di động + đồng bộ
npm run cap:sync         # Đồng bộ web sang native
npm run cap:run:android  # Chạy trên thiết bị Android

# Kiểm thử
npm run test             # Chạy Cypress tests
npm run lint             # Chạy ESLint
```

## Thiết lập IDE

### VS Code Extensions

Các extension được khuyến nghị:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin (Volar)

### Cài đặt VS Code

Dự án bao gồm `.vscode/settings.json` với:
- Mẫu nhóm file
- Gợi ý Tailwind class
- Phân giải đường dẫn TypeScript
