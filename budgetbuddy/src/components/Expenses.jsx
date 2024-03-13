import React from "react";
import { Form, Button } from "react-bootstrap";
import ExpenseRow from "./items/ExpenseRow";
import { useState } from "react";

function Expenses({ expenses: initialExpenses, handleNewExpense }) {
  const [expenses, setExpenses] = useState(initialExpenses);

  const handleAddExpense = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const amount = Number(event.target.expense.value);
    setExpenses([...expenses, { title, amount }]);
    handleNewExpense({ title, amount });
    event.target.reset();
  };

  return (
    <div>
      <h3>Household Montly Expenses</h3>

      <Form onSubmit={handleAddExpense}>
        <div className="form-row">
          <Form.Control
            type="text"
            id="title"
            name="title"
            placeholder="Expense Title"
            autoComplete="off"
          />
          <Form.Control
            type="number"
            id="expense"
            name="expense"
            step="0.01"
            placeholder="0.00"
            autoComplete="off"
          />
          <Button type="submit" className="add-expenses">
            Add
          </Button>
        </div>
      </Form>

      <div className="expense-outer hide-scroll">
        {expenses.map((item, index) => (
          <ExpenseRow key={index} expense={item} />
        ))}
      </div>
    </div>
  );
}

export default Expenses;
