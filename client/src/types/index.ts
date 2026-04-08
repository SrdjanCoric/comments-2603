import { z } from "zod";

const commentSchema = z.object({
  id: z.string(),
  author: z.string(),
  body: z.string(),
  postedAt: z.number(),
});

export const replySchema = commentSchema.extend({
  comment_id: z.string(),
});

export const commentWithReplies = commentSchema.extend({
  replies_count: z.number(),
  replies: z.array(replySchema),
});

const newCommentSchema = commentSchema.pick({
  author: true,
  body: true,
});

export const commentsWithReplies = z.array(commentWithReplies);

export const repliesSchema = z.array(replySchema);

export type Comment = z.infer<typeof commentSchema>;
export type Reply = z.infer<typeof replySchema>;
export type CommentWithReplies = z.infer<typeof commentWithReplies>;
export type NewComment = z.infer<typeof newCommentSchema>;

// export interface Comment {
//   id: string;
//   author: string;
//   body: string;
//   postedAt: number;
// }

// export interface Reply extends Comment {
//   comment_id: string;
// }

// export interface CommentWithReplies extends Comment {
//   replies_count: number;
//   replies: Reply[];
// }

// export type NewComment = Pick<Comment, "author" | "body">;
