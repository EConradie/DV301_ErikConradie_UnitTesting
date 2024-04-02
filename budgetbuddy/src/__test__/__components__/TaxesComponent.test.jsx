import { render, screen } from "@testing-library/react";
import TaxesBlock from "../../components/items/TaxesBlock";

test("Test default state of TaxesBlock Component", () => {
  const taxesMock = {
    icon: "📈",
    name: "Income Tax",
    amount: 300,
    percentage: 15,
  };

  render(<TaxesBlock taxes={taxesMock} />);

  const fullComponent = screen.getByTestId("taxes-card");
  const icon = screen.getByLabelText("icon");
  const name = screen.getByLabelText("name");
  const taxInfo = screen.getByLabelText("tax-info");

  expect(icon).toBeInTheDocument();
  expect(name).toHaveTextContent("Income Tax");
  expect(taxInfo).toHaveTextContent(
    `R ${taxesMock.amount.toFixed(2)} / ${taxesMock.percentage.toFixed(2)}%`
  );
  expect(fullComponent).toMatchSnapshot();
});

test("Test if tax cards display when 2 tax entries are added", () => {
  const taxesMock = [
    {
      icon: "📈",
      name: "Income Tax",
      amount: 300,
      percentage: 15,
    },
    {
      icon: "📉",
      name: "Property Tax",
      amount: 500,
      percentage: 10,
    },
  ];

  render(
    <div>
      {taxesMock.map((tax, index) => (
        <TaxesBlock key={index} taxes={tax} />
      ))}
    </div>
  );

  const iconDisplay = screen.getAllByLabelText("icon");
  const nameDisplay = screen.getAllByLabelText("name");
  const taxInfoDisplay = screen.getAllByLabelText("tax-info");

  expect(iconDisplay).toHaveLength(2);
  expect(nameDisplay).toHaveLength(2);
  expect(taxInfoDisplay).toHaveLength(2);

  nameDisplay.forEach((element, index) => {
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(taxesMock[index].name);
  });

  iconDisplay.forEach((element, index) => {
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(taxesMock[index].icon);
  });

  taxInfoDisplay.forEach((element, index) => {
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(
      `R ${taxesMock[index].amount.toFixed(2)} / ${taxesMock[index].percentage.toFixed(2)}%`
    );
  });
});