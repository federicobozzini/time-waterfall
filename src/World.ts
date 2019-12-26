export interface Element {

    x: number;
    y: number;
    angle: number;
    value: number; /* 1 to 9 */
    size: number;

}

export class World {
    
    public getElements(): Element[] {
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
        return [l0, l1, l2, l3];
    }

}