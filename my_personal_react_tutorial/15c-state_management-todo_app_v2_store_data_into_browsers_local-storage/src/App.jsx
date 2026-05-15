import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import ClearAllTodos from "./components/ClearAllTodos";
import DisplayTodos from "./components/DisplayTodos";
import Header from "./components/Header";

function App() {
  const [todoList, setTodoList] = useState([]);
  const timer = {
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  };

  const handleAddTodo = (todo) => {
    setTodoList((curData) => [
      ...curData,
      {
        todo: todo,
        createDate: timer.date,
        createTime: timer.time,
        isDone: false,
      },
    ]);
  };
  const handleCompleteTodo = (id) => {
    setTodoList((curData) =>
      curData.map((todo, index) => {
        if (index === id) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      }),
    );
  };
  const handleDeleteTodo = (id) => {
    setTodoList((curData) => curData.filter((todo, index) => index !== id));
  };
  const handleClearAllTodos = () => {
    setTodoList([]);
  };
  return (
    <>
      <div className="w-1/2 mx-auto my-8 rounded-xl bg-amber-400 p-8 flex flex-col gap-6 shadow-xl">
        <Header timer={timer} />
        <AddTodo onAddTodo={handleAddTodo} />
        <DisplayTodos
          todoList={todoList}
          onCompleteTodo={handleCompleteTodo}
          onDeleteTodo={handleDeleteTodo}
        />
        <ClearAllTodos onClearAllTodos={handleClearAllTodos} />
      </div>
    </>
  );
}

export default App;
