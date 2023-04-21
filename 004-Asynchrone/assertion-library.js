export const expect = actual => ({
  toEqual(expected) {
    if (actual !== expected) {
      throw new Error(`${actual} is not equal to ${expected}`);
    }
  },
});

export const test = async (description, callback) => {
  try {
    const label = `✅ ${description}`;
    console.time(label);
    await callback();
    console.timeEnd(label);
  } catch (error) {
    console.error(`❌ ${description}`);
    console.error(error);
  }
};
