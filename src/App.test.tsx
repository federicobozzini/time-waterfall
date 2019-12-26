import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { World } from './World';


const world = new World();

describe('App rendering', () => {

  test('renders an element', () => {
    const { getByText } = render(<App world={world} />);
    const numberElement = getByText(/8/i);
    expect(numberElement).toBeInTheDocument();
  });

});
