import { render, screen } from "@testing-library/react";
import TaxBlock from "../../components/items/TaxBlock";
import Taxes from "../../components/Taxes";

test("Test default state of TaxesBlock Component", () => {
  const taxesMock = {
    icon: "📈",
    name: "Income Tax",
    taxAmount: 300,
    bracket: 15,
  };

  render(<TaxBlock tax={taxesMock} />);

  const fullComponent = screen.getByTestId("tax-card");
  const icon = screen.getByLabelText("icon");
  const name = screen.getByLabelText("name");
  const bracket = screen.getByLabelText("bracket");
  const taxAmount = screen.getByLabelText("taxamount");

  expect(bracket).toHaveTextContent(
    `${taxesMock.bracket}%`
  );
  expect(taxAmount).toHaveTextContent(`- R ${taxesMock.taxAmount.toFixed(2)}`);
  expect(icon).toBeInTheDocument();
  expect(name).toHaveTextContent(taxesMock.name);
  expect(fullComponent).toMatchSnapshot();
});

test("Test if tax cards display when 2 tax entries are added", () => {
  const taxesMock = [
    {
      icon: "📈",
      name: "Income Tax",
      taxAmount: 300,
      bracket: 15,
    },
    {
      icon: "📉",
      name: "Property Tax",
      taxAmount: 500,
      bracket: 10,
    },
  ];

  render(
    <div>
      {taxesMock.map((tax, index) => (
        <TaxBlock key={index} tax={tax} />
      ))}
    </div>
  );

  const iconDisplay = screen.getAllByLabelText("icon");
  const nameDisplay = screen.getAllByLabelText("name");
  const bracketDisplay = screen.getAllByLabelText("bracket");
  const taxAmountDisplay = screen.getAllByLabelText("taxamount");

  expect(iconDisplay).toHaveLength(2);
  expect(nameDisplay).toHaveLength(2);
  expect(bracketDisplay).toHaveLength(2);
  expect(taxAmountDisplay).toHaveLength(2);

  nameDisplay.forEach((element, index) => {
    expect(element).toHaveTextContent(taxesMock[index].name);
  });

  iconDisplay.forEach((element, index) => {
    expect(element).toHaveTextContent(taxesMock[index].icon);
  });

  bracketDisplay.forEach((element, index) => {
    expect(element).toHaveTextContent(
      `${taxesMock[index].bracket}%`
    );
  });

  taxAmountDisplay.forEach((element, index) => {
    expect(element).toHaveTextContent(`- R ${taxesMock[index].taxAmount.toFixed(2)}`);
  });
});

test("Test if Taxes component renders correctly", () => {
  const incomeMock = [
    { icon: "📈", name: "Income Tax", taxAmount: 300, bracket: 15 },
    { icon: "💰", name: "Sales Tax", taxAmount: 150, bracket: 10 },
  ];

  render(<Taxes income={incomeMock} />);

  const taxesComponent = screen.getByTestId("taxes-component");
  const taxBlocks = screen.getAllByTestId("tax-card");

  expect(taxesComponent).toBeInTheDocument();
  expect(taxBlocks).toHaveLength(incomeMock.length);
});
