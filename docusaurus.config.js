// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Co2 for the Hills',
  tagline: 'Bring your vision to another level',
  favicon: 'img/mountain.ico',
  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/co2/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'j-sobi', // Usually your GitHub org/user name.
  projectName: 'co2', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  
  deploymentBranch: 'gh-pages',
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
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Co2',
        logo: {
          alt: 'My Site Logo',
          src: 'img/mountain.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/program', label: 'Program', position: 'left'},
          {            
            href: 'https://www.instagram.com/kan_tsui/',
            html: '<img src="https://j-sobi.github.io/co2/img/instagram-24.png" alt="instagram"/>',
            position: 'right',
          },
          {            
            href: 'https://www.youtube.com/@kansing',
            html: '<img src="https://j-sobi.github.io/co2/img/youtube-24.png" alt="youtube"/>',
            position: 'right',
          },
          {
            href: 'https://github.com/j-sobi',
            html: '<img src="https://j-sobi.github.io/co2/img/github-24.png" alt="github"/>',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@kansing',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/kan_tsui/',
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
                label: 'Program',
                to: '/program',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/j-sobi',
              },
              {
                label: 'Icon from Flaticon',
                href: 'https://www.flaticon.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Blog, Built by 6$.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
