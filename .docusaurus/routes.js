
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/',
  component: ComponentCreator('/'),
  exact: true,
  
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug'),
  exact: true,
  
},
{
  path: '/blog',
  component: ComponentCreator('/blog'),
  exact: true,
  
},
{
  path: '/blog/2016/03/11/blog-post',
  component: ComponentCreator('/blog/2016/03/11/blog-post'),
  exact: true,
  
},
{
  path: '/blog/2017/04/10/blog-post-two',
  component: ComponentCreator('/blog/2017/04/10/blog-post-two'),
  exact: true,
  
},
{
  path: '/blog/2017/09/25/testing-rss',
  component: ComponentCreator('/blog/2017/09/25/testing-rss'),
  exact: true,
  
},
{
  path: '/blog/2017/09/26/adding-rss',
  component: ComponentCreator('/blog/2017/09/26/adding-rss'),
  exact: true,
  
},
{
  path: '/blog/2017/10/24/new-version-1.0.0',
  component: ComponentCreator('/blog/2017/10/24/new-version-1.0.0'),
  exact: true,
  
},
{
  path: '/blog/2020/06/03/pragma-lingu-site-launched',
  component: ComponentCreator('/blog/2020/06/03/pragma-lingu-site-launched'),
  exact: true,
  
},
{
  path: '/docs',
  component: ComponentCreator('/docs'),
  
  routes: [
{
  path: '/docs/about/goals-mission',
  component: ComponentCreator('/docs/about/goals-mission'),
  exact: true,
  
},
{
  path: '/docs/about/roadmap',
  component: ComponentCreator('/docs/about/roadmap'),
  exact: true,
  
},
{
  path: '/docs/about/team',
  component: ComponentCreator('/docs/about/team'),
  exact: true,
  
},
{
  path: '/docs/benchmarks/data-comparisson',
  component: ComponentCreator('/docs/benchmarks/data-comparisson'),
  exact: true,
  
},
{
  path: '/docs/benchmarks/intro',
  component: ComponentCreator('/docs/benchmarks/intro'),
  exact: true,
  
},
{
  path: '/docs/benchmarks/overview',
  component: ComponentCreator('/docs/benchmarks/overview'),
  exact: true,
  
},
{
  path: '/docs/benchmarks/use-cases',
  component: ComponentCreator('/docs/benchmarks/use-cases'),
  exact: true,
  
},
{
  path: '/docs/doc2',
  component: ComponentCreator('/docs/doc2'),
  exact: true,
  
},
{
  path: '/docs/doc9',
  component: ComponentCreator('/docs/doc9'),
  exact: true,
  
},
{
  path: '/docs/experiments/experiment1',
  component: ComponentCreator('/docs/experiments/experiment1'),
  exact: true,
  
},
{
  path: '/docs/experiments/experiment2',
  component: ComponentCreator('/docs/experiments/experiment2'),
  exact: true,
  
},
{
  path: '/docs/experiments/experiment3',
  component: ComponentCreator('/docs/experiments/experiment3'),
  exact: true,
  
},
{
  path: '/docs/guides/basic-definitions',
  component: ComponentCreator('/docs/guides/basic-definitions'),
  exact: true,
  
},
{
  path: '/docs/guides/docker-setup',
  component: ComponentCreator('/docs/guides/docker-setup'),
  exact: true,
  
},
{
  path: '/docs/guides/elastic-setup',
  component: ComponentCreator('/docs/guides/elastic-setup'),
  exact: true,
  
},
{
  path: '/docs/guides/elasticsearch-lucene-intro',
  component: ComponentCreator('/docs/guides/elasticsearch-lucene-intro'),
  exact: true,
  
},
{
  path: '/docs/guides/futher-literature',
  component: ComponentCreator('/docs/guides/futher-literature'),
  exact: true,
  
},
{
  path: '/docs/guides/notebooks',
  component: ComponentCreator('/docs/guides/notebooks'),
  exact: true,
  
},
{
  path: '/docs/guides/wordembeddings-intro',
  component: ComponentCreator('/docs/guides/wordembeddings-intro'),
  exact: true,
  
},
{
  path: '/docs/impressum',
  component: ComponentCreator('/docs/impressum'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
