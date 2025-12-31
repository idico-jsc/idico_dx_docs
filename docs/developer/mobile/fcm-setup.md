---
id: fcm-setup
title: FCM Push Notifications
sidebar_label: Push Notifications
sidebar_position: 2
description: Firebase Cloud Messaging setup for push notifications
keywords: [fcm, firebase, push notifications, mobile]
---

# Firebase Cloud Messaging (FCM) Setup

Complete guide for setting up push notifications with Firebase Cloud Messaging.

## Overview

FCM enables push notifications across platforms:
- **Web**: Service Worker-based notifications
- **Android**: Native push notifications via Capacitor
- **iOS**: Native push notifications via Capacitor

## Architecture

```
User Device → FCM Token Generated → Stored in Backend
                                         ↓
                                  Backend sends to FCM
                                         ↓
                                  Device receives notification
```

## Firebase Console Setup

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name
4. Create project

### 2. Add Apps

**Web App**:
1. Click the web icon (`</>` symbol)
2. Register with nickname
3. Copy configuration values

**Android App**:
1. Click Android icon
2. Package name: `com.wellspring.parentportal`
3. Download `google-services.json`

**iOS App** (optional):
1. Click iOS icon
2. Bundle ID: `com.wellspring.parentportal`
3. Download `GoogleService-Info.plist`

### 3. Get VAPID Key

1. Project Settings → Cloud Messaging
2. Web configuration → Generate key pair
3. Copy VAPID key

## Environment Configuration

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id

# FCM Web Push Certificate (VAPID Key)
VITE_FIREBASE_VAPID_KEY=your-vapid-key
```

## Android Configuration

### 1. Place google-services.json

```
build/android/app/google-services.json
```

### 2. Update Gradle

**Project-level** (`build/android/build.gradle`):
```gradle
buildscript {
    dependencies {
        classpath 'com.google.gms:google-services:4.4.0'
    }
}
```

**App-level** (`build/android/app/build.gradle`):
```gradle
apply plugin: 'com.google.gms.google-services'
```

The script `scripts/copy-config-files.cjs` automatically copies `google-services.json` during sync.

## iOS Configuration (macOS only)

1. Place `GoogleService-Info.plist` in `build/ios/App/App/`
2. In Xcode, add to project
3. Enable Push Notifications capability
4. Enable Background Modes → Remote notifications

## Implementation

### Key Functions

- `initializeFirebase()` - Initialize Firebase app
- `requestNotificationPermission()` - Request user permission
- `getFCMToken()` - Get device FCM token
- `onMessageReceived()` - Handle foreground notifications
- `sendTokenToBackend()` - Register token with server

### Notification Payloads

**Display Notification**:
```json
{
  "notification": {
    "title": "New Message",
    "body": "You have a new message",
    "icon": "/icon-192x192.png"
  }
}
```

**Data Payload**:
```json
{
  "data": {
    "type": "message",
    "messageId": "123"
  }
}
```

## Testing

### Web
1. Start dev server: `npm run dev`
2. Request notification permission
3. Copy FCM token from console
4. Send test from Firebase Console

### Android
1. Build: `npm run cap:run:android`
2. Grant permission
3. Check Logcat for token
4. Send test notification

### Send from Firebase Console
1. Cloud Messaging → Send first message
2. Enter title and text
3. Send test message
4. Enter FCM token
5. Click Test

## Token Management

### Lifecycle
- **Generate**: On app first launch
- **Refresh**: When token expires
- **Delete**: On logout

### Best Practices
1. Request permission after user action
2. Store token server-side per user
3. Handle token refresh
4. Clean up on logout
5. Support multiple devices per user

## Troubleshooting

### "Notification permission denied"
Guide user to browser settings to enable notifications.

### "google-services.json not found"
1. Download from Firebase Console
2. Place in `build/android/app/`
3. Run `npm run cap:sync`

### "Token registration failed"
- Check network connectivity
- Verify backend endpoint
- Check backend logs

### "Notifications not appearing"
- Check permission granted
- Verify FCM token valid
- Check payload format
- Check foreground vs background handling

## Security

1. Never expose Server Key - keep on backend
2. Validate tokens server-side
3. Use HTTPS
4. Sanitize notification content
5. Rate limit notifications

## Cost

Firebase Cloud Messaging is **free**:
- Unlimited notifications
- No message limits
- Free for commercial use
