import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'System Support',
    description: (
      <>
        <div>Multi-platform: <code>macOS</code> / <code>Windows</code> / <code>Linux</code></div>
        <div>System tray hover window</div>
        <div>Common shortcut keys & Customize global shortcuts</div>
        <div>Powerful menu items</div>
        <div>Automatic application upgrade notification</div>
      </>
    ),
  },
  {
    title: 'ChatGPT Extension',
    description: (
      <>
        <div>Support for slash commands and their configuration</div>
        <div>Export ChatGPT history (<code>PNG</code>, <code>PDF</code> and <code>Markdown</code>)</div>
        <div>Pop-up Search</div>
      </>
    ),
  },
  {
    title: 'Web Application',
    description: (
      <>
        <div>Making a web page more like a desktop application is just the beginning, the possibilities are unlimited, up to your imagination!</div>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
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
