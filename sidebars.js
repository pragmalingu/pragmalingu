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
     {
     	type: 'category',
     	label: 'Introduction',
     	items: ['benchmarks/intro'],//, 'benchmarks/use-cases'],
     },
     {
     	type: 'category',
     	label: 'Data Set Comparisson',
     	items: ['benchmarks/overview','benchmarks/data-comparisson'],
     },
  ],
  guides: [
     {
     	type: 'category',
     	label: 'Basics',
     	items: ['guides/basic-definitions', 'guides/how-to-parse', 'guides/elasticsearch-lucene-intro', 'guides/wordembeddings-intro', 'guides/futher-literature'],
     },
     {
     	type: 'category',
     	label: 'Setup',
     	items: ['guides/elastic-setup', 'guides/docker-setup'],
     },
     {
     	type: 'category',
     	label: 'Evaluation',
     	items: ['guides/notebooks'],
     },
  ],
  experiments: [
     'experiments/experiment1',
     'experiments/experiment2',
     'experiments/experiment3',
  ],
};