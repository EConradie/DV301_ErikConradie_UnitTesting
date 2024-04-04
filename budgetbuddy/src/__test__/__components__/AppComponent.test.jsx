import { render, screen } from "@testing-library/react";
import App from "../../App";

test("Snapshot of app when rendered first time", () => {
  render(<App />);

  var app = screen.getByTestId("outer-app");

  expect(app).toBeInTheDocument();

  expect(app).toMatchSnapshot();
});
