export const sum = (a, b) => a + b;
export const subtract = (a, b) => a - b;

export const sumAsync = (...args) =>
  new Promise(resolve => setTimeout(resolve(sum(...args)), 1000));

export const subtractAsync = (...args) =>
  new Promise(resolve => setTimeout(resolve(subtract(...args)), 1000));
