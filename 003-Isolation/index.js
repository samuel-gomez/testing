import { sum, subtract } from './math.js';
import { expect, test } from './assertion-library.js';

test('Should return 10 when sum have been called with 3 and 7', () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toEqual(expected);
});

test('Should return 4 when subtract have been called with 7 and 3', () => {
  const result = subtract(7, 5);
  const expected = 4;
  expect(result).toEqual(expected);
});
