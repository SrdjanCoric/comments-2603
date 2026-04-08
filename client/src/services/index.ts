import axios from "axios";
import {
  commentWithReplies,
  commentsWithReplies,
  repliesSchema,
  type NewComment,
} from "../types";

export const getComments = async () => {
  const { data } = await axios.get("/api/comments");
  return commentsWithReplies.parse(data);
};

export const getMoreReplies = async (commentId: string) => {
  const { data } = await axios.get(
    `/api/comment_replies?comment_id=${commentId}`,
  );
  return repliesSchema.parse(data);
};

export const createComment = async (newComment: NewComment) => {
  const { data } = await axios.post("/api/comments", { ...newComment });
  return commentWithReplies.parse(data);
};
