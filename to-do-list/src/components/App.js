import NavBar from "./NavBar";
import HiddenBtn from "./HiddenBtn";
import Todos from "./Todos";
import "../css/App.css";
import { useState } from "react";

export default function App() {
  // classes
  const wrapClass = "container-fluid";
  const componentContainerClass = "container";

  // states
  const [todos, setTodos] = useState([]);
  const [hideCompleted, setHideCompleted] = useState(true);
  const [todoText, setTodoText] = useState("");

  return (
    <div className={wrapClass}>
      <header className={componentContainerClass}>
        <NavBar
          todos={todos}
          setTodos={setTodos}
          todoText={todoText}
          setTodoText={setTodoText}
        />
      </header>
      <main className={componentContainerClass}>
        <Todos
          todos={todos}
          hideCompleted={hideCompleted}
          setTodos={setTodos}
        />
      </main>
      <footer className={componentContainerClass}>
        <HiddenBtn
          hideCompleted={hideCompleted}
          setHideCompleted={setHideCompleted}
        />
      </footer>
    </div>
  );
}
