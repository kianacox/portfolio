import React from 'react';
import Timeline from './Timeline';

const EmploymentComponent: React.FC = () => {
  return (
    <section style={{ width: '100%' }} data-testid="employment">
      <Timeline />
    </section>
  );
};

const Employment = React.memo(EmploymentComponent);
export default Employment;
