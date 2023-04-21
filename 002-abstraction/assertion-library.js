export const expect = actual => ({
  toEqual(expected) {
    if (actual !== expected) {
      throw new Error(`❌ ${actual} is not equal to ${expected}`);
    } else {
      console.time();
      console.log(`✅ ${actual} is  equal to ${expected}`);
      console.timeEnd();
    }
  },
});
