import {createContext, useState} from "react";

const PostContext = createContext();

function PostContextProvider(children){
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    let postFound;
    try{
      postFound = findPost(post.title);
    }catch(err){
      alert(err.message);
      return false;
    }
    if(postFound){
      alert("A similar post is already created!");
      return false;
    }
    post["id"] = posts.length;
    setPosts(curPosts => [...curPosts, post]);
    alert("A new post is created!");
    return true;
  }
  const findPost = (id) => {
    if(typeof id !== "number"){
      throw new Error("Invalid post Id!");
    }
    const postFound = posts.find(post => post.id === id);
    return postFound;
  }
  const getAllPosts = () => {
    return posts;
  }
  const getPostByUserID = (id) => {
    if(typeof id !== "string" || id.length === 0){
      throw new Error("Invalid user Id!");
    }
    const postsFound = posts.map(post => post.userID === id);
    return postsFound;
  }
  const editPost = (newData) => {
    try {
      const postFound = findPost(newData.id);
      if(!postFound){
        alert("No such post was found!");
        return false;
      }
      setPosts(curPosts => {
        return curPosts.map(post => {
          if(post.id === newData.id){
            return newData;
          }else{
            return post;
          }
        })
      })
    } catch (err) {
      alert(err.message);
      return false;
    }
  }
  const deletePost = (id) => {
    try{
      const postFound = findPost(id);
      if (!postFound) {
        alert("No such post was found!");
        return false;
      }
      setPosts(curPosts => curPosts.filter(post => post.id !== id));
    }catch(err){
      alert(err.message);
      return false;
    }
  }

  return <PostContext.Provider value={{addPost, findPost, getAllPosts, getPostByUserID, editPost, deletePost}}>
    {children}
  </PostContext.Provider>
}

export {PostContext, PostContextProvider};