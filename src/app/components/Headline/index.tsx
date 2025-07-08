'use client';
import styles from './index.module.scss';
import React, { useEffect, useState } from 'react';

const options = [
  'Software Engineer',
  'Hero of Hyrule',
  'Snack Procurement Officer',
  'Grey Warden of Code',
  'Warrior of Darkness (Dark Mode Enthusiast)',
];

const Headline: React.FC = () => {
  const [displayed, setDisplayed] = useState('');
  const [optionIndex, setOptionIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const current = options[optionIndex];

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length - 1));
        }, 40);
      } else {
        setTyping(true);
        setOptionIndex((prev) => (prev + 1) % options.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, optionIndex]);

  return (
    <div className={styles.headerContainer}>
      <span
        className={styles.headline}
        aria-live="polite"
        aria-label={`Current title: ${displayed}`}
      >
        {displayed}
      </span>
    </div>
  );
};

export default Headline;
