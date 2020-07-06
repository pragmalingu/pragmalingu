export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "PragmaLingu",
      "logo": {
        "alt": "",
        "src": "static/img/testicon.ico"
      },
      "links": [
        {
          "to": "docs/benchmarks/intro",
          "label": "Benchmarks",
          "position": "left"
        },
        {
          "to": "docs/about/team",
          "label": "About",
          "position": "left"
        },
        {
          "href": "https://github.com/",
          "label": "GitHub",
          "position": "right"
        },
        {
          "to": "docs/guides/basic-definitions",
          "label": "Guides",
          "position": "left"
        },
        {
          "to": "docs/experiments/experiment1",
          "label": "Experiments",
          "position": "left"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Getting Started",
              "to": "docs/experiments/experiment1"
            },
            {
              "label": "Guides",
              "to": "docs/guides/basic-definitions"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/pragmalingu"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/pragmalingu"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Impressum",
              "to": "docs/impressum"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/pragmalingu"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 PragmaLingu"
    }
  },
  "title": "PragmaLingu",
  "tagline": "Explore pragmatic search possibilities",
  "url": "https://pragmalingu.github.io",
  "baseUrl": "/",
  "favicon": "static/img/testicon.ico",
  "organizationName": "pragmalingu",
  "projectName": "pragmalingu",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "docs/about",
          "sidebarPath": "/Users/miriam/pragmalingu.github.io/sidebars.js",
          "editUrl": "https://github.com/pragmalingu/pragmalingu/"
        },
        "theme": {
          "customCss": "/Users/miriam/pragmalingu.github.io/src/css/custom.css"
        }
      }
    ]
  ]
};