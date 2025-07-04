import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Profile from './index';

describe('Profile', () => {
  test('should render', () => {
    render(<Profile />);
    expect(screen.getByTestId('profile')).toBeInTheDocument();
  });

  test('should render the avatar', () => {
    render(<Profile />);
    expect(screen.getByAltText('A picture of Kiana Cox in anime style')).toBeInTheDocument();
  });

  test('should render the name', () => {
    render(<Profile />);
    expect(screen.getByText('Kiana Cox')).toBeInTheDocument();
  });

  test('should render the summary', () => {
    render(<Profile />);
    expect(screen.getByTestId('profile-summary')).toBeInTheDocument();
  });

  test('should render the strengths', () => {
    render(<Profile />);
    expect(screen.getByTestId('profile-strengths')).toBeInTheDocument();
  });

  test('should render the weaknesses', () => {
    render(<Profile />);
    expect(screen.getByTestId('profile-weaknesses')).toBeInTheDocument();
  });
});
