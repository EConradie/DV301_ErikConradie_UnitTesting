const {
  calculateTaxBracket,
  calculateTaxAmount,
} = require("../components/functions/TaxCalculations");

describe("Tax Calculation", () => {
  describe("calculateTaxBracket", () => {
    test("returns 0% for income <= 6925", () => {
      expect(calculateTaxBracket(6925)).toBe(0);
    });

    test("returns 18% for income between 6926 and 30487.50", () => {
      expect(calculateTaxBracket(7000)).toBe(18);
    });

    test("returns 26% for income between 30487.51 and 51750", () => {
      expect(calculateTaxBracket(31000)).toBe(26);
    });

    test("returns 31% for income between 51751 and 83750", () => {
      expect(calculateTaxBracket(52000)).toBe(31);
    });

    test("returns 36% for income between 83751 and 134212.50", () => {
      expect(calculateTaxBracket(84000)).toBe(36);
    });

    test("returns 39% for income above 134212.50", () => {
      expect(calculateTaxBracket(140000)).toBe(39);
    });
  });

  describe("calculateTaxAmount", () => {
    test("calculates correct tax amount for various brackets", () => {
      // Using exact bracket percentages from calculateTaxBracket
      expect(calculateTaxAmount(6925, 0)).toBeCloseTo(0);
      expect(calculateTaxAmount(7000, 18)).toBeCloseTo(1260);
      expect(calculateTaxAmount(31000, 26)).toBeCloseTo(8060);
      expect(calculateTaxAmount(52000, 31)).toBeCloseTo(16120);
      expect(calculateTaxAmount(84000, 36)).toBeCloseTo(30240);
      expect(calculateTaxAmount(140000, 39)).toBeCloseTo(54600);
    });
  });
});
