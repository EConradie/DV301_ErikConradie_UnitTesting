import { render, screen } from '@testing-library/react';
import Savings from '../../components/Savings';
import SavingsBlock from '../../components/items/SavingsBlock';

test("Test default state of Savings Component", () => {
  render(<Savings income={[]} />);

  var fullComponent = screen.getByTestId("savings-component");
  var title = screen.getByText("Savings Calculation");
  var input = screen.getByRole("input");

  expect(title).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(fullComponent).toMatchSnapshot();
});

test("Test if savings cards display when 2 savings are added", () => {
  var savings = [
    {
      name: "Savings 1",
      amount: 1000,
      icon: "💰",
    },
    {
      name: "Savings 2",
      amount: 2000,
      icon: "💰",
    }
  ];

  render(
    <div>
      {savings.map((saving, index) => (
        <SavingsBlock key={index} saving={saving} />
      ))}
    </div>
  );

  var iconDisplay = screen.getAllByLabelText("icon");
  var nameDisplay = screen.getAllByLabelText("name");
  var savingsDisplay = screen.getAllByLabelText("savings");
  var savingsCards = screen.getAllByTestId("savings-card"); 

  savingsCards.forEach((element, index) => {

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(`R ${savings[index].amount.toFixed(2)}`);
    expect(element).toHaveTextContent(savings[index].name);
    expect(element).toHaveTextContent(savings[index].icon);

  })

  expect(iconDisplay).toHaveLength(2);
  expect(nameDisplay).toHaveLength(2);
  expect(savingsDisplay).toHaveLength(2);    
});