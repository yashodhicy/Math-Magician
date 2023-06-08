import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders Home link', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  const homeLink = screen.getByText(/Home/i);
  const calculatorLink = screen.getByText(/Calculate/i);
  const quoteLink = screen.getByText(/TodayQuote/i);

  expect(homeLink).toBeInTheDocument();
  expect(calculatorLink).toBeInTheDocument();
  expect(quoteLink).toBeInTheDocument();
});
