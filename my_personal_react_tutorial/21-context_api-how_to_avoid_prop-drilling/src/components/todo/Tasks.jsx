import { useContext } from "react";

import AddTask from "./AddTask";
import Todo from "./Todo";
import TodoContext from "./TodoContext";

export default function Tasks() {
  const { todos, onTodoBtnToggle, isTodoBtnClicked } = useContext(TodoContext);
  return (
    <div className="w-full min-h-screen bg-pink-200 flex flex-col justify-center items-center py-10 px-4">
      <div className="w-1/2 flex mb-3">
        <button
          className="ml-auto border-0 py-2 px-6 rounded bg-pink-600 text-white font-semibold cursor-pointer hover:bg-pink-700"
          onClick={() => onTodoBtnToggle()}
        >
          Add Todo
        </button>
      </div>
      {isTodoBtnClicked ? (
        <AddTask />
      ) : (
        <div className="p-4 grid grid-cols-3 gap-8">
          {todos.length === 0 ? (
            <h2 className="text-3xl font-bold text-pink-600">
              No Todo is yet added
            </h2>
          ) : (
            todos.map((todo, index) => {
              return <Todo key={index} todo={todo} id={index} />;
            })
          )}
        </div>
      )}
    </div>
  );
}
