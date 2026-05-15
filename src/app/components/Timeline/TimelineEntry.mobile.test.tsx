import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FaReact } from 'react-icons/fa';
import { EmploymentEntry } from '../../../data/employment';

jest.mock('react-device-detect', () => ({ isMobile: true }));

import TimelineEntry from './TimelineEntry';

const fixture: EmploymentEntry = {
  id: 'test-co',
  title: 'Test Engineer',
  company: 'Test Co',
  description: 'Did test things.',
  date: '2020 - 2021',
  skills: [{ name: 'React', icon: FaReact }],
};

describe('TimelineEntry — mobile', () => {
  test('skills panel hidden on mobile', () => {
    render(<TimelineEntry entry={fixture} />);
    expect(screen.queryByTestId('test-co-skills-heading')).not.toBeInTheDocument();
  });
});
