import {useContext} from "react";
import {TaskContext} from "./TaskContextProvider";

function DisplayTask(){
  const {tasks, deleteTask} = useContext(TaskContext);

  return <div className="">
    {
      tasks.length === 0 ? <h3>No task is yet added!</h3> :
      <>
        <p>*you have to complete the following tasks :</p>
        <div>
          {
            tasks.map((task, index) => {
              return (
                <div key={index}>
                  <h2>{task.title}</h2>
                  <h4>{task.date}</h4>
                  <p>{task.description}</p>
                  <p><button onClick={deleteTask}>Delete</button></p>
                </div>
              );
            })
          }
        </div>
      </>
    }
  </div>
}

export default DisplayTask;