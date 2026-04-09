import { render, screen } from "@testing-library/react";
import AddCommentForm from "./AddCommentForm";
import userEvent from "@testing-library/user-event";

it("contains h2 heading", () => {
  render(<AddCommentForm onSubmit={vi.fn()} />);
  const heading = screen.getByRole("heading", {
    level: 2,
    name: "Post a Comment",
  });
  expect(heading).toBeInTheDocument();
});

it("changes the input text when the author changes", async () => {
  render(<AddCommentForm onSubmit={vi.fn()} />);
  const user = userEvent.setup();

  const inputAuthor = screen.getByRole("textbox", { name: "Your Name" });

  await user.type(inputAuthor, "Srdjan");
  expect(inputAuthor).toHaveValue("Srdjan");
});

it("changes the input body when the body changes", async () => {
  render(<AddCommentForm onSubmit={vi.fn()} />);
  const user = userEvent.setup();
  const inputBody = screen.getByRole("textbox", { name: "Your Comment" });
  await user.type(inputBody, "My Comment");
  expect(inputBody).toHaveValue("My Comment");
});

// const onSubmit = () => {
//   //some code

//   // mock function strips away implementation of a function
//   // and the function returns either undefined (or promise)
//   // you can try whether function was invoked, how many times it  was invoked, with what arguments it was invoked
// }
