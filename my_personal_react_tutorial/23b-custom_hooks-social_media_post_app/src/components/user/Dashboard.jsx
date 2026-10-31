import {useContext} from "react";

import { PostContext } from "../posts/PostContextProvider";
import Navbar from "../Navbar";

function Dashboard(){
  const { getAllPosts } = useContext(PostContext);

  return (
    <div className="">
      <Navbar
        routes={[
          { name: "Create Post", path: "/user/create-post" },
          { name: "My Posts", path: "/user/my-posts" },
        ]}
      />
      <div className="">
        <h1 className="">All Posts</h1>
        {
          getAllPosts.map(post => {
            return (
              <div className="">
                <div className="">
                  <img
                    src={`/images/${post.image}`}
                    alt={post.title}
                    className=""
                  />
                </div>
                <div className="">
                  <h2 className="">{post.title}</h2>
                  <p className="">{post.description}</p>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Dashboard;