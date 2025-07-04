'use client';

import styles from './index.module.scss';
import Profile from '../Profile';
import { useState } from 'react';
import EmploymentTmeline from '../Timeline';
import { motion } from 'motion/react';

const Content: React.FC = () => {
  type TabKey = 'profile' | 'inventory' | 'employment' | 'education';
  const [activeTab, setActiveTab] = useState<TabKey>('profile');

  const tabArray = [
    { key: 'profile', label: 'Profile' },
    { key: 'employment', label: 'Employment History' },
  ];
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
      <div className={styles.tabsContainer}>
        {tabArray.map(({ key, label }) => (
          <button key={key} onClick={() => setActiveTab(key as TabKey)} className={styles.tabs}>
            {label}
          </button>
        ))}
      </div>
      <div className={styles.contentCard}>{renderContent()}</div>
    </motion.main>
  );
};

export default Content;
