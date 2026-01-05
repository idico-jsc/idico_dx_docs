import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // Developer documentation sidebar
  developerSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'developer/getting-started/installation',
        'developer/getting-started/project-setup',
        'developer/getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'developer/architecture/overview',
        'developer/architecture/folder-structure',
        'developer/architecture/design-principles',
      ],
    },
    {
      type: 'category',
      label: 'Frontend Development',
      items: [
        'developer/frontend/routing',
        'developer/frontend/i18n',
        'developer/frontend/pwa',
        'developer/frontend/components',
      ],
    },
    {
      type: 'category',
      label: 'Authentication',
      items: [
        'developer/authentication/auth-guide',
        'developer/authentication/google-auth',
        'developer/authentication/frappe-integration',
      ],
    },
    {
      type: 'category',
      label: 'Mobile Development',
      items: [
        'developer/mobile/mobile-guide',
        'developer/mobile/fcm-setup',
      ],
    },
    {
      type: 'category',
      label: 'Testing',
      items: [
        'developer/testing/cypress-guide',
      ],
    },
    {
      type: 'category',
      label: 'Deployment',
      items: [
        'developer/deployment/version-management',
        'developer/deployment/branch-protection',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        {
          type: 'category',
          label: 'Module CRM',
          items: [
            'developer/features/module-crm/crm-brd',
            'developer/features/module-crm/crm-implementation-plan',
          ],
        },
        {
          type: 'category',
          label: 'Module Customer Portal',
          items: [
            'developer/features/module-customer-portal/customer-portal-brd',
            'developer/features/module-customer-portal/customer-portal-implementation-plan',
          ],
        },
      ],
    },
  ],

  // User documentation sidebar
  userSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'user/getting-started/introduction',
        'user/getting-started/first-login',
        'user/getting-started/dashboard-overview',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'user/features/profile-management',
        'user/features/notifications',
        'user/features/settings',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'user/guides/how-to-guides',
        'user/guides/troubleshooting',
      ],
    },
    'user/faq',
  ],
};

export default sidebars;
