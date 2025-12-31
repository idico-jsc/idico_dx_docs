---
id: cypress-guide
title: Cypress Testing Guide
sidebar_label: Cypress Testing
sidebar_position: 1
description: E2E and component testing with Cypress
keywords: [testing, cypress, e2e, component testing]
---

# Cypress Testing Guide

Comprehensive guide for running and writing Cypress tests.

## Overview

This project uses Cypress for both **component testing** and **end-to-end (E2E) testing**.

### Test Coverage

**Component Tests** (`cypress/component/`):
- LoginForm component rendering
- Form validation
- User interactions
- Loading states
- Accessibility

**E2E Tests** (`cypress/e2e/`):
- Complete login flow
- Protected route access
- Token persistence
- Auto-logout on 401/403
- Error handling

## Setup

```bash
npm install
```

Configure in `cypress.config.ts`:
```typescript
export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_DOMAIN_TESTING || 'http://localhost:3000',
  },
});
```

## Running Tests

### Interactive Mode (Development)

```bash
# Open Cypress Test Runner
npm run cypress:open

# Component tests
npm run cypress:component
```

### Headless Mode (CI/CD)

```bash
# All E2E tests
npm run cypress:run

# All component tests
npm run cypress:component:run

# Specific file
npx cypress run --spec "cypress/e2e/auth.cy.ts"

# Specific browser
npx cypress run --browser chrome
```

## Custom Commands

### Authentication Commands

```typescript
// Login via UI
cy.login('test@example.com', 'password123');

// Login via API (faster)
cy.loginViaApi('test@example.com', 'password123');

// Logout
cy.logout();

// Clear auth
cy.clearAuth();

// Check auth status
cy.isAuthenticated().should('be.true');
```

### Form Commands

```typescript
// Fill login form
cy.fillLoginForm('test@example.com', 'password123');

// Submit form
cy.submitForm();

// Check validation error
cy.shouldHaveValidationError('Email is required');

// Check API error
cy.shouldHaveApiError('Invalid credentials');
```

### Mock Commands

```typescript
// Mock successful login
cy.mockLoginSuccess();

// Mock failed login
cy.mockLoginFailure('Invalid credentials');
```

## Writing Tests

### E2E Test Example

```typescript
describe('Authentication', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('should login successfully', () => {
    cy.visit('/login');
    cy.intercept('POST', '**/api/method/login').as('loginRequest');

    cy.fillLoginForm('Administrator', 'admin');
    cy.submitForm();

    cy.wait('@loginRequest');
    cy.url().should('not.include', '/login');
    cy.getCookie('token').should('exist');
  });
});
```

### Component Test Example

```typescript
import { LoginForm } from '@/features/auth/components/login-form';

it('should validate email format', () => {
  cy.mount(<LoginForm />);

  cy.get('input[name="email"]').type('invalid-email');
  cy.get('input[name="password"]').type('password123');
  cy.get('button[type="submit"]').click();

  cy.shouldHaveValidationError('Invalid email');
});
```

### Testing Loading States

```typescript
it('should show loading during login', () => {
  cy.visit('/login');

  cy.intercept('POST', '**/api/method/login', (req) => {
    req.reply((res) => {
      res.delay = 1000;
      res.send();
    });
  }).as('loginRequest');

  cy.fillLoginForm('test@example.com', 'password');
  cy.submitForm();

  cy.get('button[type="submit"]')
    .should('be.disabled')
    .and('contain', 'Signing in...');

  cy.wait('@loginRequest');
});
```

## Best Practices

### 1. Clear State Between Tests

```typescript
beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});
```

### 2. Use Custom Commands

```typescript
// ❌ Repetitive
cy.get('input[name="email"]').type('test@example.com');
cy.get('input[name="password"]').type('password');
cy.get('button[type="submit"]').click();

// ✅ Use custom command
cy.login('test@example.com', 'password');
```

### 3. Intercept API Calls

```typescript
cy.intercept('POST', '**/api/method/login').as('loginRequest');
cy.wait('@loginRequest');
```

### 4. Test Independence

```typescript
// ❌ Tests depend on each other
it('logs in', () => { /* login */ });
it('shows profile', () => { /* assumes logged in */ });

// ✅ Each test is independent
it('shows profile after login', () => {
  cy.loginViaApi('test@example.com', 'password');
  // test profile
});
```

## Debugging

### Visual Debugging

```typescript
cy.screenshot('login-error');
cy.pause();
cy.get('input').debug();
```

### Failed Test Screenshots

Automatically saved in `cypress/screenshots/`

### Video Recording

Saved in `cypress/videos/`

## CI/CD Integration

```yaml
name: Cypress Tests

on: [push, pull_request]

jobs:
  cypress:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'

      - run: npm ci
      - name: Run Cypress
        uses: cypress-io/github-action@v5
        with:
          build: npm run build
          start: npm run preview
          wait-on: 'http://localhost:3000'

      - uses: actions/upload-artifact@v3
        if: failure()
        with:
          name: cypress-screenshots
          path: cypress/screenshots
```

## Troubleshooting

### Port Already in Use
```bash
lsof -ti:5173 | xargs kill -9
```

### Tests Timing Out
```typescript
// cypress.config.ts
export default defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
  },
});
```

### Module Not Found
```bash
npx cypress cache clear
npm install
```
