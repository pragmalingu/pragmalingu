module.exports = {
  docs: [
     {
     	type: 'category',
     	label: 'About',
     	items: ['about/goals-mission', 'about/roadmap'],
     },
     {
     	type: 'category',
     	label: 'Team',
     	items: ['about/team'],
     },
  ],
  benchmark: [
     'benchmarks/intro',
     {
     	type: 'category',
     	label: 'Data Set Comparison',
     	items: ['benchmarks/overview','benchmarks/data-comparison'],
     },
  ],
  guides: [
     {
      type: 'category',
      label: 'Setup',
      items: ['guides/elastic-setup', 'guides/docker-setup'],
     },
     {
     	type: 'category',
     	label: 'Basics',
     	items: ['guides/basic-definitions', 'guides/how-to-parse', 'guides/elasticsearch-lucene-intro', 'guides/wordembeddings-intro', 'guides/futher-literature'],
     },
     {
     	type: 'category',
     	label: 'Evaluation',
     	items: ['guides/notebooks','guides/ranking-api'],
     },
  ],
  experiments: [
     'experiments/experiment1',
     'experiments/experiment2',
     'experiments/experiment3',
  ],
};