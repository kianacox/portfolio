'use client';

import styles from './index.module.scss';
import Profile from '../Profile';
import Inventory from '../Inventory';
import Employment from '../Employment';
import Education from '../Education';
import { useState } from 'react';

const Content: React.FC = () => {
  type TabKey = 'profile' | 'inventory' | 'employment' | 'education';
  const [activeTab, setActiveTab] = useState<TabKey>('profile');

  const tabArray = [
    { key: 'profile', label: 'Profile' },
    { key: 'inventory', label: 'Inventory' },
    { key: 'employment', label: 'Employment History' },
    { key: 'education', label: 'Education' },
  ];
  const renderContent = () => {
    switch (activeTab) {
      case 'inventory':
        return <Inventory />;
      case 'employment':
        return <Employment />;
      case 'education':
        return <Education />;
      default:
        return <Profile />;
    }
  };

  return (
    <main className={styles.content}>
      <div className={styles.tabsContainer}>
        {tabArray.map(({ key, label }) => (
          <button key={key} onClick={() => setActiveTab(key as TabKey)} className={styles.tabs}>
            {label}
          </button>
        ))}
      </div>
      <div className={styles.contentCard}>{renderContent()}</div>
    </main>
  );
};

export default Content;
