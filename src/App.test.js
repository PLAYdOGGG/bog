import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My own React App text', () => {
  render(<App />);

  const textElement = screen.getByText(/my react App/i);
  expect(textElement).toBeInTheDocument();
});

test('renders logo image', () => {
  render(<App />);

  const logoElement = screen.getByAltText(/logo/i);
  expect(logoElement).toBeInTheDocument();
});