import { useState } from "react";

function AddTodo({ onAddTodo }) {
  const [todo, setTodo] = useState("");

  const handleInputChange = (ev) => {
    const todoData = ev.target;
    setTodo(todoData.value);
  };
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    if (typeof todo !== "string") {
      console.error("*invalid data type!");
      return false;
    }
    if (todo.length === 0) {
      console.error("*todo data cannot be empty!");
      return false;
    }
    onAddTodo(todo);
    setTodo("");
  };

  return (
    <div className="mt-12 mb-8">
      <form method="post" onSubmit={handleFormSubmit} className="flex">
        <input
          type="text"
          name="todoData"
          id="todoData"
          className="w-full bg-white py-2.5 px-4 rounded-l-3xl text-lg font-semibold text-gray-900"
          placeholder="enter your todo details here..."
          value={todo}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="py-2.5 px-4 rounded-r-3xl bg-white ml-1 text-lg font-semibold text-gray-900 capitalize cursor-pointer transition-[0.2s] hover:bg-amber-600 hover:text-white"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
