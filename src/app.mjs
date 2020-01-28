
export const mul = (a, b) => a + b;

const x = { b: 42 };

export const has = x?.b;

export function square(a, b) {
    a *= 4;
    return a * b;
}
