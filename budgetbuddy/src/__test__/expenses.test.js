const {
  handleNewExpense,
} = require("../components/functions/AddingIncomeExpense");

// Define array
var expenses = [];

beforeEach(() => {
  console.log("Before every test add 2 expenses");
  expenses.push({ name: "Utilities", amount: 100 });
  expenses.push({ name: "Groceries", amount: 150 });
});

afterEach(() => {
  // Before running the next test, first empty the array
  console.log("After each test clear expenses");
  expenses = [];
});

// Test for adding a new expense
describe("tests for adding a new expense", () => {
  test("Adding of a new expense to array", () => {
    var newExpense = { name: "Rent", amount: 800 };

    console.log(expenses.length);
    expect(expenses.length).toEqual(2);
    newExpense = handleNewExpense(expenses, newExpense);
    expect(newExpense.length).toEqual(3);
  });

  test("New expense added has correct values", () => {
    var newExpense = { name: "Rent", amount: 800 };
    expect(expenses).toBeDefined();

    expenses = handleNewExpense(expenses, newExpense);

    expect(expenses[2].name).toMatch(/Rent/);
    expect(expenses[2]).toEqual(newExpense);
    expect(expenses.length).toEqual(3);

    expect(expenses).toBeDefined();
  });
});
