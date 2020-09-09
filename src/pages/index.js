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
        In order to provide an overview of the best solutions for Natural Language Processing, we're comparing a large number of already established methods.
      </>
    ),
  },
  {
    title: <>Experiments</>,
    imageUrl: 'img/Rikki_Experiments_dynamisch.png',
    description: (
      <>
        In order to create an opportunity to follow our procedures step by step, we experiment on methods by using easy to understand notebooks.
      </>
    ),
  },
  {
    title: <>Guides</>,
    imageUrl: 'img/Rikki_Guides_dynamisch.png',
    description: (
      <>
        Everyone should be able to try our experiments and methods themselves, which is why we contribute Guides to reconstructed our experiments.
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
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <ProjectTitle />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
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
