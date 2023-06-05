// style
import "../css/Portfolio.css";
// images
import firstImg from "../images/first-place.jpg";
import secondImg from "../images/second-place.jpg";
import thirdImg from "../images/third-place.jpg";
import fourthImg from "../images/fourth-place.jpg";
import firstDesign from "../images/design-first.jpg";
import secondDesign from "../images/design-second.jpg";
import thirdDesign from "../images/design-third.jpg";
import fourthDesign from "../images/design-fourth.jpg";
import firstDev from "../images/dev-first.jpg";
import secondDev from "../images/dev-second.jpg";
import thirdDev from "../images/dev-third.jpg";
import fourthDev from "../images/dev-fourth.jpg";

export default function Portfolio() {
  // classes
  const containerClass = "max-container portfolio";
  const sectionTitleClass = "portfolio__title title-text";
  const sectionSlideClass = "carousel carousel-dark slide";

  const sectionItemsClass = "carousel-inner";
  const sectionItemClass = "carousel-item";
  const sectionItemBoxClass = "carousel-item-box";
  const sectionItemActiveClass = "active";
  const slidePrevBtnClass = "carousel-control-prev";
  const slideNextBtnClass = "carousel-control-next";
  const slidePrevBtnIconClass = "carousel-control-prev-icon";
  const slideNextBtnIconClass = "carousel-control-next-icon";
  const slideBtnTextClass = "visually-hidden";

  const slideCardTexts = "card__texts-box";
  const slideCardTitle = "card__title subtitle-text";
  const slideCardText = "card__text";
  const slideCardImgs = "card__imgs-box";
  const slideCardImg = "card__img";

  // id
  const sectionId = "portfolio";
  const sectionSlideId = "carouselExampleDark";

  // texts
  const sectionTitleText = "Portfolio";
  const btnType = "button";
  const slidePrevBtnText = "Previous";
  const slideNextBtnText = "Next";
  const researchText = "UX Research";
  const designText = "UI Design";
  const devText = "Front-end Dev";
  const primaryCardText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac dictum nibh nam odio cursus id. Diam massa semper a tincidunt cursus ultricies lectus eget urna.";
  const secondaryCardText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum beatae illo ad? Laboriosam error ullam sunt corporis tenetur illo quisquam.";
  const thirdlyCardText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem natus laboriosam blanditiis! Sequi fugit optio numquam ea, quam voluptatum autem temporibus et?";

  return (
    <>
      <section className={containerClass} id={sectionId}>
        <h2 className={sectionTitleClass}>{sectionTitleText}</h2>
        <div id={sectionSlideId} className={sectionSlideClass}>
          <ul className={sectionItemsClass}>
            <li className={`${sectionItemClass} ${sectionItemActiveClass}`}>
              <div className={sectionItemBoxClass}>
                <div className={slideCardTexts}>
                  <h3 className={slideCardTitle}>{researchText}</h3>
                  <p className={slideCardText}>{primaryCardText}</p>
                </div>
                <div className={slideCardImgs}>
                  <img className={slideCardImg} src={thirdImg} alt="..." />
                  <img className={slideCardImg} src={firstImg} alt="..." />
                  <img className={slideCardImg} src={secondImg} alt="..." />
                  <img className={slideCardImg} src={fourthImg} alt="..." />
                </div>
              </div>
            </li>
            <li className={sectionItemClass}>
              <div className={sectionItemBoxClass}>
                <div className={slideCardTexts}>
                  <h3 className={slideCardTitle}>{designText}</h3>
                  <p className={slideCardText}>{secondaryCardText}</p>
                </div>
                <div className={slideCardImgs}>
                  <img className={slideCardImg} src={firstDesign} alt="..." />
                  <img className={slideCardImg} src={secondDesign} alt="..." />
                  <img className={slideCardImg} src={thirdDesign} alt="..." />
                  <img className={slideCardImg} src={fourthDesign} alt="..." />
                </div>
              </div>
            </li>{" "}
            <li className={sectionItemClass}>
              <div className={sectionItemBoxClass}>
                <div className={slideCardTexts}>
                  <h3 className={slideCardTitle}>{devText}</h3>
                  <p className={slideCardText}>{thirdlyCardText}</p>
                </div>
                <div className={slideCardImgs}>
                  <img className={slideCardImg} src={secondDev} alt="..." />
                  <img className={slideCardImg} src={firstDev} alt="..." />
                  <img className={slideCardImg} src={fourthDev} alt="..." />
                  <img className={slideCardImg} src={thirdDev} alt="..." />
                </div>
              </div>
            </li>
          </ul>
          <button
            className={slidePrevBtnClass}
            type={btnType}
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev">
            <span className={slidePrevBtnIconClass} aria-hidden="true"></span>
            <span className={slideBtnTextClass}>{slidePrevBtnText}</span>
          </button>
          <button
            className={slideNextBtnClass}
            type={btnType}
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next">
            <span className={slideNextBtnIconClass} aria-hidden="true"></span>
            <span className={slideBtnTextClass}>{slideNextBtnText}</span>
          </button>
        </div>
      </section>
    </>
  );
}
