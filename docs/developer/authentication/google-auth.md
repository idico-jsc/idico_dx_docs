---
id: google-auth
title: Google Authentication
sidebar_label: Google Auth
sidebar_position: 2
description: Google OAuth setup for web and native mobile platforms
keywords: [google, oauth, authentication, android, ios]
---

# Google Authentication Setup

Complete guide for setting up Google OAuth across web and native mobile platforms.

## Platform Overview

| Platform | Implementation | Client ID Type |
|----------|---------------|----------------|
| **Web** | `@react-oauth/google` | Web Client ID |
| **Android/iOS** | `@codetrix-studio/capacitor-google-auth` | Server Client ID |

The app automatically detects the platform and uses the appropriate authentication method.

## Prerequisites

- Google Cloud Platform account with admin access
- OAuth consent screen configured
- Android/iOS development environment (for mobile apps)

## Environment Variables

```env
# Web browser login
VITE_GOOGLE_CLIENT_ID=your-web-client-id.apps.googleusercontent.com

# Native mobile apps (Android/iOS)
VITE_GOOGLE_SERVER_CLIENT_ID=your-server-client-id.apps.googleusercontent.com
```

## Google Cloud Console Setup

### 1. Configure OAuth Consent Screen

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to **APIs & Services → OAuth consent screen**
3. Select **External** (or Internal for Google Workspace)
4. Fill in required information
5. Add scopes: `userinfo.email`, `userinfo.profile`
6. Add test users if in testing mode

### 2. Create Web OAuth Client ID

1. Go to **APIs & Services → Credentials**
2. Click **Create Credentials → OAuth client ID**
3. Application type: **Web application**
4. Add **Authorized JavaScript origins**:
   - Development: `http://localhost:5173`
   - Production: `https://your-domain.com`
5. Copy Client ID → Use as `VITE_GOOGLE_CLIENT_ID`

:::tip Important
Add the exact URL from your browser (no trailing slashes, include port number).
:::

### 3. Create Server Client ID (for Native Apps)

1. Click **Create Credentials → OAuth client ID**
2. Application type: **Web application**
3. Name: "Server Client ID for Native Apps"
4. **Do NOT add authorized origins** (not needed for native)
5. Copy Client ID → Use as `VITE_GOOGLE_SERVER_CLIENT_ID`

### 4. Create Android OAuth Client ID

1. Click **Create Credentials → OAuth client ID**
2. Application type: **Android**
3. Package name: `com.wellspring.parentportal`
4. Add SHA-1 certificate fingerprints

## Android SHA-1 Configuration

### Get Debug SHA-1

```bash
# Using debug keystore
keytool -list -v -keystore ~/.android/debug.keystore \
  -alias androiddebugkey \
  -storepass android \
  -keypass android | grep SHA1

# Or using Gradle
cd build/android
./gradlew signingReport
```

### Get Release SHA-1

```bash
# Create release keystore
keytool -genkey -v -keystore parent-portal-release.keystore \
  -alias parent-portal \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000

# Get SHA-1
keytool -list -v -keystore parent-portal-release.keystore \
  -alias parent-portal | grep SHA1
```

Add both debug and release SHA-1 to Google Cloud Console.

## Testing

### Web Testing

```bash
npm run dev
# Navigate to login page
# Click "Login with Google"
```

### Android Testing

```bash
npm run build:mobile
npm run cap:run:android
# Click "Login with Google"
```

## Troubleshooting

### "Origin not allowed for the given client ID"

**Solution**:
1. Check exact URL in browser (e.g., `http://localhost:5173`)
2. Add to Google Cloud Console → Web OAuth Client
3. Wait 5-10 minutes for propagation
4. Clear browser cache

**Common mistakes**:
- Missing port: `http://localhost` instead of `http://localhost:5173`
- Trailing slash: `http://localhost:5173/`

### Android: "Developer Error" or "Error 10"

**Solution**:
1. Get SHA-1: `./gradlew signingReport`
2. Add to Google Cloud Console
3. Wait 5-10 minutes
4. Rebuild: `npm run build:mobile`

### Package Name Mismatch

Verify package name matches in:
- `capacitor.config.ts`: `appId`
- Google Cloud Console → Android OAuth Client
- `build/android/app/build.gradle`: `applicationId`

## Security Best Practices

1. Never commit `.env` files
2. Keep Client Secret on backend only
3. Use different credentials for dev/prod
4. Restrict OAuth scopes to required permissions
5. Use HTTPS in production
