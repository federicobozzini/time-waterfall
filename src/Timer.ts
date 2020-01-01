export type OnTickCallback = (interval: number) => void;

export const MS_INTERVAL = 15;

export class Timer {

    private readonly cbs: OnTickCallback[] = [];

    public start() {
        this.refresh();
    }

    public onTick(cb: OnTickCallback): void {
        this.cbs.push(cb);
    }

    public tick(interval: number = MS_INTERVAL): void {
        this.cbs.forEach(cb => cb(interval));
    } 

    private refresh(): void {
        setTimeout(() => {
            this.cbs.forEach(cb => cb(MS_INTERVAL));
            this.refresh();
        }, MS_INTERVAL);
    }

}