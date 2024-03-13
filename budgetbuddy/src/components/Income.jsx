import React, { useState, useEffect } from "react";
import PersonIncomeRow from "./items/PersonIncomeRow";
import { Button, Form } from "react-bootstrap";
import { iconOptions } from "../utils";
import {
  calculateTaxBracket,
  calculateTaxAmount,
} from "../components/functions/TaxCalculations";

function Income({ income: initialIncome, handleNewIncome }) {
  const [income, setIncome] = useState([...initialIncome]);

  const handleAddMember = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const salary = Number(event.target.income.value);
    const icon = event.target.icon.value;
    const bracket = Number(calculateTaxBracket(salary));
    const taxAmount = Number(calculateTaxAmount(salary, bracket));

    if (name && salary) {
      const newIncome = { icon, name, salary, bracket, taxAmount };
      setIncome([...income, newIncome]);
      handleNewIncome(newIncome);
      event.target.reset();
    }
  };

  return (
    <div>
      <h3>Household Monthly Salaries</h3>

      {/* Form */}
      <Form onSubmit={handleAddMember}>
        <div className="form-row">
          <Form.Select name="icon" defaultValue="-" autoComplete="off">
            <option disabled>-</option>
            {iconOptions.map((icon, index) => (
              <option key={index} value={icon}>
                {icon}
              </option>
            ))}
          </Form.Select>
          <Form.Control
            type="text"
            id="name"
            name="name"
            placeholder="Member Name"
            autoComplete="off"
          />
          <Form.Control
            type="number"
            id="income"
            name="income"
            step="0.01"
            placeholder="0.00"
            autoComplete="off"
          />
          <Button type="submit" className="add-income">
            Add
          </Button>
        </div>
      </Form>

      {/* List */}
      <div className="income-outer hide-scroll">
        {income &&
          income.map((item, index) => (
            <PersonIncomeRow key={index} index={index + 1} person={item} />
          ))}
      </div>
    </div>
  );
}

export default Income;
