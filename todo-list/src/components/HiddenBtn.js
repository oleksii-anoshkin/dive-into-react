export default function HiddenBtn({ hideCompleted, setHideCompleted }) {
  // classes
  const firstContainerClass = "navbar bg-body-tertiary";
  const secondContainerClass = "container-fluid";
  const thirdContainerClass = "d-flex";
  const btnClass = "btn btn-secondary";

  // variables
  const message = hideCompleted ? "Show all" : "Hide completed";

  // functions
  function filteredTodos() {
    setHideCompleted(!hideCompleted);
  }

  return (
    <div className={firstContainerClass}>
      <div className={secondContainerClass}>
        <div className={thirdContainerClass}>
          <button className={btnClass} type="button" onClick={filteredTodos}>
            {message}
          </button>
        </div>
      </div>
    </div>
  );
}
