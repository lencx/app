import React from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

import './styles.scss';

type FeatureItem = {
  title: string;
  icon: string;
  link: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'ChatGPT',
    link: '/chatgpt',
    icon: require('@site/static/img/chatgpt.png').default,
    description: (
      <Translate id="feat.chatgpt.desc">
        ChatGPT is a cross-platform desktop application (for Mac, Windows, and Linux) that is simply a website wrapper that extends the functionality of the original website.
      </Translate>
    ),
  },
];

function Feature({ title, icon, description, link }: FeatureItem) {
  // const
  return (
    <Link className="feat-item col col--4" to={link}>
      <div className="feat-icon">
        <img src={icon} alt={title} />
      </div>
      <div className="padding-horiz--md">
        <h3 className="text--center">{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
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
