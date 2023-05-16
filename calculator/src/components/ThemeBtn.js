export default function ThemeBtn({ theme, changeTheme }) {
  const btnClass = "material-symbols-outlined";
  const btnText = "model_training";
  const btnType = "button";

  // HTML
  return (
    <button
      className={btnClass}
      type={btnType}
      onClick={() => {
        theme === "dark" ? changeTheme("light") : changeTheme("dark");
      }}>
      {btnText}
    </button>
  );
}
