import { FaCheckCircle } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

function Todo({ todo, id, onCompleteTodo, onDeleteTodo }) {
  return (
    <div className="w-full py-3 px-5 bg-white rounded-3xl flex items-center justify-between">
      <span className={`${todo.isDone ? "line-through" : "none"}`}>
        {todo.todo}
      </span>
      <span
        className={`${todo.isDone ? "line-through" : "none"}`}
      >{`${todo.createDate} ${todo.createTime}`}</span>
      <FaCheckCircle
        className={`text-xl ${todo.isDone ? "text-green-500" : "text-red-500"}`}
        onClick={() => onCompleteTodo(id)}
      />
      <RiDeleteBin5Fill
        className="text-2xl text-red-500"
        onClick={() => onDeleteTodo(id)}
      />
    </div>
  );
}

export default Todo;
