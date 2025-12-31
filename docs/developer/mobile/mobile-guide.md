---
id: mobile-guide
title: Mobile Development Guide
sidebar_label: Mobile Guide
sidebar_position: 1
description: Native iOS and Android development with Capacitor
keywords: [mobile, capacitor, android, ios, native]
---

# Mobile Development Guide

Complete guide for developing native iOS and Android applications with Capacitor.

## Overview

This project uses Capacitor 7 to convert the React PWA into native mobile apps.

**Benefits**:
- Build native apps from single React codebase
- Access native device features
- Web-first development with optional native enhancements
- 100% code sharing across web/iOS/Android

**Key Information**:
- Capacitor Version: 7.4.3
- Package ID: com.wellspring.parentportal
- Java Version: 21 (required)
- Node.js: 20+

## Prerequisites

### Required Software

**Node.js 20+**
```bash
node --version  # Should be 20.x or higher
```

**Java 21** (Capacitor 7 requirement)
```bash
java -version   # Should show openjdk 21.x.x
```

**Android Studio 2024.2.1+**
- Download from https://developer.android.com/studio
- Install Android SDK (API 23+)
- Install Gradle 8.7+

**Xcode 16.0+** (macOS only)
- Install from Mac App Store
- Install CocoaPods: `sudo gem install cocoapods`

### Verify Environment

```bash
npm run cap:doctor
# Expected: ✅ Android looking great! 👌
```

## Project Structure

```
react-ts-starter/
├── build/
│   ├── android/                    # Android project
│   │   └── app/src/main/assets/public/  # Web build synced here
│   └── ios/                        # iOS project
│       └── App/App/public/         # Web build synced here
├── src/
│   ├── utils/capacitor.ts          # Platform detection
│   └── hooks/use-capacitor.ts      # Capacitor hooks
├── capacitor.config.ts             # Capacitor configuration
└── vite.config.ts                  # Requires base: './'
```

## Initial Setup

```bash
# Install dependencies
npm install

# Build web assets
npm run build

# Sync to platforms
npm run cap:sync
```

## Daily Workflow

### 1. Web Development (Fastest)

```bash
npm run dev
```
- Test in browser with DevTools
- Use device emulation
- Platform detection works in browser

### 2. Build & Sync

```bash
npm run build
npm run cap:sync
```

### 3. Test on Device

```bash
# Android
npm run cap:run:android

# iOS (macOS only)
npm run cap:run:ios
```

### 4. Debug Native Issues

```bash
npm run cap:open:android
npm run cap:open:ios
```

## Building APK/AAB

### Debug APK
```bash
npm run build:apk:debug
# Output: build/android/app/build/outputs/apk/debug/pp-<version>-debug.apk
```

### Release APK
```bash
npm run build:apk:release
# Output: build/android/app/build/outputs/apk/release/pp-<version>-release.apk
```

### AAB (App Bundle)
```bash
npm run build:aab
# Output: build/android/app/build/outputs/bundle/release/app-release.aab
```

## Platform Detection

### Utilities

```typescript
import { isNative, isWeb, isAndroid, isIOS } from '@/utils/capacitor';

if (isNative()) {
  // Running in mobile app
}

if (isAndroid()) {
  // Android-specific code
}
```

### Hooks

```typescript
import { usePlatform, useAppState, useBackButton } from '@/hooks/use-capacitor';

function MyComponent() {
  const { isNative, isAndroid, isIOS } = usePlatform();
  const { isActive } = useAppState();

  useBackButton(() => {
    // Handle Android back button
  });
}
```

## Native Plugins

Installed plugins:
- `@capacitor/app` - App lifecycle, info, URLs
- `@capacitor/splash-screen` - Splash screen control
- `@capacitor/status-bar` - Status bar styling
- `@capacitor/browser` - Open external URLs
- `@capacitor/push-notifications` - Push notifications
- `@codetrix-studio/capacitor-google-auth` - Google OAuth

Add more plugins:
```bash
npm install @capacitor/camera
npm run cap:sync
```

## Testing

### Android Testing

**Using Android Studio**:
1. Open: `npm run cap:open:android`
2. Wait for Gradle sync
3. Select device/emulator
4. Click Run

**Using CLI**:
```bash
npm run cap:run:android
```

**View logs**:
```bash
adb logcat | grep com.wellspring.parentportal
```

### iOS Testing (macOS only)

1. Open: `npm run cap:open:ios`
2. Select device/simulator
3. Click Run

## Troubleshooting

### "Java version mismatch"
Install Java 21 and set as default.

### "Gradle build failed"
```bash
cd build/android
./gradlew clean
./gradlew build --stacktrace
```

### "White screen on startup"
```bash
npm run build
npm run cap:sync
```
Verify `vite.config.ts` has `base: './'`

### "Native plugin not working"
```bash
npm run cap:sync
# Then rebuild app
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build web assets |
| `npm run build:mobile` | Build + sync Android |
| `npm run build:apk:debug` | Build debug APK |
| `npm run build:apk:release` | Build release APK |
| `npm run cap:sync` | Sync to all platforms |
| `npm run cap:run:android` | Run on Android |
| `npm run cap:open:android` | Open Android Studio |
| `npm run cap:doctor` | Verify environment |

## Deployment Checklist

- [ ] Update app version in `package.json`
- [ ] Configure release signing keystore
- [ ] Set production environment variables
- [ ] Test on physical devices
- [ ] Verify native features work
- [ ] Test push notifications
- [ ] Enable ProGuard/R8
