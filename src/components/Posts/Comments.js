import { useState } from "react";

const Comments = ({ comment }) => {
  const [userId, setUserId] = useState(localStorage.getItem("user_id"));

  return (
    <>
      <div className="media mb-2">
        <img src={comment.user_pic} alt="" className="link-icon img-round" />
        <div className="media-body ml-2 fb-bg pl-1 rounded-lg">
          <strong>{comment.user_name}</strong>
          <p>{comment.comment}</p>
        </div>
      </div>
      {userId == comment.user_id && <p className="ml-3">Edit | Delete</p>}
    </>
  );
};

export default Comments;

// comment: "1 People tell me that Brené Brown's work, more than anyone"
// comment_id: "122"
// user_id: "125"
// user_name: "Simon Sinic"
// user_pic:
