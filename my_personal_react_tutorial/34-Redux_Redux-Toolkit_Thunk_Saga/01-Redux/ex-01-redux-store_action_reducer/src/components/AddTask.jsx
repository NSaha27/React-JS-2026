import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { AddTaskCreator } from "./TaskReducer";

function AddTask() {
  const [formData, setFormData] = useState({
    title: "",
    date: new Date().toLocaleDateString(),
    description: "",
  });

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFormSubmit = (ev) => {
    ev.preventDefault();

    const id = "t_" + tasks.length;
    const formDataWithId = { ...formData, id: id };
    dispatch(AddTaskCreator(formDataWithId));
    setFormData({
      title: "",
      date: new Date().toLocaleDateString(),
      description: "",
    });
    alert("*your task has been added successfully!");
  };

  return (
    <div className="w-2/4 rounded-xl p-8 shadow-2xl bg-cyan-600 flex flex-col">
      <h2 className="text-3xl capitalize font-bold text-white text-center mb-10">
        Add Task
      </h2>
      <div className="mb-4">
        <form action="" method="post" onSubmit={handleFormSubmit}>
          <div className="mb-4 flex flex-col gap-2">
            <label
              htmlFor="title"
              className="text-lg font-bold capitalize text-white"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="rounded-lg px-2.5 py-3 bg-white font-semibold text-cyan-600"
              placeholder="Enter the task title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <label
              htmlFor="date"
              className="text-lg font-bold capitalize text-white"
            >
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="rounded-lg px-2.5 py-3 bg-white font-semibold text-cyan-600"
              value={formData.date}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-8 flex flex-col gap-2">
            <label
              htmlFor="description"
              className="text-lg font-bold capitalize text-white"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              className="rounded-lg px-2.5 py-3 bg-white font-semibold text-cyan-600"
              rows={5}
              cols={30}
              placeholder="Enter more about the task"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="flex justify-around items-center gap-4">
            <Link
              to={`/display-tasks`}
              className="w-full py-3 px-5 rounded-lg shadow-lg bg-gray-100 text-md font-semibold text-center text-cyan-600 transition cursor-pointer hover:bg-white"
            >
              center Go Back
            </Link>
            <button
              type="submit"
              className="w-full py-3 px-5 rounded-lg shadow-lg bg-gray-100 text-md font-semibold text-center text-cyan-600 transition cursor-pointer hover:bg-white"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
