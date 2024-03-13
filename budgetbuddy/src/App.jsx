import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./App.css";
import Income from "./components/Income";
import Expenses from "./components/Expenses";
import Taxes from "./components/Taxes";
import TotalCard from "./components/items/TotalCard";
import Savings from "./components/Savings";
import LastTotalCard from "./components/items/LastTotalCard";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import {
  getTotalIncomeBeforeTax,
  getTotalIncomeAfterTax,
  getTotalExpenses,
  calculateLeftToSpend,
} from "./components/functions/TotalCalculations";

function App() {
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [totalSavings, setTotalSavings] = useState(0);

  const handleNewIncome = (newIncome) => {
    setIncome([...income, newIncome]);
  };

  const handleNewExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleTotalSavings = (savings) => {
    setTotalSavings(savings);
  };

  useEffect(() => {
    console.log("Total Income Before Tax: ", getTotalIncomeBeforeTax());
    console.log("Total Income After Tax: ", getTotalIncomeAfterTax());
    console.log("Total Expenses: ", getTotalExpenses());
    console.log("Total Savings: ", totalSavings);
  }, [income, expenses]);

  const totals = [
    {
      icon: "income.png",
      color: "#E4FDCD",
      label: "Total Income Before Tax",
      total: getTotalIncomeBeforeTax(income),
    },
    {
      icon: "tax.png",
      color: "#FFEED2",
      label: "Total Income After Tax",
      total: getTotalIncomeAfterTax(income),
    },
    {
      icon: "expense.png",
      color: "#FFE2D3",
      label: "Total Expenses",
      total: getTotalExpenses(expenses),
    },
    {
      icon: "savings.png",
      color: "#DDDDF7",
      label: "Total Savings",
      total: totalSavings,
    },
  ];

  const lastTotalCard = {
    icon: "wallet.png",
    color: "#CFF26D",
    label: "Total Left To Spend Each Month 😭",
    total: calculateLeftToSpend(income, expenses, totalSavings),
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} className="topbar p-3 mb-4">
          <h2 className="title">
            <img src="logo512.png" width={60} height={60} />
            <span>BudgetBuddy</span>
          </h2>
          <Button>
            <img src="reset.png" width={30} height={30} />
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={5}>
          <div className="card shadow-sm p-3 mb-4 bg-white rounded">
            <Income income={income} handleNewIncome={handleNewIncome} />
          </div>
          <div className="card shadow-sm p-3 mb-4 bg-white rounded">
            <Taxes income={income} />
          </div>
          <div className="card shadow-sm p-3 mb-4 bg-white rounded">
            <Savings income={income} onTotalSavings={handleTotalSavings} />
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="card shadow-sm p-3 mb-4 bg-white rounded">
            <Expenses expenses={expenses} handleNewExpense={handleNewExpense} />
          </div>
        </Col>

        <Col xs={12} md={3}>
          {totals.map((total, index) => (
            <div key={index} className="card shadow-sm p-3 mb-4 rounded">
              <TotalCard total={total} />
            </div>
          ))}
          <div className="card shadow-sm p-3 mb-4 rounded last-total-card">
            <LastTotalCard total={lastTotalCard} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
