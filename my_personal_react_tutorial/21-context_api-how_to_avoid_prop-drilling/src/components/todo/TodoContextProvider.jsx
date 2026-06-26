import { useState } from "react";

import TodoContext from "./TodoContext";

export default function TodoContextProvider({ children }) {
  const [isTodoBtnClicked, setIsTodoBtnClicked] = useState(false);
  const [todos, setTodos] = useState([]);

  const onTodoBtnToggle = () => {
    setIsTodoBtnClicked(!isTodoBtnClicked);
  }
  const onAddTodo = (data) => {
    setTodos((prev) => {
      const todoFound = prev.find((task) => task.title === data.title);
      if (todoFound) {
        console.log("*** todo already present!");
        return prev;
      } else {
        return [...prev, data];
      }
    });
  };
  const onDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo, index) => index !== id));
  };
  return (
    <TodoContext.Provider value={{ todos, onTodoBtnToggle, isTodoBtnClicked, onAddTodo, onDeleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
