import React, { useState } from 'react';
import SkillsList from './SkillsList';
import styles from './index.module.scss';

interface CareerPointProps {
  skills: string[];
  position: string; // % string like "15%"
  isLoaded?: boolean;
  animationDelay?: number;
}

const CareerPoint: React.FC<CareerPointProps> = ({
  skills,
  position,
  isLoaded = false,
  animationDelay = 0,
}) => {
  const featureOn = false;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`${styles.careerPoint} ${isLoaded ? styles.careerPointLoaded : ''}`}
      style={{
        top: position,
        animationDelay: `${animationDelay}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.circle} />

      {hovered && featureOn && (
        <>
          <SkillsList skills={skills} />
        </>
      )}
    </div>
  );
};

export default CareerPoint;
