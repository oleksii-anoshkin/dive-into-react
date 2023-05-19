// imports
export default function Buttons({ history, setHistory, result, setResult }) {
  // classes
  const containerClass = "buttons__container";
  const allBtnClass = "btn-app";
  const numbersBtnClaas = "number";
  const funcsBtnClaas = "funcs";
  const equalsBtnClaas = "equals";

  // functions
  function calcFunc(key, firstNumb, secondNumb) {
    switch (key) {
      case "+":
        return String(Number(firstNumb) + Number(secondNumb));

      case "-":
        return String(Number(firstNumb) - Number(secondNumb));

      case "x":
        return String(Number(firstNumb) * Number(secondNumb));

      case "/":
        return String(Number(firstNumb) / Number(secondNumb));

      default:
        break;
    }
  }

  function arithmeticFunc(key) {
    let resultValue;

    switch (true) {
      case history.length === 0:
        setHistory([].concat(result, key));
        break;

      case history.length === 4:
        setHistory([].concat(result, key));
        break;

      case history.length === 1:
        setHistory([].concat(result, key));
        break;

      case history.length === 2:
        resultValue = calcFunc(history[1], history[0], result);
        setResult(resultValue);
        setHistory([].concat(resultValue, key));
        logger(resultValue);
        break;

      default:
        break;
    }
  }

  function equals() {
    let resultValue;

    switch (true) {
      case history.length === 0:
        setResult(result);
        setHistory([].concat(result, "="));
        logger(result);
        break;

      case history[1] === "=":
        setResult(result);
        setHistory([].concat(result, "="));
        logger(result);
        break;

      case history.length === 2:
        resultValue = calcFunc(history[1], history[0], result);
        setHistory([].concat(history, result, "="));
        setResult(resultValue);
        logger(resultValue);
        break;

      case history.length === 4:
        resultValue = calcFunc(history[1], history[2], result);
        setHistory([].concat(result, history[1], history[2], "="));
        setResult(resultValue);
        logger(resultValue);
        break;

      default:
        break;
    }
  }

  function logger(resultValue) {
    const msg = `
    First operand: ${history[0] ? history[0] : result}
    Second operand: ${result ? result : ""}
    Operation: ${history[1] ? setOperation(history[1]) : "equals"}
    Result: ${resultValue}
    `;
    console.log(msg);
  }

  function setOperation(key) {
    switch (key) {
      case "+":
        return "add, '+'";

      case "-":
        return "subtract, '-'";

      case "/":
        return "divide, '/'";

      case "x":
        return "multiply, 'x'";

      default:
        break;
    }
  }

  // HTML
  return (
    <div className={containerClass}>
      <button
        className={`${allBtnClass} ${funcsBtnClaas}`}
        type="button"
        onClick={() => {
          const newResult = String(Number(result) / 100);
          setResult(newResult);
          setHistory([].concat(newResult));
        }}>
        %
      </button>
      <button
        className={`${allBtnClass} ${funcsBtnClaas}`}
        type="button"
        onClick={() => setResult("0")}>
        CE
      </button>
      <button
        className={`${allBtnClass} ${funcsBtnClaas}`}
        type="button"
        onClick={() => {
          setResult("0");
          setHistory([]);
        }}>
        C
      </button>
      <button
        className={`${allBtnClass} ${funcsBtnClaas}`}
        type="button"
        onClick={() =>
          result.length === 1
            ? setResult("0")
            : setResult(result.slice(0, result.length - 1))
        }>
        Del
      </button>
      <button
        className={`${allBtnClass} ${funcsBtnClaas}`}
        type="button"
        onClick={() => {
          setHistory([].concat("1/", "(", `${result}`, ")"));
          setResult(String(1 / Number(result)));
        }}>
        <sup>1</sup>/<sub>x</sub>
      </button>
      <button
        className={`${allBtnClass} ${funcsBtnClaas}`}
        type="button"
        onClick={() => {
          setHistory([].concat("sqr", "(", `${result}`, ")"));
          setResult(String(Math.pow(Number(result), 2)));
        }}>
        x<sup>2</sup>
      </button>
      <button
        className={`${allBtnClass} ${funcsBtnClaas}`}
        type="button"
        onClick={() => {
          if (Number(result) > 0) {
            setHistory([].concat("√", "(", `${result}`, ")"));
            setResult(String(Math.sqrt(Number(result), 2)));
          } else {
            setResult("0");
            setHistory([]);
          }
        }}>
        <sup>2</sup>&#8730;x
      </button>
      <button
        className={`${allBtnClass} ${funcsBtnClaas}`}
        type="button"
        onClick={() => arithmeticFunc("/")}>
        &#247;
      </button>
      <button
        className={`${allBtnClass} ${numbersBtnClaas}`}
        type="button"
        onClick={() =>
          result === "0" || result === history[0]
            ? setResult("7")
            : setResult((result += "7"))
        }>
        7
      </button>
      <button
        className={`${allBtnClass} ${numbersBtnClaas}`}
        type="button"
        onClick={() =>
          result === "0" || result === history[0]
            ? setResult("8")
            : setResult((result += "8"))
        }>
        8
      </button>
      <button
        className={`${allBtnClass} ${numbersBtnClaas}`}
        type="button"
        onClick={() =>
          result === "0" || result === history[0]
            ? setResult("9")
            : setResult((result += "9"))
        }>
        9
      </button>
      <button
        className={`${allBtnClass} ${funcsBtnClaas}`}
        type="button"
        onClick={() => arithmeticFunc("x")}>
        x
      </button>
      <button
        className={`${allBtnClass} ${numbersBtnClaas}`}
        type="button"
        onClick={() =>
          result === "0" || result === history[0]
            ? setResult("4")
            : setResult((result += "4"))
        }>
        4
      </button>
      <button
        className={`${allBtnClass} ${numbersBtnClaas}`}
        type="button"
        onClick={() =>
          result === "0" || result === history[0]
            ? setResult("5")
            : setResult((result += "5"))
        }>
        5
      </button>
      <button
        className={`${allBtnClass} ${numbersBtnClaas}`}
        type="button"
        onClick={() =>
          result === "0" || result === history[0]
            ? setResult("6")
            : setResult((result += "6"))
        }>
        6
      </button>
      <button
        className={`${allBtnClass} ${funcsBtnClaas}`}
        type="button"
        onClick={() => arithmeticFunc("-")}>
        -
      </button>
      <button
        className={`${allBtnClass} ${numbersBtnClaas}`}
        type="button"
        onClick={() =>
          result === "0" || result === history[0]
            ? setResult("1")
            : setResult((result += "1"))
        }>
        1
      </button>
      <button
        className={`${allBtnClass} ${numbersBtnClaas}`}
        type="button"
        onClick={() =>
          result === "0" || result === history[0]
            ? setResult("2")
            : setResult((result += "2"))
        }>
        2
      </button>
      <button
        className={`${allBtnClass} ${numbersBtnClaas}`}
        type="button"
        onClick={() =>
          result === "0" || result === history[0]
            ? setResult("3")
            : setResult((result += "3"))
        }>
        3
      </button>
      <button
        className={`${allBtnClass} ${funcsBtnClaas}`}
        type="button"
        onClick={() => arithmeticFunc("+")}>
        +
      </button>
      <button
        className={`${allBtnClass} ${numbersBtnClaas}`}
        type="button"
        onClick={() => setResult(result * -1)}>
        <sup>+</sup>/<sub>-</sub>
      </button>
      <button
        className={`${allBtnClass} ${numbersBtnClaas}`}
        type="button"
        onClick={() =>
          result === "0" || result === history[0]
            ? setResult("0")
            : setResult((result += "0"))
        }>
        0
      </button>
      <button
        className={`${allBtnClass} ${numbersBtnClaas}`}
        type="button"
        onClick={() => setResult((result += "."))}>
        .
      </button>
      <button
        className={`${allBtnClass} ${equalsBtnClaas}`}
        type="button"
        onClick={equals}>
        =
      </button>
    </div>
  );
}
