import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

test('renders home page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Find perfect movie for/i);
  expect(linkElement).toBeInTheDocument();
});



