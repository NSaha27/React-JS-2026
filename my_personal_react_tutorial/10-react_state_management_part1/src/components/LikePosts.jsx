import { useEffect, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { GrView } from "react-icons/gr";
import "./css/likeposts.css";

function PostTag({ tag }) {
  return <span className="">{tag}</span>;
}

function Post({ post }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="">{post.title}</h2>
      </div>
      <div className="card-body">
        <p className="">{post.body}</p>
        <p className="tags">
          {post.tags.map((tag) => {
            return <PostTag tag={tag} key={tag} />;
          })}
        </p>
        <p className="views">
          <GrView /> <span className="">{post.views}</span>
        </p>
      </div>
      <div className="card-footer">
        <AiOutlineLike
          style={{
            display: isLiked ? "none" : "flex",
          }}
          onClick={handleLike}
        />
        <AiFillLike
          style={{ display: isLiked ? "flex" : "none" }}
          onClick={handleLike}
        />
        <FaRegCommentDots />
        <FaRegShareFromSquare />
      </div>
    </div>
  );
}

function LikePosts() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=5")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data.posts);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="post-container">
      {loading ? <h3 className="">posts are still loading...</h3> : null}
      {error ? <h3 className="">{error}</h3> : null}
      {posts
        ? posts.map((post) => {
            return <Post post={post} key={post.id} />;
          })
        : null}
    </div>
  );
}

export default LikePosts;
