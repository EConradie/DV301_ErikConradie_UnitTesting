import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Savings from "../../components/Savings";
import SavingsBlock from "../../components/items/SavingsBlock";

test("Test default state of SavingsBlock Component", () => {
  const savingsMock = {
    icon: "💰",
    name: "Sample Savings",
    saves: 200,
    salary: 1000,
  };

  render(<SavingsBlock savings={savingsMock} />);

  const fullComponent = screen.getByTestId("savings-card");
  const icon = screen.getByLabelText("icon");
  const name = screen.getByLabelText("name");
  const savings = screen.getByLabelText("savings");

  expect(icon).toBeInTheDocument();
  expect(name).toHaveTextContent("Sample Savings");
  expect(savings).toHaveTextContent(
    `R ${savingsMock.saves.toFixed(2)} / R ${savingsMock.salary.toFixed(2)}`
  );
  expect(fullComponent).toMatchSnapshot();
});

test("Test if savings cards display when 2 savings are added", () => {
  const savingsMock = [
    {
      icon: "💰",
      name: "Savings 1",
      saves: 200,
      salary: 1000,
    },
    {
      icon: "💰",
      name: "Savings 2",
      saves: 200,
      salary: 1000,
    },
  ];

  render(
    <div>
      {savingsMock.map((savings, index) => (
        <SavingsBlock key={index} savings={savings} />
      ))}
    </div>
  );

  const iconDisplay = screen.getAllByLabelText("icon");
  const nameDisplay = screen.getAllByLabelText("name");
  const savingsDisplay = screen.getAllByLabelText("savings");

  expect(iconDisplay).toHaveLength(2);
  expect(nameDisplay).toHaveLength(2);
  expect(savingsDisplay).toHaveLength(2);

  nameDisplay.forEach((element, index) => {
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(savingsMock[index].name);
  });

  iconDisplay.forEach((element, index) => {
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(savingsMock[index].icon);
  });

  savingsDisplay.forEach((element, index) => {
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(
      `R ${savingsMock[index].saves.toFixed(2)} / R ${savingsMock[
        index
      ].salary.toFixed(2)}`
    );
  });
});

test("Test if Savings component renders correctly", () => {
  const incomeMock = [
    { icon: "📈", name: "Income Tax", taxAmount: 300, bracket: 15 },
    { icon: "💰", name: "Sales Tax", taxAmount: 150, bracket: 10 },
  ];

  render(<Savings income={incomeMock} />);

  const taxesComponent = screen.getByTestId("taxes-component");
  const taxBlocks = screen.getAllByTestId("tax-card");

  expect(taxesComponent).toBeInTheDocument();
  expect(taxBlocks).toHaveLength(incomeMock.length);
});
