import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useSearchParams, useNavigate } from "react-router";
import { EditTaskCreator } from "./TaskReducer";

function EditTask() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const selectedTask = tasks.find((task) => task.id === id);

  const [formData, setFormData] = useState(selectedTask);

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFormSubmit = (ev) => {
    ev.preventDefault();

    dispatch(EditTaskCreator(formData));
    alert("*your task has been updated successfully!");
    navigate(-1);
  };

  return (
    <div className="w-2/4 rounded-xl p-8 shadow-2xl bg-cyan-600 flex flex-col">
      <h2 className="text-3xl capitalize font-bold text-white text-center mb-10">
        Edit Task
      </h2>
      <div className="mb-4">
        <form action="" method="post" onSubmit={handleFormSubmit}>
          <input
            type="hidden"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
          />
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
              placeholder="enter task title"
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
              className="ounded-lg px-2.5 py-3 bg-white font-semibold text-cyan-600"
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
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="flex justify-around items-center gap-4">
            <Link
              to={`/display-tasks`}
              className="w-full py-3 px-5 rounded-lg shadow-lg bg-gray-100 text-md font-semibold text-center text-cyan-600 transition cursor-pointer hover:bg-white"
            >
              Go Back
            </Link>
            <button
              type="submit"
              className="w-full py-3 px-5 rounded-lg shadow-lg bg-gray-100 text-md font-semibold text-center text-cyan-600 transition cursor-pointer hover:bg-white"
            >
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTask;
