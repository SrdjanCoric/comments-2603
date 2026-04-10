import React from "react";
import AddCommentForm from "./components/AddCommentForm";
import Comments from "./components/Comments";
import type { CommentWithReplies, NewComment } from "./types";
import { createComment, getComments, getMoreReplies } from "./services/index";
import { ZodError } from "zod";

function App() {
  const [comments, setComments] = React.useState<CommentWithReplies[]>([]);

  React.useEffect(() => {
    const fetchComments = async () => {
      const data = await getComments(); // in our test it should resolve to an array of 1 element with name Srdjan
      setComments(data);
    };
    try {
      fetchComments();
    } catch (e: unknown) {
      if (e instanceof ZodError) {
        console.error(e);
      }
    }
  }, []);

  const handleMoreReplies = async (commentId: string) => {
    const data = await getMoreReplies(commentId);
    setComments((prevComments) => {
      return prevComments.map((c) => {
        if (c.id === commentId) {
          return { ...c, replies: c.replies.concat(data) };
        }
        return c;
      });
    });
  };

  const handleSubmit = async (
    newComment: NewComment,
    callback?: () => void,
  ) => {
    try {
      const data = await createComment(newComment);
      setComments((prevComments) => prevComments.concat(data));
      if (callback) {
        callback();
      }
    } catch (e: unknown) {
      console.error(e);
    }
  };
  return (
    <div>
      <Comments comments={comments} onMoreReplies={handleMoreReplies} />
      <AddCommentForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
