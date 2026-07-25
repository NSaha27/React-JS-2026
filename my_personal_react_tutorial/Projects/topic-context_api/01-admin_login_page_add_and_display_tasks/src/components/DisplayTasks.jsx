import { useContext } from "react";

import { TaskContext, TaskDispatchContext } from "./TaskContext";

function DisplayTasks() {
  const tasks = useContext(TaskContext);
  const dispatch = useContext(TaskDispatchContext);

  return (
    <div className="">
      <h1 className="">All Tasks:</h1>
      <table className="">
        <thead>
          <tr>
            <th>SL.</th>
            <th>Title</th>
            <th>Due Date</th>
            <th>Description</th>
            <th>Department</th>
            <th>Status</th>
            <th>Rating</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{task.title}</td>
                <td>{task.date}</td>
                <td>{task.description}</td>
                <td>{task.department}</td>
                <td>{task.status}</td>
                <td>{task.rating}</td>
                <td>
                  <a href="" className="">
                    Edit
                  </a>
                </td>
                <td>
                  <button
                    className=""
                    onClick={() =>
                      dispatch({ type: "DELETE_TASK", payload: task })
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayTasks;
