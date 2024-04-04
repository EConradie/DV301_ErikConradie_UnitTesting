import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ExpenseRow from "./items/ExpenseRow";

function Expenses({ expenses: initialExpenses, handleNewExpense }) {
  const [expenses, setExpenses] = useState([...initialExpenses]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddExpense = (event) => {
    event.preventDefault();
    const amountNumber = Number(amount); 
    if (title && amountNumber) { 
      const newExpense = { title, amount: amountNumber };
      setExpenses([...expenses, newExpense]);
      handleNewExpense(newExpense);
      setTitle("");
      setAmount("");
    }
  };

  return (
    <div data-testid="expenses-component">
      <h3>Household Monthly Expenses</h3>
      <Form onSubmit={handleAddExpense}>
        <div className="form-row">
          <Form.Control
            type="text"
            aria-label="title"
            name="title"
            placeholder="Expense Title"
            autoComplete="off"
            value={title} // Controlled component
            onChange={(e) => setTitle(e.target.value)} // Update state on change
          />
          <Form.Control
            type="number"
            aria-label="amount"
            name="expense"
            step="0.01"
            placeholder="0.00"
            autoComplete="off"
            value={amount} // Controlled component
            onChange={(e) => setAmount(e.target.value)} // Update state on change
          />
          <Button aria-label="button" type="submit" className="add-expenses">
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
