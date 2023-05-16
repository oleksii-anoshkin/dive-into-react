// imports
import { useState } from "react";
import Tablet from "../components/Tablet";

export default function App() {
  // classes
  const containerClass = "container text-center";
  const rowClass = "row";
  const colClass = "col";
  const colAutoClass = "col-md-auto";

  // states
  const [theme, setTheme] = useState("dark");

  // HTML
  return (
    <div className={`${containerClass} ${theme}`}>
      <div className={rowClass}>
        <div className={colClass}></div>
        <div className={colAutoClass}>
          <Tablet theme={theme} changeTheme={setTheme} />
        </div>
        <div className={colClass}></div>
      </div>
    </div>
  );
}
