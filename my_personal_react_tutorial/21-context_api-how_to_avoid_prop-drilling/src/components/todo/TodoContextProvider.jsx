import TodoContext from "./TodoContext";

function TodoContextProvider({ todos }) {
  return <TodoContext.Provider value={todos}>
    // work with the todos value
  </TodoContext.Provider>
}