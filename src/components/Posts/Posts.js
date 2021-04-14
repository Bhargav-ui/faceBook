import { useState, useEffect } from "react";
import { getPostsApi } from "../../apis/GetPosts";
import Post from "./Post";

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
    
  }, [userId]);

  return (
    <>
      {
      posts.map((post, i) => 
        <Post postData={post} key={i} />
      )
      }
      <p className="text-danger">{apiErrorMsg}</p>
    </>
  );
};

export default Posts;
