import Todo from "./Todo";

function DisplayTodos({ todoList, onCompleteTodo, onDeleteTodo }) {
  return (
    <div className="flex flex-col gap-6">
      {todoList.map((todo, index) => {
        return (
          <Todo
            key={index}
            todo={todo}
            id={index}
            onCompleteTodo={onCompleteTodo}
            onDeleteTodo={onDeleteTodo}
          />
        );
      })}
    </div>
  );
}

export default DisplayTodos;
