import {useState, createContext} from "react";

const TaskContext = createContext();

function TaskContextProvider({children}){
  const [tasks, setTasks] = useState([]);

  const addTask = (data) => {
    const taskFound = tasks.find(task => task.title === data.title);
    if(taskFound){
      alert("This task was already created!");
      return;
    }
    setTasks(prev => [...prev, data]);
  }
  const deleteTask = (id) => {
    const userInput = confirm("Are you sure?");
    if(!userInput){
      return;
    }
    setTasks(currentTasks => {
      const newTaskList = [...currentTasks];
      newTaskList.splice(id, 1);
      return newTaskList;
    })
  }

  return (
    <TaskContext.Provider value={{ addTask, tasks, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskContextProvider };