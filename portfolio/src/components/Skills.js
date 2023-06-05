// style
import "../css/Skills.css";
// img
import personImg from "../images/person.jpg";

export default function Skills() {
  // classes
  const containerClass = "max-container skills";
  const sectionTitleClass = "skills__title title-text";
  const sectionItemsClass = "skills__items";
  const sectionItemClass = "skills__item";
  const sectionPersonImgClass = "skills__img";
  const sectionSkillsClass = "skills__skills";
  const sectionSkillClass = "skills__skill";
  const sectionSkillTitleClass = "skills__skill-title subtitle-text";
  const sectionSkillTextClass = "skills__skill-text subtitle-text";
  const sectionSkillColorBoxClass = "skills__skill-box";
  const sectionSkillPrimaryBoxClass = "skills__skill-box-primary";
  const sectionSkillSecondaryBoxClass = "skills__skill-box-secondary";

  // id
  const sectionId = "skills";

  // texts
  const sectionTitleText = "Skills";
  const profileTitleText = "Profile";
  const researchTitleText = "UX Research";
  const toolsTitleText = "Tools";
  const designTitleText = "UI Design";
  const devTitleText = "Front-end Dev";

  const profileText = "UI / UX Engineer, Front-end Developer";
  const toolsResearchText = "Paper, Pen, Balsamiq";
  const toolsDesignText = "Adobe PS, AI, XD, Figma, InVision";
  const toolsDevText = "HTML, CSS, JS, Bootstrap, React";

  return (
    <>
      <section className={containerClass} id={sectionId}>
        <h2 className={sectionTitleClass}>{sectionTitleText}</h2>
        <ul className={sectionItemsClass}>
          <li className={sectionItemClass}>
            <img className={sectionPersonImgClass} src={personImg} alt="..." />
          </li>
          <li className={sectionItemClass}>
            <ul className={sectionSkillsClass}>
              <li className={sectionSkillClass}>
                <h3 className={sectionSkillTitleClass}>{profileTitleText}</h3>
                <p className={sectionSkillTextClass}>{profileText}</p>
              </li>
              <li className={sectionSkillClass}>
                <h3 className={sectionSkillTitleClass}>{researchTitleText}</h3>
                <div className={sectionSkillColorBoxClass}>
                  <span className={sectionSkillPrimaryBoxClass}></span>
                  <span className={sectionSkillSecondaryBoxClass}></span>
                </div>
              </li>
              <li className={sectionSkillClass}>
                <h3 className={sectionSkillTitleClass}>{toolsTitleText}</h3>
                <p className={sectionSkillTextClass}>{toolsResearchText}</p>
              </li>
              <li className={sectionSkillClass}>
                <h3 className={sectionSkillTitleClass}>{designTitleText}</h3>
                <div className={sectionSkillColorBoxClass}>
                  <span className={sectionSkillPrimaryBoxClass}></span>
                  <span className={sectionSkillSecondaryBoxClass}></span>
                </div>
              </li>
              <li className={sectionSkillClass}>
                <h3 className={sectionSkillTitleClass}>{toolsTitleText}</h3>
                <p className={sectionSkillTextClass}>{toolsDesignText}</p>
              </li>
              <li className={sectionSkillClass}>
                <h3 className={sectionSkillTitleClass}>{devTitleText}</h3>
                <div className={sectionSkillColorBoxClass}>
                  <span className={sectionSkillPrimaryBoxClass}></span>
                  <span className={sectionSkillSecondaryBoxClass}></span>
                </div>
              </li>
              <li className={sectionSkillClass}>
                <h3 className={sectionSkillTitleClass}>{toolsTitleText}</h3>
                <p className={sectionSkillTextClass}>{toolsDevText}</p>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </>
  );
}
