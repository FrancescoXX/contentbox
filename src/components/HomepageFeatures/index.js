import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '🎙️PodCast',
    icon: 'img/icons/onoff.svg',
    items: [
      // {url: "/docs/roadmap/introduction", text: "Roadmap"},
    ]
  },
  {
    title: '🤝Guest events',
    icon: 'img/icons/onoff.svg',
    items: [
      // {url: "/docs/roadmap/introduction", text: "Roadmap"},
    ]
  },
  {
    title: '🥑DevRel',
    icon: 'img/icons/onoff.svg',
    items: [
      // {url: "/docs/roadmap/introduction", text: "Roadmap"},
    ]
  },
  {
    title: '🌐Web Dev',
    icon: 'img/icons/onoff.svg',
    items: [
      // {url: "/docs/roadmap/introduction", text: "Roadmap"},
    ]
  },
  {
    title: '🏆Special Events',
    icon: 'img/icons/onoff.svg',
    items: [
      // {url: "/docs/roadmap/introduction", text: "Roadmap"},
    ]
  },
  {
    title: '🌏Conferences',
    icon: 'img/icons/onoff.svg',
    items: [
      // {url: "/docs/roadmap/introduction", text: "Roadmap"},
    ]
  },
  {
    title: '⛓️Blockchain',
    icon: 'img/icons/onoff.svg',
    items: [
      // {url: "/docs/roadmap/introduction", text: "Roadmap"},
    ]
  },
  {
    title: '🐳DevOps',
    icon: 'img/icons/onoff.svg',
    items: [
      // {url: "/docs/roadmap/introduction", text: "Roadmap"},
    ]
  }
];

function FeatureItem({url, text}){
  return (
    <li><a className={styles.listContainerLink} href={url}>{text}</a></li>
  );
}

function Feature({title, icon, items }) {
  return (
    <article className={clsx('col col--4')}>
      <div className={styles.homecard}>
        {/* <img src={icon} className={styles.homeIcon}></img> */}
        <h2>{title}</h2>
        <div className={styles.listContainer}>
        <ul>
          {items.map((props, idx) => (
            <FeatureItem key={idx} {...props} />
          ))}
        </ul>
        </div>
      </div>
    </article>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
        <ul className={styles.grid3col}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </ul>
    </section>
  );
}