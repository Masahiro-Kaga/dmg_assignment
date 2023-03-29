import { render, screen, fireEvent } from "@testing-library/react";
import ListTodos from "../ListTodos";
import InputTodo from "../InputTodo";

describe("Lists", () => {
  it("show Wash Dishes role", async () => {
    render(<ListTodos />);
    const todos = await screen.findByText("Wash dishes");
    expect(todos).toBeVisible();
  });

  
  it('show new post which is "Watching movie"', async () => {
    const setup = () => {
      const utils = render(<InputTodo />);
      const input = screen.getByLabelText("cost-input");
      return {
        input,
        ...utils,
      };
    };
    render(<ListTodos />);
    const { input } = setup();
    fireEvent.change(input, { target: { value: "Watching movie" } })
    fireEvent.click(screen.getByText('Add'))
    const todo = await screen.findAllByText("Watching movie");
    expect(todo).toBeVisible();
  });

  it('remove "Go shopping"', async () => {
    render(<ListTodos />);
  })
});
