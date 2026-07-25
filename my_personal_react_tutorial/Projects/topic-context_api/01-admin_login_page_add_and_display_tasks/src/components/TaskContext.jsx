import { createContext, useReducer } from "react";

const TaskContext = createContext();
const TaskDispatchContext = createContext();

const initialTasks = [
  {
    title: "Initiate a cleanliness drive",
    date: "2026-07-26",
    description:
      "Gather your team and initiate a cleanliness drive to your locality",
    department: "Social Welfare",
    status: "incomplete",
    rating: 0,
  },
];

const taskReducer = (curTasks, action) => {
  if (action.type === "ADD_TASK") {
    const taskFound = curTasks.find(
      (task) => task.title.toLowerCase() === action.payload.title.toLowerCase(),
    );
    if (taskFound) {
      console.error("*a task with the same title is already present!");
      return curTasks;
    }
    console.log("*the new task has been added!");
    return [...curTasks, action.payload];
  } else if (action.type === "UPDATE_TASK") {
    const taskFoundAt = curTasks.findIndex(
      (task) => task.title.toLowerCase() === action.payload.title.toLowerCase(),
    );
    if (taskFoundAt !== -1) {
      const newTaskList = [...curTasks];
      newTaskList.splice(taskFoundAt, 1, action.payload);
      console.log("*the task has been updated successfully!");
      return newTaskList;
    } else {
      console.log("*a new task has been added!");
      return [...curTasks, action.payload];
    }
  } else if (action.type === "DELETE_TASK") {
    const taskFoundAt = curTasks.findIndex(
      (task) => task.title.toLowerCase() === action.payload.title.toLowerCase(),
    );
    if (taskFoundAt !== -1) {
      const newTaskList = [...curTasks];
      newTaskList.splice(taskFoundAt, 1);
      console.log("*the task has been deleted successfully!");
      return newTaskList;
    } else {
      console.error("*no such task exists!");
      return curTasks;
    }
  } else {
    console.error("*invalid action type!");
    return curTasks;
  }
};

function TaskContextProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <TaskContext value={tasks}>
      <TaskDispatchContext value={dispatch}>{children}</TaskDispatchContext>
    </TaskContext>
  );
}

export { TaskContext, TaskContextProvider, TaskDispatchContext };
