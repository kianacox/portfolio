import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TimelineEntry from './TimelineEntry';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { EmploymentEntry } from '../../../data/employment';

jest.mock('react-device-detect', () => ({ isMobile: false }));

const fixture: EmploymentEntry = {
  id: 'test-co',
  title: 'Test Engineer',
  company: 'Test Co',
  description: 'Did test things.',
  date: '2020 - 2021',
  skills: [
    { name: 'React', icon: FaReact },
    { name: 'Git', icon: FaGitAlt },
  ],
};

const presentFixture: EmploymentEntry = {
  ...fixture,
  id: 'present-co',
  date: 'Jan 2024 - Present',
};

describe('TimelineEntry', () => {
  test('renders title, company, and description', () => {
    render(<TimelineEntry entry={fixture} />);
    expect(screen.getByText('Test Engineer')).toBeInTheDocument();
    expect(screen.getByText('Test Co')).toBeInTheDocument();
    expect(screen.getByText('Did test things.')).toBeInTheDocument();
  });

  test('renders skills heading with entry id as data-testid', () => {
    render(<TimelineEntry entry={fixture} />);
    expect(screen.getByTestId('test-co-skills-heading')).toBeInTheDocument();
  });

  test('renders skills list with entry id as data-testid', () => {
    render(<TimelineEntry entry={fixture} />);
    expect(screen.getByTestId('test-co-skills-list')).toBeInTheDocument();
  });

  test('renders all skill names', () => {
    render(<TimelineEntry entry={fixture} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Git')).toBeInTheDocument();
  });

  test('aria-label uses entry title and company', () => {
    render(<TimelineEntry entry={fixture} />);
    expect(screen.getByRole('listitem', { name: 'Test Engineer at Test Co' })).toBeInTheDocument();
  });

  test('skills panel is visible on desktop', () => {
    render(<TimelineEntry entry={fixture} />);
    expect(screen.getByTestId('test-co-skills-heading')).toBeVisible();
  });
});

describe('TimelineEntry — Present Role', () => {
  test('renders date without presentTitle class for non-present role', () => {
    render(<TimelineEntry entry={fixture} />);
    const dateEl = screen.getByText('2020 - 2021');
    expect(dateEl).not.toHaveClass('presentTitle');
  });

  test('applies presentTitle class when date includes Present', () => {
    render(<TimelineEntry entry={presentFixture} />);
    const dateEl = screen.getByText('Jan 2024 - Present');
    expect(dateEl).toHaveClass('presentTitle');
  });
});
