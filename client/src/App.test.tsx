import { render, screen } from "@testing-library/react";
import App from "./App";
// import * as commentsService from "./services/index";
import { getComments, getMoreReplies } from "./services/index";
import userEvent from "@testing-library/user-event";

vi.mock("./services/index.ts");

const mockedGetComments = vi.mocked(getComments);
const mockedGetMoreReplies = vi.mocked(getMoreReplies);
// const mockedCommentsService = vi.mocked(commentsService);

afterEach(() => {
  vi.resetAllMocks();
});
it("renders an author", async () => {
  const mockComments = [
    {
      id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
      author: "Srdjan",
      body: "Sint in in sunt amet.",
      postedAt: 1550488214207,
      replies_count: 3,
      replies: [
        {
          id: "116dbd01-d5f3-4dfb-afeb-f822a9264a5e",
          comment_id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
          author: "Kathleen Nikolaus",
          body: "Officia suscipit sint sint impedit nemo. Labore aut et quia quasi ut. Eos voluptatibus quidem eius delectus beatae excepturi.",
          postedAt: 1550419941546,
        },
      ],
    },
  ];
  mockedGetComments.mockResolvedValue(mockComments);

  render(<App />);

  const author = await screen.findByRole("heading", {
    level: 3,
    name: "Srdjan",
  });
  expect(author).toBeInTheDocument();
});

it("removes a link when the rest of replies are fetched", async () => {
  const mockComments = [
    {
      id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
      author: "Srdjan",
      body: "Sint in in sunt amet.",
      postedAt: 1550488214207,
      replies_count: 2,
      replies: [
        {
          id: "116dbd01-d5f3-4dfb-afeb-f822a9264a5e",
          comment_id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
          author: "Kathleen Nikolaus",
          body: "Officia suscipit sint sint impedit nemo. Labore aut et quia quasi ut. Eos voluptatibus quidem eius delectus beatae excepturi.",
          postedAt: 1550419941546,
        },
      ],
    },
  ];
  const moreReplies = [
    {
      id: "116dbd01-d5f3-4dfb-afeb-f822a926sdsdsde",
      comment_id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
      author: "Some other name",
      body: "Officia suscipit sint sint impedit nemo. Labore aut et quia quasi ut. Eos voluptatibus quidem eius delectus beatae excepturi.",
      postedAt: 1550419941545,
    },
  ];
  mockedGetComments.mockResolvedValue(mockComments);
  mockedGetMoreReplies.mockResolvedValue(moreReplies);
  render(<App />);
  const user = userEvent.setup();
  const link = await screen.findByRole("link", { name: /Show More Replies/ });

  await user.click(link);
  // const removedLink = screen.queryByRole("link", { name: /Show More Replies/ });
  expect(link).not.toBeInTheDocument();
});

/*
waitFor will run the callback passed to it every 50ms
for as long as 1000ms (default timeout) or until it stops
getting errors

findByRole == (waitFor + getByRole)


*/
// it("renders an author", async () => {
//   render(<App />);
//   // our state is []
//   // await waitFor(() => {
//   //   const author = screen.getByRole("heading", { level: 3, name: /Reed/ });

//   //   expect(author).toBeInTheDocument();
//   // });
//   const author = await screen.findByRole("heading", { level: 3, name: /Reed/ });
//   expect(author).toBeInTheDocument();
// });

// import { render, screen } from "@testing-library/react";
// import App from "./App";
// import { getComments } from "./services/index";
// // import * as commentsService from "/services/index";

// vi.mock("./services/index.ts");
// // strips away implementation for every function within this module so they all now return promise that resolves to undefined

// const mockedGetComments = vi.mocked(getComments); //this is only for TypeScript
// // const mockedCommentsService =
