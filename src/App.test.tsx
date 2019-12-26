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

  test('renders 4 svg elements', () => {
    const { container } = render(<App world={world} />);
    const svgElements = container.querySelectorAll('text');
    expect(svgElements.length).toBe(4);
  });

  test('renders the full app', () => {
    const { container } = render(<App world={world} />);
    expect(container).toMatchSnapshot();
  });

});
