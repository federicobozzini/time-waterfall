export const times = (n: number, f: () => void) => {
    while(n-->0) {
        f();
    }
};