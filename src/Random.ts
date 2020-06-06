import seedrandom from 'seedrandom';

export class Random {
  private prng: seedrandom.prng;

  constructor(seed?: string) {
    this.prng = seedrandom(seed);
  }

  public random(min: number, max: number): number {
    return this.prng.quick() * (max - min) + min;
  }
}
