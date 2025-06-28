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
    expect(screen.getByText('Inventory')).toBeInTheDocument();
    expect(screen.getByText('Employment History')).toBeInTheDocument();
  });

  it('should render profile by default', () => {
    render(<Content />);
    expect(screen.getByTestId('profile')).toBeInTheDocument();
  });

  it('should render inventory when inventory tab is clicked', async () => {
    const user = userEvent.setup();
    render(<Content />);
    await user.click(screen.getByText('Inventory'));
    expect(screen.getByTestId('inventory')).toBeInTheDocument();
  });

  it('should render employment history when employment history tab is clicked', async () => {
    const user = userEvent.setup();
    render(<Content />);
    await user.click(screen.getByText('Employment History'));
    expect(screen.getByTestId('employment')).toBeInTheDocument();
  });
});
