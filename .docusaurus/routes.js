import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/C_DOCS/__docusaurus/debug',
    component: ComponentCreator('/C_DOCS/__docusaurus/debug', 'eef'),
    exact: true
  },
  {
    path: '/C_DOCS/__docusaurus/debug/config',
    component: ComponentCreator('/C_DOCS/__docusaurus/debug/config', 'c8a'),
    exact: true
  },
  {
    path: '/C_DOCS/__docusaurus/debug/content',
    component: ComponentCreator('/C_DOCS/__docusaurus/debug/content', 'c2f'),
    exact: true
  },
  {
    path: '/C_DOCS/__docusaurus/debug/globalData',
    component: ComponentCreator('/C_DOCS/__docusaurus/debug/globalData', 'd24'),
    exact: true
  },
  {
    path: '/C_DOCS/__docusaurus/debug/metadata',
    component: ComponentCreator('/C_DOCS/__docusaurus/debug/metadata', 'c06'),
    exact: true
  },
  {
    path: '/C_DOCS/__docusaurus/debug/registry',
    component: ComponentCreator('/C_DOCS/__docusaurus/debug/registry', '5a3'),
    exact: true
  },
  {
    path: '/C_DOCS/__docusaurus/debug/routes',
    component: ComponentCreator('/C_DOCS/__docusaurus/debug/routes', '08a'),
    exact: true
  },
  {
    path: '/C_DOCS/markdown-page',
    component: ComponentCreator('/C_DOCS/markdown-page', '429'),
    exact: true
  },
  {
    path: '/C_DOCS/docs',
    component: ComponentCreator('/C_DOCS/docs', '1dd'),
    routes: [
      {
        path: '/C_DOCS/docs',
        component: ComponentCreator('/C_DOCS/docs', 'd21'),
        routes: [
          {
            path: '/C_DOCS/docs',
            component: ComponentCreator('/C_DOCS/docs', '90b'),
            routes: [
              {
                path: '/C_DOCS/docs/C23/assert.h/__STDC_VERSION_ASSERT_H__',
                component: ComponentCreator('/C_DOCS/docs/C23/assert.h/__STDC_VERSION_ASSERT_H__', '3fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/C_DOCS/docs/introduce',
                component: ComponentCreator('/C_DOCS/docs/introduce', '69c'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/C_DOCS/',
    component: ComponentCreator('/C_DOCS/', '8a5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
