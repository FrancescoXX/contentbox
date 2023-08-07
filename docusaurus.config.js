// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ContentBox',
  tagline: 'The organized solution for Content Creators.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Francesco', // Usually your GitHub org/user name.
  projectName: 'ContentBox', // Usually your repo name.

  onBrokenLinks: 'warn', // 'throw
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/FrancescoXX/contentbox/edit/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/FrancescoXX/contentbox/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      algolia: {
        // The application ID provided by Algolia
        appId: 'WAON8VFPXU',
  
        // Public API key: it is safe to commit it
        apiKey: 'ac9987007578564efa7042f36ebb012e',
  
        indexName: 'contentbox',
  
        // Optional: see doc section below
        // contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: "doc",
            docId: "podcast/podcast",
            position: "left",
            label: "🎙️ Podcast",
          },
          {
            type: "doc",
            docId: "asaguest/asaguest",
            position: "left",
            label: "🏠 As a Guest",
          },
          {
            type: "doc",
            docId: "devrel/devrel",
            position: "left",
            label: "🥑DevRel",
          },
          {
            type: "doc",
            docId: "webdev/webdev",
            position: "left",
            label: "🌐Web dev",
          },
          {
            type: "doc",
            docId: "specialevents/specialevents",
            position: "left",
            label: "🏆Special events",
          },
          {
            type: "doc",
            docId: "conferences/conferences",
            position: "left",
            label: "🌏Conferences",
          },
          {
            type: "doc",
            docId: "blockchain/blockchain",
            position: "left",
            label: "⛓️Blockchain",
          },
          {
            type: "doc",
            docId: "devops/devops",
            position: "left",
            label: "🐳DevOps",
          },
          {
            href: 'https://github.com/FrancescoXX/contentbox',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Community',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@francescociulla',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/4ccommunity',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/FrancescoCiull4',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/FrancescoXX/contentbox',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
