import { useContext, useState } from "react";
import { TaskDispatchContext } from "./TaskContext";

export default function AddTask() {
  const dispatch = useContext(TaskDispatchContext);
  const [formData, setFormData] = useState({
    title: "",
    date: new Date().toLocaleDateString(),
    description: "",
    department: "HR",
    status: "incomplete",
    rating: 0,
  });

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((other) => ({ ...other, [name]: value }));
  };
  const handleAddFormSubmit = (ev) => {
    ev.preventDefault();
    dispatch({
      type: "ADD_TASK",
      payload: { ...formData, status: "incomplete", rating: 0 },
    });
    setFormData({
      title: "",
      date: new Date().toLocaleDateString(),
      description: "",
      department: "HR",
      status: "incomplete",
      rating: 0,
    });
  };
  return (
    <div className="">
      <h2 className="">Add Task</h2>
      <div className="">
        <form action="" method="post" onSubmit={handleAddFormSubmit}>
          <div className="">
            <label htmlFor="title" className="">
              Title
            </label>{" "}
            <br />
            <input
              type="text"
              name="title"
              id="title"
              className=""
              onChange={handleInputChange}
              value={formData.title}
            />
          </div>
          <div className="">
            <label htmlFor="date" className="">
              Date
            </label>{" "}
            <br />
            <input
              type="date"
              name="date"
              id="date"
              className=""
              onChange={handleInputChange}
              value={formData.date}
            />
          </div>
          <div className="">
            <label htmlFor="description" className="">
              Description
            </label>{" "}
            <br />
            <textarea
              name="description"
              id="description"
              className=""
              rows={10}
              cols={30}
              onChange={handleInputChange}
              value={formData.description}
            ></textarea>
          </div>
          <div className="">
            <label htmlFor="" className="">
              Department
            </label>
            <br />
            <select
              name="department"
              id="department"
              className=""
              onChange={handleInputChange}
              value={formData.department}
            >
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="IT">IT</option>
              <option value="Health & Wellness">Health & Wellness</option>
              <option value="PWD">PWD</option>
              <option value="Social Welfare">Social Welfare</option>
            </select>
          </div>
          <div className="">
            <button type="submit" className="">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
