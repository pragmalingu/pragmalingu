/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const allDocHomesPaths = [
  '/docs/about/',
  '/docs/benchmarks/',
  '/docs/experiments/',
  '/docs/guides/',
];

module.exports = {
  title: '',
  //'PragmaLingu',
  tagline: '',
  //'Explore pragmatic search possibilities',
  url: 'https://pragmalingu.github.io',
  baseUrl: '/',
  favicon: '',
  organizationName: 'pragmalingu', // Usually your GitHub org/user name.
  projectName: 'pragmalingu', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      title: '',
      logo: {
        alt: '',
        src: 'img/Logo_orangenerHG.png',
      },
    links: [
        {
          to: 'docs/benchmarks/intro', 
          label: 'Benchmarks', 
          position: 'left'
        },
        {
          to: 'docs/about/team', 
          label: 'About', 
          position: 'left'
        },
        {
          href: 'https://github.com/',
          label: 'GitHub',
          position: 'right',
        },
        {
          to: 'docs/guides/basic-definitions', 
          label: 'Guides', 
          position: 'left'
        },
        {
          to: 'docs/experiments/experiment1', 
          label: 'Experiments', 
          position: 'left'
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
              label: 'Getting Started',
              to: 'docs/experiments/experiment1',
            },
            {
              label: 'Guides',
              to: 'docs/guides/basic-definitions',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/pragmalingu',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/pragmalingu',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Impressum',
              to: 'docs/impressum',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/pragmalingu',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PragmaLingu`, // You can also put own HTML here.
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'docs/about',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/pragmalingu/pragmalingu/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
