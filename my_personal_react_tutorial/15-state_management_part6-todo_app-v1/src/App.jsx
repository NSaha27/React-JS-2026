import { useState } from "react";

import "./App.css";

function Header() {
  return (
    <div className="p-3 header">
      <h2 className="text-center fs-2 fw-bolder text-primary text-capitalize">
        Todo App
      </h2>
    </div>
  );
}

function Todo() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [listInputs, setListInputs] = useState({});
  const [errors, setErrors] = useState([]);

  const handleTodoTitleChange = (ev) => {
    const title = ev.target.value;
    if (title.trim().length > 0) {
      setTodoTitle(title);
    } else {
      setErrors((curErrs) => [...curErrs, "*please enter a valid todo title!"]);
    }
  };
  const handleTodoDateChange = (ev) => {
    const dt = ev.target.value;
    if (dt.trim().length > 0) {
      setTodoDate(dt);
    } else {
      setErrors((curErrs) => [...curErrs, "*please select a todo date!"]);
    }
  };
  const handleAddTodo = () => {
    try {
      setTodos((curTodos) => [
        ...curTodos,
        {
          title: todoTitle,
          dt: todoDate,
          lists: [],
        },
      ]);
      setTodoTitle("");
      setTodoDate("");
    } catch (err) {
      setErrors((curErrs) => [...curErrs, err.message]);
    }
  };

  const handleTodoDelete = (index) => {
    try {
      if (isNaN(index)) throw new Error("*invalid todo index!");
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    } catch (err) {
      setErrors((curErrs) => [...curErrs, err.message]);
    }
  };

  // handle todo item list

  const handleListInputChange = (index, value) => {
    if (value.trim().length > 0) {
      setListInputs({ ...listInputs, [index]: value });
    } else {
      setErrors((curErrs) => [
        ...curErrs,
        "*please enter a valid todo list heading!",
      ]);
    }
  };
  const handleAddList = (index) => {
    try {
      if (isNaN(index)) throw new Error("*invalid todo index!");
      if (listInputs[index] && listInputs[index].trim().length > 0) {
        const newTodos = [...todos];
        newTodos[index].lists.push({
          heading: listInputs[index],
          isDone: false,
        });
        setTodos(newTodos);
        setListInputs({ ...listInputs, [index]: "" });
      } else {
        throw new Error("*invalid list heading!");
      }
    } catch (err) {
      setErrors((curErrs) => [...curErrs, err.message]);
    }
  };
  const handleTodoItemDone = (todoIndex, listIndex) => {
    try {
      if (isNaN(todoIndex)) throw new Error("*invalid todo index!");
      if (isNaN(listIndex)) throw new Error("*invalid todo list index!");
      const newTodos = [...todos];
      newTodos[todoIndex].lists[listIndex].isDone =
        !newTodos[todoIndex].lists[listIndex].isDone;
      setTodos(newTodos);
    } catch (err) {
      setErrors((curErrs) => [...curErrs, err.message]);
    }
  };

  return (
    <div className="container py-3 todo">
      <div className="bg-primary bg-opacity-25 p-3 d-flex justify-content-center align-items-center gap-3 todo-add-form">
        <input
          type="text"
          name="todoTitle"
          className="form-control w-25 border border-2 border-primary"
          placeholder="Enter todo title..."
          value={todoTitle}
          onChange={handleTodoTitleChange}
        />
        <input
          type="date"
          name="todoDate"
          className="form-control w-25 border border-2 border-primary"
          value={todoDate}
          onChange={handleTodoDateChange}
        />
        <button className="btn btn-success" onClick={handleAddTodo}>
          ADD
        </button>
      </div>
      <div className="p-3 row g-3 disp-todos">
        {Array.isArray(errors) && errors.length > 0 && (
          <ul className="list-group">
            {errors.map((error, index) => {
              return (
                <li className="list-group-item" key={index}>
                  {error}
                </li>
              );
            })}
          </ul>
        )}
        {Array.isArray(todos) && todos.length > 0 ? (
          todos.map((todo, index) => {
            return (
              <div
                className="p-3 border border-2 border-primary col-12 col-md-6"
                key={index}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <span className="">
                    <h3 className="fs-3 fw-bolder text-primary">
                      {todo.title}
                    </h3>
                    <p className="fw-bolder text-secondary">{todo.dt}</p>
                  </span>
                  <span className="">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleTodoDelete(index)}
                    >
                      Delete
                    </button>
                  </span>
                </div>
                <div className="">
                  <div className="todo-item-list">
                    {todo.lists.length > 0 && (
                      <ul className="list-group">
                        {todo.lists.map((list, listIndex) => {
                          return (
                            <li
                              className="list-group-item w-75 mb-2 border border-1 border-light d-flex align-items-center"
                              key={listIndex}
                            >
                              <input
                                type="checkbox"
                                name="isTodoItemDone"
                                className="form-check-input me-1 border border-1 border-secondary"
                                id={`checkbox${listIndex}`}
                                checked={list.isDone}
                                onChange={() =>
                                  handleTodoItemDone(index, listIndex)
                                }
                              />
                              <label
                                htmlFor={`checkbox${listIndex}`}
                                className={`form-check-label ${list.isDone ? "strikeThrough" : ""} fw-semibold`}
                              >
                                {list.heading}
                              </label>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                  <div className="d-flex gap-2">
                    <input
                      type="text"
                      name="todoItemHeading"
                      className="form-control border border-2 border-primary w-75"
                      placeholder="Enter a list item name"
                      value={listInputs[index] || ""}
                      onChange={(ev) =>
                        handleListInputChange(index, ev.target.value)
                      }
                    />
                    <button
                      className="btn btn-success"
                      onClick={() => handleAddList(index)}
                    >
                      Add List
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h2 className="">No todo is yet added</h2>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center">
      <Header />
      <Todo />
    </div>
  );
}

export default App;
