import {
  faGlobe,
  faGlobeAsia,
  faLaugh,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = ({ postData, onLikeClicked, onUnLikeClicked }) => {
  const likeClicked = () => {
    console.log("like clicked", postData.post_id);
    onLikeClicked(postData.post_id);
  };

  const unLikeClicked = () => {
    console.log("unlike clicked", postData.post_id);
    onUnLikeClicked(postData.post_id);
  };

  return (
    <div className="card mt-4">
      <div className="card-body">
        {/* proifle details */}
        <div className="media">
          <img src={postData.user_pic} alt="" className="link-icon img-round" />
          <div className="media-body pl-2">
            <h6 className="fb-no-margin-bottom">{postData.user_name}</h6>
            <span className="text-secondary">
              {postData.user_posted_on} &nbsp;
              <FontAwesomeIcon icon={faGlobeAsia} />
            </span>
          </div>
        </div>
        {/* Post text */}
        <p className="mt-2">{postData.post_desc}</p>
      </div>
      {/* Check if the user posting the image */}
      {postData.post_img.length > 0 && (
        <a href={postData.post_url} target="_blank">
          <img src={postData.post_img} alt="" className="card-img-top" />
        </a>
      )}
      <div className="card-body">
        <div className="fb-left text-left">
          {postData.laugh_count != undefined && (
            <FontAwesomeIcon icon={faLaugh} />
          )}

          {postData.likes_count != undefined && (
            <span>
              <FontAwesomeIcon icon={faThumbsUp} /> {postData.likes_count}
            </span>
          )}
        </div>
        <div className="fb-right text-right">Comments</div>
      </div>
      <div className="card-body">
        <hr />
        <div className="row">
          <div className="col-lg-3 text-center">
            {postData.is_liked == "true" && (
              <div className="text-primary" onClick={unLikeClicked}>
                <FontAwesomeIcon icon={faThumbsUp} /> Like
              </div>
            )}
            {postData.is_liked == "false" && (
              <div onClick={likeClicked}>
                <FontAwesomeIcon icon={faThumbsUp} /> Like
              </div>
            )}
          </div>
          <div className="col-lg-3 text-center">Comment</div>
          <div className="col-lg-3 text-center">Share</div>
          <div className="col-lg-2 text-right">Profile</div>
        </div>
      </div>
    </div>
  );
};

export default Post;

// comments_count: "10"
// likes_count: "100"
// post_desc: "People tell me that Brené Brown's work, more than anyone else, is the perfect companion to my work. So what a treat for me to talk to Brené to further explore… and debate, well, a whole lot of things. This is…A Bit of Optimism.Listen at apple.co/simonsinek or anywhere you get your podcasts."
// post_img: "https://scontent.fhyd1-3.fna.fbcdn.net/v/t1.6435-9/p960x960/172888748_10159372537561499_4370703813592906975_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=2c4854&_nc_ohc=IfBI5Rn3pZAAX-_jL6r&_nc_ht=scontent.fhyd1-3.fna&tp=6&oh=41eff3b58d5391e5adb41b6cad0b8770&oe=6099A74E"
// post_url: "https://www.facebook.com/simonsinek/photos/a.166396636498/10159372537551499/?__cft__[0]=AZXgtGxiUWF8OY8CG4j0D0v0pzkLifMM00JH__31n62XvAqQUF3RrNg2ym0pMyZYzkhixyQLdGxI2tW5JSbxpuLe-oA1JrdmHBdDg8hfQo5qJXZjLYShXWexmdK-nOxmNmnk7pPkNh7WwcUG_ejy3RTVpZYRe9vokOMy1RyTqAlJvyJJ-vY5fRKZKqJCOoVUy5e2RQGDB9IsFU5vxyo5jRPT&__tn__=EH-R"
// user_name: "Simon Sinic"
// user_pic: "https://scontent.fhyd1-3.fna.fbcdn.net/v/t1.6435-1/cp0/p60x60/152177841_10159245228466499_1643468989544407174_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=1eb0c7&_nc_ohc=ZiAeUuVvMgQAX_UU2-E&_nc_ht=scontent.fhyd1-3.fna&tp=27&oh=40b89f1fcfbc7b744736c776408b85eb&oe=609CD01A"
// user_posted_on: "4 H"
// laugh_count: "12"
// heart_count: "15"
// is_liked: true
