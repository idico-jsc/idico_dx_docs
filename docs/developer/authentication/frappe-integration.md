---
id: frappe-integration
title: Frappe Integration
sidebar_label: Frappe Backend
sidebar_position: 3
description: Frappe Framework backend integration with bearer token auth
keywords: [frappe, backend, api, integration]
---

# Frappe Integration Guide

This project includes built-in support for Frappe Framework backend using bearer token authentication with Zustand state management.

## What's Included

### Core Integration Files

1. **Provider** - `src/providers/frappe-provider.tsx`
   - Wraps app with FrappeProvider from frappe-react-sdk
   - Automatically configures bearer token authentication

2. **Token Storage** - `src/features/auth/services/token-storage.ts`
   - Hybrid storage: HTTP-only cookies + localStorage fallback
   - Platform-aware token management

3. **TypeScript Types** - `src/types/frappe.types.ts`
   - Comprehensive type definitions for Frappe API

4. **Constants** - `src/constants/frappe.ts`
   - Storage keys, API endpoints, doctypes

## Configuration

### Environment Variables

```env
VITE_FRAPPE_URL=https://your-frappe-server.frappe.cloud
VITE_FRAPPE_USE_TOKEN=true
```

### Provider Setup

Already configured in `src/providers/providers.tsx`:

```tsx
<I18nProvider>
  <SWRProvider>
    <FrappeProvider>{children}</FrappeProvider>
  </SWRProvider>
</I18nProvider>
```

## API Operations

Import hooks directly from `frappe-react-sdk`:

### Fetch Single Document

```tsx
import { useFrappeGetDoc } from 'frappe-react-sdk';

function UserProfile({ email }: { email: string }) {
  const { data, error, isLoading } = useFrappeGetDoc('User', email);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>Hello {data?.full_name}</div>;
}
```

### Fetch Document List

```tsx
import { useFrappeGetDocList } from 'frappe-react-sdk';

function UserList() {
  const { data, error, isLoading } = useFrappeGetDocList('User', {
    fields: ['name', 'email', 'full_name'],
    filters: [['enabled', '=', 1]],
    limit: 20,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.name}>{user.full_name}</li>
      ))}
    </ul>
  );
}
```

### Create Document

```tsx
import { useFrappeCreateDoc } from 'frappe-react-sdk';

function CreateUser() {
  const { createDoc, loading } = useFrappeCreateDoc();

  const handleCreate = async () => {
    const newUser = await createDoc('User', {
      email: 'newuser@example.com',
      first_name: 'New',
      last_name: 'User',
    });
    console.log('Created:', newUser);
  };

  return (
    <button onClick={handleCreate} disabled={loading}>
      {loading ? 'Creating...' : 'Create User'}
    </button>
  );
}
```

### Update Document

```tsx
import { useFrappeUpdateDoc } from 'frappe-react-sdk';

function UpdateUser({ email }: { email: string }) {
  const { updateDoc, loading } = useFrappeUpdateDoc();

  const handleUpdate = async () => {
    await updateDoc('User', email, {
      full_name: 'Updated Name',
    });
  };

  return (
    <button onClick={handleUpdate} disabled={loading}>
      Update User
    </button>
  );
}
```

### Call Custom API Method

```tsx
import { useFrappePostCall } from 'frappe-react-sdk';

function CustomAPICall() {
  const { call, loading } = useFrappePostCall('my.custom.method');

  const handleCall = async () => {
    const result = await call({
      arg1: 'value1',
      arg2: 'value2',
    });
    console.log('Result:', result);
  };

  return (
    <button onClick={handleCall} disabled={loading}>
      Call API
    </button>
  );
}
```

## Platform Support

Token storage works on both web and mobile:

| Platform | Storage |
|----------|---------|
| Web | localStorage |
| Mobile (Capacitor) | localStorage (Capacitor-compatible) |

## TypeScript Types

Available from `@/types/frappe.types`:

```typescript
import type {
  FrappeUser,
  FrappeDoc,
  FrappeError,
  FrappeAuthResponse,
  FrappeListResponse,
} from '@/types/frappe.types';
```

## Troubleshooting

### Token not being sent with requests

1. Verify `VITE_FRAPPE_USE_TOKEN=true` in `.env`
2. Ensure token is set using `setToken()` before API calls
3. Check FrappeProvider is configured

### CORS errors

Configure CORS on your Frappe server:
- Add frontend URL to `site_config.json`
- Set appropriate CORS headers

### Token expiry

Implement token refresh logic:

```typescript
useEffect(() => {
  const checkTokenExpiry = () => {
    if (isTokenExpired()) {
      removeToken();
      navigate('/login');
    }
  };

  const interval = setInterval(checkTokenExpiry, 60000);
  return () => clearInterval(interval);
}, []);
```

## Resources

- [frappe-react-sdk Documentation](https://github.com/nikkothari22/frappe-react-sdk)
- [Frappe Framework Documentation](https://frappeframework.com/docs)
- [Frappe REST API](https://frappeframework.com/docs/user/en/api/rest)
