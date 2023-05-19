import "../css/Todos.css";

export default function Todos({ todos, hideCompleted, setTodos }) {
  // classes
  const todosClass = "list-group";
  const todoClass = "list-group-item";
  const checkInputClass = "form-check-input me-1";
  const todoBoxClass = "input-label-box";
  const checkInputLabelClass = "form-check-label";
  const closeBtnClass = "btn-close";

  // texts
  const closeBtnAria = "delete todo";

  // variables
  const newTodos = [].concat(
    todos.filter((todo) => todo.done === false),
    todos.filter((todo) => todo.done === true)
  );

  const visibleTodos = newTodos.filter((todo) => {
    return hideCompleted ? !todo.done : todo;
  });

  // functions
  function changeTodoDone(todo) {
    const newTodos = [];
    todos.forEach((elem) => {
      elem.id === todo.id
        ? newTodos.push({
            id: todo.id,
            text: todo.text,
            done: !todo.done,
          })
        : newTodos.push(elem);
    });
    setTodos(newTodos);
  }

  function removeTodo(todo) {
    const newTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(newTodos);
  }

  return (
    <ul className={todosClass}>
      {visibleTodos.map((todo) => (
        <li className={todoClass} key={todo.id}>
          <div className={todoBoxClass}>
            <input
              className={checkInputClass}
              type="checkbox"
              value=""
              id={todo.id}
              onChange={() => changeTodoDone(todo)}
              checked={todo.done ? "checked" : ""}
            />
            <label className={checkInputLabelClass} htmlFor={todo.id}>
              {todo.text}
            </label>
          </div>
          <button
            type="button"
            className={closeBtnClass}
            aria-label={closeBtnAria}
            onClick={() => removeTodo(todo)}></button>
        </li>
      ))}
    </ul>
  );
}
