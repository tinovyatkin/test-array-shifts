const shifter = require("./shift-brute-force1");

describe("Calculate number of shift to minimize array. One merge per shift version", () => {
  it("works with example from task description", () => {
    expect(shifter([1, 4, 16, 8, 8, 2, 1])).toBe(2);
  });

  it("merges complete array", () => {
    expect(shifter([128, 32, 8, 4, 4, 16, 64, 256])).toBe(7);
  });

  it("does nothing if it nothing to merge", () => {
    expect(shifter([1, 2, 4, 8, 16])).toBe(0);
  });

  it("works with empty array", () => {
    expect(shifter([])).toBe(0);
  });
});
