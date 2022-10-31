import { screen } from "@testing-library/react";
import App from "./App";
import RenderChildren from "./utils/renderApp";
test("test title", () => {
  RenderChildren(<App />);
  const linkElement = screen.getByTestId(/title/i);
  expect(linkElement).toBeInTheDocument();
});
test("test initial list length", () => {
  RenderChildren(<App />);
  const linkElement = screen.getAllByRole("listitem");
  expect(linkElement).toHaveLength(4);
});
