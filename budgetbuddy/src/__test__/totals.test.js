import {
  getTotalIncomeBeforeTax,
  getTotalIncomeAfterTax,
  getTotalExpenses,
  calculateLeftToSpend,
} from "../components/functions/TotalCalculations";

describe("TotalCalculations", () => {
  describe("getTotalIncomeBeforeTax", () => {
    test("calculates total income before tax correctly", () => {
      const incomes = [{ salary: 1000 }, { salary: 2000 }, { salary: 3000 }];
      expect(getTotalIncomeBeforeTax(incomes)).toEqual(6000);
    });

    test("returns 0 for empty array", () => {
      expect(getTotalIncomeBeforeTax([])).toEqual(0);
    });
  });

  describe("getTotalIncomeAfterTax", () => {
    test("calculates total income after tax correctly", () => {
      const incomes = [
        { salary: 1000, taxAmount: 100 },
        { salary: 2000, taxAmount: 200 },
        { salary: 3000, taxAmount: 300 },
      ];
      expect(getTotalIncomeAfterTax(incomes)).toEqual(5400);
    });

    test("returns 0 for empty array", () => {
      expect(getTotalIncomeAfterTax([])).toEqual(0);
    });
  });

  describe("getTotalExpenses", () => {
    test("calculates total expenses correctly", () => {
      const expenses = [{ amount: 500 }, { amount: 1500 }, { amount: 2000 }];
      expect(getTotalExpenses(expenses)).toEqual(4000);
    });

    test("returns 0 for empty array", () => {
      expect(getTotalExpenses([])).toEqual(0);
    });
  });

  describe("calculateLeftToSpend", () => {
    test("calculates the amount left to spend correctly", () => {
      const incomes = [
        { salary: 1000, taxAmount: 100 },
        { salary: 2000, taxAmount: 200 },
      ];
      const expenses = [{ amount: 500 }, { amount: 1500 }];
      const totalSavings = 500;
      expect(calculateLeftToSpend(incomes, expenses, totalSavings)).toEqual(
        200
      );
    });

    test("calculates correctly with no expenses and savings", () => {
      const incomes = [
        { salary: 1000, taxAmount: 100 },
        { salary: 2000, taxAmount: 200 },
      ];
      expect(calculateLeftToSpend(incomes, [], 0)).toEqual(2700);
    });
  });
});
