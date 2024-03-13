export const getTotalIncomeBeforeTax = (income = []) => {
  return income.reduce((acc, curr) => acc + curr.salary, 0);
};

export const getTotalIncomeAfterTax = (income = []) => {
  return income.reduce((acc, curr) => acc + (curr.salary - curr.taxAmount), 0);
};

export const getTotalExpenses = (expenses = []) => {
  return expenses.reduce((acc, curr) => acc + curr.amount, 0);
};

export const calculateLeftToSpend = (income, expenses, totalSavings) => {
  const totalIncomeAfterTax = getTotalIncomeAfterTax(income);
  const totalExp = getTotalExpenses(expenses);
  const leftToSpend = totalIncomeAfterTax - totalExp - totalSavings;
  return leftToSpend;
};
