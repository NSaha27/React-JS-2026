import {useContext, useState} from "react";

import {PostContext} from "../posts/PostContextProvider";

function CreatePost(){
  const {addPost} = useContext(PostContext);
  const [formData, setFormData] = useState({userID: "", title: "", description: "", image: ""});

  const handleInputChange = (ev) => {
    const {name, value} = ev.target;
    setFormData(prev => ({...prev, [name]: value}));
  }
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    addPost(formData);
    setFormData({ userID: "", title: "", description: "", image: "" });
  }

  return <div className="">
    <h1 className="">Create Post</h1>
    <div className="">
      <form action="" method="post" onSubmit={handleFormSubmit}>
        <input type="hidden" name="userID" value={formData.userID} onChange={handleInputChange} />
        <div className=""><label htmlFor="title" className="">Title</label><br /><input type="text" name="title" id="title" className="" value={formData.title} onChange={handleInputChange} /></div>
        <div className=""><label htmlFor="description" className="">Description</label><br /><input type="text" name="description" id="description" className="" value={formData.description} onChange={handleInputChange} /></div>
        <div className=""><label htmlFor="image" className="">Select Image</label><br /><input type="text" name="image" id="image" className="" value={formData.image} onChange={handleInputChange} /></div>
        <div className=""><button type="submit" className="">Create</button></div>
      </form>
    </div>
  </div>
}

export default CreatePost;