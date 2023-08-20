import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '🎙️PodCast',
    icon: 'img/icons/onoff.svg',
    url: 'https://contentbox.vercel.app/docs/podcast/',
    items: [
      // {url: "/docs/roadmap/introduction", text: "Roadmap"},
    ]
  },
  {
    title: '🤝Guest events',
    icon: 'img/icons/onoff.svg',
    url: 'https://contentbox.vercel.app/docs/asaguest/',
    items: [
      // {url: "/docs/roadmap/introduction", text: "Roadmap"},
    ]
  },
  {
    title: '🥑DevRel',
    icon: 'img/icons/onoff.svg',
    url: 'https://contentbox.vercel.app/docs/devrel/',
    items: [
      // {url: "/docs/roadmap/introduction", text: "Roadmap"},
    ]
  },
  {
    title: '🌐Web Dev',
    icon: 'img/icons/onoff.svg',
    url: 'https://contentbox.vercel.app/docs/webdev/',
    items: [
      // {url: "/docs/roadmap/introduction", text: "Roadmap"},
    ]
  },
  {
    title: '🏆Special Events',
    icon: 'img/icons/onoff.svg',
    url: 'https://contentbox.vercel.app/docs/specialevents/',
    items: [
      // {url: "/docs/roadmap/introduction", text: "Roadmap"},
    ]
  },
  {
    title: '🌏Conferences',
    icon: 'img/icons/onoff.svg',
    url: 'https://contentbox.vercel.app/docs/conferences/',
    items: [
      // {url: "/docs/roadmap/introduction", text: "Roadmap"},
    ]
  },
  {
    title: '⛓️Blockchain',
    icon: 'img/icons/onoff.svg',
    url: 'https://contentbox.vercel.app/docs/blockchain/',
    items: [
      // {url: "/docs/roadmap/introduction", text: "Roadmap"},
    ]
  },
  {
    title: '🐳DevOps',
    icon: 'img/icons/onoff.svg',
    url: 'https://contentbox.vercel.app/docs/devops/',
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

function Feature({title, icon, url, items }) {
  return (
    <article className={clsx('col col--4')}>
      <a href={url} className={styles.featureLink}> {/* Add this line */}
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
      </a> {/* Add this line */}
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