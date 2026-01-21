import { useState } from "react";

function Todo({ todo }) {
  const [todoStatus, setTodoStatus] = useState("pending");

  return (
    <div className="card position-relative w-40">
      <div className="card-header">
        <h2 className="card-title">{todo.title}</h2>
      </div>
      <div className="card-body">
        <h4 className="card-text mb-3">To be completed by {todo.dt}</h4>
        <h5 className="card-subtitle mb-1">Description:</h5>
        <p className="card-text">{todo.desc}</p>
      </div>
      <div
        className={`card-footer text-center text-white font-bold ${todoStatus === "pending" ? "bg-danger" : "bg-success"}`}
      >
        {todoStatus}
      </div>
      <span className="position-absolute top-0 start-100 translate-middle badge form-check">
        <input
          className="form-check-input p-3 border-2 border-primary"
          type="checkbox"
          value=""
          id="checkDefault"
          onClick={() =>
            setTodoStatus(todoStatus === "pending" ? "completed" : "pending")
          }
        />
      </span>
    </div>
  );
}

export default Todo;
