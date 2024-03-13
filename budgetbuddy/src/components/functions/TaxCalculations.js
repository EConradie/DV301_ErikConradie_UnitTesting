export const calculateTaxBracket = (income) => {
  if (income <= 6925) {
    return 0;
  } else if (income <= 30487.5) {
    return 18;
  } else if (income <= 51750) {
    return 26;
  } else if (income <= 83750) {
    return 31;
  } else if (income <= 134212.5) {
    return 36;
  } else {
    return 39;
  }
};

export const calculateTaxAmount = (income, bracket) => {
  return income * (bracket / 100);
};
