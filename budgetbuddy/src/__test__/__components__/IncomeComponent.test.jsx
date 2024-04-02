import { render, screen } from "@testing-library/react"
import Income from "../../components/Income"
import PersonIncomeRow from "../../components/items/PersonIncomeRow";
import userEvent from "@testing-library/user-event";

test("Test default state of Income Component", () => {
  render(<Income income={[]} />);

  var fullComponent = screen.getByTestId("income-component");
  var title = screen.getByText("Household Monthly Salaries");
  var icon = screen.getByLabelText("icon");
  var name = screen.getByLabelText("name");
  var income = screen.getByLabelText("income");
  var button = screen.getByRole("button");

  expect(title).toBeInTheDocument();
  expect(icon).toBeInTheDocument();
  expect(name).toBeInTheDocument(); 
  expect(income).toBeInTheDocument();
  expect(button).toBeInTheDocument();

  expect(fullComponent).toMatchSnapshot();
});

test("Test if income cards display when 2 people are added", () => {
  var personMock = [
    {
      name: "Income 1",
      salary: 1000,
      icon: "👩",
      bracket: 0.0,
      taxAmount: 0.0,
    },
    {
      name: "Income 2",
      salary: 1000,
      icon: "👩",
      bracket: 0.0,
      taxAmount: 0.0,
    }
  ];

  render(
    <div>
      {personMock.map((person, index) => (
        <PersonIncomeRow key={index} person={person} />
      ))}
    </div>
  );

  var iconDisplay = screen.getAllByLabelText("icon");
  var nameDisplay = screen.getAllByLabelText("name");
  var incomeDisplay = screen.getAllByLabelText("income");

  var incomeCards = screen.getAllByTestId("income-card"); 

  incomeCards.forEach((element, index) => {

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(`R ${personMock[index].salary.toFixed(2)}`);
    expect(element).toHaveTextContent(personMock[index].name);
    expect(element).toHaveTextContent(personMock[index].icon);

  })

  expect(iconDisplay).toHaveLength(2);
  expect(nameDisplay).toHaveLength(2);
  expect(incomeDisplay).toHaveLength(2);    



});

test("Test adding of a new income", async () => {
  var user = userEvent.setup();

  var incomeMock = [];

  const handleNewIncome = (newIncome) => {
    incomeMock = [...incomeMock, newIncome];
  };

  render(<Income income={incomeMock} handleNewIncome={handleNewIncome}  />);

  var iconInput = screen.getByLabelText("icon");

  await user.selectOptions(iconInput, "👩")
  expect (iconInput).toHaveValue("👩");

  var nameInput = screen.getByLabelText("name");

  await user.click(nameInput)
  await user.keyboard("test")

  expect(nameInput).toHaveValue("test");

  var incomeInput = screen.getByLabelText("income");

  await user.click(incomeInput)
  await user.keyboard("1000")

  expect(incomeInput).toHaveValue(1000);

  var button = screen.getByRole("button");

  await user.click(button)

  expect(incomeMock.length).toBe(1)
  expect(incomeMock[0].icon).toBe("👩")
  expect(incomeMock[0].name).toBe("test")
  expect(incomeMock[0].salary).toBe(1000)
})
