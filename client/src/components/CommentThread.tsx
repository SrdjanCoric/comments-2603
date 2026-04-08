import type { CommentWithReplies } from "../types";
import Comment from "./Comment";

interface CommentThreadProps {
  comment: CommentWithReplies;
  onMoreReplies: (commentId: string) => void;
}

const CommentThread = ({ comment, onMoreReplies }: CommentThreadProps) => {
  const handleMoreReplies = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onMoreReplies(comment.id);
  };
  return (
    <div className="parent-comment">
      <Comment
        author={comment.author}
        body={comment.body}
        postedAt={comment.postedAt}
      />
      {/* <Comment
        comment={comment}
      /> */}
      {/* <Comment
        {...comment}
      /> */}

      <div className="replies">
        {comment.replies.map((reply) => {
          return (
            <Comment
              key={reply.id}
              author={reply.author}
              body={reply.body}
              postedAt={reply.postedAt}
            />
          );
        })}
        {comment.replies_count === comment.replies.length ? null : (
          <a href="#" className="show_more" onClick={handleMoreReplies}>
            Show More Replies ({comment.replies_count - 1})
          </a>
        )}
      </div>
    </div>
  );
};

export default CommentThread;

// const handleMoreReplies = async (e: React.SyntheticEvent) => {
//   e.preventDefault();
//   const { data } = await axios.get(
//     `/api/comment_replies?comment_id=${comment.id}`,
//   );
//   setComments((prevComments) => {
//     return prevComments.map((c) => {
//       if (c.id === comment.id) {
//         return { ...c, replies: c.replies.concat(data) };
//       }
//       return c;
//     });
//   });
// };
