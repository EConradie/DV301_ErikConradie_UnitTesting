export function calculateSavings(income, selectedPercentage) {
  const savingsData = income.map((item) => ({
    ...item,
    saves: item.salary * (selectedPercentage / 100),
  }));

  const totalSavings = savingsData.reduce((acc, curr) => acc + curr.saves, 0);

  return { savingsData, totalSavings };
}
