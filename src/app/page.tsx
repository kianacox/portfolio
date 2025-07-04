'use client';

import styles from './page.module.css';
import Content from './components/Content';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { useState } from 'react';
import LandingOverlay from './components/LandingOverlay';

export default function Home() {
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    setHasStarted(true);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {hasStarted ? <Content /> : <LandingOverlay onStart={handleStart} />}
        <SpeedInsights />
        <Analytics />
      </main>
    </div>
  );
}
