// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NoFWL',
  tagline: 'I love exploring and learning new things...',
  favicon: 'img/logo.png',

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
    locales: ['en', 'zh-CN'],
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
          editUrl: 'https://github.com/lencx/app/tree/main',
          routeBasePath: '/',
          path: 'docs/',
          exclude: ['docs/**', '**/_*.{md,mdx}'],
          editCurrentVersion: false,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/lencx/app/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/styles/custom.scss'),
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
        { name: 'keyword', content: 'nofwl,lencx,chatgpt,macos,linux,windows,desktop,tauri' },
      ],
      googleAdsense: {
        dataAdClient: 'ca-pub-5066880741262012',
      },
      navbar: {
        title: 'NoFWL',
        logo: {
          alt: 'lencx',
          src: 'img/logo.png',
          style: { borderRadius: '50%' },
        },
        items: [
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/chatgpt', label: 'ChatGPT', position: 'left' },
          { to: '/contributors', label: 'Contributors', position: 'right' },
          { type: 'localeDropdown', position: 'right' },
          { href: 'https://github.com/lencx/app', label: 'GitHub', 'aria-label': 'GitHub', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Application',
            items: [
              {
                label: 'lencx/ChatGPT',
                href: 'https://github.com/lencx/ChatGPT',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/aPhCRf4zZr',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/lencx_',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} lencx`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    path.resolve(__dirname, 'plugins', 'ads'),
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-pwa',
      {
        debug: process.env.NODE_ENV === 'development',
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'saveData',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/meta/lencx.png',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/meta/lencx.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/meta/lencx.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/meta/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#0F0F0F',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#0F0F0F',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#0F0F0F',
          },
        ],
      },
    ],
  ],
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('esbuild-loader'),
      options: {
        loader: 'tsx',
        format: isServer ? 'cjs' : undefined,
        target: isServer ? 'node12' : 'es2017',
      },
    }),
  },
};

module.exports = config;
