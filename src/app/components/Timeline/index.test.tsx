import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Timeline from './index';

describe('Timeline', () => {
  test('should render', () => {
    render(<Timeline />);
    expect(screen.getByTestId('employment')).toBeInTheDocument();
  });

  test('should render the flutter timeline item', () => {
    render(<Timeline />);
    expect(screen.getByTestId('flutter-skills-heading')).toBeInTheDocument();
    expect(screen.getByTestId('flutter-skills-list')).toBeInTheDocument();
  });

  test('should render the sbg timeline item', () => {
    render(<Timeline />);
    expect(screen.getByTestId('sbg-skills-heading')).toBeInTheDocument();
    expect(screen.getByTestId('sbg-skills-list')).toBeInTheDocument();
  });

  test('should render the tech academy timeline item', () => {
    render(<Timeline />);
    expect(screen.getByTestId('tech-academy-skills-heading')).toBeInTheDocument();
    expect(screen.getByTestId('tech-academy-skills-list')).toBeInTheDocument();
  });

  test('should render the salecycle timeline item', () => {
    render(<Timeline />);
    expect(screen.getByTestId('salecycle-skills-heading')).toBeInTheDocument();
    expect(screen.getByTestId('salecycle-skills-list')).toBeInTheDocument();
  });
});
