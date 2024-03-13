const {
  handleNewIncome,
} = require("../components/functions/AddingIncomeExpense");

//Define array
var income = [];

beforeEach(() => {
  console.log("Happens before everything else");
  income.push({ name: "Erik", salary: 30000 });
  income.push({ name: "Armand", salary: 45000 });
});

afterEach(() => {
  //Before running the next test, first empty the array
  console.log("Happens after everything else");
  income = [];
});

//Test for adding a new income
describe("tests for adding a new income", () => {
  test("Adding of a new income to array", () => {
    var newIncome = { name: "John", salary: 20000 };

    console.log(income.length);
    expect(income.length).toEqual(2);
    newIncome = handleNewIncome(income, newIncome);
    expect(newIncome.length).toEqual(3);
  });

  test("New income added has correct values", () => {
    var newIncome = { name: "John", salary: 20000 };
    expect(income).toBeDefined();

    income = handleNewIncome(income, newIncome);

    expect(income[2].name).toMatch(/John/);
    expect(income[2]).toEqual(newIncome);
    expect(income.length).toEqual(3);

    expect(income).toBeDefined();
  });
});
