import pino from 'pino';
import { mul } from './app';
import { hello } from './singleExport';


const logger = pino({ name: 'hello' });

const wait = (ms) => new Promise((res) => setTimeout(res, ms));


async function run() {
    const foobartzs = mul(1, 2);

    const x = Object.fromEntries([['a', 'b']]);

    const bx = 1n + 2n === 3n;

    if (x === bx) {
        return hello + foobartzs;
    }

    while (true) { // eslint-disable-line
        logger.warn('warning :D');
        await wait(60 * 1000); // eslint-disable-line no-await-in-loop
    }
}
run();
