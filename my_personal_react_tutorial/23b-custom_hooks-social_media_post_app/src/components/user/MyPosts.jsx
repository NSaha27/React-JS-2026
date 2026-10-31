import {useContext} from "react";

import {PostContext} from "../posts/PostContextProvider";

function MyPosts(){
  const { getPostByUserID, deletePost } = useContext(PostContext);

  const userID = 1;
  const posts = getPostByUserID(userID);

  return <div className="">
    <h1 className="">My Posts</h1>
    <div className="">
      {
        posts.map(post => {
          return <div className="" key={post.id}>
            <div className="">
              <img src={`/images/${post.image}`} alt={post.title} className="" />
            </div>
            <div className="">
              <h2 className="">{post.title}</h2>
              <p className="">{post.description}</p>
            </div>
            <div className="">
              <a href={`/user/edit-post?userid=${encodeURIComponent(userID)}`} className="">Edit</a>
              <button className="" onClick={() => deletePost(post.id)}>Delete</button>
            </div>
          </div>
        })
      }
    </div>
  </div>
}

export default MyPosts;