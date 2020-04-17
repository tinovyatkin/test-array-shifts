const shifter = require("./shift-brute-force2");

describe("Calculate number of shift to minimize array. All merges per shift version", () => {
  it("works with example from task description", () => {
    expect(shifter([1, 4, 16, 8, 8, 2, 1])).toBe(2);
  });

  it("merges complete array", () => {
    expect(shifter([128, 32, 8, 4, 4, 16, 64, 256])).toBe(7);
  });

  it("merges all pairs in one pass", () => {
    // чтобы архив полностью слился он должен быть длины степени 2йки
    const length = 2 ** 10;
    expect(shifter(Array.from({ length }, () => 1))).toBe(Math.log2(length));
  });

  it("does nothing if it nothing to merge", () => {
    expect(shifter([1, 2, 4, 8, 16])).toBe(0);
  });

  it("works with empty array", () => {
    expect(shifter([])).toBe(0);
  });
});
