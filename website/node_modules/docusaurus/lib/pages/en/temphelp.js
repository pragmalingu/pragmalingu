/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Learn more using the [guides on this site.](${docUrl(
        'doc1.html',
      )})`,
      title: 'Browse Guides',
    },
    {
      content: `Ask questions about the documentation and project.`,
      title: 'Join the community',
    },
    {
      content: "Find out what's new with this project",
      title: 'Stay up to date',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>About Our Team</h1>
          </header>
          <div className="row">
  <div className="col col--6 margin-bottom--lg">
    <div className="card card--full-height">
      <div className="card__header">
        <div className="avatar avatar--vertical">
          <img
            className="avatar__photo avatar__photo--xl"
            src=""
          />
          <div className="avatar__intro">
            <h3 className="avatar__name">Samy Ateia</h3>
          </div>
        </div>
      </div>
      <div className="card__body">
      Samy is a software engineer focusing on search and NLP web applications. 
      He worked in big and small enterprise projects and co founded a startup for news aggregation. 
      He started pragmalingu in 2020 to explore modern NLP approaches for search applications and create a guide for interested developers.
      </div>
      <div className="card__footer">
        <div className="button-group button-group--block">
          <a className="button button--secondary" href="https://github.com/orgs/pragmalingu/people/SamyAteia">GitHub</a>
        </div>
      </div>
    </div>
  </div>
  <div className="col col--6 margin-bottom--lg">
    <div className="card card--full-height">
      <div className="card__header">
        <div className="avatar avatar--vertical">
          <img
            className="avatar__photo avatar__photo--xl"
            src="../../static/img/samy.jpg"
          />
          <div className="avatar__intro">
            <h3 className="avatar__name">Miriam Rupprecht</h3>
          </div>
        </div>
      </div>
      <div className="card__body">
      Miriam is a Computerlinguistic student at the Ludwig-Maximialian-University in Munich. 
      Before starting her studies in Munich she got her Bachelor’s degree in Theater, Film and Media Science in Vienna. 
      Her role in PragmaLingu is to research and write topics around NLP.
      </div>
      <div className="card__footer">
        <div className="button-group button-group--block">
          <a className="button button--secondary" href="https://github.com/MiriamPragmalingu">GitHub</a>
        </div>
      </div>
    </div>
  </div>
  <div className="col col--6 margin-bottom--lg">
    <div className="card card--full-height">
      <div className="card__header">
        <div className="avatar avatar--vertical">
          <img
            className="avatar__photo avatar__photo--xl"
            src="../../static/img/miriam.jpg"
          />
          <div className="avatar__intro">
            <h3 className="avatar__name">Dario Alves</h3>
          </div>
        </div>
      </div>
      <div className="card__body">
      </div>
      <div className="card__footer">
        <div className="button-group button-group--block">
          <a className="button button--secondary" href="https://github.com/dario-alv">GitHub</a>
        </div>
      </div>
    </div>
  </div>
</div>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
