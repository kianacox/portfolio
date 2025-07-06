import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Loading from './index';

describe('Loading', () => {
  test('should render', () => {
    render(<Loading />);
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
});
