import { World } from './World';
import { Timer } from './Timer';
import { times } from './utilities';
import { Random } from './Random';

let world: World;
let random: Random;
let timer: Timer;

describe('World', () => {
  beforeEach(() => {
    timer = new Timer(0);
    random = new Random('test');
    world = new World(timer, random);
  });

  test('fires onUpdate event on tick', () => {
    const n = 10;

    const cb = jest.fn();
    world.onUpdate(cb);

    times(n, () => timer.tick());

    expect(cb).toHaveBeenCalledTimes(n);
  });

  test('elements should change', () => {
    const ns = [0, 10, 100, 500, 2000, 5000, 10000];

    ns.forEach((n) => {
      times(n, () => timer.tick());

      const finalElements = world.getElements();

      expect(finalElements).toMatchSnapshot();
    });
  });
});
