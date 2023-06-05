// style
import "../css/Hero.css";

export default function Hero() {
  // classes
  const containerClass = "hero";
  const sectionTitleClass = "hero__title ";
  const sectionSubtitleClass = "hero__subtitle";
  const sectionItemClass = "hero__link link-text";

  // id
  const sectionId = "hero";

  // texts
  const sectionTitleText = "Hi, It’s Théophile Seyrig";
  const sectionSubtitleText = "Designer from Porto, Portugal";
  const sectionLinkText = "Latest works";

  // attributes
  const linkHref = "portfolio";

  return (
    <>
      <section className={containerClass} id={sectionId}>
        <h1 className={sectionTitleClass}>{sectionTitleText}</h1>
        <h3 className={sectionSubtitleClass}>{sectionSubtitleText}</h3>
        <a className={sectionItemClass} href={`#${linkHref}`}>
          {sectionLinkText}
        </a>
      </section>
    </>
  );
}
