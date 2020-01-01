import { World } from './World';
import { Timer } from './Timer';
import { times } from './utilities';

let world: World;
let timer: Timer;

describe('World', () => {

    beforeEach(() => {
        timer = new Timer();
        world = new World(timer);
    });

    test('fires onUpdate event on tick', () => {
        const n = 10;

        const cb = jest.fn();        
        world.onUpdate(cb);

        times(n, () => timer.tick());

        expect(cb).toHaveBeenCalledTimes(n);
    });


    test('should update elements', () => {
        const n = 10;

        const initialElements = world.getElements();

        times(n, () => timer.tick());

        const finalElements = world.getElements();

        expect(finalElements.length).toBe(initialElements.length);

        for (let i=0; i<initialElements.length; i++) {
            expect(finalElements[i].y).toBeGreaterThan(initialElements[i].y);
        }
    });


    test('should delete elements after a while', () => {
        const n = 2000;

        times(n, () => timer.tick());

        const finalElements = world.getElements();

        expect(finalElements.length).toBe(0);
    });

});