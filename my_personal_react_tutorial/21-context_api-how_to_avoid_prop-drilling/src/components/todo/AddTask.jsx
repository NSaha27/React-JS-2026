import { useState } from "react";

function AddTask({ onAddTodo }) {
  const [formData, setFormData] = useState({ title: "", date: new Date().toLocaleDateString(), description: "" });
  const [error, setError] = useState({ title: "", date: "", description: "" });

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setFormData(other => ({ ...other, [name]: value }));
  }

  const handleFormSubmit = (ev) => {
    ev.preventDefault();

    if (formData.title.length === 0) {
      setError(errors => ({ ...errors, title: "***the title field is required" }));
      return false;
    }
    if (formData.date.length === 0) {
      setError(errors => ({ ...errors, date: "***the date field is required" }));
      return false;
    }
    if (formData.description.length === 0) {
      setError(errors => ({ ...errors, description: "***the description field is required" }));
      return false;
    }

    onAddTodo({ ...formData });
    setFormData({ title: "", date: new Date().toLocaleDateString(), description: "" });
  }

  return <div className="">
    <h2 className="">Add Todo Form</h2>
    <p className="">*enter the following details</p>
    <div className="">
      <form action="" method="post" className="" onSubmit={handleFormSubmit}>
        <div className="">
          <label htmlFor="title" className="">Title</label>
          <input type="text" name="title" id="title" className="" value={todoTitle} onChange={handleInputChange} />
          <span className="">{(errors.title.length > 0) ? errors.title : null}</span>
        </div>
        <div className="">
          <label htmlFor="date" className="">Date</label>
          <input type="date" name="date" id="date" className="" value={todoDate} onChange={handleInputChange} />
          <span className="">{(errors.date.length > 0) ? errors.date : null}</span>
        </div>
        <div className="">
          <label htmlFor="description" className="">Description</label>
          <textarea name="description" id="description" className="" value={todoDescription} onChange={handleInputChange}></textarea>
          <span className="">{(errors.description.length > 0) ? errors.description : null}</span>
        </div>
        <div className="">
          <button type="submit" className="">Add</button>
        </div>
      </form>
    </div>
  </div>
}