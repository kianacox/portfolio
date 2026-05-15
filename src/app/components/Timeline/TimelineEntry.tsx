import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import styles from './index.module.scss';
import { motion, Variants } from 'motion/react';
import { isMobile } from 'react-device-detect';
import { EmploymentEntry } from '../../../data/employment';

import React from 'react';

const iconSize = 32;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      damping: 12,
      stiffness: 100,
    },
  },
};

type Props = {
  entry: EmploymentEntry;
};

const TimelineEntry: React.FC<Props> = ({ entry }) => {
  return (
    <motion.div variants={itemVariants}>
      <TimelineItem role="listitem" aria-label={`${entry.title} at ${entry.company}`}>
        {!isMobile && (
          <TimelineOppositeContent
            sx={{
              marginLeft: '10px',
              marginTop: '10px',
              padding: '10px',
            }}
          >
            <div className={styles.skillsContainer}>
              <h3 className={entry.date.includes('Present') ? styles.presentTitle : undefined}>
                {entry.date}
              </h3>
              <h4 id={`${entry.id}-skills-heading`} data-testid={`${entry.id}-skills-heading`}>
                Skills
              </h4>
              <ul
                className={styles.skillsListItems}
                aria-labelledby={`${entry.id}-skills-heading`}
                data-testid={`${entry.id}-skills-list`}
              >
                {entry.skills.map((skill) => (
                  <div key={skill.name} className={styles.skillsListItem} role="listitem">
                    <span aria-hidden="true">
                      <skill.icon size={iconSize} />
                    </span>
                    <p>{skill.name}</p>
                  </div>
                ))}
              </ul>
            </div>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineDot
            sx={{
              border: '1px solid var(--primary-accent)',
              boxShadow: '0 0 10px var(--primary-accent-50)',
              backgroundColor: 'var(--text-color)',
            }}
          />
          <TimelineConnector
            sx={{
              border: '1px solid var(--primary-accent)',
              boxShadow: '0 0 10px var(--primary-accent-50)',
            }}
          />
        </TimelineSeparator>
        <TimelineContent
          sx={{
            border: '1px solid var(--highlights)',
            boxShadow: '0 0 10px var(--highlights-50)',
            borderRadius: '8px',
            marginLeft: '10px',
            marginTop: '10px',
            padding: '10px',
          }}
          role="article"
        >
          <h3 id={`${entry.id}-title`} className={styles.title}>
            {entry.title}
          </h3>
          <strong className={styles.company}>{entry.company}</strong>
          <p aria-labelledby={`${entry.id}-title`} className={styles.description}>
            {entry.description}
          </p>
        </TimelineContent>
      </TimelineItem>
    </motion.div>
  );
};

export default TimelineEntry;
