export const times = (n: number, f: () => void) => {
    while(n-->0) {
        f();
    }
};

export const random = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
}