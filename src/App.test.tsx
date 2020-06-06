import React from 'react';
import { render, act } from '@testing-library/react';
import App from './App';
import { World } from './World';
import { Timer } from './Timer';
import { times } from './utilities';
import { Random } from './Random';

const timer = new Timer();
const random = new Random('test');
let world: World; 
let container: HTMLElement;

describe('App rendering', () => {

  beforeEach(() => {
    world = new World(timer, random);
    container = render(<App world={world} />).container;
  });

  test('renders the full app', () => {
      const ns = [0, 10, 100, 500, 2000, 5000, 10000];

      ns.forEach(n => {

        act(() => {
          times(n, () => timer.tick());
        });
  
        expect(container).toMatchSnapshot();

      });

  });

});
