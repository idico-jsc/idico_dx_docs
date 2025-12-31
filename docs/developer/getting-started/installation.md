---
id: installation
title: Installation
sidebar_label: Installation
sidebar_position: 1
description: How to set up and install the IDICO IPMS project
---

# Installation

Get the IDICO IPMS project up and running on your local machine.

## Prerequisites

- **Node.js 20+** - Required for development
- **npm** or **yarn** - Package manager
- **Git** - Version control

For mobile development:
- **Java 21** - Required for Capacitor 7
- **Android Studio 2024.2.1+** - For Android development
- **Xcode 16.0+** - For iOS development (macOS only)

## Quick Start

```bash
# Clone the repository
git clone https://github.com/idico-jsc/idico_ipms_web.git
cd idico_ipms_web

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`.

## Environment Setup

Create `.env.development` file in the project root:

```env
# API Configuration
VITE_API_BASE_URL=https://your-api.com
VITE_FRAPPE_DOMAIN=https://your-frappe.com
VITE_FRAPPE_TOKEN_EXPIRY_DAYS=7

# Google OAuth (optional)
VITE_GOOGLE_CLIENT_ID=your-web-client-id.apps.googleusercontent.com
VITE_GOOGLE_SERVER_CLIENT_ID=your-server-client-id.apps.googleusercontent.com

# Firebase (optional)
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
```

## Verify Installation

```bash
# Check Node version
node --version  # Should be 20.x or higher

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test
```

## Next Steps

- [Project Setup](./project-setup) - Understand project configuration
- [Quick Start](./quick-start) - Build your first feature
- [Architecture Overview](/docs/developer/architecture/overview) - Understand the codebase structure
