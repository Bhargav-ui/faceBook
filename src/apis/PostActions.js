import axios from "axios";

export const postLikeApi = (source, user_id, post_id) => {
  const form = new FormData();
  form.append("source", source);
  form.append("user_id", user_id);
  form.append("post_id", post_id);

  return axios.post("https://www.edstaack.com/api/learning/fb_like.php", form);
};

export const postUnLikeApi = (source, user_id, post_id) => {
  const form = new FormData();
  form.append("source", source);
  form.append("user_id", user_id);
  form.append("post_id", post_id);

  return axios.post(
    "https://www.edstaack.com/api/learning/fb_unlike.php",
    form
  );
};
