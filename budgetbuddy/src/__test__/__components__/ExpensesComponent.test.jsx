import { render, screen } from "@testing-library/react";
import Expenses from "../../components/Expenses";
import ExpenseRow from "../../components/items/ExpenseRow";
import userEvent from "@testing-library/user-event";

test("Test default state of Expenses Component", () => {
  render(<Expenses expenses={[]} />);

  var fullComponent = screen.getByTestId("expenses-component");
  var title = screen.getByText("Household Monthly Expenses");
  var amount = screen.getByLabelText("amount");
  var button = screen.getByRole("button");

  expect(title).toBeInTheDocument();
  expect(amount).toBeInTheDocument();
  expect(button).toBeInTheDocument();

  expect(fullComponent).toMatchSnapshot();
});

test("Test if expense cards display when 2 expenses are added", () => {
  var expenses = [
    {
      title: "Expense 1",
      amount: 1000,
    },
    {
      title: "Expense 2",
      amount: 1000,
    },
  ];

  render(
    <div>
      {expenses.map((expense, index) => (
        <ExpenseRow key={index} expense={expense} />
      ))}
    </div>
  );

  var titleDisplay = screen.getAllByLabelText("title");
  var amountDisplay = screen.getAllByLabelText("amount");

  var expenseCards = screen.getAllByTestId("expense-card");

  expenseCards.forEach((element, index) => {
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(`R ${expenses[index].amount.toFixed(2)}`);
    expect(element).toHaveTextContent(expenses[index].title);
  });

  expect(titleDisplay).toHaveLength(2);
  expect(amountDisplay).toHaveLength(2);
});

test("Test adding of a new expense", async () => {
  var user = userEvent.setup();

  var expenses = [];

  const handleNewExpense = (newExpense) => {
    expenses = [...expenses, newExpense];
  };

  render(<Expenses expenses={expenses} handleNewExpense={handleNewExpense} />);

  var titleInput = screen.getByLabelText("title");

  await user.click(titleInput);
  await user.keyboard("test");

  expect(titleInput).toHaveValue("test");

  var amountInput = screen.getByLabelText("amount");

  await user.click(amountInput);
  await user.keyboard("1000");

  expect(amountInput).toHaveValue(1000);

  var button = screen.getByRole("button");

  await user.click(button);

  expect(expenses.length).toBe(1);
  expect(expenses[0].title).toBe("test");
  expect(expenses[0].amount).toBe(1000);
});
