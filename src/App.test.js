import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Should render list of number", () => {
  const { container } = render(<App />);
  const renderButton = screen.getByRole("button", { name: "Render" });
  fireEvent.click(renderButton);
  const list = container.querySelectorAll("li")[0];
  expect(list.textContent).toContain("FizzBuss");
});

test("Should print Fizz if number is divided by 3", () => {
  const { container } = render(<App />);
  const renderButton = screen.getByRole("button", { name: "Render" });
  fireEvent.click(renderButton);

  const list = container.querySelectorAll("li")[3];
  expect(list.textContent).toContain("Fizz");
});

test("Should print Buss if number is divided by 5", () => {
  const { container } = render(<App />);
  const renderButton = screen.getByRole("button", { name: "Render" });
  fireEvent.click(renderButton);

  const list = container.querySelectorAll("li")[5];
  expect(list.textContent).toContain("Buss");
});

test("Should print FizzBuss if number is divided by 3 & 5", () => {
  const { container } = render(<App />);
  const renderButton = screen.getByRole("button", { name: "Render" });
  fireEvent.click(renderButton);

  const list = container.querySelectorAll("li")[15];
  expect(list.textContent).toContain("FizzBuss");
});
