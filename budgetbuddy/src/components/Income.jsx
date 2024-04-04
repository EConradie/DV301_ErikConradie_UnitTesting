import React, { useState } from "react";
import PersonIncomeRow from "./items/PersonIncomeRow";
import { Button, Form } from "react-bootstrap";
import { iconOptions } from "../utils";
import {
  calculateTaxBracket,
  calculateTaxAmount,
} from "../components/functions/TaxCalculations";

function Income({ income: initialIncome, handleNewIncome }) {
  const [income, setIncome] = useState([...initialIncome]);
  const [icon, setIcon] = useState("-");
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

  const handleAddMember = (event) => {
    event.preventDefault();

    const salaryNumber = Number(salary);
    const bracket = Number(calculateTaxBracket(salaryNumber));
    const taxAmount = Number(calculateTaxAmount(salaryNumber, bracket));

    if (name && salaryNumber) {
      const newIncome = { icon, name, salary: salaryNumber, bracket, taxAmount };
      setIncome([...income, newIncome]);
      handleNewIncome(newIncome);

      setIcon("-");
      setName("");
      setSalary("");
    }
  };

  return (
    <div data-testid='income-component'>
      <h3>Household Monthly Salaries</h3>
      <Form onSubmit={handleAddMember}>
        <div className="form-row">
          <Form.Select aria-label="icon" name="icon" value={icon} onChange={(e) => setIcon(e.target.value)} autoComplete="off">
            <option disabled value="-">-</option>
            {iconOptions.map((icon, index) => (
              <option key={index} value={icon}>{icon}</option>
            ))}
          </Form.Select>
          <Form.Control
            type="text"
            aria-label="name"
            name="name"
            placeholder="Member Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
          />
          <Form.Control
            type="number"
            aria-label="income"
            name="income"
            step="0.01"
            placeholder="0.00"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            autoComplete="off"
          />
          <Button type="submit" className="add-income">
            Add
          </Button>
        </div>
      </Form>
      <div className="income-outer hide-scroll">
        {income.map((item, index) => (
          <PersonIncomeRow key={index} index={index + 1} person={item} />
        ))}
      </div>
    </div>
  );
}

export default Income;
