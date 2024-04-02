const {
  calculateSavings,
} = require("../components/functions/SavingsCalculation");

describe("calculateSavings", () => {
  it("should calculate savings correctly", () => {
    const income = [
      { id: 1, salary: 1000 },
      { id: 2, salary: 2000 },
      { id: 3, salary: 3000 },
    ];
    const selectedPercentage = 10;

    const { savingsData, totalSavings } = calculateSavings(
      income,
      selectedPercentage
    );

    expect(savingsData).toEqual([
      { id: 1, salary: 1000, saves: 100 },
      { id: 2, salary: 2000, saves: 200 },
      { id: 3, salary: 3000, saves: 300 },
    ]);
    expect(totalSavings).toBe(600);
  });

  it("should handle empty income array", () => {
    const income = [];
    const selectedPercentage = 10;

    const { savingsData, totalSavings } = calculateSavings(
      income,
      selectedPercentage
    );

    expect(savingsData).toEqual([]);
    expect(totalSavings).toBe(0);
  });

  it("should handle zero selectedPercentage", () => {
    const income = [
      { id: 1, salary: 1000 },
      { id: 2, salary: 2000 },
      { id: 3, salary: 3000 },
    ];
    const selectedPercentage = 0;

    const { savingsData, totalSavings } = calculateSavings(
      income,
      selectedPercentage
    );

    expect(savingsData).toEqual([
      { id: 1, salary: 1000, saves: 0 },
      { id: 2, salary: 2000, saves: 0 },
      { id: 3, salary: 3000, saves: 0 },
    ]);
    expect(totalSavings).toBe(0);
  });
});
