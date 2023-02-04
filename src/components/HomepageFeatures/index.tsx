import React from 'react';
import Translate from '@docusaurus/Translate';

import './styles.scss';

type FeatureItem = {
  title: string;
  icon: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'ChatGPT',
    icon: require('@site/static/img/chatgpt.png').default,
    description: (
      <Translate id="feat.chatgpt.desc">
        ChatGPT is a cross-platform desktop application (for Mac, Windows, and Linux) that is simply a website wrapper that extends the functionality of the original website.
      </Translate>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className="col col--4">
      <div className="feat-icon">
        <img src={icon} alt={title} />
      </div>
      <div className="padding-horiz--md">
        <h3 className="text--center">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="features">
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
