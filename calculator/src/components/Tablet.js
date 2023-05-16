//  import
import { useState } from "react";
import TopBar from "./TopBar";
import UserOutput from "./UserOutput";
import Buttons from "./Buttons";

export default function Tablet({ theme, changeTheme }) {
  // classes
  const containerClass = "container-fluid";

  // states
  const [history, setHistory] = useState([]);
  const [result, setResult] = useState("0");

  // HTML
  return (
    <div className={containerClass}>
      <TopBar theme={theme} changeTheme={changeTheme} />
      <UserOutput history={history} result={result} />
      <Buttons
        history={history}
        setHistory={setHistory}
        result={result}
        setResult={setResult}
      />
    </div>
  );
}
