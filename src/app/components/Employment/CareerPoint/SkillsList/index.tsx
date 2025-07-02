import React from 'react';
import styles from './index.module.scss';

interface SkillsListProps {
  skills: string[];
}

const SkillsList: React.FC<SkillsListProps> = ({ skills }) => (
  <div className={styles.skillsList}>
    <ul>
      {skills.map((skill, idx) => (
        <li key={idx}>{skill}</li>
      ))}
    </ul>
  </div>
);

export default SkillsList;
