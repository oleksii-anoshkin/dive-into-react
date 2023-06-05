// style
import "../css/About.css";

export default function About() {
  // classes
  const containerClass = "min-container about";
  const sectionTitleClass = "about__title title-text";
  const sectionItemsClass = "about__items";
  const sectionItemClass = "about__item";
  const sectionItemTextClass = "about__items-text";

  // id
  const sectionId = "about";

  // texts
  const sectionTitleText = "About";
  const sectionPrimaryItemText =
    "Lorem ipsum dolor sit amet, Arcu, sed nisi, mi, arcu libero phasellus tincidunt. Rhoncus, diam penatibus aliquet tellus, in rutrum augue. Pellentesque senectus risus consectetur et sed purus sed. Consectetur adipiscing elit. Egestas porttitor nulla nulla egestas odio pharetra egestas aliquet mollis. ";
  const sectionSecondaryItemText =
    "Arcu, sed nisi, mi, arcu libero phasellus tincidunt. Rhoncus, diam penatibus aliquet tellus, in rutrum augue. Pellentesque senectus risus consectetur et sed purus sed. Consectetur adipiscing elit. Egestas porttitor nulla nulla egestas odio pharetra egestas aliquet mollis. diam penatibus aliquet tellus, in rutrum augue. Pellentesque.";

  return (
    <>
      <section className={containerClass} id={sectionId}>
        <h2 className={sectionTitleClass}>{sectionTitleText}</h2>
        <ul className={sectionItemsClass}>
          <li className={sectionItemClass}>
            <p className={sectionItemTextClass}>{sectionPrimaryItemText}</p>
          </li>
          <li className={sectionItemClass}>
            <p className={sectionItemTextClass}>{sectionSecondaryItemText}</p>
          </li>
        </ul>
      </section>
    </>
  );
}
