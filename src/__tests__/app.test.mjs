import { mul, square } from '../app';

describe('test app', () => {
    test('test mul', () => {
        expect(mul(1, 1)).toBe(2);
    });

    test('test suqare', async () => {
        const ret = square(3, 3);
        expect(ret).toBe(36);
    });

    test('test foo', () => {
        const ret = square(3, 3);
        expect(ret).toBe(36);
    });
});
