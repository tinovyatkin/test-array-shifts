const shifter = require("./shift-brute-force1");

describe("Calculate number of shift to minimize array", () => {
  it("works with example from task description", () => {
    expect(shifter([1, 4, 16, 8, 8, 2, 1])).toBe(2);
  });
});
