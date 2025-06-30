import { FaHtml5 } from 'react-icons/fa';
import { MdCss } from 'react-icons/md';
import { FaJsSquare } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { SiTestinglibrary } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';
import { SiRedux } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { FaDocker } from 'react-icons/fa';
import { SiWebpack } from 'react-icons/si';
import { SiVite } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import React from 'react';

import styles from './index.module.scss';

const InventoryComponent: React.FC = () => {
  const iconSize = 32;
  return (
    <section className={styles.inventoryContainer} data-testid="inventory">
      <h2 className={styles.inventoryTitle}>Mastery</h2>
      <div className={styles.inventoryRow}>
        <div className={styles.inventoryItem}>
          <FaHtml5 size={iconSize} />
          <p>HTML</p>
        </div>

        <div className={styles.inventoryItem}>
          <MdCss size={iconSize} />
          <p>CSS</p>
        </div>

        <div className={styles.inventoryItem}>
          <FaJsSquare size={iconSize} />
          <p>JavaScript</p>
        </div>

        <div className={styles.inventoryItem}>
          <BiLogoTypescript size={iconSize} />
          <p>TypeScript</p>
        </div>

        <div className={styles.inventoryItem}>
          <FaReact size={iconSize} />
          <p>React</p>
        </div>

        <div className={styles.inventoryItem}>
          <SiRedux size={iconSize} />
          <p>Redux</p>
        </div>

        <div className={styles.inventoryItem}>
          <SiTestinglibrary size={iconSize} />
          <p>Testing Library</p>
        </div>

        <div className={styles.inventoryItem}>
          <RiNextjsFill size={iconSize} />
          <p>Next.js</p>
        </div>

        <div className={styles.inventoryItem}>
          <FaGitAlt size={iconSize} />
          <p>Git</p>
        </div>
      </div>

      <h2 className={styles.inventoryTitle}>Proficiency</h2>
      <div className={styles.inventoryRow}>
        <div className={styles.inventoryItem}>
          <FaDocker size={iconSize} />
          <p>Docker</p>
        </div>

        <div className={styles.inventoryItem}>
          <SiWebpack size={iconSize} />
          <p>Webpack</p>
        </div>

        <div className={styles.inventoryItem}>
          <SiVite size={iconSize} />
          <p>Vite</p>
        </div>

        <div className={styles.inventoryItem}>
          <FaGithub size={iconSize} />
          <p>Workflows</p>
        </div>
      </div>
    </section>
  );
};

const Inventory = React.memo(InventoryComponent);
export default Inventory;
