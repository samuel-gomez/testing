import { sum, subtract } from './math.js';
import { expect } from './assertion-library.js';

let result = sum(3, 7);
let expected = 10;

expect(result).toEqual(expected);

result = subtract(7, 3);
expected = 4;

expect(result).toEqual(expected);
