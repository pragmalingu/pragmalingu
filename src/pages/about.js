import React from 'react';

import styles from './styles.module.css';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Mailto from 'react-mailto.js';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function About() {
    const context = useDocusaurusContext();

    return (
        <Layout title="About">
            <header className="hero">
                <div className="container text--center">
                    <h1>About</h1>
                    <p>
                        Hi there, we are PragmaLingu - an open-source project and community of people interested in search
                        and Natural Language Processing (NLP). We build tools, guides and resources for everyone who wants to explore,
                        measure and validate novel solutions for problems in search and NLP applications.
                        Our focus lies with solutions that try to model knowledge and contexts, to understand the meaning of words,
                        therefore touching the area of Pragmatics in Linguistics. We are focusing on actual applications such as
                        search and try to convey all knowledge and techniques from a problem-solving viewpoint because we believe
                        that this pragmatic perspective is intuitive and makes learning fun.
          </p>
                </div>
            </header>
            <main>
                <div className="container text--left">
                    <h2>Mission</h2>
                    <p>
                        The mission of PragmaLingu is:
                      <div class="entry-content">
                            <ul>
                                <li> To create simple, intuitive and open resources; to understand, validate and reproduce novel solutions to search and NLP use-cases.</li>
                                <li> To advance these solutions, by exploring the usefulness of pragmatic concepts for these use-cases.</li>
                                <li> To build a beginner-friendly and open community for everyone interested in these topics.</li>
                            </ul>
                        </div>
                      The underlying motivation for the project is not monetization, but to foster learning, build expertise and advance research in the field.

                  </p>
                </div>
                <div className="container text--left">
                    <h2>Contribute</h2>
                    <p>
                        What can you do to help?
                      <div class="entry-content">
                            <ul>
                                <li> Ask questions on our public Discord server if you don’t understand something or if some of our articles and explanations are not clear.</li>
                                <li>Create pull requests for improvements or fixes on [GitHub](https://github.com/pragmalingu/experiments).</li>
                                <li> Send us your feedback or suggest interesting datasets or projects.</li>
                                <li> Become a sponsor if you value our work and have expendable funds.</li>
                            </ul>
                        </div>
                    </p>
                </div>
                <div className="container text--center">
                <h1>Team</h1>
                </div>
                <div className="row">
                    <div className="col col--3 margin-bottom--lg">
                        <div className="card card--full-height">
                            <div className="card__header">
                                <div className="avatar avatar--vertical">
                                    <img
                                        className="avatar__photo avatar__photo--xl"
                                        src="/img/samy.jpg"
                                    />
                                    <div className="avatar__intro">
                                        <h3 className="avatar__name">Samy Ateia</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="card__body">
                                Samy is a software engineer focusing on search and NLP web applications. He worked in big and small enterprise projects and co founded a startup for news aggregation. He started pragmalingu in 2020 to explore modern NLP approaches for search applications and create a guide for interested developers.
      </div>
                            <div className="card__footer">
                                <div className="button-group button-group--block">
                                        <a className="button button--secondary" href="https://github.com/orgs/pragmalingu/people/SamyAteia">GitHub</a>
                                        <Mailto
                                            className="button button--secondary"
                                            to="samy@samyateia.de"
                                            subject="Feedback PragmaLingu">
                                            E-Mail </Mailto>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col--3 margin-bottom--lg">
                        <div className="card card--full-height">
                            <div className="card__header">
                                <div className="avatar avatar--vertical">
                                    <img
                                        className="avatar__photo avatar__photo--xl"
                                        src="/img/miriam.jpg"
                                    />
                                    <div className="avatar__intro">
                                        <h3 className="avatar__name">Miriam Rupprecht</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="card__body">
                                Miriam is a Computer Linguistic student at the Ludwig-Maximilian-University in Munich. Before starting her studies in Munich she got her Bachelor’s degree in Theater, Film and Media Science in Vienna. Her role in PragmaLingu is to research and write topics around NLP.
      </div>
                            <div className="card__footer">
                                <div className="button-group button-group--block">
                                    <a className="button button--secondary" href="https://github.com/MiriamPragmalingu">GitHub</a>
                                    <Mailto
                                        className="button button--secondary"
                                        to="miriam@pragmalingu.de"
                                        subject="Feedback PragmaLingu">
                                        E-Mail </Mailto>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col--3 margin-bottom--lg">
                        <div className="card card--full-height">
                            <div className="card__header">
                                <div className="avatar avatar--vertical">
                                    <img
                                        className="avatar__photo avatar__photo--xl"
                                        src="/img/dario.jpg"
                                    />
                                    <div className="avatar__intro">
                                        <h3 className="avatar__name">Dario Alves</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="card__body">
                                Dário is a MSc Computer and Telematics engineering student at University of Aveiro, Portugal. A Linux and Open Source enthusiast, whose main areas of interest are AI, data mining, computer languages, compilers and low level software development. Through Pragmalingu, he hopes to collaborate in building resources to assess state of the art NLP approaches directed towards information retrieval.
                            </div>
                            <div className="card__footer">
                                <div className="button-group button-group--block">
                                    <a className="button button--secondary" href="https://github.com/dario-alv">GitHub</a>
                                    <Mailto
                                        className="button button--secondary"
                                        to="info@pragmalingu.de"
                                        subject="Feedback PragmaLingu">
                                        E-Mail </Mailto>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col--3 margin-bottom--lg">
                        <div className="card card--full-height">
                            <div className="card__header">
                                <div className="avatar avatar--vertical">
                                    <img
                                        className="avatar__photo avatar__photo--xl"
                                        src="/img/pavel.jpg"
                                    />
                                    <div className="avatar__intro">
                                        <h3 className="avatar__name">Pavel Prokopev</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="card__body">
                                Pavel is an independent NLP Researcher from Saint-Petersburg, Russia. He works on solving business problems using scientific approach. In PragmaLingu his main role is consulting on using innovative solutions in solving natural language processing tasks.
      </div>
                            <div className="card__footer">
                                <div className="button-group button-group--block">
                                    <a className="button button--secondary" href="https://github.com/orgs/pragmalingu/people/polaser">GitHub</a>
                                    <Mailto
                                        className="button button--secondary"
                                        to="info@pragmalingu.de"
                                        subject="Feedback PragmaLingu">
                                        E-Mail </Mailto>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col col--3 margin-bottom--lg">
                    <div className="card card--full-height">
                        <div className="card__header">
                            <div className="avatar avatar--vertical">
                                <img
                                    className="avatar__photo avatar__photo--xl"
                                    src="/img/Rikki_About_smaller.jpg"
                                />
                                <div className="avatar__intro">
                                    <h3 className="avatar__name">Rikki</h3>
                                </div>
                            </div>
                        </div>
                        <div className="card__body text--center">
                            Rikki is our hard-working mascot.
      </div>
                        <div className="card__footer">
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default About;