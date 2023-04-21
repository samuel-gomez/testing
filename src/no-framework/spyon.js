const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

const fn = (impl = () => {}) => {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args);
  };
  mockFn.mock = { calls: [] };
  // ajout de la méthode d'implémentation
  mockFn.mockImplementation = newImpl => (impl = newImpl);

  return mockFn;
};

const spyOn = (obj, prop) => {
  const originalValue = obj[prop];
  obj[prop] = fn();
  obj[prop].mockRestore = () => (obj[prop] = originalValue);
};

spyOn(utils, 'getWinner');
// const originalGetWinner = utils.getWinner;

// utils.getWinner = fn((p1, p2) => p1);
utils.getWinner.mockImplementation((p1, p2) => p1);

const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler');
assert.strictEqual(winner, 'Kent C. Dodds');

assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Kent C. Dodds', 'Ken Wheeler'],
  ['Kent C. Dodds', 'Ken Wheeler'],
]);

assert.strictEqual(utils.getWinner.mock.calls.length, 2);

// cleanup
//utils.getWinner = originalGetWinner;
utils.getWinner.mockRestore();