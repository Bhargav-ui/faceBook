import { useState, useEffect } from "react";
import { getPostsApi } from "../../apis/GetPosts";

const Posts = () => {
  const [userId, setUserId] = useState(localStorage.getItem("user_id"));
  const [apiErrorMsg, setApiErrorMsg] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostsApi("React App", userId).then((response) => {
      console.log(response);
      const apiData = response.data;
      if (apiData.result == "success") {
        setApiErrorMsg("");
        setPosts(apiData.data);
      } else {
        setApiErrorMsg(apiData.msg);
      }
    });
  }, []);

  return (
    <>
      {posts.map((post) => {
        <p>
          {post.user_name}
          <br />
        </p>;
      })}
      <p className="text-danger">{apiErrorMsg}</p>
    </>
  );
};

export default Posts;
