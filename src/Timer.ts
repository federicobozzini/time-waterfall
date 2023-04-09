export type OnTickCallback = (interval: number) => void;

export const MS_INTERVAL = 15;

export class Timer {
  private readonly cbs: OnTickCallback[] = [];

  private readonly tickMs: number;

  constructor(private readonly interval: number = MS_INTERVAL) {
    if (interval < 0) {
      throw Error('Interval cannot be negative');
    }
    this.tickMs = interval === 0 ? MS_INTERVAL : interval;
  }

  public start() {
    this.refresh();
  }

  public onTick(cb: OnTickCallback): void {
    this.cbs.push(cb);
  }

  public tick(): void {
    this.cbs.forEach((cb) => cb(this.tickMs));
  }

  private refresh(): void {
    setTimeout(() => {
      this.tick();
      this.refresh();
    }, this.interval);
  }
}
