import { Timer } from "./Timer";
import { random } from "./utilities";

type OnElementsUpdate = (elements: Element[]) => void;

export interface Element {
    x: number;
    y: number;
    xVel: number;
    yVel: number;
    angle: number;
    angleVel: number;
    value: number; /* 1 to 9 */
    valueVel: number;
    size: number;
}

const yTotMax = 100;
const xTotMin = -10;
const xTotMax = 110;

const xMin = 0;
const xMax = 100;

const xVelMin = -6;
const xVelMax = 6;

const yVelMin = 8;
const yVelMax = 50;

const angleMin = -180;
const angleMax = 180;

const angleVelMin = -120;
const angleVelMax = 120;

const valueMin = 1;
const valueMax = 9;

const valueVelMin = 0.2;
const valueVelMax = 4;

const sizeMin = 6;
const sizeMax = 24;

const newElsPerSec = 2;

export class World {

    private elements: Element[] = [];
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
                y: e.y + this.timeScale(e.yVel, interval),
                x: e.x + this.timeScale(e.xVel, interval),
                angle: e.angle + this.timeScale(e.angleVel, interval),
                value: e.value - this.timeScale(e.valueVel, interval),
            })).filter(e =>
                 e.y < yTotMax + e.size &&
                 e.x > xTotMin &&
                 e.x < xTotMax &&
                 e.value > 0
            );
        
        if (Math.random() < this.timeScale(newElsPerSec, interval)) {
            const newElem = {
                x: random(xMin, xMax),
                y: 0,
                xVel: random(xVelMin, xVelMax),
                yVel: random(yVelMin, yVelMax),
                angle: random(angleMin, angleMax),
                angleVel: random(angleVelMin, angleVelMax),
                value: random(valueMin, valueMax),
                valueVel: random(valueVelMin, valueVelMax),
                size: random(sizeMin, sizeMax),
            };
            this.elements.push(newElem);
        }
        this.updateCbs.forEach(cb => cb(this.elements));
    }

    private timeScale(v: number, interval: number) {
        return v / 1000 * interval;
    }

}