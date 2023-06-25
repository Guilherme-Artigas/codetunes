import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../src/pages/index';

it('', () => {
  render(<Home />);

  const text = screen.getByText(/bem vindo ao code tunes/i);

  expect(text).toBeInTheDocument();
});
