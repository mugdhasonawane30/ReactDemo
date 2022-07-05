import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Should display one text for entering number 1", () => {
  const { container } = render(<App />);
  const input = screen.getByPlaceholderText("Enter number");
  fireEvent.change(input, { target: { value: 1 } });

  const enterNumberButton = screen.getByRole("button", {
    name: "Convert Number to words",
  });
  fireEvent.click(enterNumberButton);

  const wordId = screen.getByTestId("word-id");
  expect(wordId.textContent).toBe("Number in words: one ");
});

test("Should display two text for entering number 2", () => {
  const { container } = render(<App />);
  const input = screen.getByPlaceholderText("Enter number");
  fireEvent.change(input, { target: { value: 2 } });

  const enterNumberButton = screen.getByRole("button", {
    name: "Convert Number to words",
  });
  fireEvent.click(enterNumberButton);

  const wordId = screen.getByTestId("word-id");
  expect(wordId.textContent).toBe("Number in words: two ");
});


test("Should display ten text for entering number 10", () => {
  const { container } = render(<App />);
  const input = screen.getByPlaceholderText("Enter number");
  fireEvent.change(input, { target: { value: 10 } });

  const enterNumberButton = screen.getByRole("button", {
    name: "Convert Number to words",
  });
  fireEvent.click(enterNumberButton);

  const wordId = screen.getByTestId("word-id");
  expect(wordId.textContent).toBe("Number in words: ten ");
});