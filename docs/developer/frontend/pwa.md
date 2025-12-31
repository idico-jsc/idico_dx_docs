---
id: pwa
title: PWA Setup
sidebar_label: PWA
sidebar_position: 3
description: Progressive Web App features and configuration
keywords: [pwa, progressive web app, service worker, offline]
---

# PWA Setup Guide

This project is configured as a Progressive Web App (PWA) using `vite-plugin-pwa`.

## Features

- **Offline Support** - App works without internet connection
- **Auto Update** - Service worker updates automatically
- **Install Prompt** - Users can install app to home screen
- **Caching Strategy** - Smart caching for fonts and assets
- **Fast Loading** - Precached assets for instant load

## PWA Icons

### Automatic Icon Generation

```bash
# Generate all PWA icons from logo
npm run pwa:icons
```

This copies the IDICO logo to:
- `public/favicon.svg` - Browser favicon
- `public/pwa-192x192.svg` - PWA icon (192x192)
- `public/pwa-512x512.svg` - PWA icon (512x512)

### Manual Icon Creation

Using online tools:
1. Go to https://www.pwabuilder.com/imageGenerator
2. Upload your logo/icon
3. Download and place in `public/` folder

## Configuration

PWA is configured in `vite.config.ts`:

```typescript
VitePWA({
  registerType: 'autoUpdate',
  manifest: {
    name: 'IDICO CRM',
    short_name: 'IDICO',
    theme_color: '#000000',
    background_color: '#ffffff',
    display: 'standalone',
    start_url: '/',
    icons: [
      {
        src: 'pwa-192x192.svg',
        sizes: '192x192',
        type: 'image/svg+xml'
      },
      {
        src: 'pwa-512x512.svg',
        sizes: '512x512',
        type: 'image/svg+xml'
      }
    ]
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.googleapis\.com/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-stylesheets'
        }
      }
    ]
  }
})
```

## Service Worker

The service worker is automatically generated and includes:

### Cached Assets
- JavaScript files
- CSS files
- HTML files
- Images (PNG, SVG)
- Fonts (WOFF2)

### Runtime Caching
- **Google Fonts** - CacheFirst strategy (1 year)
- **Font Files** - CacheFirst strategy (1 year)

## Testing PWA

### Development
```bash
npm run dev
```
PWA works in development with `devOptions.enabled: true`.

### Production
```bash
npm run build
npm run preview
```

### Chrome DevTools
1. Open DevTools (F12)
2. Go to "Application" tab
3. Check "Service Workers" and "Manifest"

### Lighthouse Audit
1. Open DevTools
2. Go to "Lighthouse" tab
3. Run PWA audit

## Install Prompt

### Desktop
- Chrome: Address bar shows install icon
- Edge: Address bar shows install icon

### Mobile
- Chrome: "Add to Home Screen" prompt
- Safari: Share menu → "Add to Home Screen"

## Updating the App

When you deploy a new version:
1. Service worker detects update
2. Downloads new assets in background
3. Shows update prompt to user (if configured)
4. Reloads with new version

## Offline Mode

The app works offline after first visit:
- Precached assets load instantly
- Runtime caching for API calls (if configured)
- Graceful fallback for unavailable resources

## Customization

### Change App Name
Edit `manifest.name` and `manifest.short_name` in `vite.config.ts`

### Change Colors
Edit `manifest.theme_color` and `manifest.background_color`

### Skip Waiting
```typescript
VitePWA({
  workbox: {
    skipWaiting: true,
    clientsClaim: true,
  }
})
```

## Troubleshooting

### Service Worker not updating?
Clear browser cache or use DevTools → Application → Service Workers → Unregister

### Icons not showing?
- Check file paths in `public/` folder
- Verify icon dimensions
- Clear browser cache

### Install prompt not showing?
- Ensure HTTPS (required for PWA)
- Check manifest in DevTools
- Some browsers require user engagement
