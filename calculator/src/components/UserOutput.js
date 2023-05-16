export default function UserOutput({ history, result }) {
  // classes
  const containerClass = "numbers__container";
  const topBoxNumbersClass = "numbers__top";
  const botBoxNumbersClass = "numbers__bot";
  const topNumbersClass = "numbers__top-text";
  const botNumbersClass = "numbers__bot-text";

  // HTML
  return (
    <div className={containerClass}>
      <div className={topBoxNumbersClass}>
        <p className={topNumbersClass}>{history.join(" ")}</p>
      </div>
      <div className={botBoxNumbersClass}>
        <p className={botNumbersClass}>
          {String(result).length > 11
            ? String(Number(result).toExponential(6))
            : String(result)}
        </p>
      </div>
    </div>
  );
}
