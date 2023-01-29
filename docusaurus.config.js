// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ChatGPT',
  tagline: 'ChatGPT Desktop Application (Mac, Windows and Linux)',
  favicon: '/img/favicon.ico',

  // Set the production url of your site here
  url: 'https://app.nofwl.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lencx', // Usually your GitHub org/user name.
  projectName: 'app', // Usually your repo name.

  onBrokenLinks: 'throw',
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
        gtag: {
          trackingID: 'G-HHP8559J84',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/lencx/app/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/lencx/app/tree/main',
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
      metadata: [
        { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no' },
        { name: 'keyword', content: 'chatgpt,macos,linux,windows,desktop,tauri' },
      ],
      navbar: {
        title: 'ChatGPT',
        logo: {
          alt: 'ChatGPT',
          src: '/img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/lencx/ChatGPT',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Discord',
        //         href: 'https://discord.gg/aPhCRf4zZr',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/lencx_',
        //       },
        //     ],
        //   },
        // ],
        copyright: `ChatGPT Desktop Application © ${new Date().getFullYear()} Created by lencx`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
