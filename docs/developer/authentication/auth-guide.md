---
id: auth-guide
title: Authentication Guide
sidebar_label: Auth Guide
sidebar_position: 1
description: JWT-based authentication with Zustand, hybrid token storage, and auto-initialization
keywords: [authentication, jwt, zustand, login, security]
---

# Authentication Guide

Secure JWT-based authentication with Zustand, hybrid token storage, and auto-initialization.

## Features

- Bearer token (JWT) authentication
- Hybrid storage: HttpOnly cookies + localStorage
- Zustand global state (user NOT persisted)
- Auto token injection in API requests
- Auto-init on page load + auto-logout on 401/403

## Architecture

**Flow**: App Load → useAuthInitializer() → Auth Store (Zustand) → useAuth() hook → Components

**File Structure**:
```
src/features/auth/
├── components/      # login-form.tsx, protected-route.tsx
├── config/          # endpoints.ts
├── hooks/           # use-auth.ts, use-auth-initializer.ts
├── services/        # token-storage.ts, auth-helpers.ts
├── store/           # auth-store.ts (Zustand)
└── types/           # auth.types.ts
```

## Token Storage

**Strategy**: Hybrid approach (priority order)
1. HttpOnly cookies (server-set, most secure)
2. Client cookies (SameSite=Strict, Secure in prod)
3. localStorage (fallback, mobile apps)

**API**: `setToken()`, `getToken()`, `removeToken()`, `hasToken()`

**Mobile**: Uses localStorage only (Capacitor WebView compatibility)

## Usage

### Basic Hook Usage

```tsx
import { useAuth } from '@/features/auth';

function Dashboard() {
  const { user, isAuthenticated, isLoading, error, login, logout } = useAuth();

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

### Login Form

```tsx
import { useAuth } from '@/features/auth';
import { useState } from 'react';

function LoginForm() {
  const { login, isLoading, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Signing in...' : 'Sign In'}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
```

## Authentication Flows

### Login Flow
```
User submits credentials
    ↓
API validates credentials
    ↓
Token stored (hybrid storage)
    ↓
User profile fetched
    ↓
Zustand store updated
    ↓
User authenticated
```

### Logout Flow
```
Manual: logout() → Clear token → Clear state → Redirect to /login
Auto: 401/403 response → handleUnauthorized() → Same as manual logout
```

## Protected Routes

### ProtectedRoute Component

```tsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/features/auth';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
```

### Protect at Layout Level

```tsx
// src/app/dashboard/layout.tsx
export default function DashboardLayout({ children }) {
  return (
    <ProtectedRoute>
      <DashboardShell>{children}</DashboardShell>
    </ProtectedRoute>
  );
}
```

All dashboard pages are automatically protected.

## Configuration

### Endpoints

Centralized in `src/features/auth/config/endpoints.ts`:

```typescript
export const AUTH_ENDPOINTS = {
  LOGIN: '/method/login',
  GET_CURRENT_USER: '/method/get_current_user_info',
  LOGOUT: '/method/logout',
};
```

### Environment Variables

```env
VITE_API_BASE_URL=https://your-api.com
VITE_FRAPPE_DOMAIN=https://your-frappe.com
VITE_FRAPPE_TOKEN_EXPIRY_DAYS=7
```

## Security

### Implemented
- JWT bearer token authentication
- HttpOnly cookies (server-set) + SameSite=Strict + Secure
- Auto-logout on 401/403
- User data NOT in localStorage (only token)

### Recommendations
- Use HTTPS in production
- Configure CORS properly
- Implement rate limiting
- Add CSP headers
- Consider refresh tokens for long sessions

## Token Storage API

```typescript
import {
  getToken,
  setToken,
  removeToken,
  hasToken,
  isTokenExpired,
} from '@/features/auth/services/token-storage';

// Get current token
const token = getToken();

// Set token with expiry (in seconds)
setToken('your-bearer-token', 3600);

// Remove token
removeToken();

// Check if valid token exists
if (hasToken()) {
  // User is authenticated
}

// Check if token expired
if (isTokenExpired()) {
  // Token has expired
}
```
