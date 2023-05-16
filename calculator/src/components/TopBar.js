//  import
import IcoCalc from "./IcoCalc";
import ThemeBtn from "./ThemeBtn";

export default function TopBar({ theme, changeTheme }) {
  // classes
  const containerClass = "top__bar";
  const boxClass = "top__box";
  const titleClass = "top__text";

  // texts
  const titleText = "Calculator";

  // HTML
  return (
    <div className={containerClass}>
      <div className={boxClass}>
        <IcoCalc />
        <p className={titleClass}>{titleText}</p>
      </div>
      <ThemeBtn theme={theme} changeTheme={changeTheme} />
    </div>
  );
}
