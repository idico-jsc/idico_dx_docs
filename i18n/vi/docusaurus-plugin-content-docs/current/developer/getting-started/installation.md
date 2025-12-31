---
id: installation
title: Cài đặt
sidebar_label: Cài đặt
sidebar_position: 1
description: Cách thiết lập và cài đặt dự án IDICO IPMS
---

# Cài đặt

Thiết lập dự án IDICO IPMS và chạy trên máy tính của bạn.

## Yêu cầu

- **Node.js 20+** - Cần thiết để phát triển
- **npm** hoặc **yarn** - Trình quản lý gói
- **Git** - Quản lý phiên bản

Cho phát triển di động:
- **Java 21** - Cần thiết cho Capacitor 7
- **Android Studio 2024.2.1+** - Cho phát triển Android
- **Xcode 16.0+** - Cho phát triển iOS (chỉ macOS)

## Bắt đầu Nhanh

```bash
# Clone repository
git clone https://github.com/idico-jsc/idico_ipms_web.git
cd idico_ipms_web

# Cài đặt dependencies
npm install

# Khởi động server phát triển
npm run dev
```

Ứng dụng sẽ có sẵn tại `http://localhost:5173`.

## Thiết lập Môi trường

Tạo file `.env.development` trong thư mục gốc dự án:

```env
# Cấu hình API
VITE_API_BASE_URL=https://your-api.com
VITE_FRAPPE_DOMAIN=https://your-frappe.com
VITE_FRAPPE_TOKEN_EXPIRY_DAYS=7

# Google OAuth (tùy chọn)
VITE_GOOGLE_CLIENT_ID=your-web-client-id.apps.googleusercontent.com
VITE_GOOGLE_SERVER_CLIENT_ID=your-server-client-id.apps.googleusercontent.com

# Firebase (tùy chọn)
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
```

## Xác minh Cài đặt

```bash
# Kiểm tra phiên bản Node
node --version  # Nên là 20.x hoặc cao hơn

# Chạy server phát triển
npm run dev

# Build cho production
npm run build

# Chạy tests
npm run test
```

## Bước Tiếp theo

- [Thiết lập Dự án](./project-setup) - Hiểu cấu hình dự án
- [Bắt đầu Nhanh](./quick-start) - Xây dựng tính năng đầu tiên
- [Tổng quan Kiến trúc](/docs/developer/architecture/overview) - Hiểu cấu trúc codebase
