import { useContext } from "react";
import TodoContext from "./TodoContext";

export default function Todo({ todo, id }) {
  const { onDeleteTodo } = useContext(TodoContext);

  return (
    <div className="p-6 rounded bg-pink-600 shadow-xl">
      <div className="flex flex-row justify-between mb-4">
        <h2 className="text-2xl font-bold text-white">{todo.title}</h2>
        <span
          onClick={() => onDeleteTodo(id)}
          className="text-3xl text-white font-bold cursor-pointer"
        >
          &times;
        </span>
      </div>
      <p className="font-bold text-white mb-8">{todo.date}</p>
      <p className="text-white text-justify">
        {todo.description.slice(0, 120)}
      </p>
    </div>
  );
}
