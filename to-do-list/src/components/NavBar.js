import "../css/NavBar.css";
import { useState } from "react";

export default function NavBar({ todos, setTodos, todoText, setTodoText }) {
  // classes
  const navClass = "navbar bg-body-tertiary";
  const containerClass = "container-fluid";
  const titleClass = "navbar-brand mb-0 h1";
  const formClass = "d-flex";
  const inputClass = "form-control me-2";
  const btnClass = "btn btn-secondary";

  // texts
  const titleText = "TODO List";
  const inputAriaText = "Add Todo";
  const btnText = "Add Todo";
  const idTodoName = "todo";

  // states
  const [numb, setNumb] = useState(0);

  // functions
  function addTodo() {
    const newTodos = [].concat(todos, [
      { id: `${idTodoName}-${numb}`, text: todoText, done: false },
    ]);
    setTodos(newTodos);
    setTodoText("");
    setNumb(numb + 1);
  }

  function setNewTodoText(text) {
    setTodoText(text);
  }

  return (
    <nav className={navClass}>
      <div className={containerClass}>
        <span className={titleClass}>{titleText}</span>
        <div className={formClass} role="search">
          <input
            type="text"
            className={inputClass}
            placeholder=""
            value={todoText}
            aria-label={inputAriaText}
            onChange={(event) => setNewTodoText(event.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") addTodo();
            }}
          />
          <button className={btnClass} type="button" onClick={addTodo}>
            {btnText}
          </button>
        </div>
      </div>
    </nav>
  );
}
