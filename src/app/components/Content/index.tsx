'use client';

import styles from './index.module.scss';
import Profile from '../Profile';
import { useState, useCallback, useMemo } from 'react';
import EmploymentTmeline from '../Timeline';
import { motion } from 'motion/react';

const Content: React.FC = () => {
  type TabKey = 'profile' | 'inventory' | 'employment' | 'education';
  const [activeTab, setActiveTab] = useState<TabKey>('profile');

  const tabArray = useMemo(
    () => [
      { key: 'profile', label: 'Profile' },
      { key: 'employment', label: 'Employment History' },
    ],
    []
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const currentIndex = tabArray.findIndex((tab) => tab.key === activeTab);

      switch (e.key) {
        case 'ArrowRight':
          e.preventDefault();
          const nextIndex = (currentIndex + 1) % tabArray.length;
          setActiveTab(tabArray[nextIndex].key as TabKey);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          const prevIndex = currentIndex === 0 ? tabArray.length - 1 : currentIndex - 1;
          setActiveTab(tabArray[prevIndex].key as TabKey);
          break;
      }
    },
    [activeTab, tabArray]
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'employment':
        return <EmploymentTmeline />;
      default:
        return <Profile />;
    }
  };

  return (
    <motion.main
      className={styles.content}
      data-testid="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.tabsContainer} role="tablist" aria-label="Portfolio Sections">
        {tabArray.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key as TabKey)}
            onKeyDown={handleKeyDown}
            className={`${styles.tabs} ${activeTab === key ? styles.activeTab : ''}`}
            role="tab"
            aria-selected={activeTab === key}
            aria-controls={`panel-${key}`}
            id={`tab-${key}`}
            tabIndex={activeTab === key ? 0 : -1}
          >
            {label}
          </button>
        ))}
      </div>
      <div
        className={styles.contentCard}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        id={`panel-${activeTab}`}
      >
        {renderContent()}
      </div>
    </motion.main>
  );
};

export default Content;
