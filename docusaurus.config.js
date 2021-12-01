// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const baseUrl = '/mobx-value/'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'mobx-value',
  tagline: 'simpler data management',
  url: 'https://superwf.github.io',
  baseUrl,
  trailingSlash: false,
  noIndex: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: `${baseUrl}img/logo.svg`,
  organizationName: 'superwf', // Usually your GitHub org/user name.
  projectName: 'mobx-value doc', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/superwf/mobx-value-doc/edit/master/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'mobx-value doc',
        logo: {
          alt: 'mobx-value Logo',
          src: `${baseUrl}img/logo.svg`,
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Document',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Api',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/superwf/mobx-value',
            label: 'GitHub',
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
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/mobx-value',
              },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/superwf',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mobx-Value Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
