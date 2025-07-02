import React from 'react';
import styles from './index.module.scss';

interface PointInfoProps {
  title: string;
  company: string;
  description: string;
}

const PointInfo: React.FC<PointInfoProps> = ({ title, company, description }) => (
  <section className={styles.pointInfo}>
    <h3>{title}</h3>
    <h4>{company}</h4>
    <p>{description}</p>
  </section>
);

export default PointInfo;
