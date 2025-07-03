'use client';

import styles from './index.module.scss';
import Profile from '../Profile';
import Inventory from '../Inventory';
import { useState } from 'react';
import EmploymentTmeline from '../Timeline';

const Content: React.FC = () => {
  type TabKey = 'profile' | 'inventory' | 'employment' | 'education';
  const [activeTab, setActiveTab] = useState<TabKey>('profile');

  const tabArray = [
    { key: 'profile', label: 'Profile' },
    { key: 'inventory', label: 'Inventory' },
    { key: 'employment', label: 'Employment History' },
  ];
  const renderContent = () => {
    switch (activeTab) {
      case 'inventory':
        return <Inventory />;
      case 'employment':
        return <EmploymentTmeline />;
      default:
        return <Profile />;
    }
  };

  return (
    <main className={styles.content} data-testid="content">
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
