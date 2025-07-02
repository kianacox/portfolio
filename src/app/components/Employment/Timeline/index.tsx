import React, { useState, useEffect } from 'react';
import CareerPoint from '../CareerPoint';
import PointInfo from '../PointInfo';
import styles from './index.module.scss';

const careerPoints = [
  {
    id: 'start',
    title: 'Tech Academy Graduate',
    company: 'Sky Betting & Gaming',
    description:
      'Balanced real-world engineering work with completing a Masters degree. Gained XP in modern frontend tools while helping migrate the product to Next.js and shipping experiments and UI upgrades with measurable impact.',
    skills: ['React', 'Git', 'CSS Modules'],
    position: '0%',
  },
  {
    id: 'mid',
    title: 'Software Engineer',
    company: 'Sky Betting & Gaming',
    description:
      'Delivered UI experiments and navigation upgrades that improved content discoverability and user engagement. Shipped A/B-tested rollouts to up to 50% of users, achieving measurable gains in click-through and game launches. Returned post-parental leave and delivered production-ready features under tight deadlines.',
    skills: ['Redux', 'Jest', 'Accessibility'],
    position: '50%',
  },
  {
    id: 'current',
    title: 'Software Engineer',
    company: 'Flutter UK&I',
    description:
      'Core contributor to a multi-brand migration quest serving 9.8M+ users. Spearheaded a testing strategy overhaul, mentored junior devs, and helped forge a scalable design system by collaborating with designers and taming token chaos. Built themeable UI components now powering Sky, PaddyPower, and Betfair experiences.',
    skills: ['React', 'Git', 'CSS Modules'],
    position: '100%',
  },
];

const Timeline: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.timelineContainer}>
      <div className={`${styles.timelineLine} ${isLoaded ? styles.timelineLineLoaded : ''}`} />
      {careerPoints.map((point, index) => (
        <div key={point.id} className={styles.careerPointContainer}>
          <CareerPoint {...point} isLoaded={isLoaded} animationDelay={index * 200} />
          <div
            className={`${styles.pointInfo} ${isLoaded ? styles.pointInfoLoaded : ''}`}
            style={{
              top: point.position,
              animationDelay: `${index * 200 + 400}ms`,
            }}
          >
            <PointInfo
              title={point.title}
              company={point.company}
              description={point.description}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
