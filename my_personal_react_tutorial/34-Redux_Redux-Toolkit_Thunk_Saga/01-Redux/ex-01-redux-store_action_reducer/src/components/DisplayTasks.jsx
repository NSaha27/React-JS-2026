import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { FetchTaskCreator, DeleteTaskCreator } from "./TaskReducer";

function DisplayTasks() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFetchInitialTasksBtnClick = () => {
    dispatch(FetchTaskCreator());
  };
  const handleDltBtnClick = (id) => {
    const option = confirm("Do you want to delete this task?");
    if (option === false) {
      return false;
    }
    dispatch(DeleteTaskCreator(id));
    navigate("/display-tasks");
  };

  return (
    <div className="w-2/3 rounded-xl p-8 shadow-2xl bg-cyan-600 flex flex-col gap-12">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-3xl capitalize font-bold text-white">Tasks :</h2>
        <Link
          to="/add-task"
          className="py-3 px-5 rounded-lg shadow-lg bg-gray-100 text-md font-semibold text-center text-cyan-600 transition cursor-pointer hover:bg-white"
        >
          Add Task
        </Link>
      </div>
      <div className="w-full px-4">
        {tasks.length > 0 ? (
          <div className="flex flex-col justify-center">
            <button
              className="w-2/5 mx-auto py-3 px-5 rounded-lg shadow-lg bg-gray-100 text-md font-semibold text-center text-cyan-600 transition cursor-pointer hover:bg-white mb-12"
              onClick={handleFetchInitialTasksBtnClick}
            >
              Fetch Initial Tasks
            </button>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="p-2 text-lg font-bold text-center text-white text-gray-100 uppercase">
                    ID
                  </th>
                  <th className="p-2 text-lg font-bold text-center text-white text-gray-100 uppercase">
                    Title
                  </th>
                  <th className="p-2 text-lg font-bold text-center text-white text-gray-100 uppercase">
                    Date
                  </th>
                  <th className="p-2 text-lg font-bold text-center text-white text-gray-100 uppercase">
                    Description
                  </th>
                  <th className="p-2 text-lg font-bold text-center text-white text-gray-100 uppercase"></th>
                  <th className="p-2 text-lg font-bold text-center text-white text-gray-100 uppercase"></th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => {
                  return (
                    <tr key={task.id}>
                      <td className="p-2 text-center text-white text-gray-100">
                        {task.id}
                      </td>
                      <td className="p-2 text-center text-white text-gray-100">
                        {task.title}
                      </td>
                      <td className="p-2 text-center text-white text-gray-100">
                        {task.date}
                      </td>
                      <td className="p-2 text-left text-white text-gray-100">
                        {task.description}
                      </td>
                      <td className="p-2 text-center text-white text-gray-100">
                        <Link
                          to={`/edit-task?id=${encodeURIComponent(task.id)}`}
                          className="py-2 px-4 rounded-lg shadow-lg bg-gray-100 text-md font-semibold text-center text-cyan-600 transition cursor-pointer hover:bg-white"
                        >
                          Edit
                        </Link>
                      </td>
                      <td className="p-2 text-center text-white text-gray-100">
                        <button
                          className="py-2 px-4 rounded-lg shadow-lg bg-gray-100 text-md font-semibold text-center text-cyan-600 transition cursor-pointer hover:bg-white"
                          onClick={() => handleDltBtnClick(task.id)}
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
        ) : (
          <h4 className="text-center text-2xl font-bold lowercase text-white mb-4">
            *no task is yet added!
          </h4>
        )}
      </div>
    </div>
  );
}

export default DisplayTasks;
