// styles
import "../css/SingUp.css";

export default function SingUp() {
  // classes
  const sectionContainerClass = "singup__container";
  const sectionTextsBox = "singup__texts";
  const sectionBtnsBox = "singup__btns";
  const sectionTitle = "singup__title";
  const sectionText = "singup__text";
  const sectionBtn = "singup__btn";
  const sectionLink = "singup__link";
  const darkBtnClass = "black-btn";
  const lightBtnClass = "light-black-btn";

  // texts
  const singupTitle = "Ready to get started?";
  const singupText = "Sign up or contact us";
  const singupFirstBtnText = "Find gift now";
  const singupSecondBtnText = "how it works";

  // links
  const firstHref = "https://example.com/";
  const secondHref = "#about";
  const rel = "noopener noreferrer nofollow";
  const target = "_blank";

  return (
    <>
      <section className={sectionContainerClass}>
        <ul className={sectionTextsBox}>
          <li className={sectionTitle}>{singupTitle}</li>
          <li className={sectionText}>{singupText}</li>
        </ul>
        <ul className={sectionBtnsBox}>
          <li className={sectionBtn}>
            <a
              className={`${sectionLink} ${darkBtnClass}`}
              href={firstHref}
              target={target}
              rel={rel}>
              {singupFirstBtnText}
            </a>
          </li>
          <li className={sectionBtn}>
            <a className={`${sectionLink} ${lightBtnClass}`} href={secondHref}>
              {singupSecondBtnText}
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
