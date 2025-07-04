import { render, screen } from '@testing-library/react';
import LandingOverlay from './index';
import '@testing-library/jest-dom';

describe('LandingOverlay', () => {
  test('should render', () => {
    render(<LandingOverlay onStart={() => {}} />);
    expect(screen.getByText('Welcome adventurer!')).toBeInTheDocument();
  });

  test('should render the sword icon', () => {
    render(<LandingOverlay onStart={() => {}} />);
    expect(screen.getByTestId('sword-icon')).toBeInTheDocument();
  });

  test('should render the button', () => {
    render(<LandingOverlay onStart={() => {}} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
