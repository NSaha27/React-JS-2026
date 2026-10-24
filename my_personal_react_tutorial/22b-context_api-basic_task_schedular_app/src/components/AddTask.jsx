import {useRef, useContext} from "react";
import {TaskContext} from "./TaskContextProvider";

function AddTask(){
  const taskTitleRef = useRef(null);
  const taskDateRef = useRef(null);
  const taskDescriptionRef = useRef(null);

  const {addTask} = useContext(TaskContext);

  const handleFormSubmit = (ev) => {
    ev.preventDefault();

    addTask({title: taskTitleRef.current.value, date: taskDateRef.current.value, description: taskDescriptionRef.current.value});

    taskTitleRef.current.value = "";
    taskDateRef.current.value = "";
    taskDescriptionRef.current.value = "";
  }

  return <div className="">
    <h2 className="">Add Task</h2>
    <div className="">
      <p>*enter the following task details :</p>
      <form action="" method="post" onSubmit={handleFormSubmit}>
        <div className=""><label htmlFor="title">Title</label><br /><input type="text" name="title" id="title" ref={taskTitleRef} /></div>
        <div className=""><label htmlFor="date">Date</label><br /><input type="date" name="date" id="date" ref={taskDateRef} /></div>
        <div className=""><label htmlFor="description">Description</label><br /><textarea name="description" id="description" rows="10" cols={24} ref={taskDescriptionRef}></textarea></div>
        <div className=""><button type="submit">ADD</button></div>
      </form>
    </div>
  </div>
}

export default AddTask;