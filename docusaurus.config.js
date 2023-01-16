// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aaron Zheng',
  tagline: 'Current college-student and fullstack developer',
  url: 'https://aaronzheng.co/',
  baseUrl: "/",
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: './img/pfp.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zhenga1', // Usually your GitHub org/user name.
  projectName: 'aaron', // Usually your repo name.

  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({ docPath }) => {
            return `https://github.com/zhenga1/aaronzheng/tree/main/docs/${docPath}`;
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/zhenga1/aaronzheng/tree/main/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-0QFZJ5DY3B',
          anonymizeIP: true,
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Aaron Zheng',
        logo: {
          alt: 'My Site Logo',
          src: 'img/pfp.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'right',
            label: 'Aaron\'s Notes',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
          {
            href: 'https://github.com/zhenga1/aaronzheng',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Connect With Me',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/7056591/aarony-jamesys',
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
                href: 'https://github.com/zhenga1',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Aaron Zheng.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      scripts: [{
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8766080864055711",
        crossorigin: "anonymous",
        async: true
      }],
    }),
};

module.exports = config;
