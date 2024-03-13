import React, { useState, useEffect } from "react";
import TaxBlock from "./items/TaxBlock";
import { percentageOptions } from "../utils";
import { Form } from "react-bootstrap";
import SavingsBlock from "./items/SavingsBlock";

function Savings({ income, onTotalSavings }) {
  const [selectedPercentage, setSelectedPercentage] = useState(null);

  const handlePercentageChange = (event) => {
    setSelectedPercentage(Number(event.target.value));
  };

  const savingsData = income.map((item) => ({
    ...item,
    saves: item.salary * (selectedPercentage / 100),
  }));

  // Calculate total savings
  const totalSavings = parseFloat(
    savingsData.reduce((acc, curr) => acc + curr.saves, 0).toFixed(2)
  );

  // Pass total savings to app
  useEffect(() => {
    if (onTotalSavings) {
      onTotalSavings(totalSavings);
    }
  }, [totalSavings, onTotalSavings]);

  return (
    <div>
      <div className="title-row">
        <h3>Savings Calculation</h3>
        <span>
          <p>% you want to save</p>
          <Form.Select
            id="percentage"
            name="percentage"
            defaultValue="-"
            autoComplete="off"
            onChange={handlePercentageChange}
          >
            <option disabled>-</option>
            {percentageOptions.map((amount, index) => (
              <option key={index} value={amount}>
                {amount}%
              </option>
            ))}
          </Form.Select>
        </span>
      </div>

      {/* List */}
      <div className="scroll-row hide-scroll">
        {savingsData &&
          savingsData.map((item, index) => (
            <SavingsBlock key={index} savings={item} />
          ))}
      </div>
    </div>
  );
}

export default Savings;
