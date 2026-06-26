import { useContext, useState } from "react";
import TodoContext from "./TodoContext";

export default function AddTask() {
  const [formData, setFormData] = useState({
    title: "",
    date: new Date().toLocaleDateString(),
    description: "",
  });
  const [errors, setError] = useState({ title: "", date: "", description: "" });

  const { onAddTodo, onTodoBtnToggle } = useContext(TodoContext);

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((other) => ({ ...other, [name]: value }));
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();

    if (formData.title.length === 0) {
      setError((errors) => ({
        ...errors,
        title: "***the title field is required",
      }));
      return false;
    }
    if (formData.date.length === 0) {
      setError((errors) => ({
        ...errors,
        date: "***the date field is required",
      }));
      return false;
    }
    if (formData.description.length === 0) {
      setError((errors) => ({
        ...errors,
        description: "***the description field is required",
      }));
      return false;
    }

    onAddTodo({ ...formData });
    setFormData({
      title: "",
      date: new Date().toLocaleDateString(),
      description: "",
    });
    onTodoBtnToggle();
  };

  return (
    <div className="w-1/2 p-10 bg-pink-600 rounded shadow-2xl">
      <h2 className="text-center text-3xl capitalize font-bold text-white mb-8">
        Add Todo Form
      </h2>
      <p className=" text-white mb-6">*enter the following details</p>
      <div className="">
        <form action="" method="post" className="" onSubmit={handleFormSubmit}>
          <div className="mb-4 flex flex-col gap-2">
            <label htmlFor="title" className="text-lg font-bold text-white">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="w-full px-4 py-2 bg-white rounded text-pink-600 font-semibold"
              value={formData.title}
              onChange={handleInputChange}
            />
            <span className="font-semibold text-red-300">
              {errors.title.length > 0 ? errors.title : null}
            </span>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <label htmlFor="date" className="text-lg font-bold text-white">
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full px-4 py-2 bg-white rounded text-pink-600 font-semibold"
              value={formData.date}
              onChange={handleInputChange}
            />
            <span className="">
              {errors.date.length > 0 ? errors.date : null}
            </span>
          </div>
          <div className="mb-8 flex flex-col gap-2">
            <label
              htmlFor="description"
              className="text-lg font-bold text-white"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows={5}
              className="w-full px-4 py-2 bg-white rounded text-pink-600 font-semibold"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
            <span className="">
              {errors.description.length > 0 ? errors.description : null}
            </span>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <button
              type="submit"
              className="w-full py-2 text-center text-lg font-semibold text-pink-600 bg-gray-200 rounded cursor-pointer hover:bg-white hover:shadow-xl"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
