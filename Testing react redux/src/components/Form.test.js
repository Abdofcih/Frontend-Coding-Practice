import { fireEvent, screen } from "@testing-library/react";
import Form from "./Form";
import RenderChildren from "../utils/renderApp";

test("test form", () => {
  //render(<Form />);
  RenderChildren(<Form />);
  const inputEl = screen.getByPlaceholderText("name");
  expect(inputEl).toBeInTheDocument("");
});

test("test empty input", () => {
  RenderChildren(<Form />);
  const inputEl = screen.getByPlaceholderText("name");
  expect(inputEl.value).toBe("");
});

test("error message should not be visible", () => {
  RenderChildren(<Form />);
  const errorEl = screen.getByTestId("error");
  expect(errorEl).not.toBeVisible();
});

test("if ther is an error ,error message should not be visible", () => {
  RenderChildren(<Form />);
  fireEvent.click(screen.getByRole("button"));
  const errorEl = screen.getByTestId("error");
  expect(errorEl).toBeVisible();
});
test("test onChange value", () => {
  RenderChildren(<Form />);
  const testUser = "test user";
  const inputEl = screen.getByPlaceholderText("name");
  fireEvent.change(inputEl, { target: { value: testUser } });
  expect(inputEl.value).toBe(testUser);
});
