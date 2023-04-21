import { sum, subtract, sumAsync, subtractAsync } from './math.js';

test('Should return 10 when sum have been called with 3 and 7', () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toEqual(expected);
});

test('Should return 4 when subtract have been called with 7 and 3', () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toEqual(expected);
});

test('Should return 10 when sumAsync have been called with 3 and 7', async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;
  expect(result).toEqual(expected);
});

test('Should return 4 when subtractAsync have been called with 7 and 3', async () => {
  const result = await subtractAsync(7, 3);
  const expected = 4;
  expect(result).toEqual(expected);
});