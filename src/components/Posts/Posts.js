import { useState, useEffect } from "react";
import { getPostsApi } from "../../apis/GetPosts";
import { postLikeApi, postUnLikeApi } from "../../apis/PostActions";
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

  const postLiked = (post_id) => {
    postLikeApi("react app", userId, post_id).then((response) => {
      if (response.data.result == "success") {

        setPosts(

          posts.map((post) => {

            if (post.post_id == post_id) {
              post.is_liked = "true";
            }
            return post;

          })

        );
        console.log(posts);

      }
    });
  };

  const postUnLiked = (post_id) => {
    postUnLikeApi("react app", userId, post_id).then((response) => {
      if (response.data.result == "success") {

        setPosts(posts.map((post) => {
          if (post.post_id == post_id) {
            post.is_liked = "false";
          }
          return post;
        }));

      }
    });
  };

  return (
    <>
      {posts.map((post, i) => (

        <Post
          postData={post}
          key={i}
          onLikeClicked={postLiked}
          onUnLikeClicked={postUnLiked}
        />

      ))}
      <br />
      <br />
      <p className="text-danger">{apiErrorMsg}</p>
    </>
  );
};

export default Posts;
