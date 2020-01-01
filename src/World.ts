import { Timer } from "./Timer";

type OnElementsUpdate = (elements: Element[]) => void;

export interface Element {
    x: number;
    y: number;
    angle: number;
    value: number; /* 1 to 9 */
    size: number;
}


const l0 = {
    x: 95, 
    y: 40,
    angle: -30,
    value: 8,
    size: 12,
};
const l1 = {
    x: 40, 
    y: 90,
    angle: 5,
    value: 4,
    size: 8,
};
const l2 = {
    x: 20, 
    y: 15,
    angle: -70,
    value: 3,
    size: 22,
};
const l3 = {
    x: 85, 
    y: 75,
    angle: 10,
    value: 1,
    size: 8,
};

const yVel = 10;
const yMax = 130;

export class World {

    private elements = [l0, l1, l2, l3];
    private updateCbs: OnElementsUpdate[] = [];

    constructor(timer: Timer) {
        timer.onTick((interval: number) => {
            this.update(interval);
        });
    }

    public onUpdate(cb: OnElementsUpdate) {
        this.updateCbs.push(cb);
    }
    
    public getElements(): Element[] {
        return this.elements;
    }

    public removeCb(cb: OnElementsUpdate) {
        this.updateCbs = this.updateCbs.filter(cb1 => cb1 !== cb);
    }

    private update(interval:number) {
        this.elements = this.elements.map(e => 
            ({
                ...e, 
                y: e.y + yVel * (interval / 1000)
            })).filter(e => e.y < yMax);
        this.updateCbs.forEach(cb => cb(this.elements));
    }

}