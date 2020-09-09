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
  '/docs/comparisons/',
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
    navbar: {
      title: '',
      logo: {
        alt: '',
        src: 'img/kleines_Icon_2.png',
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
      },
    links: [
        {
          to: 'docs/comparisons/comparisons-intro', 
          label: 'Comparisons', 
          position: 'left'
        },
        {
          to: 'docs/experiments/experiments-intro', 
          label: 'Experiments', 
          position: 'left'
        },
        {
          to: 'docs/guides/guides-intro', 
          label: 'Guides', 
          position: 'left'
        },
        {
          to: 'docs/about/team', 
          label: 'About', 
          position: 'left'
        },
        {
          href: 'https://github.com/pragmalingu',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            {
              label: 'Comparisons',
              to: 'docs/comparisons/data-comparison',
            },
            {
              label: 'Experiments',
              to: 'docs/experiments/experiment1',
            },
            {
              label: 'Guides',
              to: 'docs/guides/elastic-setup',
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
              href: 'https://discord.gg/MSJT5EW',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/pragmalingu',
            },
            {
              label: 'About',
              to: 'docs/about/team',
            },
            {
              label: 'Impressum',
              to: 'docs/impressum',
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
