import React, { useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Mailto from 'react-mailto.js';

const features = [
  {
    title: <>Comparisons</>,
    imageUrl: 'img/Rikki_Comparison_dynamisch.png',
    description: (
      <>
        How can you improve search relevance? Does a dictionary stemmer perform better than an algorithmic one? What about embeddings and deep learning models?
        We try to answer these questions by measuring and comparing approaches with several evaluation data sets.
      </>
    ),
  },
  {
    title: <>Experiments</>,
    imageUrl: 'img/Rikki_Experiments_dynamisch.png',
    description: (
      <>
        You want to run your own evaluation from start to finish? How do you prepare the data sets, configure your search engine and run the evaluation?
        You can follow our example experiments step by step and run the code with our provided <a href="https://colab.research.google.com/notebooks/intro.ipynb#">Google Colab notebooks</a>.
      </>
    ),
  },
  {
    title: <>Guides</>,
    imageUrl: 'img/Rikki_Guides_dynamisch.png',
    description: (
      <>
        You want to dive deeper into the used datasets, algorithms and search engines? 
        Here you can find in-depth guides about the techniques and tools we use, as well as interesting topics and new developments.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function ProjectTitle() {
  return (
    <div className={styles.coverContainer}>
      <img src="img/Logo_orangenerHG.png" className={styles.cover} />
    </div>
  );
}


function Home() {
  useEffect(() => {
    const scr = document.createElement('script');
    scr.innerHTML = `new Crate({
      server: '731151531818352770', // dima-no-dimo's server
      channel: '731151532782780499' // #general
    })`;  // => paste here your discord server data
    scr.setAttribute('src', 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3');
    scr.setAttribute('async', true);
    scr.setAttribute('defer', true)
    document.body.appendChild(scr)
  }, [])

  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Open-source project for learning about search and NLP. Tools, guides and resources to explore, measure and validate novel solutions for problems in search and NLP applications.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <ProjectTitle />
          <div className={styles.buttons}>
            <Mailto
              className={clsx(
                'button button--primary button--lg',
                styles.getStarted,
              )}
              to="info@pragmalingu.de"
              subject="Feedback PragmaLingu"
            >
            CONTACT US
            </Mailto>
        </div>
        <div className={styles.buttons}>
          <Link
            className={clsx(
              'button button--primary button--lg',
              styles.getStarted,
            )}
            to={useBaseUrl('docs/getStarted')}>
            GET STARTED
            </Link>
        </div>
        </div>
      </header>
    <main>
      {features && features.length > 0 && (
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
    </Layout >
  );
}

export default Home;
