import { useState } from "react";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import Sidebar from "./components/Sidebar";
import Todo from "./components/Todo";

// handle add todo form submission
function handleAddTodoFormSubmit(ev, todos) {
  ev.preventDefault();

  const [todoDate, todoTitle, todoDescription] = ev.target;
  const dt = todoDate.value.trim();
  const title = todoTitle.value.trim();
  const description = todoDescription.value.trim();

  const newTodoList = [
    ...todos,
    { id: todos.length, dt: dt, title: title, desc: description },
  ];

  return newTodoList;
}

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      dt: "01/22/2026",
      title: "React.js - learn the concept of state",
      desc: "Learn the concept of state management in React. Start from Udemy and then follow the official documentation of React",
    },
    {
      id: 2,
      dt: "01/23/2026",
      title: "React.js - learn the concept of useEffect hook",
      desc: "Learn the concept of useEffect hook in React. Start from Udemy and then follow the official documentation of React",
    },
  ]);
  const [activeTab, setActiveTab] = useState("view");

  return (
    <div className="min-h-screen p-3 row">
      <Sidebar
        activeTab={activeTab}
        onChange={() => setActiveTab(activeTab === "add" ? "view" : "add")}
      />
      <div className="col-12 col-md-9 d-flex gap-3">
        {activeTab === "add" ? (
          <AddTodoForm
            onSubmit={(ev) => setTodos(handleAddTodoFormSubmit(ev, todos))}
          />
        ) : todos.length > 0 ? (
          todos.map((todo) => {
            return <Todo todo={todo} key={todo.id} />;
          })
        ) : (
          <h2 className="h2">No todo was found...</h2>
        )}
      </div>
    </div>
  );
}

export default App;
