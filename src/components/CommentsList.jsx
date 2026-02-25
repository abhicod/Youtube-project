import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} className="">
      <Comment data={comment} />
      <div className="pl-5 border-l border-gray-600">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
