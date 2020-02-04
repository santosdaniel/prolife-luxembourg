import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


test('renders learn react link in typescript', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome to React/i);
  expect(linkElement).toBeInTheDocument();
});