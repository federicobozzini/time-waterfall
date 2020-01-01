import React from 'react';
import { render, act } from '@testing-library/react';
import App from './App';
import { World } from './World';
import { Timer } from './Timer';
import { times } from './utilities';

const timer = new Timer();
let world: World; 
let container: HTMLElement;

describe('App rendering', () => {

  beforeEach(() => {
    world = new World(timer);
    container = render(<App world={world} />).container;
  })

  test('renders 4 svg elements', () => {
    
    const svgElements = container!.querySelectorAll('text');
    expect(svgElements.length).toBe(4);

    act(() => {
      times(2000, () => timer.tick());
    });

    const finalSvgElements = container!.querySelectorAll('text');
    expect(finalSvgElements.length).toBe(0);

  });

  test('renders the full app', () => {

      expect(container).toMatchSnapshot();

      act(() => {
        times(2000, () => timer.tick());
      });

      expect(container).toMatchSnapshot();

  });

});
