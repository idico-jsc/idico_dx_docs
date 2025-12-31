import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'IDICO IPMS Documentation',
  tagline: 'Industrial Park Management System Documentation',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://idico-jsc.github.io',
  baseUrl: '/idico_dx_docs/',

  organizationName: 'idico-jsc',
  projectName: 'idico_dx_docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
      vi: {
        label: 'Tiếng Việt',
        htmlLang: 'vi-VN',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/idico-jsc/idico_dx_docs/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'IDICO Updates',
          blogDescription: 'Updates and announcements for IDICO IPMS',
          editUrl: 'https://github.com/idico-jsc/idico_dx_docs/edit/main/',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en', 'vi'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/docs',
        indexBlog: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'IDICO IPMS',
      logo: {
        alt: 'IDICO Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'developerSidebar',
          position: 'left',
          label: 'Developer Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'userSidebar',
          position: 'left',
          label: 'User Guides',
        },
        { to: '/blog', label: 'Updates', position: 'left' },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/idico-jsc/idico_ipms_web',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Developer Docs',
              to: '/docs/developer/getting-started/installation',
            },
            {
              label: 'User Guides',
              to: '/docs/user/getting-started/introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/idico-jsc',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Updates',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IDICO JSC. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'typescript', 'json', 'tsx', 'python'],
    },
    announcementBar: {
      id: 'welcome',
      content: 'Welcome to the IDICO IPMS documentation!',
      backgroundColor: '#1a73e8',
      textColor: '#ffffff',
      isCloseable: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
