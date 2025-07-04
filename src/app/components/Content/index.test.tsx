import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Content from './index';

describe('Content', () => {
  it('should render', () => {
    render(<Content />);
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('should render the tabs', () => {
    render(<Content />);
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Employment History')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('should render profile by default', () => {
    render(<Content />);
    expect(screen.getByTestId('profile')).toBeInTheDocument();
  });

  it('should render projects when projects tab is clicked', async () => {
    const user = userEvent.setup();
    render(<Content />);
    await user.click(screen.getByText('Projects'));
    expect(screen.getByTestId('projects')).toBeInTheDocument();
  });

  it('should render employment history when employment history tab is clicked', async () => {
    const user = userEvent.setup();
    render(<Content />);
    await user.click(screen.getByText('Employment History'));
    expect(screen.getByTestId('employment')).toBeInTheDocument();
  });
});
