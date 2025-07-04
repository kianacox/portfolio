'use client';

import styles from './page.module.css';
import Content from './components/Content';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { useEffect, useState } from 'react';
import LandingOverlay from './components/LandingOverlay';

export default function Home() {
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter') setHasStarted(true);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const handleStart = () => {
    setHasStarted(true);
  };

  return (
    <div className={styles.page} role="application" aria-label="Portfolio Application">
      <a href="#main-content" className="sr-only">
        Skip to main content
      </a>
      <main id="main-content" className={styles.main} aria-live="polite" aria-label="Main Content">
        {hasStarted ? (
          <Content aria-label="Portfolio Content" />
        ) : (
          <LandingOverlay onStart={handleStart} aria-label="Welcome Screen" />
        )}
        <SpeedInsights />
        <Analytics />
      </main>
    </div>
  );
}
