import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Projects from './index';

describe('Projects', () => {
  test('should render', () => {
    render(<Projects />);
    expect(screen.getByTestId('projects')).toBeInTheDocument();
  });

  test('should render the projects', () => {
    render(<Projects />);
    expect(screen.getByTestId('project-Movie Browser')).toBeInTheDocument();
    expect(screen.getByTestId('project-Portfolio')).toBeInTheDocument();
  });

  test('should render links to the projects', () => {
    render(<Projects />);
    expect(screen.findByTestId('live-website-link')).toBeTruthy();
    expect(screen.findByTestId('github-link')).toBeTruthy();
  });
});
