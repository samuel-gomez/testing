export const expect = actual => ({
  toEqual(expected) {
    if (actual !== expected) {
      throw new Error(`${actual} is not equal to ${expected}`);
    }
  },
});

export const test = (description, callback) => {
  try {
    console.time();
    callback();
    console.log(`✅ ${description}`);
    console.timeEnd();
  } catch (error) {
    console.error(`❌ ${description}`);
    console.error(error);
  }
};
