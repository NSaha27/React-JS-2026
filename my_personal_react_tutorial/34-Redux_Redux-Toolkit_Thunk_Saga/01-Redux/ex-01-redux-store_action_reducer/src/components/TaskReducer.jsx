const initialState = {
  tasks: [],
};

function TaskReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          } else {
            return task;
          }
        }),
      };
    default:
      return state;
  }
}

function FetchTaskCreator() {
  return async function (dispatch) {
    const API_Endpoint = "https://dummyjson.com/todos?limit=7&skip=5";
    try {
      const res = await fetch(API_Endpoint);
      const tasks = await res.json();

      const updatedTasks = tasks.todos.map((task, index) => {
        return {
          id: "t_" + index,
          title: task.todo,
          date: new Date().toLocaleDateString(),
          description: task.todo,
        };
      });
      dispatch({
        type: "ADD_TASK",
        payload: updatedTasks,
      });
    } catch (err) {
      console.error(err.message);
      return false;
    }
  };
}
function AddTaskCreator(data) {
  return { type: "ADD_TASK", payload: data };
}
function DeleteTaskCreator(id) {
  return { type: "DELETE_TASK", payload: id };
}
function EditTaskCreator(data) {
  return { type: "UPDATE_TASK", payload: data };
}

export {
  TaskReducer,
  FetchTaskCreator,
  AddTaskCreator,
  DeleteTaskCreator,
  EditTaskCreator,
};
