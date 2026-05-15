import Timeline from '@mui/lab/Timeline';
import { timelineItemClasses } from '@mui/lab/TimelineItem';

import { motion, Variants } from 'motion/react';
import { isMobile } from 'react-device-detect';
import { employmentHistory } from '../../../data/employment';
import TimelineEntry from './TimelineEntry';

import React from 'react';

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const EmploymentTmelineComponent: React.FC = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show">
      <Timeline
        data-testid="employment"
        role="list"
        aria-label="Employment Timeline"
        sx={{
          ...(isMobile && {
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }),
        }}
      >
        {employmentHistory.map((entry) => (
          <TimelineEntry key={entry.id} entry={entry} />
        ))}
      </Timeline>
    </motion.div>
  );
};

const EmploymentTmeline = React.memo(EmploymentTmelineComponent);
export default EmploymentTmeline;
